<template>
  <div class="modal fade" id="profileCMSModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Kelola Profil</h6>
        </div>
        <form id="profileCMSForm" @submit.prevent="submitForm" action="javascript:void(0)" method="POST" enctype="multipart/form-data">
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"><sup class="text-danger">(*)</sup> Nama</label>
              <input type="text" id="nameProfileInput" class="form-control" :class="formErrors['nameProfileInput']?'is-invalid':''"/>
              <div class="invalid-feedback" v-if="formErrors['nameProfileInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['nameProfileInput'][0] }}
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Alamat</label>
              <textarea id="addressProfileInput" class="form-control" :class="formErrors['addressProfileInput']?'is-invalid':''"></textarea>
              <div class="invalid-feedback" v-if="formErrors['addressProfileInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['addressProfileInput'][0] }}
              </div>
            </div>
            <div class="row mb-0">
              <div class="col-md-6">
                <label class="form-label"><sup class="text-danger">(*)</sup> Email</label>
                <input id="email" type="text" class="form-control" :class="formErrors['email']?'is-invalid':''"/>
                <div class="invalid-feedback" v-if="formErrors['email']">
                  <i class="bx bx-x"></i>
                  {{ formErrors['email'][0] }}
                </div>
              </div>
              <div class="col-md-6">
                <label class="form-label"><sup class="text-danger">(*)</sup> No Telepon</label>
                <input id="phone" type="text" class="form-control" :class="formErrors['phone']?'is-invalid':''"/>
                <div class="invalid-feedback" v-if="formErrors['phone']">
                  <i class="bx bx-x"></i>
                  {{ formErrors['phone'][0] }}
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="btn-group">
              <button type="submit" class="btn bg-gradient-primary">Submit</button>
              <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { useToast,TYPE } from "vue-toastification"
  export default{
    name : 'ModalProfileCMS',
    data(){
      return{
        getData:{},
        formErrors: {},
      }
    },
    setup () {
      const toast = useToast();
      return {toast}
    },
    methods:{
      showModal(data){
        this.getData = data
        $("#profileCMSModal").modal('show')
        $("#profileCMSForm")[0].reset()
        $("#nameProfileInput").val(data.name)
        $("#addressProfileInput").val(data.address)
        $("#email").val(data.email)
        $("#phone").val(data.phone)
      },
      submitForm(e) {
        this.$isLoading(true)
        this.formErrors = {};
        var form = e.target || e.srcElement
        let action = baseurl + "/api/account/profile";
        let datas = new FormData();
        datas.append("id", this.getData['id']);
        datas.append("access", this.getData['user_access']);
        datas.append("nameProfileInput", $("#nameProfileInput").val());
        datas.append("addressProfileInput", $("#addressProfileInput").val());
        datas.append("email", $("#email").val());
        datas.append("phone", $("#phone").val());
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        axios
          .post(action, datas, {
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
              this.$store.dispatch("setProfileCMS", { self: this });
            }
            this.$isLoading(false)
          })
          .catch((error) => {
            this.$isLoading(false);
            if (error.response.status == 422) {
              this.formErrors = error.response.data.errors;
            } else {
              this.$store.dispatch("removeDispatchCMS", { self: this });
            }
          });
      }
    }
  }
</script>
