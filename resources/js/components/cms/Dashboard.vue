<template>
  <div class="row">
    <div class="col-lg-8 mb-lg-0 mb-4">
      <div class="card z-index-2 h-100">
        <div class="card-header d-flex align-items-center justify-content-between pb-0">
          <div class="card-title mb-0">
            <h6 class="text-capitalize">Informasi Sebaran Lokasi Permohonan</h6>
            <span class="text-muted"><small class="font-weight-bold">Total {{ getDataStatistikPermohonan['totalpermohonan'] }} Lokasi</small> , <small>Periode : {{ $filters.formatDateOnly(startdateDashbaord) }} s/d {{ $filters.formatDateOnly(enddateDashbaord) }}</small></span>
          </div>
          <div class="btn-group">
            <select id="kecamatanDashbaordColumn" data-live-search="true" data-size="8" class="form-control" title="Kecamatan" @change="this.boundMap = true;loadDesa();loadMap()">
              <option v-for="value in getDataKecamatan" :key="value['id']" :value="value['nama_kecamatan']">{{ value['nama_kecamatan'] }}</option>
            </select>
            <select id="desaDashbaordColumn" data-live-search="true" data-size="8" class="form-control ms-2" title="Desa" @change="this.boundMap = true;loadMap()">
              <option v-for="value in getDesa" :key="value['id']" :value="value['DESA']">{{ value['DESA'] }}</option>
            </select>
          </div>
        </div>
        <div class="card-body p-3">
          <div style="height: 100vh;" id="dashboardMap"></div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card mb-3">
        <div class="card-header pb-0 p-3">
          <h6 class="mb-0">Filter</h6>
        </div>
        <div class="card-body p-3">
          <div class="row">
            <div class="col-md-6">
              <button type="button" class="btn btn-block bg-gradient-info w-100" @click="showFilterModal()">Filter Tanggal</button>
            </div>
            <div class="col-md-6">
              <router-link
                :to='`/admin`'
                @click.native="$router.go()"
                class="btn btn-block bg-gradient-success w-100">
                Refresh Halaman
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3">
        <div class="card-header pb-0 p-3">
          <h6 class="mb-0">Statistik Permohonan</h6>
        </div>
        <div class="card-body p-3">
          <ul class="list-group">
            <li v-for="value in getDataStatistikPermohonan['statistikpermohonan']" :key="value['id']" class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
              <div class="d-flex align-items-center">
                <div class="icon icon-shape icon-sm me-3 shadow text-center" :class="value['status_color']">
                  <i class="bx bx-street-view text-white opacity-10" style="font-size: 1rem;"></i>
                </div>
                <div class="d-flex flex-column">
                  <h6 class="mb-1 text-dark text-sm">{{ value['status_title'] }}</h6>
                  <span class="text-xs"><span class="font-weight-bold">{{ value['total_permohonan'] }} Pengajuan</span></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-header pb-0 p-3">
          <h6 class="mb-0">Permohonan Terbaru</h6>
        </div>
        <div class="card-body p-3">
          <div class="table-responsive">
            <table class="table align-items-center">
              <tbody>
                <tr v-for="value in getDataStatistikPermohonan['latestpermohonan']" :key="value['id']">
                  <td class="align-middle text-sm">
                    <div class="col">
                      <p class="text-xs font-weight-bold mb-0">Kode Permohonan:</p>
                      <h6 class="text-xs mb-0">{{ value['invoice'] }}</h6>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p class="text-xs font-weight-bold mb-0">Nama Pemohon:</p>
                      <h6 class="text-xs mb-0">{{ value['name'] }}</h6>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p class="text-xs font-weight-bold mb-0">Tanggal Permohonan:</p>
                      <h6 class="text-xs mb-0">{{ $filters.formatDate(value['created_at']) }}</h6>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header pb-0 p-3">
          <h6 class="mb-0">Pemohon Terbaru</h6>
        </div>
        <div class="card-body p-3">
          <div class="table-responsive">
            <table class="table align-items-center">
              <tbody>
                <tr v-for="value in getDataStatistikPermohonan['latestpemohon']" :key="value['id']">
                  <td class="align-middle text-sm">
                    <div class="col">
                      <p class="text-xs font-weight-bold mb-0">Nama:</p>
                      <h6 class="text-xs mb-0">{{ value['name'] }}</h6>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p class="text-xs font-weight-bold mb-0">Tanggal Daftar:</p>
                      <h6 class="text-xs mb-0">{{ $filters.formatDate(value['created_at']) }}</h6>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p class="text-xs font-weight-bold mb-0">Status:</p>
                      <span v-if="value['status'] == 'New' && value['notes'] != ''" class="badge badge-pill badge-md w-100 bg-gradient-dark" style="font-size:.6rem">Update Profil</span>
                      <span v-if="value['status'] == 'New' && value['notes'] == ''" class="badge badge-pill badge-md w-100 bg-gradient-info" style="font-size:.6rem">Pendaftaran Baru</span>
                      <span v-if="value['status'] == 'Approve'" class="badge badge-pill badge-md w-100 bg-gradient-success" style="font-size:.6rem">Disetujui</span>
                      <span v-if="value['status'] == 'Blokir'" class="badge badge-pill badge-md w-100 bg-gradient-warning" style="font-size:.6rem">Diblokir</span>
                      <span v-if="value['status'] == 'Reject'" class="badge badge-pill badge-md w-100 bg-gradient-danger" style="font-size:.6rem">Direject</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
    <!-- Modal Filter Tanggal -->
    <modalFilter ref="ferModalFilterTanggalDashboard"></modalFilter>
    <!-- End -->
  </div>
</template>
<script>
  import modalFilter from "./FilterTanggalDashbaord";
  export default {
    name: "DashboardPage",
    props: ["title"],
    components: {
      modalFilter
    },
    data() {
      return {
        startdateDashbaord: "",
        enddateDashbaord: "",
        baseurl: baseurl,
        imagepath: imagepath,
        getDataKecamatan: {},
        getDesa:{},
        getDataStatistikPermohonan: {},
        map: null,
        zoom: 10,
        center: [-7.422231311992428, 107.78223470459028],
        osm:L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attribution: '© OpenStreetMap'
        }),
        gStreet:L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains:['mt0','mt1','mt2','mt3']
        }),
        rbiMap:L.tileLayer('https://portal.ina-sdi.or.id/arcgis/rest/services/RBI/Basemap/MapServer/tile/{z}/{y}/{x}', {
          attribution: '&copy; https://portal.ina-sdi.or.id/arcgis/rest/services/RBI/Basemap/MapServer/tile/{z}/{y}/{x} Contributors',
          maxZoom: 20,
          subdomains:['mt0','mt1','mt2','mt3']
        }),
        grayscaleMap:L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
          maxZoom: 20,
        }),
        gSatelliteMap:L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
          attribution: '&copy; <a href="https://maps.google.com">GoogleMap</a> Contributors',
          maxZoom: 20,
          subdomains:['mt0','mt1','mt2','mt3']
        }),
        googleHybrid:L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
            maxZoom: 20,
            subdomains:['mt0','mt1','mt2','mt3']
        }),
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
        boundMap:false
      };
    },
    created() {
      this.$store.dispatch("setTitleCMS", this.$props.title);
      this.map = null
      this.boundMap = false
      this.defDate()
      this.loadDistricts()
      this.loadMap()
      this.loadStatistik()
    },
    mounted() {
      let self = this;
      $("#kecamatanDashbaordColumn").addClass("selectpicker")
      $("#desaDashbaordColumn").addClass("selectpicker")
      setTimeout(() => {
        $("#kecamatanDashbaordColumn").selectpicker("refresh")
        $("#kecamatanDashbaordColumn").val("").selectpicker("refresh")
        $("#desaDashbaordColumn").selectpicker("refresh")
        $("#desaDashbaordColumn").val("").selectpicker("refresh")
      }, 50);
      $(document).ready(function () {
        $(function () {
          $(".selectpicker").selectpicker();
          $("#startdateDashbaord")
            .datepicker({
              clearBtn: true,
              useCurrent: true,
              autoclose: true,
              endDate: "0d",
              format: "yyyy-mm-dd",
            })
            .on("changeDate", function (e) {
              self.startdateDashbaord = $("#startdateDashbaord").val();
              $("#enddateDashbaord").datepicker("setStartDate", self.startdateDashbaord);
            });

          $("#enddateDashbaord")
            .datepicker({
              clearBtn: true,
              useCurrent: true,
              autoclose: true,
              startDate: self.startdateDashbaord,
              endDate: "0d",
              format: "yyyy-mm-dd",
            })
            .on("changeDate", function (e) {
              self.enddateDashbaord = $("#enddateDashbaord").val();
            });
        });

      });
    },
    methods: {
      defDate() {
        this.startdateDashbaord = moment(new Date()).startOf("month").format("YYYY-MM-DD");
        this.enddateDashbaord = moment(new Date()).format("YYYY-MM-DD");
      },
      async loadDistricts() {
        this.$isLoading(true);
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        await axios
          .post(baseurl + "/api/permohonan/listdistrict", {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.getDataKecamatan = response.data;
            setTimeout(() => {
              $("#kecamatanDashbaordColumn").selectpicker("refresh");
            }, 50);
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatchCMS", { self: this });
          });
      },
      loadDesa() {
        this.$isLoading(true);
        $("#desaDashbaordColumn").val('')
        this.getDesa = {}
        var obj = new Object();
        obj.kecamatan = $("#kecamatanDashbaordColumn").val()
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        axios
          .post(baseurl + "/api/permohonan/listdesa",obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.getDesa = response.data;
            setTimeout(() => {
              $("#desaDashbaordColumn").selectpicker("refresh");
            }, 50);
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatchCMS", { self: this });
          });
      },
      async loadStatistik() {
        this.$isLoading(true);
        let action = baseurl + "/api/admin/dashboard";
        let obj = this.getObj();
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        await axios
          .post(action,obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.getDataStatistikPermohonan = response.data;
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatchCMS", { self: this });
          });
      },
      async loadMap(param = '') {
        this.$isLoading(true);
        let action = baseurl + "/api/map";
        let obj = new Object()
        if(param == 'empty'){
          $("#kecamatanDashbaordColumn").val("").selectpicker("refresh")
          $("#desaDashbaordColumn").val("").selectpicker("refresh")
        }
        obj.kecamatan = $("#kecamatanDashbaordColumn").val()
        obj.desa = $("#desaDashbaordColumn").val()
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        await axios
          .post(action, obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            let self = this;
            if (this.map) {
              this.map.remove()
            }
            this.map = new L.Map("dashboardMap", {
              layers: [this.googleHybrid],
              center: this.center,
            });
            var baseLayers = {
              "Google Street": this.gStreet,
              "Google Satellite": this.gSatelliteMap,
              "Google Hybrid": this.googleHybrid,
              //"Google Terrain": this.googleTerrain,
              "Hitam Putih":this.grayscaleMap,
              "Rupa Bumi Indonesia":this.rbiMap,
            };
            this.map.setView(this.center, 10);
            L.control.layers(baseLayers).addTo(this.map);

            var myStyle = {
              "color": "#ff7800",
              "fillColor": "#ff7800",
              "weight": 1,
              "opacity": 1,
              "fillOpacity": 0.4
            };
            var geojsonFeature = response.data;
            var jsonData = L.geoJSON(geojsonFeature, {
              style: function (feature) {
                return myStyle;
              },
              onEachFeature: function (feature, layer) {
                if($("#kecamatanDashbaordColumn").val() != '' || $("#desaDashbaordColumn").val() == ''){
                  layer.bindTooltip(feature.properties.nama_kecamatan);
                }
                if($("#kecamatanDashbaordColumn").val() != '' || $("#desaDashbaordColumn").val() != ''){
                  layer.bindTooltip(feature.properties.nama_desa);
                }
                // layer.on('click', function () {
                //   self.showDistrictsModal(feature.properties.nama_kecamatan)
                // });
              },
            }).addTo(this.map);
            this.loadPolygon()

            if(this.boundMap == true){
              setTimeout(() => {
                this.map.fitBounds(jsonData.getBounds());
              }, 100);
            }
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$store.dispatch("removeDispatchCMS", { self: this });
            this.$isLoading(false);
          });
      },
      loadPolygon() {
        this.$isLoading(true);
        let action = baseurl + "/api/permohonan/polygon";
        let obj = this.getObj();
        obj.kecamatan = $("#kecamatanDashbaordColumn").val()
        obj.desa = $("#desaDashbaordColumn").val()
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        axios
          .post(action,obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            let self = this;
            L.geoJSON(response.data, {
              style: function (feature) {
                return { color: feature.properties.status_hex, fillColor: feature.properties.status_hex, weight: 1, opacity: 1, fillOpacity: 0.8 };
              },
              onEachFeature: function (feature, layer) {
                if($("#kecamatanDashbaordColumn").val() != '' || $("#desaDashbaordColumn").val() != ''){
                  layer.bindTooltip("Invoice : " + feature.properties.invoice,{permanent: true});
                }
              },
            }).addTo(this.map);
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatchCMS", { self: this });
          });
      },
      getObj() {
        let obj = new Object();
        obj.startdate = this.startdateDashbaord;
        obj.enddate = this.enddateDashbaord;
        // End
        return obj;
      },
      showFilterModal() {
        this.$nextTick(() => {
          this.$refs.ferModalFilterTanggalDashboard.showModal();
        });
      },
    },
  };
</script>
