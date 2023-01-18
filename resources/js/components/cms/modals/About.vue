<template>
  <div class="modal fade" id="aboutSitarungModal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Tentang Sitarung</h6>
        </div>
        <form id="aboutSitarungForm" @submit.prevent="submitForm" action="javascript:void(0)" method="POST" enctype="multipart/form-data">
          <div class="modal-body">
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label"><sup class="text-danger">(*)</sup> Nama Instansi</label>
                <input id="companyNameInput" type="text" class="form-control" :class="formErrors['companyNameInput']?'is-invalid':''" />
                <div class="invalid-feedback" v-if="formErrors['companyNameInput']">
                  <i class="bx bx-x"></i>
                  {{ formErrors['companyNameInput'][0] }}
                </div>
              </div>
              <div class="col-md-3">
                <label class="form-label"><sup class="text-danger">(*)</sup> Nama Aplikasi</label>
                <input id="companyAppNameInput" type="text" class="form-control" :class="formErrors['companyAppNameInput']?'is-invalid':''" />
                <div class="invalid-feedback" v-if="formErrors['companyAppNameInput']">
                  <i class="bx bx-x"></i>
                  {{ formErrors['companyAppNameInput'][0] }}
                </div>
              </div>
              <div class="col-md-3">
                <label class="form-label">Logo</label>
                <input id="companyLogoInput" type="file" class="form-control" :class="formErrors['companyLogoInput']?'is-invalid':''"/>
                <div class="invalid-feedback" v-if="formErrors['companyLogoInput']">
                  <i class="bx bx-x"></i>
                  {{ formErrors['companyLogoInput'][0] }}
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label"><sup class="text-danger">(*)</sup> Alamat Instansi</label>
              <textarea id="companyAddressInput" class="form-control" :class="formErrors['companyAddressInput']?'is-invalid':''"></textarea>
              <div class="invalid-feedback" v-if="formErrors['companyAddressInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['companyAddressInput'][0] }}
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label"><sup class="text-danger">(*)</sup> No Telepon Instansi</label>
                <input id="companyPhoneInput" type="text" class="form-control" :class="formErrors['companyPhoneInput']?'is-invalid':''" />
                <div class="invalid-feedback" v-if="formErrors['companyPhoneInput']">
                  <i class="bx bx-x"></i>
                  {{ formErrors['companyPhoneInput'][0] }}
                </div>
              </div>
              <div class="col-md-6">
                <label class="form-label"><sup class="text-danger">(*)</sup> No WhatsApp</label>
                <input id="companyWAInput" type="text" class="form-control" :class="formErrors['companyWAInput']?'is-invalid':''" />
                <div class="invalid-feedback" v-if="formErrors['companyWAInput']">
                  <i class="bx bx-x"></i>
                  {{ formErrors['companyWAInput'][0] }}
                </div>
              </div>
            </div>
            <div class="row mb-0">
              <div class="col-md-4">
                <label class="form-label"><sup class="text-danger">(*)</sup> Alamat Email Instansi</label>
                <input id="companyEmailInput" type="text" class="form-control" :class="formErrors['companyEmailInput']?'is-invalid':''" />
                <div class="invalid-feedback" v-if="formErrors['companyEmailInput']">
                  <i class="bx bx-x"></i>
                  {{ formErrors['companyEmailInput'][0] }}
                </div>
              </div>
              <div class="col-md-4">
                <label class="form-label"><sup class="text-danger">(*)</sup> Alamat Email Notifikasi</label>
                <input id="companyEmailNotifInput" type="text" class="form-control" :class="formErrors['companyEmailNotifInput']?'is-invalid':''" />
                <div class="invalid-feedback" v-if="formErrors['companyEmailNotifInput']">
                  <i class="bx bx-x"></i>
                  {{ formErrors['companyEmailNotifInput'][0] }}
                </div>
              </div>
              <div class="col-md-4">
                <label class="form-label"><sup class="text-danger">(*)</sup> Alamat Email Pengirim</label>
                <input id="companyEmailSenderInput" type="text" class="form-control" :class="formErrors['companyEmailSenderInput']?'is-invalid':''" />
                <div class="invalid-feedback" v-if="formErrors['companyEmailSenderInput']">
                  <i class="bx bx-x"></i>
                  {{ formErrors['companyEmailSenderInput'][0] }}
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
    name : 'ModalAboutSitarung',
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
        $("#aboutSitarungModal").modal('show')
        $("#companyNameInput").val(data.company_name)
        $("#companyAppNameInput").val(data.company_appname)
        $("#companyAddressInput").val(data.company_address)
        $("#companyPhoneInput").val(data.company_phone)
        $("#companyWAInput").val(data.company_wa)
        $("#companyEmailInput").val(data.company_email)
        $("#companyEmailNotifInput").val(data.company_email_notif)
        $("#companyEmailSenderInput").val(data.company_email_sender)
      },
      submitForm(e) {
        this.$isLoading(true)
        this.formErrors = {};
        var form = e.target || e.srcElement
        let action = baseurl + "/api/admin/company/"+this.getData['id'];
        let datas = new FormData();
        datas.append("id", this.getData['id']);
        datas.append("companyLogo", this.getData['company_logo']);
        datas.append("companyNameInput", $("#companyNameInput").val());
        datas.append("companyAppNameInput", $("#companyAppNameInput").val());
        datas.append("companyAddressInput", $("#companyAddressInput").val());
        datas.append("companyPhoneInput", $("#companyPhoneInput").val());
        datas.append("companyWAInput", $("#companyWAInput").val());
        datas.append("companyEmailInput", $("#companyEmailInput").val());
        datas.append("companyEmailNotifInput", $("#companyEmailNotifInput").val());
        datas.append("companyEmailSenderInput", $("#companyEmailSenderInput").val());
        if(document.getElementById("companyLogoInput").files[0]){
          datas.append("companyLogoInput", document.getElementById("companyLogoInput").files[0]);
        }
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        axios
          .post(action, datas, {
            headers: {
              "X-HTTP-Method-Override": 'PUT',
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
              this.$store.dispatch("setCompany", { self: this });
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
