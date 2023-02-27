<template>
  <div class="modal fade" id="permohonanModal" data-bs-backdrop="static">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">List Permohonan</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th nowrap class="text-center">Aksi</th>
                  <th nowrap class="text-center">Tanggal Dibuat</th>
                  <th nowrap class="text-center">No Permohonan</th>
                  <th nowrap>Status</th>
                  <th nowrap>Kecamatan</th>
                  <th nowrap>Desa</th>
                  <th nowrap>Alamat Lokasi</th>
                  <th nowrap>Rencana Kegiatan</th>
                </tr>
                <tr>
                  <th class="text-center"></th>
                  <th class="text-center"></th>
                  <th class="text-center"></th>
                  <th>
                    <input id="invoicePermohonanColumn" type="text" class="filtertext form-control form-control-sm text-center" placeholder="Cari" v-on:keyup.enter="onEnter"/>
                  </th>
                  <th nowrap class="text-center">
                    <select id="statusPermohonanColumn" class="filtertext form-select form-select-sm" @change="loadList()">
                      <option value="">Pilih</option>
                      <option v-for="value in $parent.getDataStatusPermohonan" :key="value['id']" :value="value['id']">{{ value['status_title'] }}</option>
                    </select>
                  </th>
                  <th nowrap>
                    <select id="kecamatanColumn" class="filtertext form-select form-select-sm" @change="loadDesa();loadList()">
                      <option value="">Pilih</option>
                      <option v-for="value in $parent.getDataKecamatan" :key="value['id']" :value="value['nama_kecamatan']">{{ value['nama_kecamatan'] }}</option>
                    </select>
                  </th>
                  <th nowrap>
                    <select id="desaColumn" class="filtertext form-select form-select-sm" @change="loadList()">
                      <option value="">Pilih</option>
                      <option v-for="value in getDesa" :key="value['id']" :value="value['DESA']">{{ value['DESA'] }}</option>
                    </select>
                  </th>
                  <th>
                    <input id="alamatLahanColumn" type="text" class="filtertext form-control form-control-sm" placeholder="Cari" v-on:keyup.enter="onEnter"/>
                  </th>
                  <th>
                    <input id="peruntukanColumn" type="text" class="filtertext form-control form-control-sm" placeholder="Cari" v-on:keyup.enter="onEnter"/>
                  </th>
                </tr>
              </thead>
              <tbody class="table-border-bottom-0">
                <tr v-for="(value, index) in getList.data" :key="value.id">
                  <td class="text-center align-top">{{ currentpage + (index+1) }}</td>
                  <td nowrap class="text-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-xs btn-dark" data-bs-dismiss="modal" @click="$parent.showDetailPermohonanModal(value)">Detail</button>
                      <button v-if="value['status_permohonan_id'] == 1" type="button" class="btn btn-xs btn-danger" @click="deleteData(value)"><i class="bx bx-trash"></i></button>
                      <button v-else type="button" class="btn btn-xs btn-default" disabled><i class="bx bx-trash"></i></button>
                    </div>
                  </td>
                  <td nowrap class="text-center">{{ $filters.formatDate(value['created_at']) }}</td>
                  <td class="text-center">
                    <span v-html="setMatch(value['invoice'].toString(),'invoicePermohonanColumn')"></span>
                  </td>
                  <td>
                    {{ value['status_title'] }}
                  </td>
                  <td nowrap>{{ value['kecamatan'] }}</td>
                  <td nowrap>{{ value['desa'] }}</td>
                  <td>
                    <span v-html="setMatch(value['alamat_lahan'].toString(),'alamatLahanColumn')"></span>
                  </td>
                  <td nowrap><span v-html="setMatch(value['peruntukan'].toString(),'peruntukanColumn')"></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <div class="flex-grow-1 bd-highlight">
            <Pagination :data="getList" @pagination-change-page="loadList" :limit="1" :show-disabled="true"/>
          </div>
          <div class="btn-group">
            <button type="button" class="btn bg-gradient-primary text-end" data-bs-dismiss="modal" @click="$parent.showDistrictsModal('')">Permohonan Baru</button>
            <button type="button" class="btn bg-gradient-success text-end" @click="resetFilter">Refresh</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import LaravelVuePagination from "laravel-vue-pagination";
  import { useToast,TYPE } from "vue-toastification"
  export default{
    name : 'PermohonanModal',
    data(){
      return{
        getList: {},
        getDesa:{},
        currentpage: 0,
        mapdetail: null,
        formErrors: {},
      }
    },
    components: {
      'Pagination': LaravelVuePagination,
    },
    setup () {
      const toast = useToast();
      return {toast}
    },
    methods:{
      showModal(data){
        this.getList = {};
        this.getDesa = {};
        this.formErrors = {}
        $("#permohonanModal").modal('show')
        this.loadList()
      },
      loadList(page) {
        this.$isLoading(true)
        let obj = this.getObj();
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
        axios
          .post(baseurl + "/api/permohonan/list?page=" + page, obj)
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
            //this.$store.dispatch("getStatusNotif",{ self: this,error:error });
          });
      },
      getObj() {
        let obj = new Object();
        // Filter
        obj.statusPermohonanColumn = $("#statusPermohonanColumn").val();
        obj.kecamatanColumn = $("#kecamatanColumn").val();
        obj.desaColumn = $("#desaColumn").val();
        obj.invoicePermohonanColumn = $("#invoicePermohonanColumn").val();
        obj.alamatLahanColumn = $("#alamatLahanColumn").val();
        obj.peruntukanColumn = $("#peruntukanColumn").val();
        // End
        return obj;
      },
      loadDesa() {
        this.$isLoading(true);
        $("#desaColumn").val('')
        this.getDesa = {}
        var obj = new Object();
        obj.kecamatan = $("#kecamatanColumn").val()
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
        axios
          .post(baseurl + "/api/permohonan/listdesa",obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.getDesa = response.data;
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatch", { self: this });
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
            let action = baseurl + "/api/permohonan/destroy";
            let obj = new Object();
            obj.data = data;
            window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
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
                this.$store.dispatch("removeDispatch", { self: this });
              });
            // End
          }
        })
      },
    }
  }
</script>
