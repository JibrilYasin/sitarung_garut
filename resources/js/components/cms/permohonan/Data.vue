<template>
  <div class="row">
    <div class="col-lg-12 mb-lg-0 mb-4">
      <div class="card z-index-2 h-100">
        <div class="card-header pb-0 pt-3 bg-transparent">
          <button type="button" class="btn btn-sm bg-gradient-success" @click="resetFilter">Refresh</button>
        </div>
        <div class="card-body p-3">
          <div class="table-responsive p-0" style="min-height:500px">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th nowrap class="text-center text-uppercase text-secondary text-xxs font-weight-bolder">Aksi</th>
                  <th nowrap class="text-center text-uppercase text-secondary text-xxs font-weight-bolder">Tanggal Dibuat</th>
                  <th nowrap class="text-uppercase text-secondary text-xxs font-weight-bolder text-center">Kode</th>
                  <th nowrap class="text-uppercase text-secondary text-xxs font-weight-bolder">Nama Pemohon</th>
                  <th nowrap class="text-uppercase text-secondary text-xxs font-weight-bolder">Status</th>
                  <th nowrap class="text-uppercase text-secondary text-xxs font-weight-bolder">Kecamatan</th>
                  <th nowrap class="text-uppercase text-secondary text-xxs font-weight-bolder">Desa</th>
                  <th nowrap class="text-uppercase text-secondary text-xxs font-weight-bolder d-none">Alamat Lokasi</th>
                  <th nowrap class="text-uppercase text-secondary text-xxs font-weight-bolder">Rencana Kegiatan</th>
                </tr>
                <tr>
                  <th class="text-center"></th>
                  <th class="text-center"></th>
                  <th class="text-center"></th>
                  <th class="text-center">
                    <input id="invoicePermohonanColumn" type="text" class="filtertext form-control form-control-sm text-center" placeholder="Cari" v-on:keyup.enter="onEnter"/>
                  </th>
                  <th class="text-center">
                    <input id="namaPemohonPermohonanColumn" type="text" class="filtertext form-control form-control-sm" placeholder="Cari" v-on:keyup.enter="onEnter"/>
                  </th>
                  <th class="text-center">
                    <select id="statusPermohonanColumn" class="filtertext form-select form-select-sm" @change="loadList()">
                      <option value="">Pilih</option>
                      <option v-for="value in getDataStatusPermohonan" :key="value['id']" :value="value['id']">{{ value['status_title'] }}</option>
                    </select>
                  </th>
                  <th class="text-center">
                    <select id="kecamatanColumn" class="filtertext form-select form-select-sm" @change="loadDesa();loadList()">
                      <option value="">Pilih</option>
                      <option v-for="value in getDataKecamatan" :key="value['id']" :value="value['nama_kecamatan']">{{ value['nama_kecamatan'] }}</option>
                    </select>
                  </th>
                  <th class="text-center">
                    <select id="desaColumn" class="filtertext form-select form-select-sm" @change="loadList()">
                      <option value="">Pilih</option>
                      <option v-for="value in getDataDesa" :key="value['id']" :value="value['DESA']">{{ value['DESA'] }}</option>
                    </select>
                  </th>
                  <th class="text-center d-none">
                    <input id="alamatLahanColumn" type="text" class="filtertext form-control form-control-sm" placeholder="Cari" v-on:keyup.enter="onEnter"/>
                  </th>
                  <th class="text-center">
                    <input id="peruntukanColumn" type="text" class="filtertext form-control form-control-sm" placeholder="Cari" v-on:keyup.enter="onEnter"/>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(value, index) in getList.data" :key="value.id">
                  <td class="text-center align-top text-xs">{{ currentpage + (index+1) }}</td>
                  <td nowrap class="text-center text-xs">
                    <div class="btn-group">
                     <button type="button" class="btn btn-xs btn-primary" @click="showStatusPermohonan(value)">Detail</button>
                     <button v-if="value['status_permohonan_id'] == 1" type="button" class="btn btn-xs btn-danger" @click="deleteData(value)">Hapus</button>
                     <button v-else type="button" class="btn btn-xs btn-default">Hapus</button>
                    </div>
                  </td>
                  <td nowrap class="text-center align-top text-xs">{{ $filters.formatDate(value['created_at']) }}</td>
                  <td class="align-top text-xs text-center">
                    <span v-html="setMatch(value['invoice'].toString(),'invoicePermohonanColumn')"></span>
                  </td>
                  <td class="align-top text-xs">
                    <span v-html="setMatch(value['name'].toString(),'namaPemohonPermohonanColumn')"></span>
                  </td>
                  <td class="align-top text-xs">
                    <span class="badge badge-pill w-100" :class="value['status_color']">{{ value['status_title'] }}</span>
                  </td>
                  <td nowrap class="align-top text-xs">{{ value['kecamatan'] }}</td>
                  <td nowrap class="align-top text-xs">{{ value['desa'] }}</td>
                  <td class="align-top text-xs d-none"><span v-html="setMatch(value['alamat_lahan'].toString(),'alamatLahanColumn')"></span></td>
                  <td nowrap class="align-top text-xs"><span v-html="setMatch(value['peruntukan'].toString(),'peruntukanColumn')"></span></td>
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
    <modalStatus ref="refModalUpdateStatusPermohonan"></modalStatus>
    <!-- End -->
  </div>
</template>
<script>
  import LaravelVuePagination from "laravel-vue-pagination";
  import { useToast,TYPE } from "vue-toastification"
  import modalStatus from "./Status";
  export default {
    name: "PermohonanPage",
    props: ["title"],
    data() {
      return {
        getList: {},
        getDataKecamatan: {},
        getDataDesa: {},
        getDataStatusPermohonan: {},
        currentpage: 0,
      };
    },
    components: {
      modalStatus,
      'Pagination': LaravelVuePagination,
    },
    setup () {
      const toast = useToast();
      return {toast}
    },
    created() {
      this.$store.dispatch("setTitleCMS", this.$props.title);
      this.getDataDesa = {}
      this.loadDistricts();
      this.loadStatusPermohonan();
      this.loadList();
    },
    methods:{
      async loadDistricts() {
        this.$isLoading(true);
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        await axios
          .post(baseurl + "/api/permohonan/listdistrict", {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.getDataKecamatan = response.data;
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatchCMS", { self: this });
          });
      },
      loadDesa() {
        this.$isLoading(true);
        $("#desaColumn").val('')
        this.getDataDesa = {}
        var obj = new Object();
        obj.kecamatan = $("#kecamatanColumn").val()
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        axios
          .post(baseurl + "/api/permohonan/listdesa",obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.getDataDesa = response.data;
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatchCMS", { self: this });
          });
      },
      async loadStatusPermohonan() {
        this.$isLoading(true);
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        await axios
          .post(baseurl + "/api/permohonan/liststatus", {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.getDataStatusPermohonan = response.data;
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatchCMS", { self: this });
          });
      },
      async loadList(page) {
        this.$isLoading(true)
        let obj = this.getObj();
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        await axios
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
            this.$store.dispatch("getStatusNotif",{ self: this,error:error });
          });
      },
      getObj() {
        let obj = new Object();
        // Filter
        obj.statusPermohonanColumn = $("#statusPermohonanColumn").val();
        obj.kecamatanColumn = $("#kecamatanColumn").val();
        obj.desaColumn = $("#desaColumn").val();
        obj.invoicePermohonanColumn = $("#invoicePermohonanColumn").val();
        obj.namaPemohonPermohonanColumn = $("#namaPemohonPermohonanColumn").val();
        obj.alamatLahanColumn = $("#alamatLahanColumn").val();
        obj.peruntukanColumn = $("#peruntukanColumn").val();
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
      showStatusPermohonan(data) {
        this.$nextTick(() => {
          this.$refs.refModalUpdateStatusPermohonan.showModal(data);
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
            let action = baseurl + "/api/permohonan/destroy";
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
