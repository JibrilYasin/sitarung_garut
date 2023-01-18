<template>
  <div class="row">
    <div class="col-lg-12 mb-lg-0 mb-4">
      <div class="card z-index-2 h-100">
        <div class="card-header pb-0 pt-3 bg-transparent">
          <div class="btn-group">
            <button type="button" class="btn btn-sm bg-gradient-primary" @click="showForm({id:0},'Tambah Baru','Add')">Tambah</button>
            <button type="button" class="btn btn-sm bg-gradient-success" @click="resetFilter">Refresh</button>
          </div>
        </div>
        <div class="card-body p-3">
          <div class="table-responsive p-0" style="min-height:500px">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th nowrap class="text-center text-uppercase text-secondary text-xxs font-weight-bolder">Aksi</th>
                  <th nowrap class="text-center text-uppercase text-secondary text-xxs font-weight-bolder">Created at</th>
                  <th nowrap class="text-uppercase text-secondary text-xxs font-weight-bolder">Title Status</th>
                  <th nowrap class="text-uppercase text-secondary text-xxs font-weight-bolder">Subtitle Status</th>
                  <th nowrap class="text-uppercase text-secondary text-xxs font-weight-bolder text-center">Background Color</th>
                  <th nowrap class="text-uppercase text-secondary text-xxs font-weight-bolder text-center">HEX Color Status</th>
                </tr>
                <tr>
                  <th class="text-center"></th>
                  <th class="text-center"></th>
                  <th class="text-center"></th>
                  <th>
                    <input id="statusTitleColumn" type="text" class="filtertext form-control form-control-sm" placeholder="Cari" v-on:keyup.enter="onEnter"/>
                  </th>
                  <th>
                    <input id="statusSubTitleColumn" type="text" class="filtertext form-control form-control-sm" placeholder="Cari" v-on:keyup.enter="onEnter"/>
                  </th>
                  <th></th>
                  <th class="text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(value, index) in getList.data" :key="value.id">
                  <td class="text-center align-top text-xs">{{ currentpage + (index+1) }}</td>
                  <td nowrap class="text-center text-xs">
                    <div class="btn-group">
                    <button type="button" class="btn btn-xs btn-secondary" @click="showForm(value,'Ubah Baris','Edit')">Edit</button>
                    <button type="button" class="btn btn-xs btn-danger" @click="deleteData(value)">Hapus</button>
                    </div>
                  </td>
                  <td nowrap class="text-center align-top text-xs">{{ $filters.formatDate(value['created_at']) }}</td>
                  <td class="align-top text-xs"><span v-html="setMatch(value['status_title'].toString(),'statusTitleColumn')"></span></td>
                  <td nowrap class="align-top text-xs"><span v-html="setMatch(value['status_subtitle'].toString(),'statusSubTitleColumn')"></span></td>
                  <td nowrap class="align-top text-xs">
                    <span class="badge badge-pill w-100" :class="value['status_color']">{{ value['status_color'] }}</span>
                  </td>
                  <td nowrap class="text-center align-top text-xs">
                    <span class="badge badge-pill w-50" :style="{background: value['status_hex']}">{{ value['status_hex'] }}</span>
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
    <!-- Modal Form -->
    <modalForm ref="refModalInformasiStatus"></modalForm>
    <!-- End -->
  </div>
</template>
<script>
  import LaravelVuePagination from "laravel-vue-pagination";
  import { useToast,TYPE } from "vue-toastification"
  import modalForm from "./Form";
  export default {
    name: "InformasiStatusPage",
    props: ["title"],
    data() {
      return {
        getList: {},
        currentpage: 0,
      };
    },
    components: {
      modalForm,
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
          .post(baseurl + "/api/admin/informasistatus/list?page=" + page, obj)
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
        obj.statusTitleColumn = $("#statusTitleColumn").val();
        obj.statusSubTitleColumn = $("#statusSubTitleColumn").val();
        // End
        return obj;
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
        setTimeout(() => {
          this.loadList();
        }, 50);
      },
      showForm(data, title, action) {
        this.$nextTick(() => {
          this.$refs.refModalInformasiStatus.showModal(data, title, action);
        });
      },
      deleteData(data){
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
            let action = baseurl + "/api/admin/informasistatus/destroy";
            let obj = new Object();
            obj.data = data;
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
