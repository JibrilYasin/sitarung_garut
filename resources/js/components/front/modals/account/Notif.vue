<template>
  <div class="modal fade" id="notifModal" data-bs-backdrop="static">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">List Notifikasi</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th nowrap class="text-center">Tanggal</th>
                  <th nowrap>Title</th>
                  <th nowrap class="text-center" style="width:100px">Status</th>
                </tr>
                <tr>
                  <th class="text-center"></th>
                  <th class="text-center"></th>
                  <th>
                    <input id="titleNotifColumn" type="text" class="filtertext form-control form-control-sm" placeholder="Cari" v-on:keyup.enter="onEnter"/>
                  </th>
                  <th>
                    <select id="readNotifColumn" class="filtertext form-select form-select-sm" @change="loadList()">
                      <option value="">Pilih</option>
                      <option value="N">Belum Dibaca</option>
                      <option value="Y">Sudah Dibaca</option>
                    </select>
                  </th>
                </tr>
              </thead>
              <tbody class="table-border-bottom-0">
                <tr v-for="(value, index) in getList.data" :key="value.id" style="cursor:pointer" data-bs-dismiss="modal" @click="showModalDetail(value)">
                  <td class="text-center align-top">{{ currentpage + (index+1) }}</td>
                  <td nowrap class="text-center">{{ $filters.formatDate(value['created_at']) }}</td>
                  <td>
                    <span v-html="setMatch(value['notif_title'].toString(),'titleNotifColumn')"></span>
                  </td>
                  <td class="text-center">
                    <span class="badge badge-pill badge-md" :class="value['notif_read'] == 'Y'?'bg-gradient-success':'bg-gradient-danger'">
                      <i class="bx" :class="value['notif_read'] == 'Y'?'bx-check-double':'bx-space-bar'" style="font-size:1rem"></i>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <div class="flex-grow-1 bd-highlight">
            <Pagination :data="getList" @pagination-change-page="loadList" :limit="1" :show-disabled="true"/>
          </div>
          <button type="button" class="btn bg-gradient-success mb-2 text-end" @click="resetFilter">Refresh</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="notifDetailModal" data-bs-backdrop="static">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Tanggal : {{ $filters.formatDate(getDetail['created_at']) }}</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" @click="$parent.showNotifModal"></button>
        </div>
        <div class="modal-body">
          <div class="mb-2 fw-bold">{{ getDetail['notif_title'] }}</div>
          <div class="text-secondary">{{ getDetail['notif_message'] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import LaravelVuePagination from "laravel-vue-pagination";
  export default{
    name : 'NotifModal',
    data(){
      return{
        getList: {},
        getDetail: {},
        currentpage: 0,
        mapdetail: null,
        formErrors: {},
      }
    },
    components: {
      'Pagination': LaravelVuePagination,
    },
    methods:{
      showModal(data){
        this.getList = {};
        this.getDetail = {};
        this.formErrors = {}
        $("#notifModal").modal('show')
        this.loadList()
      },
      loadList(page) {
        this.$isLoading(true)
        let obj = this.getObj();
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
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
            this.$store.dispatch("getStatusNotif",{ self: this,error:error });
          });
      },
      getObj() {
        let obj = new Object();
        // Filter
        obj.titleNotifColumn = $("#titleNotifColumn").val();
        obj.readNotifColumn = $("#readNotifColumn").val();
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
        $('.form-control').val('').selectpicker('refresh');
        setTimeout(() => {
          this.loadList();
        }, 50);
      },
      showModalDetail(data){
        this.getDetail = data;
        $("#notifDetailModal").modal('show')
        if(data['notif_read'] == 'Y'){
          return false;
        }
        this.$isLoading(true)
        let obj = new Object();
        obj.id = data['id'];
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
        axios
          .post(baseurl + "/api/notif/" + data['id'], obj, {
            headers: {
              "X-HTTP-Method-Override": 'PUT',
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.$parent.loadTotalNotif();
            this.$isLoading(false)
          })
          .catch((error) => {
            this.$isLoading(false)
            this.$store.dispatch("getStatusNotif",{ self: this,error:error });
          });
      },
    }
  }
</script>
