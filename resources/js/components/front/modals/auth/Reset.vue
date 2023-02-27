<template>
  <div class="modal fade" id="resetModal" data-bs-backdrop="static">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Form RESET PASSWORD</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <form id="resetForm" @submit.prevent="submitFormReset" class="mb-3" action="javascript:void(0)" method="POST" enctype="multipart/form-data">
          <div class="modal-body">
            <div class="py-4 text-center">
              <img :src="$parent.baseurl+'/images/icons/reset.png'" width="150" alt="" />
            </div>
            <div class="mb-0">
              <label class="form-label"><sup class="text-danger">(*)</sup> Buat Password Baru<br /><code>(Kombinasi Huruf Kapital, Huruf Kecil & Angka)</code></label>
              <div style="position: relative;">
                <input type="password" class="form-control" id="passwordResetInput" :class="formErrors['passwordResetInput']?'is-invalid':''" v-model="passwordValue"/>
                <a id="showHidePassword" href="javascript:void(0)" v-on:click="showPassword('passwordResetInput')">
                  <span style="position: absolute; top: 10px; right: 15px; font-size: 1rem;"><i class="bx" :class="showHidepassword"></i></span>
                </a>
              </div>
              <div class="invalid-feedback d-block" v-if="formErrors['passwordResetInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['passwordResetInput'][0] }}
              </div>
              <password-meter :password="passwordValue" />
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
  import { defineComponent, ref } from "vue";
  import { useToast,TYPE } from "vue-toastification"
  import passwordMeter from "vue-simple-password-meter"
  export default defineComponent({
    name : 'ResetModal',
    data(){
      return{
        emailReset:'',
        formErrors: {},
        showHidepassword:'bx-hide'
      }
    },
    components: { passwordMeter },
    setup () {
      const toast = useToast();
      const passwordValue = ref('');
      return {toast,passwordValue}
    },
    methods:{
      showModal(email){
        this.emailReset = email;
        this.formErrors = {}
        $("#resetModal").modal('show')
        $("#resetForm")[0].reset()
      },
      showPassword(param) {
        var x = document.getElementById(param);
        if (x.type === "password") {
          x.type = "text";
          this.showHidepassword = 'bx-show-alt'
        } else {
          x.type = "password";
          this.showHidepassword = 'bx-hide'
        }
      },
      submitFormReset(e) {
        this.$isLoading(true)
        this.formErrors = {};
        var form = e.target || e.srcElement
        let action = baseurl + "/api/reset";
        let datas = new FormData();
        datas.append("emailResetInput", this.emailReset);
        datas.append("passwordResetInput", $("#passwordResetInput").val());
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
                timeout: 5000
            });
            if (resp.status == "success") {
              $("#resetModal").modal('hide')
              $("#resetForm")[0].reset()
              this.$parent.showLoginModal()
            }

            this.$isLoading(false)
          })
          .catch((error) => {
            this.formErrors = error.response.data.errors;
            this.$isLoading(false)
          });
      }
    }
  });
</script>
