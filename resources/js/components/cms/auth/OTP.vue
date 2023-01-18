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
          <h4 class="font-weight-bolder">Verifikasi OTP</h4>
          <p class="mb-0">Silahkan masukan 6 digit kode.</p>
        </div>
        <div class="card-body">
          <form id="otpCMSForm" @submit.prevent="submitCMSFormOTP" class="mb-3" action="javascript:void(0)" method="POST">
            <div class="mb-3">
              <input type="text" class="form-control form-control-lg text-center" aria-label="Email" id="CMSOTPInput" :class="formErrors['CMSOTPInput']?'is-invalid':''" maxlength="6" autocomplete="off">
              <div class="invalid-feedback" v-if="formErrors['CMSOTPInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['CMSOTPInput'][0] }}
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
    name : 'OTPPage',
    data(){
      return{
        baseurl: baseurl,
        imagepath:imagepath,
        formErrors: {},
        email:''
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
      this.$store.dispatch("setCompany", '')
      if(this.$store.state.setTokenCMS != ""){
        return location.assign(baseurl+'/admin');
      }
    },
    methods:{
      submitCMSFormOTP() {
        this.$isLoading(true)
        this.formErrors = {};
        let action = baseurl + "/api/auth/otp";
        let obj = new Object();
        obj.emailOTPCMS = this.$store.state.setEmailOTPCMS;
        obj.CMSOTPInput = $("#CMSOTPInput").val();
        axios
          .post(action, obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            let resp = response.data;
            if (resp.status == "success") {
              this.$router.push('/auth/reset')
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
    }
  }
</script>
