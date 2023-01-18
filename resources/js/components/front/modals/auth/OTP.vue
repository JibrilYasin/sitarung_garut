<template>
  <div class="modal fade" id="otpModal" data-bs-backdrop="static">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Masukan Kode</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <form id="otpForm" @submit.prevent="submitFormOTP" action="javascript:void(0)" method="POST">
          <div class="modal-body text-center">
            <div class="py-4 text-center">
              <img :src="$parent.baseurl+'/images/icons/otp.png'" width="150" alt="" />
            </div>
            <div class="mb-3">
              <label class="form-label"><sup class="text-danger">(*)</sup> Masukan 6 Digit Kode</label>
              <input type="text" class="form-control text-center" id="otpCodeInput" name="otpCodeInput" maxlength="6" :class="formErrors['otpCodeInput']?'is-invalid':''"/>
              <div class="invalid-feedback" v-if="formErrors['otpCodeInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['otpCodeInput'][0] }}
              </div>
            </div>
            <div class="mb-0">
              <p>
                <small>Terkendala dengann Kode Verifikasi ? <a href="javascript:void(0)" data-bs-dismiss="modal">Permintaan Ulang</a></small>
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn bg-gradient-primary">Proses</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { useToast,TYPE } from "vue-toastification"
  export default{
    name : 'OTPModal',
    data(){
      return{
        formErrors: {},
        email:''
      }
    },
    setup () {
      const toast = useToast();
      return {toast}
    },
    methods:{
      showModal(email){
        this.formErrors = {}
        this.email = email;
        $("#otpModal").modal('show')
        $("#otpForm")[0].reset()
      },
      submitFormOTP() {
        this.$isLoading(true)
        this.formErrors = {};
        let action = baseurl + "/api/otp";
        let obj = new Object();
        obj.emailOTPInput = this.email;
        obj.otpCodeInput = $("#otpCodeInput").val();
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
              this.$parent.showResetModal(this.email)
            }
            this.$isLoading(false)
          })
          .catch((error) => {
            this.formErrors = error.response.data.errors;
            this.$isLoading(false)
          });
      },
    }
  }
</script>
