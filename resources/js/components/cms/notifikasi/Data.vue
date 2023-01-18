<template>
  <div class="row">
    <div class="col-lg-12 mb-lg-0 mb-4">
      <div class="card z-index-2 h-100">
        <div class="card-header pb-0 pt-3 bg-transparent">
          <div class="btn-group">
            <button type="button" class="btn btn-sm bg-gradient-success" @click="resetFilter">Refresh</button>
          </div>
        </div>
        <div class="card-body p-3">
          <div class="table-responsive p-0" style="min-height:500px">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th nowrap class="text-center text-uppercase text-secondary text-xxs font-weight-bolder" style="width:100px">Aksi</th>
                  <th nowrap class="text-center text-uppercase text-secondary text-xxs font-weight-bolder">Tanggal</th>
                  <th nowrap class="text-uppercase text-secondary text-xxs font-weight-bolder">Nama</th>
                  <th nowrap class="text-uppercase text-secondary text-xxs font-weight-bolder">Title</th>
                  <th nowrap class="text-uppercase text-secondary text-xxs font-weight-bolder text-center" style="width:100px">Status</th>
                </tr>
                <tr>
                  <th class="text-center"></th>
                  <th class="text-center"></th>
                  <th class="text-center"></th>
                  <th>
                    <input id="nameNotifCMSColumn" type="text" class="filtertext form-control form-control-sm" placeholder="Cari" v-on:keyup.enter="onEnter"/>
                  </th>
                  <th>
                    <input id="titleNotifCMSColumn" type="text" class="filtertext form-control form-control-sm" placeholder="Cari" v-on:keyup.enter="onEnter"/>
                  </th>
                  <th>
                    <select id="readNotifCMSColumn" class="filtertext form-select form-select-sm" @change="loadList()">
                      <option value="">Pilih</option>
                      <option value="N">Belum Dibaca</option>
                      <option value="Y">Sudah Dibaca</option>
                    </select>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(value, index) in getList.data" :key="value.id">
                  <td class="text-center align-top text-xs">{{ currentpage + (index+1) }}</td>
                  <td nowrap class="text-center text-xs">
                    <div class="btn-group">
                     <button type="button" class="btn btn-xs btn-primary" @click="showStatusPermohonan(value)">Detail</button>
                    </div>
                  </td>
                  <td nowrap class="text-center align-top text-xs">{{ $filters.formatDate(value['created_at']) }}</td>
                  <td class="align-top text-xs">{{ value['name'] }}</td>
                  <td nowrap class="align-top text-xs"><span v-html="setMatch(value['notif_title'].toString(),'titleNotifCMSColumn')"></span></td>
                  <td nowrap class="align-top text-xs text-center">
                    <span class="badge badge-pill badge-md" :class="value['notif_read'] == 'Y'?'bg-gradient-success':'bg-gradient-danger'">
                      <i class="bx" :class="value['notif_read'] == 'Y'?'bx-check-double':'bx-space-bar'" style="font-size:1rem"></i>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card-footer">
          <Pagination :data="getList" @pagination-change-page="loadList" :limit="1" :show-disabled="true"/>
        </div>
      </div>
    </div>
    <!-- Modal Districts -->
    <modalDetail ref="refModalDetailNotifikasi"></modalDetail>
    <!-- End -->
  </div>
</template>
<script>
  import LaravelVuePagination from "laravel-vue-pagination";
  import { useToast,TYPE } from "vue-toastification"
  import modalDetail from "./Detail";
  export default {
    name: "NotifikasiPage",
    props: ["title","totalnotif"],
    data() {
      return {
        getList: {},
        currentpage: 0,
      };
    },
    components: {
      modalDetail,
      'Pagination': LaravelVuePagination,
    },
    setup () {
      const toast = useToast();
      return {toast}
    },
    created() {
      this.$store.dispatch("setTitleCMS", this.$props.title);
      this.loadList();
    },
    methods:{
      loadList(page) {
        this.$isLoading(true)
        let obj = this.getObj();
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        axios
          .post(baseurl + "/api/notif/list?page=" + page, obj)
          .then((response) => {
            this.getList = response.data;
            if (this.getList.current_page == 1) {
              this.currentpage = 0;
            } else {
              this.currentpage = (this.getList.current_page - 1) * 10;
            }
            this.$isLoading(false)
          })
          .catch((error) => {
            this.$isLoading(false)
            this.$store.dispatch("removeDispatchCMS", { self: this });
          });
      },
      getObj() {
        let obj = new Object();
        // Filter
        obj.nameNotifCMSColumn = $("#nameNotifCMSColumn").val();
        obj.titleNotifColumn = $("#titleNotifCMSColumn").val();
        obj.readNotifColumn = $("#readNotifCMSColumn").val();
        // End
        return obj;
      },
      showStatusPermohonan(data) {
        this.$nextTick(() => {
          this.$refs.refModalDetailNotifikasi.showModal(data);
        });
      },
      setMatch(current, elem) {
        if (current) {
          let reggie = new RegExp($("#" + elem).val(), "ig");
          let found = current.search(reggie) !== -1;
          return !found ? current : current.replace(reggie, "<code>" + $("#" + elem).val() + "</code>");
        } else {
          return "-";
        }
      },
      onEnter() {
        this.loadList();
      },
      resetFilter() {
        $(".filtertext").val("");
        $('.form-control').val('').selectpicker('refresh');
        setTimeout(() => {
          this.loadList();
        }, 50);
      },
      deleteData(id){
        this.$swal({
          title: 'Konfrimasi',
          text: "Anda akan menghapus baris ini.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Lanjutkan',
          cancelButtonText: "Batal",
        }).then((result) => {
          if (result.isConfirmed) {
            // Action Here
            this.$isLoading(true);
            let action = baseurl + "/api/permohonan/destroy";
            let obj = new Object();
            obj.id = id;
            window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
            axios
              .post(action, obj, {
                headers: {
                  Accept: "application/json",
                },
              })
              .then((response) => {
                let resp = response.data;
                this.toast(resp.message, {
                    type: resp.status,
                    timeout: 3000
                });
                if (resp.status == "success") {
                  this.loadList();
                }
                this.$isLoading(false);
              })
              .catch((error) => {
                this.$isLoading(false);
                this.$store.dispatch("removeDispatchCMS", { self: this });
              });
            // End
          }
        })
      }
    }
  };
</script>
