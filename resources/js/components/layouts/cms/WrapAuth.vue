<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ $store.state.setTitle }}</template>
  </metainfo>
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
