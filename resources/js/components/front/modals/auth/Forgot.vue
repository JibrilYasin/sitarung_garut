<template>
  <div class="modal fade" id="forgotModal" data-bs-backdrop="static">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Lupa Password</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <form id="forgotForm" @submit.prevent="submitFormForgot" action="javascript:void(0)" method="POST">
          <div class="modal-body">
            <div class="py-4 text-center">
              <img :src="$parent.baseurl+'/images/icons/forgot.png'" width="150" alt="" />
            </div>
            <div class="mb-0">
              <label class="form-label"><sup class="text-danger">(*)</sup> Masukan Alamat Email</label>
              <input type="text" class="form-control" id="emailForgotInput" name="emailForgotInput" :class="formErrors['emailForgotInput']?'is-invalid':''"/>
              <div class="invalid-feedback" v-if="formErrors['emailForgotInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['emailForgotInput'][0] }}
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn bg-gradient-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { useToast,TYPE } from "vue-toastification"
  export default{
    name : 'ForgotModal',
    data(){
      return{
        formErrors: {},
      }
    },
    setup () {
      const toast = useToast();
      return {toast}
    },
    methods:{
      showModal(){
        this.formErrors = {}
        $("#forgotModal").modal('show')
        $("#forgotForm")[0].reset()
      },
      submitFormForgot() {
        this.$isLoading(true)
        this.formErrors = {};
        let action = baseurl + "/api/forgot";
        let obj = new Object();
        obj.emailForgotInput = $("#emailForgotInput").val();
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
              this.$parent.showOTPModal($("#emailForgotInput").val())
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
