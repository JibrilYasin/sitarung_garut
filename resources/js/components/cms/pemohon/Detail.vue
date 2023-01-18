<template>
  <div class="modal fade" id="detailPemohonModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Detail Pemohon</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"><i class="text-primary bx bx-x text-lg"></i></span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row mb-3">
            <div class="col-md-9">
              <label class="form-label text-uppercase">Nama</label>
              <input class="form-control" :value="getData['name']" disabled />
            </div>
            <div class="col-md-3">
              <label class="form-label text-uppercase">Pendaftaran Via</label>
              <input class="form-control" :value="getData['register_via']" disabled />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label class="form-label text-uppercase">Email</label>
              <input class="form-control" :value="getData['email']" disabled />
            </div>
            <div class="col-md-6">
              <label class="form-label text-uppercase">Phone</label>
              <input class="form-control" :value="getData['phone']" disabled />
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label text-uppercase">Alamat</label>
            <textarea class="form-control" disabled>{{ getData['address'] }}</textarea>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-3">
                  <a :href="ktpProfile" data-featherlight="image">
                    <div class="mt-2 w-100" :style="{backgroundImage: 'url('+ktpProfile+')'}" style="height: 70px; background-position: center; background-size: cover;"></div>
                  </a>
                </div>
                <div class="col-md-9">
                  <label class="form-label text-uppercase">No KTP</label>
                  <input class="form-control" :value="getData['ktp_no']" disabled />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-3">
                  <a :href="npwpProfile" data-featherlight="image">
                    <div class="mt-2 w-100" :style="{backgroundImage: 'url('+npwpProfile+')'}" style="height: 70px; background-position: center; background-size: cover;"></div>
                  </a>
                </div>
                <div class="col-md-9">
                  <label class="form-label text-uppercase">No NPWP</label>
                  <input class="form-control" :value="getData['npwp_no']" disabled />
                </div>
              </div>
            </div>
          </div>
          <div v-if="notes" class="mb-0">
            <label class="form-label text-uppercase">Catatan</label>
            <textarea id="notesPemohonInput" class="form-control" :class="formErrors['notesPemohonInput']?'is-invalid':''"></textarea>
            <div class="invalid-feedback" v-if="formErrors['notesPemohonInput']">
              <i class="bx bx-x"></i>
              {{ formErrors['notesPemohonInput'][0] }}
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div v-if="groupBtn" class="btn-group">
            <button v-if="getData['status'] == 'New' || getData['status'] == 'Reject'" type="button" class="btn btn bg-gradient-primary mb-0" @click="statusAction('Approve','Approve')">Approve</button>
            <button v-if="getData['status'] == 'Blokir'" type="button" class="btn btn bg-gradient-primary mb-0" @click="statusAction('UnBlock','Approve')">Ublock</button>
            <button v-if="getData['status'] == 'Approve'" type="button" class="btn btn bg-gradient-warning mb-0" @click="openReject('Blokir','Blokir')">Blokir</button>
            <button v-if="getData['status'] == 'New'" type="button" class="btn btn bg-gradient-warning mb-0" @click="openReject('Reject','Reject')">Reject</button>
          </div>
          <div v-if="groupBtnHide" class="btn-group">
            <button id="submitBlokir" type="button" class="btn btn bg-gradient-danger mb-0" @click="rejectAction()">Submit</button>
            <button id="submitBlokir" type="button" class="btn btn bg-gradient-default mb-0" @click="cancelReject">Kembali</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { useToast,TYPE } from "vue-toastification"
  export default{
    name : 'ModalDetailPemohon',
    data(){
      return{
        getData:{},
        formErrors: {},
        ktpProfile:'',
        npwpProfile:'',
        notes:false,
        groupBtn:true,
        groupBtnHide:false
      }
    },
    setup () {
      const toast = useToast();
      return {toast}
    },
    methods:{
      showModal(data){
        this.getData = data
        this.formErrors = {}
        if(data.ktp){
          this.ktpProfile = imagepath+'/'+data.ktp
        }else{
          this.ktpProfile = imagepath+'noimage.png'
        }
        if(data.npwp){
          this.npwpProfile = imagepath+'/'+data.npwp
        }else{
          this.npwpProfile = imagepath+'noimage.png'
        }
        this.groupBtn = true
        this.groupBtnHide = false
        if(data['notes']){
          this.notes = true
          setTimeout(() => {
            $("#notesPemohonInput").val(data['notes']);
            $("#notesPemohonInput").prop('readonly', true);
          }, 50);
        }else{
          this.notes = false
          setTimeout(() => {
            $("#notesPemohonInput").val('');
            $("#notesPemohonInput").prop('readonly', false);
          }, 50);
        }
        $("#detailPemohonModal").modal('show')
      },
      statusAction(action,status){
        this.$swal({
          title: 'Konfrimasi',
          text: `Anda akan melakukan ${action} untuk akun ini.`,
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
            let action = baseurl + "/api/admin/pemohon/approve";
            let obj = new Object();
            obj.data = this.getData;
            obj.status = status;
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
                  $("#detailPemohonModal").modal("hide");
                  this.$parent.loadList();
                }
                this.$isLoading(false);
              })
              .catch((error) => {
                this.$isLoading(false);
                if (error.response.status == 422) {
                  this.formErrors = error.response.data.errors;
                } else {
                  // if (error.response.status == 401) {
                  //   this.$store.dispatch("removeDispatch", { self: this });
                  // }
                  this.$store.dispatch("removeDispatch", { self: this });
                }
              });
            // End

          }
        })
      },
      openReject(){
        this.notes = true
        this.groupBtn = false
        this.groupBtnHide = true
        $("#notesPemohonInput").prop('readonly', false);
      },
      cancelReject(){
        this.notes = false
        this.groupBtn = true
        this.groupBtnHide = false
        $("#notesPemohonInput").val('');
      },
      rejectAction(){
        if(this.getData['status'] == 'New'){
          var status = 'Reject'
        }
        else if(this.getData['status'] == 'Approve'){
          var status = 'Blokir'
        }
        this.$swal({
          title: 'Konfrimasi',
          text: `Anda akan melakukan ${status} untuk akun ini.`,
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
            this.formErrors = {};
            let action = baseurl + "/api/admin/pemohon/reject";
            let obj = new Object();
            obj.data = this.getData;
            obj.status = status;
            obj.notesPemohonInput = $("#notesPemohonInput").val();
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
                  $("#detailPemohonModal").modal("hide");
                  this.$parent.loadList();
                }
                this.$isLoading(false);
              })
              .catch((error) => {
                this.$isLoading(false);
                if (error.response.status == 422) {
                  this.formErrors = error.response.data.errors;
                } else {
                  // if (error.response.status == 401) {
                  //   this.$store.dispatch("removeDispatch", { self: this });
                  // }
                  this.$store.dispatch("removeDispatch", { self: this });
                }
              });
            // End

          }
        })
      },
    }
  }
</script>
