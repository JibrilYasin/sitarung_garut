<template>
  <div class="row">
    <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
      <div class="card card-plain">
        <div class="card-header text-center pb-0 text-start">
          <div class="logo mb-3">
            <div class="p-2">
              <img :src="imagepath+'/'+setCompany.company_logo" width="150" />
            </div>
          </div>
          <h4 class="font-weight-bolder">Form Login CMS</h4>
          <p class="mb-0">Silahkan masukan alamat email & password.</p>
        </div>
        <div class="card-body">
          <form id="loginCMSForm" @submit.prevent="submitCMSFormLogin" class="mb-3" action="javascript:void(0)" method="POST">
            <div class="mb-3">
              <input type="text" class="form-control form-control-lg" placeholder="Email" aria-label="Email" id="emailCMSLoginInput" :class="formErrors['emailCMSLoginInput']?'is-invalid':''">
              <div class="invalid-feedback" v-if="formErrors['emailCMSLoginInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['emailCMSLoginInput'][0] }}
              </div>
            </div>
            <div class="mb-3">
              <div style="position: relative;">
                <input type="password" class="form-control form-control-lg" placeholder="Password" aria-label="Password" id="passwordCMSLoginInput" :class="formErrors['passwordCMSLoginInput']?'is-invalid':''">
                <a href="javascript:void(0)" v-on:click="showPassword('passwordCMSLoginInput')">
                  <span style="position: absolute; top: 10px; right: 15px; font-size: 1rem;"><i class="bx" :class="showHidepassword"></i></span>
                </a>
              </div>
              <div class="invalid-feedback d-block" v-if="formErrors['passwordCMSLoginInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['passwordCMSLoginInput'][0] }}
              </div>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="rememberMe" checked>
              <label class="form-check-label" for="rememberMe">Remember me</label>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Login</button>
            </div>
          </form>
        </div>
        <div class="card-footer text-center pt-0 px-lg-2 px-1">
          <p class="mb-4 text-sm mx-auto">
            <router-link class="text-primary text-gradient font-weight-bold" :to="'/auth/forgot'">Lupa Password</router-link>
          </p>
        </div>
      </div>
    </div>
    <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
      <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden" :style="{backgroundImage: 'url('+imagepath+'bg.jpeg)'}" style="background-position: center; background-size: cover;">
        <span class="mask bg-gradient-primary opacity-6"></span>
        <h6 class="mt-5 text-white font-weight-bolder position-relative">CONTENT MANAGEMENT SYSTEM</h6>
        <h3 class="mt-1 text-white font-weight-bolder position-relative">APLIKASI SITARUNG</h3>
        <p class="text-white position-relative">Dinas pekerjaan Umum dan Penataan Ruang Kabupaten Garut</p>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from "vuex";
  import { useToast,TYPE } from "vue-toastification"
  export default{
    name : 'LoginPage',
    data(){
      return{
        baseurl: baseurl,
        imagepath:imagepath,
        formErrors: {},
        showHidepassword:'bx-hide'
      }
    },
    setup () {
      const toast = useToast();
      return {toast}
    },
    computed: {
      ...mapState(["setCompany"]),
    },
    created(){
      this.$store.dispatch("setEmailOTPCMS", '')
      this.$store.dispatch("setCompany", '')
      if(this.$store.state.setTokenCMS != ""){
        return location.assign(baseurl+'/admin');
      }
    },    
    methods:{
      submitCMSFormLogin() {
        this.$isLoading(true)
        this.formErrors = {};
        let action = baseurl + "/api/auth/login";
        let obj = new Object();
        obj.emailCMSLoginInput = $("#emailCMSLoginInput").val();
        obj.passwordCMSLoginInput = $("#passwordCMSLoginInput").val();
        axios
          .post(action, obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            let resp = response.data;
            if (resp.status == "success") {
              this.$store.dispatch("setTokenCMS", resp.content.access_token)
              this.$store.dispatch("setProfileCMS", { self: this });
              return location.assign(baseurl+'/admin');
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
