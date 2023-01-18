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
          <h4 class="font-weight-bolder">Form Lupa Password</h4>
          <p class="mb-0">Silahkan masukan alamat email anda.</p>
        </div>
        <div class="card-body">
          <form id="forgotCMSForm" @submit.prevent="submitCMSFormForgot" class="mb-3" action="javascript:void(0)" method="POST">
            <div class="mb-3">
              <input type="text" class="form-control form-control-lg" placeholder="Email" aria-label="Email" id="emailCMSForgotInput" :class="formErrors['emailCMSForgotInput']?'is-invalid':''">
              <div class="invalid-feedback" v-if="formErrors['emailCMSForgotInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['emailCMSForgotInput'][0] }}
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Submit</button>
            </div>
          </form>
        </div>
        <div class="card-footer text-center pt-0 px-lg-2 px-1">
          <p class="mb-4 text-sm mx-auto">
            <router-link class="text-primary text-gradient font-weight-bold" :to="'/auth/login'">Halaman Login</router-link>
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
    name : 'ForgotPage',
    data(){
      return{
        baseurl: baseurl,
        imagepath:imagepath,
        formErrors: {}
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
      submitCMSFormForgot() {
        this.$isLoading(true)
        this.formErrors = {};
        let action = baseurl + "/api/auth/forgot";
        let obj = new Object();
        obj.emailCMSForgotInput = $("#emailCMSForgotInput").val();
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
              this.$store.dispatch("setEmailOTPCMS", $("#emailCMSForgotInput").val())
              this.$router.push('/auth/otp')
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
