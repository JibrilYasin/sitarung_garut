<template>
  <div class="modal fade" id="newPermohonanModal" data-bs-backdrop="static">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Permohonan Baru</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" @click="map.remove()"></button>
        </div>
        <form id="newPermohonanForm" @submit.prevent="submitFormPermohonan" action="javascript:void(0)" method="POST">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-8">
                <div style="width: 100%; height: 100%;" id="distmap"></div>
              </div>
              <div class="col-md-4">
                <div v-if="showCheck" class="card mb-4">
                  <div class="card-body">
                    <div class="mt-2">
                      <div class="float-start me-3">
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" id="checkPolaRuang" ref="checkPolaRuang" style="vertical-align: middle;margin-top:-1px;height:1rem" @change="checkPolaRuang()">
                          <label class="form-check-label" for="checkPolaRuang">Tampilkan Pola Ruang</label>
                        </div>
                      </div>
                      <div class="float-start">
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" id="checkLSD" ref="checkLSD" style="vertical-align: middle;margin-top:-1px;height:1rem" @change="checkLSD()">
                          <label class="form-check-label" for="checkLSD">Tampilkan LSD</label>
                        </div>
                      </div>
                    </div>
                    <div style="clear:both"></div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-body">
                    <div class="row mb-3">
                      <div class="col-md-6">
                        <label class="form-label"><sup class="text-danger">(*)</sup> Kecamatan</label>
                        <select id="districtsInput" class="form-control" data-live-search="true" data-size="8" v-on:change="loadDesa();loadMapSelected()">
                          <option value="">Pilih Kecamatan</option>
                          <option v-for="value in getDataKecamatanNew" :key="value['id']" :value="value['nama_kecamatan']">{{ value['nama_kecamatan'] }}</option>
                        </select>
                        <div class="invalid-feedback d-block" v-if="formErrors['districtsInput']">
                          <i class="bx bx-x"></i>
                          {{ formErrors['districtsInput'][0] }}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label"><sup class="text-danger">(*)</sup> Desa</label>
                        <select id="desaInput" class="form-control" data-live-search="true" data-size="8" v-on:change="showCheck = true;loadMapSelected()">
                          <option value="">Pilih Desa</option>
                          <option v-for="value in getDesa" :key="value['id']" :value="value['DESA']">{{ value['DESA'] }}</option>
                        </select>
                        <div class="invalid-feedback d-block" v-if="formErrors['desaInput']">
                          <i class="bx bx-x"></i>
                          {{ formErrors['desaInput'][0] }}
                        </div>
                      </div>
                    </div>
                    <div class="mb-3 d-none">
                      <label class="form-label"><sup class="text-danger">(*)</sup> Luas Kecamatan (ha)</label>
                      <input type="text" class="form-control" disabled :value="luas" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label"><sup class="text-danger">(*)</sup> Alamat Lahan</label>
                      <textarea id="alamatLahanInput" class="form-control" :class="formErrors['alamatLahanInput']?'is-invalid':''"></textarea>
                      <div class="invalid-feedback" v-if="formErrors['alamatLahanInput']">
                        <i class="bx bx-x"></i>
                        {{ formErrors['alamatLahanInput'][0] }}
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-md-6">
                        <label class="form-label"><sup class="text-danger">(*)</sup> Status Pemohon</label>
                        <select id="statusPemohonInput" class="form-select" :class="formErrors['statusPemohonInput']?'is-invalid':''">
                          <option value="">Pilih</option>
                          <option value="Perorangan">Perorangan</option>
                          <option value="Perusahaan">Perusahaan</option>
                        </select>
                        <div class="invalid-feedback" v-if="formErrors['statusPemohonInput']">
                          <i class="bx bx-x"></i>
                          {{ formErrors['statusPemohonInput'][0] }}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label"><sup class="text-danger">(*)</sup> Luas Lahan Rencana (m<sup>2</sup>)</label>
                        <input id="luasLahanRencanaInput" type="text" class="form-control" :class="formErrors['luasLahanRencanaInput']?'is-invalid':''" />
                        <div class="invalid-feedback" v-if="formErrors['luasLahanRencanaInput']">
                          <i class="bx bx-x"></i>
                          {{ formErrors['luasLahanRencanaInput'][0] }}
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label"><sup class="text-danger">(*)</sup> Status kepemilikan</label>
                      <select id="statusKepemilikanLahanInput" class="form-select" :class="formErrors['statusKepemilikanLahanInput']?'is-invalid':''">
                        <option value="">Pilih</option>
                        <option value="Hak Guna Bangunan">Hak Guna Bangunan</option>
                        <option value="Hak Guna Usaha">Hak Guna Usaha</option>
                        <option value="Hak Milik">Hak Milik</option>
                        <option value="Hak Pakai">Hak Pakai</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                      <div class="invalid-feedback" v-if="formErrors['statusKepemilikanLahanInput']">
                        <i class="bx bx-x"></i>
                        {{ formErrors['statusKepemilikanLahanInput'][0] }}
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label"><sup class="text-danger">(*)</sup> Nama Pemilik Lahan</label>
                      <input id="namaPemilikLahanInput" type="text" class="form-control" :class="formErrors['namaPemilikLahanInput']?'is-invalid':''" />
                      <div class="invalid-feedback" v-if="formErrors['namaPemilikLahanInput']">
                        <i class="bx bx-x"></i>
                        {{ formErrors['namaPemilikLahanInput'][0] }}
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label"><sup class="text-danger">(*)</sup> Rencana Kegiatan</label>
                      <input id="peruntukanInput" type="text" class="form-control" :class="formErrors['peruntukanInput']?'is-invalid':''" />
                      <div class="invalid-feedback" v-if="formErrors['peruntukanInput']">
                        <i class="bx bx-x"></i>
                        {{ formErrors['peruntukanInput'][0] }}
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Foto Lokasi</label>
                      <input id="lokasiInput" class="form-control" type="file" :class="formErrors['lokasiInput']?'is-invalid':''" />
                      <div class="invalid-feedback" v-if="formErrors['lokasiInput']">
                        <i class="bx bx-x"></i>
                        {{ formErrors['lokasiInput'][0] }}
                      </div>
                    </div>
                    <div class="mb-0">
                      <label class="form-label">Foto Sertifikat</label>
                      <input id="sertifikatInput" class="form-control" type="file" :class="formErrors['sertifikatInput']?'is-invalid':''" />
                      <div class="invalid-feedback" v-if="formErrors['sertifikatInput']">
                        <i class="bx bx-x"></i>
                        {{ formErrors['sertifikatInput'][0] }}
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="getLatlng.length > 0" class="card" style="position:absolute;z-index:9999;left:25px;bottom:25px;">
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item" v-for="value in getLatlng" :key="value">{{ value }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn bg-gradient-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { useToast,TYPE } from "vue-toastification"
  export default {
    name: "DistrictsModal",
    data() {
      return {
        nameKec: "",
        getDataKecamatanNew: {},
        getDesa: {},
        getCurrentData: {},
        map: null,
        editableLayers: null,
        drawCor: null,
        luas: 0,
        formErrors: {},
        getLatlng:{},
        showCheck:false,
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
      };
    },
    setup () {
      const toast = useToast();
      return {toast}
    },
    methods: {
      showModal(namakecamatan) {
        this.formErrors = {}
        this.getLatlng = {}
        $("#newPermohonanForm")[0].reset()
        if (namakecamatan != "") {
          this.nameKec = namakecamatan
        } else {
          this.nameKec = ""
        }
        this.map = null
        this.drawCor = null
        this.luas = 0
        this.showCheck = false
        $("#newPermohonanModal").modal("show");
        $("#districtsInput").addClass("selectpicker")
        $("#desaInput").addClass("selectpicker")
        setTimeout(() => {
          $("#districtsInput").selectpicker("refresh")
          $("#districtsInput").val("").selectpicker("refresh")
          $("#desaInput").selectpicker("refresh")
          $("#desaInput").val("").selectpicker("refresh")
        }, 50);
        $( "#checkPolaRuang" ).prop( "checked", false )
        $( "#checkLSD" ).prop( "checked", false )
        this.loadDistricts()
      },
      loadDistricts() {
        this.$isLoading(true);
        axios
          .post(baseurl + "/api/permohonan/listdistrict", {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.getDataKecamatanNew = response.data;

            if (this.nameKec != "") {
              $("#districtsInput").selectpicker("refresh");
              setTimeout(() => {
                $("#districtsInput").val(this.nameKec).selectpicker("refresh");
              }, 10);
            } else {
              setTimeout(() => {
                $("#districtsInput").val("").selectpicker("refresh");
              }, 10);
            }
            setTimeout(() => {
              this.loadDesa();
            }, 1000);
            this.loadMapSelected();
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatch", { self: this });
          });
      },
      loadDesa() {
        this.$isLoading(true);
        $("#desaInput").val('')
        this.getDesa = {}
        var obj = new Object();
        obj.kecamatan = $("#districtsInput").val()
        axios
          .post(baseurl + "/api/permohonan/listdesa",obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.getDesa = response.data;
            setTimeout(() => {
              $("#desaInput").selectpicker("refresh");
            }, 50);
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatch", { self: this });
          });
      },
      loadMapSelected() {
        this.$isLoading(true);
        this.luas = 0;
        this.getLatlng = {}
        if ($("#districtsInput").val() != "") {
          this.nameKec = $("#districtsInput").val();
        }
        $( "#checkPolaRuang" ).prop( "checked", false )
        $( "#checkLSD" ).prop( "checked", false )
        let action = baseurl + "/api/map";
        let obj = new Object();
        obj.kecamatan = this.nameKec;
        obj.desa = $("#desaInput").val();
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
        axios
          .post(action, obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            let self = this;

            if (this.map) {
              this.map.remove();
            }
            this.map = new L.Map("distmap", {
              layers: [this.googleHybrid],
            });

            var baseLayers = {
                "Google Street": this.gStreet,
                "Google Satellite": this.gSatelliteMap,
                "Google Hybrid": this.googleHybrid,
                "Hitam Putih":this.grayscaleMap,
                "Rupa Bumi Indonesia":this.rbiMap,
            };
            this.map.setView(response.data['features'][0]['properties']['center_point'], 11);
            L.control.layers(baseLayers).addTo(this.map);

            if (this.nameKec == "") {
              this.$isLoading(false);
              return false;
            }

            if($("#desaInput").val() != ''){
              // Draw
              this.editableLayers = new L.FeatureGroup();
              this.map.addLayer(this.editableLayers);

              var drawControl = new L.Control.Draw({
                draw: {
                  polyline : false,
                  polygon: {
                    allowIntersection: false, // Restricts shapes to simple polygons
                    drawError: {
                      color: "#e1e100", // Color the shape will turn when intersects
                      message: "<strong>Polygon draw does not allow intersections!<strong> (allowIntersection: false)", // Message that will show when intersect
                    },
                    shapeOptions: {
                      color: "#bada55",
                    },
                    marker: false
                  },
                  circle: false,
                  rectangle: false,
                },
                edit: {
                  edit: false,
                  featureGroup: self.editableLayers,
                },
              });
              var drawControlHide = new L.Control.Draw({
                  draw: false,
                  edit: {
                    edit: false,
                    featureGroup: self.editableLayers,
                  },
              });

              this.map.addControl(drawControl);
              $(".leaflet-draw-draw-marker").remove();
              $(".leaflet-draw-draw-circlemarker").remove();

              this.map.on(L.Draw.Event.CREATED, function (e) {
                var type = e.layerType;
                var layer = e.layer;
                self.editableLayers.addLayer(layer);
                var finalGeo = self.editableLayers.toGeoJSON();
                var getCoordinates = finalGeo['features'][0]['geometry']['coordinates'][0];
                let finalCoordinates = []
                for(let i = 0;i < getCoordinates.length ;i++){
                  finalCoordinates.push("lat : "+getCoordinates[i][1]+", lng : "+getCoordinates[i][0])
                }
                self.getLatlng = finalCoordinates
                self.map.removeControl(drawControl);
                self.map.addControl(drawControlHide);
              });
              this.map.on(L.Draw.Event.DELETED, function (e) {
                self.getLatlng = {}
                if (self.editableLayers.getLayers().length === 0){
                  self.loadMapSelected()
                }
              });
              // End Draw
            }

            var myStyle = {
              color: "#ff7800",
              fillColor: "#ff7800",
              weight: 2,
              opacity: 1,
              fillOpacity: 0,
            };
            // End

            var jsonData = L.geoJSON(response.data, {
              zIndexOffset: 1,
              style: function (feature) {
                return myStyle;
              },
              onEachFeature: function (feature, layer) {
                self.luas = feature.properties.luas;
              },
            }).addTo(this.map);
            if(obj.desa != ''){
              setTimeout(() => {
                this.map.fitBounds(jsonData.getBounds());
              }, 100);
            }
            // if($("#desaInput").val() != ''){
            //   setTimeout(() => {
            //     this.loadPolaRuang(this.nameKec);
            //   }, 100);
            // }
            this.$isLoading(false);
          })
          .catch((error) => {
            console.log(error);
            this.$isLoading(false);
            this.$store.dispatch("removeDispatch", { self: this });
          });
      },
      checkPolaRuang(){
        if (this.$refs.checkPolaRuang.checked) {
          this.loadPolaRuang();
        } else {
          this.loadMapSelected();
        }
      },
      loadPolaRuang() {
        this.$isLoading(true);
        let action = baseurl + "/api/polaruang";
        let obj = new Object();
        obj.kecamatan = this.nameKec;
        obj.desa = $("#desaInput").val();
        obj.type = this.$parent.typePolaRuang;
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
        axios
          .post(action, obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            let self = this;
            var jsonData = L.geoJSON(response.data, {
              style: function (feature) {
                switch (feature.properties.keterangan) {
                  case "Danau/Situ":
                    return { color: "#0001EE", fillColor: "#0001EE", opacity: 0, fillOpacity: 0.9 };
                  case "Kaw. Rawan Bencana Banjir":
                    return { color: "#2EA4DB", fillColor: "#2EA4DB", opacity: 0, fillOpacity: 0.9 };
                  case "Kaw. Cagar Alam dan Cagar Alam Laut":
                    return { color: "#5A5AC3", fillColor: "#5A5AC3", opacity: 0, fillOpacity: 0.9 };
                  case "Perlindungan Geologi (Karst)":
                    return { color: "#968796", fillColor: "#968796", opacity: 0, fillOpacity: 0.9 };
                  case "Hutan Mangrove":
                    return { color: "#2D966E", fillColor: "#2D966E", opacity: 0, fillOpacity: 0.9 };
                  case "Kawasan Sempadan Situ":
                    return { color: "#05D7D7", fillColor: "#05D7D7", opacity: 0, fillOpacity: 0.9 };
                  case "Kaw. Resapan Air":
                    return { color: "#194128", fillColor: "#194128", opacity: 0, fillOpacity: 0.9 };
                  case "Kaw. Hutan Produksi Terbatas":
                    return { color: "#4B9B37", fillColor: "#4B9B37", opacity: 0, fillOpacity: 0.9 };
                  case "Kawasan Hutan Rakyat":
                    return { color: "#9BC89B", fillColor: "#9BC89B", opacity: 0, fillOpacity: 0.9 };
                  case "Kawasan Industri":
                    return { color: "#690000", fillColor: "#690000", opacity: 0, fillOpacity: 0.9 };
                  case "Kawasan Pariwisata":
                    return { color: "#FFA5FF", fillColor: "#FFA5FF", opacity: 0, fillOpacity: 0.9 };
                  case "Kawasan Perkebunan":
                    return { color: "#AFAF37", fillColor: "#AFAF37", opacity: 0, fillOpacity: 0.9 };
                  case "Kawasan Permukiman Perdesaan":
                    return { color: "#F59B1E", fillColor: "#F59B1E", opacity: 0, fillOpacity: 0.9 };
                  case "Kawasan Pertanian Lahan Basah":
                    return { color: "#C8F546", fillColor: "#C8F546", opacity: 0, fillOpacity: 0.9 };
                  case "Ruang Terbuka Hijau":
                    return { color: "#D2BEFF", fillColor: "#D2BEFF", opacity: 0, fillOpacity: 0.9 };
                  case "Sungai":
                    return { color: "#97DBF2", fillColor: "#97DBF2", opacity: 0, fillOpacity: 0.9 };
                  case "Kaw. Hutan Produksi Tetap":
                    return { color: "#7db437", fillColor: "#7db437", opacity: 0, fillOpacity: 0.9 };
                  case "Kaw. Rawan Bencana Gunung Api I":
                    return { color: "#EC0000", fillColor: "#EC0000", opacity: 0, fillOpacity: 0.9 };
                  case "Kaw. Rawan Bencana Gunung Api II":
                    return { color: "#F69331", fillColor: "#F69331", opacity: 0, fillOpacity: 0.9 };
                  case "Kaw. Rawan Bencana Gunung Api III":
                    return { color: "#EFDD2E", fillColor: "#EFDD2E", opacity: 0, fillOpacity: 0.9 };
                  case "Kaw. Rawan Gerakan Tanah Menengah":
                    return { color: "#fc8d59", fillColor: "#fc8d59", opacity: 0, fillOpacity: 0.9 };
                  case "Kaw. Rawan Gerakan Tanah Tinggi":
                    return { color: "#d7301f", fillColor: "#d7301f", opacity: 0, fillOpacity: 0.9 };
                  case "Kaw. Taman Buru":
                    return { color: "#4696ff", fillColor: "#4696ff", opacity: 0, fillOpacity: 0.9 };
                  case "Kaw. Taman Wisata Alam dan Taman Wisata Laut":
                    return { color: "#e6d2ff", fillColor: "#e6d2ff", opacity: 0, fillOpacity: 0.9 };
                  case "Kawasan Hutan Lindung":
                    return { color: "#325f28", fillColor: "#325f28", opacity: 0, fillOpacity: 0.9 };
                  case "Kawasan Permukiman Perkotaan":
                    return { color: "#f59b1e", fillColor: "#f59b1e", opacity: 0, fillOpacity: 0.9 };
                  case "Kawasan Pertanian Lahan Kering":
                    return { color: "#807c29", fillColor: "#807c29", opacity: 0, fillOpacity: 0.9 };
                  case "Sempadan Pantai":
                    return { color: "#429E09", fillColor: "#429E09", opacity: 0, fillOpacity: 0.9 };
                  case "Sempadan Sungai":
                    return { color: "#41251D", fillColor: "#41251D", opacity: 0, fillOpacity: 0.9 };
                }
              },
              onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.keterangan);
                // layer.bindTooltip(feature.properties.keterangan, {
                //   direction: "center",
                //   className: "labelstyle",
                // });
              },
            }).addTo(this.map);

            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatch", { self: this });
          });
      },
      checkLSD(){
        if (this.$refs.checkLSD.checked) {
          this.loadLSD();
        } else {
          this.loadMapSelected();
        }
      },
      loadLSD() {
        this.$isLoading(true);
        let action = baseurl + "/api/polalsd";
        let obj = new Object();
        obj.kecamatan = this.nameKec;
        obj.desa = $("#desaInput").val();
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
        axios
          .post(action, obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            let self = this;
            console.log(JSON.stringify(response.data));
            var jsonData = L.geoJSON(response.data, {
              style: function (feature) {
                switch (feature.properties.keterangan) {
                  case "Sepakat Dipertahankan":
                    return { color: "#5A5AC3", fillColor: "#5A5AC3", opacity: 1, fillOpacity: 0.9 };
                }
              },
              onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.keterangan);
                // layer.bindTooltip(feature.properties.keterangan, {
                //   direction: "center",
                //   className: "labelstyle",
                // });
              },
            }).addTo(this.map);

            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatch", { self: this });
          });
      },
      submitFormPermohonan(e) {
        if(this.editableLayers == null){
          this.toast('Anda belum menentukan titik lokasi pada peta.', {
              type: 'warning',
              timeout: 5000
          });
          return false;
        }
        this.$swal({
          title: 'Konfrimasi',
          text: "Pastikan anda telah memeriksa kembali semua permohonan.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Lanjutkan',
          cancelButtonText: "Batal",
        }).then((result) => {
          if (result.isConfirmed) {
            // Action Here
            this.$isLoading(true);
            this.formErrors = {};
            var form = e.target || e.srcElement
            let action = baseurl + "/api/permohonan";
            let datas = new FormData();
            datas.append("districtsInput", $("#districtsInput").val());
            datas.append("desaInput", $("#desaInput").val());
            datas.append("statusPemohonInput", $("#statusPemohonInput").val());
            datas.append("alamatLahanInput", $("#alamatLahanInput").val());
            datas.append("luasLahanRencanaInput", $("#luasLahanRencanaInput").val());
            datas.append("statusKepemilikanLahanInput", $("#statusKepemilikanLahanInput").val());
            datas.append("namaPemilikLahanInput", $("#namaPemilikLahanInput").val());
            datas.append("peruntukanInput", $("#peruntukanInput").val());
            datas.append("geojson", JSON.stringify(this.editableLayers.toGeoJSON()));
            if(document.getElementById("lokasiInput").files[0]){
              datas.append("lokasiInput", document.getElementById("lokasiInput").files[0]);
            }
            if(document.getElementById("sertifikatInput").files[0]){
              datas.append("sertifikatInput", document.getElementById("sertifikatInput").files[0]);
            }
            datas.append("coordinatesInput", JSON.stringify(this.getLatlng));
            datas.append("pengaduanVIA", 'Website');
            window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
            axios
              .post(action, datas, {
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
                  this.map.remove()
                  $("#newPermohonanForm")[0].reset()
                  $("#newPermohonanModal").modal("hide")
                  this.$parent.showPermohonanModal()
                }
                this.$isLoading(false);
              })
              .catch((error) => {
                this.$isLoading(false);
                if (error.response.status == 422) {
                  this.formErrors = error.response.data.errors;
                } else {
                  // if (error.response.status == 401) {
                  //   this.$store.dispatch("removeDispatch", { self: this });
                  // }
                  this.$store.dispatch("removeDispatch", { self: this });
                }
              });
            // End

          }
        })

      },
    },
  };
</script>
