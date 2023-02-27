<template>
  <div>
    <main class="site-wrapper">
      <div class="pt-table desktop-768">
        <div class="pt-tablecell page-home relative" style="background-image: url(https://images.pexels.com/photos/2036603/pexels-photo-2036603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2); background-position: center; background-size: cover;">
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                <div class="page-title home text-center">
                  <div>
                    <img :src="baseurl+'/images/logo.png'" width="170" />
                  </div>
                  <span class="heading-page"> Aplikasi Sitarung </span>
                  <p class="mt20">DINAS PEKERJAAN UMUM DAN PENATAAN RUANG KABUPATEN GARUT</p>
                  <div class="mt-5">
                    <p class="fw-bold text-uppercase text-white">Mohon Tunggu...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
  import { useToast,TYPE } from "vue-toastification"
  export default{
    name : 'ActivationPage',
    props:['title'],
    data() {
      return {
        baseurl: baseurl,
      };
    },
    setup () {
      const toast = useToast();
      return {toast}
    },
    created(){
      this.$store.dispatch("setTitle", this.$props.title);
      this.loadActivation();
    },
    methods:{
      loadActivation(){
        let action = baseurl + "/api/activation";
        let obj = new Object();
        obj.emailActivationInput = this.$route.params.token;
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
                timeout: 5000
            });
            if (resp.status == "success") {
              setTimeout(() => {
                this.$router.push("/");
              }, 2500);
            }
          })
          .catch((error) => {
            this.toast('Maaf terjadi kesalahan.', {
                type: 'error',
                timeout: 5000
            });
          });
      }
    }
  }
</script>
