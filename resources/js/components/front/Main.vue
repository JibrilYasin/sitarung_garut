<template>
  <div style="position:relative">
    <nav v-if="$store.state.sideBar" class="sidebar-nav">
      <div class="logo d-none">
        <div class="p-2">
          <img :src="imagepath+'/'+setCompany.company_logo" class="img-fluid" />
        </div>
      </div>
      <ul>
        <li v-if="!$store.state.sideMenu" @click="showLoginModal">
          <i class="bx bx-log-in-circle"></i>
          <span class="tooltip-sidebar">Login</span>
        </li>
        <li v-if="!$store.state.sideMenu" @click="showRegisterModal">
          <i class="bx bx-user-plus"></i>
          <span class="tooltip-sidebar">Pendaftaran</span>
        </li>
        <li v-if="$store.state.sideMenu" @click="showNotifModal" style="position:relative">
          <span v-if="totalNotif > 0" class="mynotif">{{ totalNotif }}</span>
          <i class="bx bx-bell"></i>
          <span class="tooltip-sidebar">List Notifikasi</span>
        </li>
        <li v-if="$store.state.sideMenu" @click="showProfileModal">
          <i class="bx bx-user-pin"></i>
          <span class="tooltip-sidebar">Kelola Profil</span>
        </li>
        <li v-if="$store.state.sideMenu" @click="showPasswordModal">
          <i class="bx bx-lock"></i>
          <span class="tooltip-sidebar">Ubah Password</span>
        </li>
        <li v-if="$store.state.sideMenu" @click="showPermohonanModal">
          <i class="bx bx-shape-square"></i>
          <span class="tooltip-sidebar">List Permohonan</span>
        </li>
        <li>
          <i class="bx bx-mail-send"></i>
          <span class="tooltip-sidebar">Pengaduan</span>
        </li>
        <li @click="directWA">
          <i class='bx bxl-whatsapp'></i>
          <span class="tooltip-sidebar">WhatsApp</span>
        </li>
        <li v-if="$store.state.sideMenu" @click="logOut">
          <i class="bx bx-power-off"></i>
          <span class="tooltip-sidebar">Logout</span>
        </li>

      </ul>
    </nav>

    <div v-if="$store.state.closeScreen" class="close-button" @click="closeScreen">
      <i class="bx bx-x-circle"></i>
    </div>
    <main v-if="$store.state.homeScreen" class="site-wrapper">
      <div class="pt-table desktop-768">
        <div class="pt-tablecell page-home relative" :style="{backgroundImage: 'url('+imagepath+'bg.jpeg)'}" style="background-position: center; background-size: cover;">
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                <div class="page-title home text-center">
                  <div>
                    <img :src="imagepath+'/'+setCompany['company_logo']" width="170" />
                  </div>
                  <span class="heading-page"> {{ setCompany['company_appname'] }} </span>
                  <p class="mt20 text-uppercase">{{ setCompany['company_name'] }}</p>
                </div>
                <div class="hexagon-menu clear">
                  <div class="hexagon-item" style="margin-left: 2.5rem;">
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <a class="hex-content" href="javascript:void(0)" @click="showLoginModal">
                      <span class="hex-content-inner">
                        <span class="icon">
                          <i class="bx bx-log-in-circle"></i>
                        </span>
                        <span class="title">Login</span>
                      </span>
                      <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path>
                      </svg>
                    </a>
                  </div>
                  <div class="hexagon-item">
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <a class="hex-content" href="javascript:void(0)" @click="showRegisterModal">
                      <span class="hex-content-inner">
                        <span class="icon">
                          <i class="bx bx-user-plus"></i>
                        </span>
                        <span class="title">Pendaftaran</span>
                      </span>
                      <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path>
                      </svg>
                    </a>
                  </div>
                  <div class="hexagon-item">
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <a class="hex-content" href="javascript:void(0)">
                      <span class="hex-content-inner">
                        <span class="icon">
                          <i class="bx bx-mail-send"></i>
                        </span>
                        <span class="title">Pengaduan</span>
                      </span>
                      <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path>
                      </svg>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <div style="position: relative;">
      <div style="height:100vh" id="defmap"></div>
    </div>
    <!-- Modal Login -->
    <modalLogin ref="refModalLogin"></modalLogin>
    <!-- End -->
    <!-- Modal Forgot -->
    <modalForgot ref="refModalForgot"></modalForgot>
    <!-- End -->
    <!-- Modal Register -->
    <modalRegister ref="refModalRegister"></modalRegister>
    <!-- End -->
    <!-- Modal Forgot -->
    <modalOTP ref="refModalOTP"></modalOTP>
    <!-- End -->
    <!-- Modal Forgot -->
    <modalReset ref="refModalReset"></modalReset>
    <!-- End -->
    <!-- Modal Profile -->
    <modalProfile ref="refModalProfile"></modalProfile>
    <!-- End -->
    <!-- Modal Profile -->
    <modalPassword ref="refModalPassword"></modalPassword>
    <!-- End -->
    <!-- Modal Notif -->
    <modalNotif ref="refModalNotif"></modalNotif>
    <!-- End -->
    <!-- Modal Districts -->
    <modalDistricts ref="refModalDistricts"></modalDistricts>
    <!-- End -->
    <!-- Modal Map -->
    <modalMap ref="refModalMap"></modalMap>
    <!-- End -->
    <!-- Modal Permohonan -->
    <modalPermohonan ref="refModalPermohonan"></modalPermohonan>
    <!-- End -->
    <!-- Modal Detail Permohonan -->
    <modalDetailPermohonan ref="refModalDetailPermohonan"></modalDetailPermohonan>
    <!-- End -->

  </div>
</template>
<script>
  import { useToast,TYPE } from "vue-toastification"
  import { mapState } from "vuex";
  import modalLogin from "./modals/auth/Login";
  import modalForgot from "./modals/auth/Forgot";
  import modalRegister from "./modals/auth/Register";
  import modalOTP from "./modals/auth/OTP";
  import modalReset from "./modals/auth/Reset";
  import modalProfile from "./modals/account/Profile";
  import modalPassword from "./modals/account/Password";
  import modalNotif from "./modals/account/Notif";
  import modalDistricts from "./modals/permohonan/Districts";
  import modalMap from "./modals/permohonan/Map";
  import modalPermohonan from "./modals/permohonan/Permohonan";
  import modalDetailPermohonan from "./modals/permohonan/Detail";
  export default {
    name: "MainPage",
    props:['title'],
    components: {
      modalLogin,
      modalForgot,
      modalRegister,
      modalOTP,
      modalReset,
      modalProfile,
      modalPassword,
      modalNotif,
      modalDistricts,
      modalMap,
      modalPermohonan,
      modalDetailPermohonan
    },
    data() {
      return {
        baseurl: baseurl,
        imagepath:imagepath,
        getDataKecamatan: {},
        getDataStatusPermohonan: {},
        zoom: 10,
        center: [-7.422231311992428, 107.78223470459028],
        osm:L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attribution: '© OpenStreetMap'
        }),
        gStreet:L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains:['mt0','mt1','mt2','mt3']
        }),
        rbiMap:L.tileLayer('https://portal.ina-sdi.or.id/arcgis/rest/services/RBI/Basemap/MapServer/tile/{z}/{y}/{x}', {
          attribution: '&copy; https://portal.ina-sdi.or.id/arcgis/rest/services/RBI/Basemap/MapServer/tile/{z}/{y}/{x} Contributors',
          maxZoom: 20,
          subdomains:['mt0','mt1','mt2','mt3']
        }),
        // grayscaleMap:L.tileLayer('https://maps.omniscale.net/v2/sakti-map-fcc9e56e/style.grayscale/{z}/{x}/{y}.png', {
        //   attribution: '&copy; 2022 &middot; <a href="https://maps.omniscale.com/">Omniscale</a> ' + '&middot; Map data: <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        //   maxZoom: 20,
        // }),
        grayscaleMap:L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
          maxZoom: 20,
        }),
        gSatelliteMap:L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
          attribution: '&copy; <a href="http://maps.google.com">GoogleMap</a> Contributors',
          maxZoom: 20,
          subdomains:['mt0','mt1','mt2','mt3']
        }),
        googleHybrid:L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
            maxZoom: 20,
            subdomains:['mt0','mt1','mt2','mt3']
        }),
        // googleTerrain:L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
        //     maxZoom: 20,
        //     subdomains:['mt0','mt1','mt2','mt3']
        // }),
        typePolaRuang:[
          "Danau/Situ",
          "Kaw. Rawan Bencana Banjir",
          "Kaw. Cagar Alam dan Cagar Alam Laut",
          "Perlindungan Geologi (Karst)",
          "Hutan Mangrove",
          "Kawasan Sempadan Situ",
          "Kaw. Resapan Air",
          "Kaw. Hutan Produksi Terbatas",
          "Kawasan Hutan Rakyat",
          "Kawasan Industri",
          "Kawasan Pariwisata",
          "Kawasan Perkebunan",
          "Kawasan Permukiman Perdesaan",
          "Kawasan Pertanian Lahan Basah",
          "Ruang Terbuka Hijau",
          "Sungai",
          'Kaw. Hutan Produksi Tetap',
          'Kaw. Rawan Bencana Gunung Api I',
          'Kaw. Rawan Bencana Gunung Api II',
          'Kaw. Rawan Bencana Gunung Api III',
          'Kaw. Rawan Gerakan Tanah Menengah',
          'Kaw. Rawan Gerakan Tanah Tinggi',
          'Kaw. Taman Buru',
          'Kaw. Taman Wisata Alam dan Taman Wisata Laut',
          'Kawasan Hutan Lindung',
          'Kawasan Permukiman Perkotaan',
          'Kawasan Pertanian Lahan Kering',
          'Sempadan Pantai',
          'Sempadan Sungai'
        ],
        totalNotif:0
      };
    },
    setup () {
      const toast = useToast();
      return {toast}
    },
    created(){
      this.$store.dispatch("setTitle", this.$props.title)
      this.loadDefault()
      if(this.$store.state.setToken != ""){
        this.loadDistricts()
        this.loadStatusPermohonan()
        this.loadTotalNotif()
      }
    },
    computed: {
      ...mapState(["setProfile","setCompany"]),
    },
    methods: {
      directWA(){
        if(this.setCompany['company_wa'].charAt(0) == 6){
          var wanumber = this.setCompany['company_wa']
        }else{
          var wanumber = 62 + this.setCompany['company_wa'].slice(1)
        }
        var url = "https://wa.me/"+wanumber;
        window.open(url, "_blank");
      },
      async loadDefault() {
        this.$isLoading(true)
        let action = baseurl + "/api/map";
        let obj = new Object();
        await axios
          .post(action, obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            let self=this;

            var map = new L.Map('defmap', {
            	layers: [this.gStreet],
            	center: this.center,
            	zoom: 10
            });

            var baseLayers = {
                "Google Street": this.gStreet,
                "Google Satellite": this.gSatelliteMap,
                "Google Hybrid": this.googleHybrid,
                //"Google Terrain": this.googleTerrain,
                "Hitam Putih":this.grayscaleMap,
                "Rupa Bumi Indonesia":this.rbiMap,
            };
            map.setView(this.center,10);
            L.control.layers(baseLayers).addTo(map);

            var myStyle = {
                "color": "#ff7800",
                "fillColor": "#ff7800",
                "weight": 1,
                "opacity": 1,
                "fillOpacity": 0.4
            };
            L.geoJSON(response.data, {
              zIndexOffset: 1,
              style: function (feature) {
      					return myStyle;
      				},
              onEachFeature: function (feature, layer) {
      					layer.bindTooltip('Pilih Kec : '+feature.properties.nama_kecamatan);
                layer.on('click', function () {
                  if(self.$store.state.setToken != ""){
                    self.showDistrictsModal(feature.properties.nama_kecamatan)
                  }else{
                    self.showMapModal(feature.properties.nama_kecamatan)
                  }
                });
      				}
            }).addTo(map);
            this.$isLoading(false)
          })
          .catch((error) => {
            this.$isLoading(false)
          });
      },
      async loadDistricts() {
        this.$isLoading(true);
        await axios
          .post(baseurl + "/api/permohonan/listdistrict", {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.getDataKecamatan = response.data;
            if (this.nameKec != "") {
              $("#districtsInput").selectpicker("refresh");
              setTimeout(() => {
                $("#districtsInput").val(this.nameKec).selectpicker("refresh");
              }, 50);
            } else {
              setTimeout(() => {
                $("#districtsInput").val("").selectpicker("refresh");
              }, 50);
            }
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatch", { self: this });
          });
      },
      async loadStatusPermohonan() {
        this.$isLoading(true);
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
        await axios
          .post(baseurl + "/api/permohonan/liststatus", {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.getDataStatusPermohonan = response.data;
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatch", { self: this });
          });
      },
      async loadTotalNotif() {
        this.$isLoading(true)
        let action = baseurl + "/api/notif/totalunread";
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
        await axios
          .post(action, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.totalNotif = response.data
            this.$isLoading(false)
          })
          .catch((error) => {
            this.$store.dispatch("removeDispatch", { self: this });
            this.$isLoading(false)
          });
      },
      showLoginModal() {
        this.$nextTick(() => {
          this.$refs.refModalLogin.showModal();
        });
      },
      showForgotModal() {
        $("#loginModal").modal('hide')
        this.$nextTick(() => {
          this.$refs.refModalForgot.showModal();
        });
      },
      showRegisterModal() {
        this.$nextTick(() => {
          this.$refs.refModalRegister.showModal();
        });
      },
      showOTPModal(email) {
        this.$nextTick(() => {
          this.$refs.refModalOTP.showModal(email);
        });
      },
      showResetModal(email) {
        this.$nextTick(() => {
          this.$refs.refModalReset.showModal(email);
        });
      },
      showProfileModal() {
        this.$nextTick(() => {
          this.$refs.refModalProfile.showModal(this.$store.state.setProfile);
        });
      },
      showPasswordModal() {
        this.$nextTick(() => {
          this.$refs.refModalPassword.showModal(this.$store.state.setProfile);
        });
      },
      showNotifModal() {
        this.$nextTick(() => {
          this.$refs.refModalNotif.showModal();
        });
      },
      showDistrictsModal(data) {
        this.$nextTick(() => {
          this.$refs.refModalDistricts.showModal(data);
        });
      },
      showMapModal(kecamatan) {
        this.$nextTick(() => {
          this.$refs.refModalMap.showModal(kecamatan);
        });
      },
      showPermohonanModal(data) {
        if(this.setProfile['status'] == 'New'){
          this.toast('Akun anda sedang dalam tahap validasi data, pastikan telah melengkapi Data KTP.', {
              type: 'warning',
              timeout: 5000
          });
          return false;
        }
        else if(this.setProfile['status'] == 'Blokir'){
          this.toast('Akun anda sedang ditangguhkan, silahkan hubungi Contact Center.', {
              type: 'warning',
              timeout: 5000
          });
          return false;
        }
        else if(this.setProfile['status'] == 'Reject'){
          this.toast('Anda tidak dapat mengakses fitur ini, silahkan hubungi Contact Center.', {
              type: 'warning',
              timeout: 5000
          });
          return false;
        }
        this.$nextTick(() => {
          this.$refs.refModalPermohonan.showModal(data);
        });
      },
      showDetailPermohonanModal(data) {
        this.$nextTick(() => {
          setTimeout(() => {
            this.$refs.refModalDetailPermohonan.showModal(data);
          }, 50);
        });
      },
      closeScreen(){
        this.$store.dispatch("setHomeScreen", false)
        this.$store.dispatch("setSideBar", true)
        this.$store.dispatch("setHeadSection", true)
        this.$store.dispatch("setCloseScreen", false)
        $('.closehead').removeClass('d-none')
      },
      logOut(){
        this.$isLoading(true)
        let action = baseurl + "/api/logout";
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
        axios
          .post(action, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            let resp = response.data;
            if (resp.status == "success") {
              this.$store.dispatch("removeDispatch", { self: this });
              $('.closehead').addClass('d-none')
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
            this.$store.dispatch("removeDispatch", { self: this });
          });
      }
    },
  };
</script>
