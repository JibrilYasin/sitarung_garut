<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ $store.state.setTitle }}</template>
  </metainfo>
  <div>
    <div class="header-section">
      <div v-if="$store.state.headSection" class="container">
        <div v-if="this.$store.state.setToken == ''" class="hamburger d-none" @click="loadFirstScreen">
          <i class='bx bx-dots-vertical-rounded'></i>
        </div>
        <div v-else class="useicon">
          <i class='bx bx-user'></i> <span>Hi ! {{ setProfile.name }}</span>
        </div>
        <div class="row">
          <div class="col-md-12 text-center d-flex justify-content-center">
            <div class="py-2 px-4" style="background:#007bff">
              <div class="logohead me-3">
                <img :src="baseurl+'/images'+setCompany.company_logo" width="50" />
              </div>
              <div class="texthead">
                <h1 class="text-uppercase m-0 p-0">{{ setCompany['company_appname'] }}</h1>
                <p class="p-0 mt-1">
                  {{ setCompany['company_name'] }}
                </p>
              </div>
              <div style="clear:both"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="closehead text-center" :class="this.$store.state.setToken != ''?'':'d-none'" @click="closeHead">
        <i class='bx bx-collapse-vertical'></i>
      </div>
    </div>

    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </router-view>
  </div>
</template>
<script>
  //import "../../../../../public/front/css/style.css";
  import { mapState } from "vuex";
  import { useMeta } from "vue-meta";
  export default{
    name : 'Mainlayout',
    data() {
      return {
        baseurl: baseurl,
      };
    },
    setup() {
      //const toast = useToast();
      useMeta({
        title: "",
      });
      //return { toast };
    },
    created() {
      this.loadFirstScreen()
      this.$store.dispatch("setCompany", { self: this });
      if(this.$store.state.setToken != ""){
        this.$store.dispatch("setProfile", { self: this });
      }
    },
    computed: {
      ...mapState(["setProfile","setCompany"]),
    },
    mounted() {
      $(document).ready(function () {
        $("ul li").on("click", function () {
          $("li").removeClass("active");
          $(this).addClass("active");
        });
      });
    },
    methods:{
      // getProfile() {
      //   this.$store.dispatch("setProfile", { self: this });
      // },
      loadFirstScreen(){
        if(this.$store.state.setToken == ""){
          this.$store.dispatch("removeDispatch", { self: this });
        }
        $('.closehead').addClass('d-none')
      },
      closeHead(){
        this.$store.dispatch("setHeadSection", !this.$store.state.headSection)
      },

    }
  }
</script>
<style>
  .modal-backdrop {
    z-index: 9994 !important;
  }
  .modal {
    z-index: 9995 !important;
  }
  .leaflet-control-layers label {
    display: block;
    font-size: .8rem !important;
    line-height: 25px;
  }
</style>
