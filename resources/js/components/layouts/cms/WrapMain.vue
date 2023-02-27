<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ $store.state.setTitleCMS }}</template>
  </metainfo>
  <div id="mainPreloaderAuth" class="d-block" style="position:absolute;background:linear-gradient(310deg, #5e72e4 0%, #825ee4 100%);width:100%;height:100%;z-index:999999">
    <div style="position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
  <div class="min-height-500 position-absolute w-100" style="background:linear-gradient(310deg, #5e72e4 0%, #825ee4 100%)"></div>
  <aside class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
    <div class="sidenav-header">
      <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html " target="_blank">
        <img :src="imagepath+'/'+setCompany.company_logo" class="navbar-brand-img h-100" alt="main_logo">
        <span class="ms-2 font-weight-bold">CMS Sitarung</span>
      </a>
    </div>
    <hr class="horizontal dark mt-0">
    <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :class="$route.name == 'DashboardPage'?'active':''" :to="'/admin'">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :class="$route.name == 'NotifikasiPage'?'active':''" :to="'/admin/notifikasi'">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class='bx bx-bell text-dark text-lg opacity-10'></i>
            </div>
            <span class="nav-link-text ms-1">Notifikasi</span>
            <span v-if="totalNotif > 0" class="ct-docs-sidenav-pro-badge ms-2">{{ totalNotif }}</span>
          </router-link>
        </li>
        <li class="nav-item mt-3">
          <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Data Master</h6>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="javascript:void(0)" @click="showAboutSitarung(setCompany)">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class='bx bx-sushi text-success text-lg opacity-10'></i>
            </div>
            <span class="nav-link-text ms-1">Tentang Sitarung</span>
          </a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :class="$route.name == 'PemohonPage'?'active':''" :to="'/admin/pemohon'">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class='bx bx-user-pin text-info text-lg opacity-10'></i>
            </div>
            <span class="nav-link-text ms-1">List Pemohon</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :class="$route.name == 'InformasiStatusPage'?'active':''" :to="'/admin/informasistatus'">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class='bx bx-objects-horizontal-left text-warning text-lg opacity-10'></i>
            </div>
            <span class="nav-link-text ms-1">Informasi Status</span>
          </router-link>
        </li>
        <li class="nav-item mt-3">
          <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Permohonan</h6>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :class="$route.name == 'PermohonanPage'?'active':''" :to="'/admin/permohonan'">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="bx bx-archive-in text-success text-lg opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">List Permohonan</span>
          </router-link>
        </li>
        <li class="nav-item mt-3">
          <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Akun Anda</h6>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="javascript:void(0)" @click="showProfileCMS(setProfileCMS)">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class='bx bx-user text-dark text-lg opacity-10'></i>
            </div>
            <span class="nav-link-text ms-1">Kelola Profil</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="javascript:void(0)" @click="showPasswordCMS(setProfileCMS)">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class='bx bx-lock-alt text-warning text-lg opacity-10'></i>
            </div>
            <span class="nav-link-text ms-1">Kelola Password</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="javascript:void(0)" @click="logOut">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class='bx bx-power-off text-info text-lg opacity-10'></i>
            </div>
            <span class="nav-link-text ms-1">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="sidenav-footer mx-3 d-none">
      <div class="card card-plain shadow-none" id="sidenavCard">
        <div class="card-body text-center p-3 w-100 pt-0">
          <div class="docs-info">
            <h6 class="mb-0">Need help?</h6>
            <p class="text-xs font-weight-bold mb-0">Please check our docs</p>
          </div>
        </div>
      </div>
      <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/argon-dashboard" target="_blank" class="btn btn-dark btn-sm w-100 mb-3">Documentation</a>
      <a class="btn btn-primary btn-sm mb-0 w-100" href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=sidebarfree" type="button">Upgrade to pro</a>
    </div>
  </aside>
  <main class="main-content position-relative border-radius-lg ">
    <!-- Navbar -->
    <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
      <div class="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li class="breadcrumb-item text-sm"><a class="opacity-5 text-white" href="javascript:;">Pages</a></li>
            <li class="breadcrumb-item text-sm text-white active" aria-current="page">{{ $store.state.setTitleCMS }}</li>
          </ol>
          <h6 class="font-weight-bolder text-white mb-0">{{ $store.state.setTitleCMS }}</h6>
        </nav>
        <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div class="ms-md-auto pe-md-3 d-flex align-items-center">
            <div class="input-group d-none">
              <span class="input-group-text text-body"><i class="fas fa-search" aria-hidden="true"></i></span>
              <input type="text" class="form-control" placeholder="Type here...">
            </div>
          </div>
          <ul class="navbar-nav  justify-content-end">
            <li class="nav-item d-flex align-items-center">
              <a href="javascript:;" class="nav-link text-white font-weight-bold px-0">
                <i class="fa fa-user me-sm-1"></i>
                <span class="d-sm-inline d-none">{{ setProfileCMS.name }}</span>
              </a>
            </li>
            <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="javascript:;" class="nav-link text-white p-0" id="iconNavbarSidenav">
                <div class="sidenav-toggler-inner">
                  <i class="sidenav-toggler-line bg-white"></i>
                  <i class="sidenav-toggler-line bg-white"></i>
                  <i class="sidenav-toggler-line bg-white"></i>
                </div>
              </a>
            </li>
            <li class="nav-item px-3 d-flex align-items-center d-none">
              <a href="javascript:;" class="nav-link text-white p-0">
                <i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
              </a>
            </li>
            <li class="nav-item dropdown pe-2 d-flex align-items-center d-none">
              <a href="javascript:;" class="nav-link text-white p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa fa-bell cursor-pointer"></i>
              </a>
              <ul class="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                <li class="mb-2">
                  <a class="dropdown-item border-radius-md" href="javascript:;">
                    <div class="d-flex py-1">
                      <div class="my-auto">
                        <img :src="imagepath+'cms/img/team-2.jpg'" class="avatar avatar-sm  me-3 ">
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-sm font-weight-normal mb-1">
                          <span class="font-weight-bold">New message</span> from Laur
                        </h6>
                        <p class="text-xs text-secondary mb-0">
                          <i class="fa fa-clock me-1"></i>
                          13 minutes ago
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mb-2">
                  <a class="dropdown-item border-radius-md" href="javascript:;">
                    <div class="d-flex py-1">
                      <div class="my-auto">
                        <img :src="imagepath+'cms/img/small-logos/logo-spotify.svg'" class="avatar avatar-sm bg-gradient-dark  me-3 ">
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-sm font-weight-normal mb-1">
                          <span class="font-weight-bold">New album</span> by Travis Scott
                        </h6>
                        <p class="text-xs text-secondary mb-0">
                          <i class="fa fa-clock me-1"></i>
                          1 day
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item border-radius-md" href="javascript:;">
                    <div class="d-flex py-1">
                      <div class="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                        <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <title>credit-card</title>
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(453.000000, 454.000000)">
                                  <path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                  <path class="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-sm font-weight-normal mb-1">
                          Payment successfully completed
                        </h6>
                        <p class="text-xs text-secondary mb-0">
                          <i class="fa fa-clock me-1"></i>
                          2 days
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End Navbar -->
    <div class="container-fluid py-4">
      <router-view v-slot="{ Component, route }">
        <component :totalnotif="loadTotalNotif" :is="Component" :key="route.path" />
      </router-view>
      <footer class="footer pt-3  d-none">
        <div class="container-fluid">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-lg-6 mb-lg-0 mb-4">
              <div class="copyright text-center text-sm text-muted text-lg-start">
                © 2022, Dinas pekerjaan Umum dan Penataan Ruang Kabupaten Garut
              </div>
            </div>
            <div class="col-lg-6">
              <ul class="nav nav-footer justify-content-center justify-content-lg-end d-none">
                <li class="nav-item">
                  <a href="https://www.creative-tim.com" class="nav-link text-muted" target="_blank">Creative Tim</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.creative-tim.com/presentation" class="nav-link text-muted" target="_blank">About Us</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.creative-tim.com/blog" class="nav-link text-muted" target="_blank">Blog</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.creative-tim.com/license" class="nav-link pe-0 text-muted" target="_blank">License</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <!-- Modal Districts -->
    <modalAboutSitarung ref="refModalAboutSitarung"></modalAboutSitarung>
    <!-- End -->
    <!-- Modal Profile -->
    <modalProfileCMS ref="refModalProfileCMS"></modalProfileCMS>
    <!-- End -->
    <!-- Modal Password -->
    <modalPasswordCMS ref="refModalPasswordCMS"></modalPasswordCMS>
    <!-- End -->
  </main>
</template>
<script>
  import { mapState } from "vuex";
  import { useMeta } from "vue-meta";
  import { useToast,TYPE } from "vue-toastification"
  import modalAboutSitarung from "../../cms/modals/About";
  import modalProfileCMS from "../../cms/modals/Profile";
  import modalPasswordCMS from "../../cms/modals/Password";
  export default{
    name : 'MainlayoutCMS',
    data() {
      return {
        baseurl: baseurl,
        imagepath:imagepath,
        totalNotif:0
      };
    },
    components: { modalAboutSitarung,modalProfileCMS,modalPasswordCMS },
    setup() {
      useMeta({
        title: "",
      });
    },
    created(){
      if(this.$store.state.setTokenCMS != ""){
        this.$store.dispatch("setProfileCMS", { self: this });
        this.loadTotalNotif()
      }
    },
    mounted(){
      setTimeout(function() {
        $("#mainPreloaderAuth").removeClass('d-block')
        $("#mainPreloaderAuth").addClass('d-none')
      }, 1000);
    },
    computed: {
      ...mapState(["setProfileCMS","setCompany"]),
    },
    methods:{
      async loadTotalNotif() {
        let action = baseurl + "/api/notif/totalunread";
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        await axios
          .post(action, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.totalNotif = response.data
          })
          .catch((error) => {
            this.$store.dispatch("removeDispatchCMS", { self: this });
          });
      },
      showAboutSitarung(data) {
        this.$nextTick(() => {
          this.$refs.refModalAboutSitarung.showModal(data);
        });
      },
      showProfileCMS(data) {
        this.$nextTick(() => {
          this.$refs.refModalProfileCMS.showModal(data);
        });
      },
      showPasswordCMS(data) {
        this.$nextTick(() => {
          this.$refs.refModalPasswordCMS.showModal(data);
        });
      },
      logOut(){
        this.$isLoading(true)
        let action = baseurl + "/api/logout";
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        axios
          .post(action, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            let resp = response.data;
            if (resp.status == "success") {
              this.$store.dispatch("removeDispatchCMS", { self: this });
              return location.assign(baseurl+'/auth/login');
            }else{
              this.toast(resp.message, {
                  type: resp.status,
                  timeout: 5000
              });
            }
            this.$isLoading(false)
          })
          .catch((error) => {
            this.$isLoading(false)
            this.$store.dispatch("removeDispatchCMS", { self: this });
          });
      }
    }
  }
</script>
<style>
  .modal-backdrop {
    z-index: 9997 !important;
  }
  .modal {
    z-index: 9998 !important;
  }
  .navbar-vertical.navbar-expand-xs {
    z-index: 9996;
  }
  .swal2-container {
    z-index: 9999 !important;
  }
  .bootstrap-select .dropdown-menu {
    z-index: 9999;
  }
  .bootstrap-select ul{
    margin-top: 0px !important
  }
  .leaflet-control-layers label {
    display: block;
    font-size: .8rem !important;
    line-height: 25px;
  }
</style>
