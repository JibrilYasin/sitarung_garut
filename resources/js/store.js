import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default new createStore({
  state: {
    setToken:"",
    setTokenCMS:"",
    setProfile:{},
    setProfileCMS:{},
    appTitle: "Database Siteplan Kabupaten Garut",
    setTitle: "",
    setTitleCMS: "",
    sideMenu: false,
    sideBar: false,
    headSection: false,
    homeScreen: true,
    closeScreen: true,
    currentLayer: null,
    setEmailOTPCMS:"",
    setCompany:{},
  },
  getters: {
    setToken: (state) => state.setToken,
    setTokenCMS: (state) => state.setTokenCMS,
    setProfile: (state) => state.setProfile,
    setProfileCMS: (state) => state.setProfileCMS,
    appTitle: (state) => state.appTitle,
    setTitle: (state) => state.setTitle,
    setTitleCMS: (state) => state.setTitleCMS,
    sideMenu: (state) => state.sideMenu,
    sideBar: (state) => state.sideBar,
    headSection: (state) => state.headSection,
    homeScreen: (state) => state.homeScreen,
    closeScreen: (state) => state.closeScreen,
    currentLayer: (state) => state.currentLayer,
    setEmailOTPCMS: (state) => state.setEmailOTPCMS,
    setCompany: (state) => state.setCompany,
  },
  mutations: {
    FETCH_SETTOKEN(state, data) {
      state.setToken = data;
    },
    FETCH_SETTOKENCMS(state, data) {
      state.setTokenCMS = data;
    },
    FETCH_SETPROFILE(state, data) {
      state.setProfile = data;
    },
    FETCH_SETPROFILECMS(state, data) {
      state.setProfileCMS = data;
    },
    FETCH_SETTITLE(state, data) {
      state.setTitle = data;
    },
    FETCH_SETTITLECMS(state, data) {
      state.setTitleCMS = data;
    },
    FETCH_SIDEMENU(state, data) {
      state.sideMenu = data;
    },
    FETCH_SIDEBAR(state, data) {
      state.sideBar = data;
    },
    FETCH_HEADSECTION(state, data) {
      state.headSection = data;
    },
    FETCH_HOMESCREEN(state, data) {
      state.homeScreen = data;
    },
    FETCH_CLOSESCREEN(state, data) {
      state.closeScreen = data;
    },
    FETCH_CURRENTLAYER(state, data) {
      state.currentLayer = data;
    },
    FETCH_EMAILOTPCMS(state, data) {
      state.setEmailOTPCMS = data;
    },
    FETCH_COMPANY(state, data) {
      state.setCompany = data;
    },
  },
  actions: {
    setToken({ commit, state }, value) {
      commit("FETCH_SETTOKEN", value);
    },
    setTokenCMS({ commit, state }, value) {
      commit("FETCH_SETTOKENCMS", value);
    },
    async setProfile({ commit, state }, {self}) {
      window.axios.defaults.headers.common["Authorization"] = `Bearer ${state.setToken}`;
      await axios.get(baseurl + "/api/account/getprofile")
        .then((response) => {
          commit("FETCH_SETPROFILE", response.data);
        })
        .catch((error) => {
          console.log(error);
          self.$store.dispatch('removeDispatch', { self: self });
        });
    },
    async setProfileCMS({ commit, state }, {self}) {
      let arr;
      window.axios.defaults.headers.common["Authorization"] = `Bearer ${state.setTokenCMS}`;
      await axios.get(baseurl + "/api/account/getprofilecms")
        .then((response) => {
          arr = response.data;
          commit("FETCH_SETPROFILECMS", response.data);
        })
        .catch((error) => {
          console.log(error);
          //self.$store.dispatch('removeDispatchCMS', { self: self });
        });
      return arr
    },
    setTitle({ commit, state }, value) {
      commit("FETCH_SETTITLE", value);
    },
    setTitleCMS({ commit, state }, value) {
      commit("FETCH_SETTITLECMS", value);
    },
    setSideMenu({ commit, state }, value) {
      commit("FETCH_SIDEMENU", value);
    },
    setSideBar({ commit, state }, value) {
      commit("FETCH_SIDEBAR", value);
    },
    setHeadSection({ commit, state }, value) {
      commit("FETCH_HEADSECTION", value);
    },
    setHomeScreen({ commit, state }, value) {
      commit("FETCH_HOMESCREEN", value);
    },
    setCloseScreen({ commit, state }, value) {
      commit("FETCH_CLOSESCREEN", value);
    },
    setCurrentLayer({ commit, state }, value) {
      commit("FETCH_CURRENTLAYER", value);
    },
    getStatusNotif({ commit, state }, {self,error}) {
      switch (error.response.status) {
        case 403:
          return self.toast("Akses ditolak. Mohon tunggu...", {
                  type: "warning",
                  timeout: 3000
                });
          break;
        case 500:
          return self.toast("Terjadi kesalahan, silahkan coba beberapa saat lagi.", {
                  type: "error",
                  timeout: 3000
                });
          break;
        case 401:
          dispatch('setSignOut', { self: self });
          break;
      }
    },
    removeDispatch({ commit, state }, {self}) {
      $('.modal').hide();
      $('.modal-backdrop').remove();
      $('.closehead').addClass('d-none')
      self.$store.dispatch("setToken", '')
      //self.$store.dispatch("setProfile", {})
      self.$store.dispatch("setSideMenu", false)
      self.$store.dispatch("setSideBar", false)
      self.$store.dispatch("setHomeScreen", true)
      self.$store.dispatch("setCloseScreen", true)
      self.$store.dispatch("setHeadSection", false)
    },
    removeDispatchCMS({ commit, state }, {self}) {
      self.$store.dispatch("setTokenCMS", '')
      //self.$store.dispatch("setProfileCMS", {})
      self.$router.push('/auth/login')
    },
    setEmailOTPCMS({ commit, state }, value) {
      commit("FETCH_EMAILOTPCMS", value);
    },
    async setCompany({ commit, state }, {self}) {
      let arr;
      await axios.get(baseurl + "/api/company")
        .then((response) => {
          arr = response.data;
          commit("FETCH_COMPANY", response.data);
        })
        .catch((error) => {

        });
      return arr;
    },
  },
  plugins: [createPersistedState()],
});
