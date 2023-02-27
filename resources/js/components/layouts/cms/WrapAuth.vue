<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ $store.state.setTitle }}</template>
  </metainfo>
  <div id="mainPreloaderAuth" class="d-block" style="position:absolute;background:linear-gradient(310deg, #5e72e4 0%, #825ee4 100%);width:100%;height:100%;z-index:999999">
    <div style="position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
  <main class="main-content  mt-0">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <router-view v-slot="{ Component, route }">
            <component :is="Component" :key="route.path" />
          </router-view>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
  import { mapState } from "vuex";
  import { useMeta } from "vue-meta";
  export default{
    name : 'WrapAuthCMS',
    data() {
      return {
        baseurl: baseurl,
      };
    },
    setup() {
      useMeta({
        title: "",
      });
    },
    created() {

    },
    mounted() {
      setTimeout(function() {
        $("#mainPreloaderAuth").removeClass('d-block')
        $("#mainPreloaderAuth").addClass('d-none')
      }, 1000);
    },
    methods:{
      // getProfile() {
      //   this.$store.dispatch("setProfile", { self: this });
      // },
    }
  }
</script>

<style scoped>
  body{
    background: #FFF !important
  }
</style>
