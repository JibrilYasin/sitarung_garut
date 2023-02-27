<template>
  <div class="modal fade" id="passwordCMSModal">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Ubah Password</h6>
        </div>
        <form id="passwordCMSForm" @submit.prevent="submitForm" action="javascript:void(0)" method="POST" enctype="multipart/form-data">
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Masukan Password Lama</label>
              <div style="position: relative;">
                <input type="password" class="form-control" id="oldPasswordInput" :class="formErrors['oldPasswordInput']?'is-invalid':''"/>
              </div>
              <div class="invalid-feedback d-block" v-if="formErrors['oldPasswordInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['oldPasswordInput'][0] }}
              </div>
            </div>
            <div class="mb-0">
              <label class="form-label">Buat Password Baru<br /><code>(Kombinasi Huruf Kapital, Huruf Kecil & Angka)</code></label>
              <div style="position: relative;">
                <input type="password" class="form-control" id="newPasswordInput" :class="formErrors['newPasswordInput']?'is-invalid':''" v-model="passwordValue"/>
                <a id="showHidePassword" href="javascript:void(0)" v-on:click="showPassword('newPasswordInput')">
                  <span style="position: absolute; top: 10px; right: 15px; font-size: 1rem;"><i class="bx" :class="showHidepassword"></i></span>
                </a>
              </div>
              <div class="invalid-feedback d-block" v-if="formErrors['newPasswordInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['newPasswordInput'][0] }}
              </div>
              <password-meter :password="passwordValue" />
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
  import { defineComponent, ref } from "vue";
  import { useToast,TYPE } from "vue-toastification"
  import passwordMeter from "vue-simple-password-meter"
  export default defineComponent({
    name : 'PasswordModalCMS',
    data(){
      return{
        getData:{},
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
      showModal(data){
        this.getData = data;
        this.formErrors = {}
        this.passwordValue = '';
        $("#passwordCMSModal").modal('show')
        $("#passwordCMSForm")[0].reset()
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
      submitForm(e) {
        this.$isLoading(true)
        this.formErrors = {};
        var form = e.target || e.srcElement
        let action = baseurl + "/api/account/password";
        let datas = new FormData();
        datas.append("id", this.getData['id'])
        datas.append("oldPasswordInput", $("#oldPasswordInput").val())
        datas.append("newPasswordInput", $("#newPasswordInput").val())
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`
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
              $("#passwordCMSModal").modal('hide')
              $("#passwordCMSForm")[0].reset()
              this.$parent.logOut()
            }
            this.$isLoading(false)
          })
          .catch((error) => {
            this.$isLoading(false);
            if (error.response.status == 422) {
              this.formErrors = error.response.data.errors;
            } else {
              this.$store.dispatch("removeDispatch", { self: this });
            }
          });
      }
    }
  });
</script>
