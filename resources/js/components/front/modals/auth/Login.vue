<template>
  <div class="modal fade" id="loginModal" data-bs-backdrop="static">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Form Login</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <form id="loginForm" @submit.prevent="submitFormLogin" action="javascript:void(0)" method="POST">
          <div class="modal-body">
            <div class="py-4 text-center">
              <img :src="$parent.baseurl+'/images/icons/login.png'" width="150" alt="" />
            </div>
            <div class="mb-3">
              <label class="form-label"><sup class="text-danger">(*)</sup> Email</label>
              <input type="text" class="form-control" id="emailLoginInput" name="emailLoginInput" :class="formErrors['emailLoginInput']?'is-invalid':''"/>
              <div class="invalid-feedback" v-if="formErrors['emailLoginInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['emailLoginInput'][0] }}
              </div>
            </div>
            <div class="mb-0">
              <div class="d-flex justify-content-between">
                <label class="form-label"><sup class="text-danger">(*)</sup> Password</label>
                <a href="javascript:void(0)" @click="$parent.showForgotModal">Lupa Password ?</a>
              </div>
              <div style="position: relative;">
                <input type="password" class="form-control" id="passwordLoginInput" :class="formErrors['passwordLoginInput']?'is-invalid':''"/>
                <a href="javascript:void(0)" v-on:click="showPassword('passwordLoginInput')">
                  <span style="position: absolute; top: 10px; right: 15px; font-size: 1rem;"><i class="bx" :class="showHidepassword"></i></span>
                </a>
              </div>
              <div class="invalid-feedback d-block" v-if="formErrors['passwordLoginInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['passwordLoginInput'][0] }}
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="btn-group">
              <button type="submit" class="btn bg-gradient-primary">Submit</button>
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
    name : 'LoginModal',
    data(){
      return{
        formErrors: {},
        showHidepassword:'bx-hide'
      }
    },
    setup () {
      const toast = useToast();
      return {toast}
    },
    methods:{
      showModal(){
        this.formErrors = {}
        $("#loginModal").modal('show')
        $("#loginForm")[0].reset()
      },
      submitFormLogin() {
        this.$isLoading(true)
        this.formErrors = {};
        let action = baseurl + "/api/login";
        let obj = new Object();
        obj.emailLoginInput = $("#emailLoginInput").val();
        obj.passwordLoginInput = $("#passwordLoginInput").val();
        axios.get(baseurl + "/sanctum/csrf-cookie").then((response) => {
          axios
            .post(action, obj, {
              headers: {
                Accept: "application/json",
              },
            })
            .then((response) => {
              let resp = response.data;
              if (resp.status == "success") {
                this.$store.dispatch("setToken", resp.content.access_token)
                $("#loginModal").modal('hide');
                this.$store.dispatch("setSideMenu", true)
                this.$store.dispatch("setHomeScreen", false)
                this.$store.dispatch("setCloseScreen", false)
                this.$store.dispatch("setHeadSection", true)
                this.$parent.closeScreen()
                this.$store.dispatch("setProfile", { self: this });
                this.$parent.loadDistricts()
                this.$parent.loadStatusPermohonan()
                this.$parent.loadTotalNotif();
              }else{
                this.toast(resp.message, {
                    type: resp.status,
                    timeout: 3000
                });
              }
              this.$isLoading(false)
            })
            .catch((error) => {
              this.formErrors = error.response.data.errors;
              this.$isLoading(false)
            });
        });
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
    }
  }
</script>
