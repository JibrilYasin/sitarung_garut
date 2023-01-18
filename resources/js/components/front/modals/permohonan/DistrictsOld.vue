<template>
  <div class="modal fade" id="districtsModal" data-bs-backdrop="static">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Permohonan Baru</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" @click="map.remove()"></button>
        </div>
        <form id="permohonanForm" @submit.prevent="submitFormDistricts" action="javascript:void(0)" method="POST">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-8">
                <div style="width: 100%; height: 100%;" id="distmap"></div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <div class="mb-3">
                      <label class="form-label">Kecamatan</label>
                      <select id="districtsInput" class="form-control form-control-sm" data-live-search="true" data-size="8" v-on:change="loadDesa();loadMapSelected()">
                        <option value="">Pilih Kecamatan</option>
                        <option v-for="value in getDataKecamatanNew" :key="value['id']" :value="value['nama_kecamatan']">{{ value['nama_kecamatan'] }}</option>
                      </select>
                      <div class="invalid-feedback d-block" v-if="formErrors['districtsInput']">
                        <i class="bx bx-x"></i>
                        {{ formErrors['districtsInput'][0] }}
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Desa</label>
                      <select id="desaInput" class="form-select" :class="formErrors['desaInput']?'is-invalid':''" v-on:change="loadMapSelected()">
                        <option value="">Pilih</option>
                        <option v-for="value in getDesa" :key="value['id']" :value="value['DESA']">{{ value['DESA'] }}</option>
                      </select>
                      <div class="invalid-feedback" v-if="formErrors['desaInput']">
                        <i class="bx bx-x"></i>
                        {{ formErrors['desaInput'][0] }}
                      </div>
                    </div>
                    <div class="mb-3 d-none">
                      <label class="form-label">Luas Kecamatan (ha)</label>
                      <input type="text" class="form-control" disabled :value="luas" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Status Pemohon</label>
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
                    <div class="mb-3">
                      <label class="form-label">Alamat Lahan</label>
                      <textarea id="alamatLahanInput" class="form-control" :class="formErrors['alamatLahanInput']?'is-invalid':''"></textarea>
                      <div class="invalid-feedback" v-if="formErrors['alamatLahanInput']">
                        <i class="bx bx-x"></i>
                        {{ formErrors['alamatLahanInput'][0] }}
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Luas Lahan Rencana (m<sup>2</sup>)</label>
                      <input id="luasLahanRencanaInput" type="text" class="form-control" :class="formErrors['luasLahanRencanaInput']?'is-invalid':''" />
                      <div class="invalid-feedback" v-if="formErrors['luasLahanRencanaInput']">
                        <i class="bx bx-x"></i>
                        {{ formErrors['luasLahanRencanaInput'][0] }}
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Status kepemilikan</label>
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
                      <label class="form-label">Nama Pemilik Lahan</label>
                      <input id="namaPemilikLahanInput" type="text" class="form-control" :class="formErrors['namaPemilikLahanInput']?'is-invalid':''" />
                      <div class="invalid-feedback" v-if="formErrors['namaPemilikLahanInput']">
                        <i class="bx bx-x"></i>
                        {{ formErrors['namaPemilikLahanInput'][0] }}
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Rencana Kegiatan</label>
                      <input id="peruntukanInput" type="text" class="form-control" :class="formErrors['peruntukanInput']?'is-invalid':''" />
                      <div class="invalid-feedback" v-if="formErrors['peruntukanInput']">
                        <i class="bx bx-x"></i>
                        {{ formErrors['peruntukanInput'][0] }}
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
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button v-if="submitButton" type="submit" class="btn bg-gradient-primary" @click="submitFormDistricts">Submit</button>
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
        submitButton: true,
      };
    },
    setup () {
      const toast = useToast();
      return {toast}
    },
    methods: {
      showModal(namakecamatan) {
        this.formErrors = {};
        $("#permohonanForm")[0].reset()
        if (namakecamatan != "") {
          this.nameKec = namakecamatan;
        } else {
          this.nameKec = "";
        }
        this.map = null;
        this.drawCor = null;
        this.luas = 0;
        this.submitButton = true;
        this.refreshButton = false;
        $("#districtsModal").modal("show");
        $("#districtsInput").addClass("selectpicker");
        setTimeout(() => {
          $("#districtsInput").selectpicker("refresh");
          $("#districtsInput").val("").selectpicker("refresh");
        }, 50);
        $('button[data-bs-target="#navs-create-permohonan"]').tab("show");
        this.loadDistrictsNew();
      },
      loadDistrictsNew() {
        this.$isLoading(true);
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
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
        this.getDesa = {};
        var obj = new Object();
        obj.kecamatan = $("#districtsInput").val()
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
        axios
          .post(baseurl + "/api/permohonan/listdesa",obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.getDesa = response.data;
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
        if ($("#districtsInput").val() != "") {
          this.nameKec = $("#districtsInput").val();
        }
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
              layers: [this.$parent.googleHybrid],
              zoom: 10,
            }).setView(this.$parent.center, 10);

            if (this.nameKec == "") {
              this.$isLoading(false);
              return false;
            }

            // Draw
            // Initialise the FeatureGroup to store editable layers
            this.editableLayers = new L.FeatureGroup();
            this.map.addLayer(this.editableLayers);

            // Initialise the draw control and pass it the FeatureGroup of editable layers
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
                circle: false, // Turns off this drawing tool
                rectangle: {
                  shapeOptions: {
                    clickable: false
                  }
                },
              },
              edit: {
                featureGroup: self.editableLayers,
              },
            });

            this.map.addControl(drawControl);
            $(".leaflet-draw-draw-marker").remove();
            $(".leaflet-draw-draw-circlemarker").remove();

            this.map.on(L.Draw.Event.CREATED, function (e) {
              var type = e.layerType;
              var layer = e.layer;

              // Do whatever else you need to. (save to db, add to map etc)

              self.editableLayers.addLayer(layer);

              // if (type == "marker" || type == "circle" || type == "circlemarker") {
              //   console.log([layer.getLatLng().lat, layer.getLatLng().lng]);
              // } else {
              //   var objects = layer.getLatLngs()[0];
              //   for (var i = 0; i < objects.length; i++) {
              //     console.log([objects[i].lat, objects[i].lng]);
              //   }
              // }
            });
            // End Draw

            // var baseLayers = {
            //     "OpenStreetMap": this.$parent.osm,
            //     "Rupa Bumi Indonesia":this.$parent.rbiMap,
            //     "Google Satellite": this.$parent.gSatelliteMap,
            //     "Google Hybrid": this.$parent.googleHybrid
            // };
            // L.control.layers(baseLayers).addTo(this.map);


            var myStyle = {
              color: "#F00",
              fillColor: "#F00",
              weight: 1,
              opacity: 1,
              fillOpacity: 0.1,
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
            setTimeout(() => {
              this.map.fitBounds(jsonData.getBounds());
            }, 100);
            // setTimeout(() => {
            //   this.loadPolaRuang(this.nameKec);
            // }, 500);
            this.$isLoading(false);
          })
          .catch((error) => {
            console.log(error);
            this.$isLoading(false);
            this.$store.dispatch("removeDispatch", { self: this });
          });
      },
      loadPolaRuang(namakecamatan) {
        this.$isLoading(true);
        let action = baseurl + "/api/polaruang";
        let obj = new Object();
        obj.kecamatan = namakecamatan;
        obj.type = [
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
        ];
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
                    return { color: "#0001EE", fillColor: "#0001EE", opacity: 0, fillOpacity: 1 };
                  case "Kaw. Rawan Bencana Banjir":
                    return { color: "#F00", fillColor: "#F00", opacity: 0, fillOpacity: 1 };
                  case "Kaw. Cagar Alam dan Cagar Alam Laut":
                    return { color: "#5A5AC3", fillColor: "#5A5AC3", opacity: 0, fillOpacity: 1 };
                  case "Perlindungan Geologi (Karst)":
                    return { color: "#968796", fillColor: "#968796", opacity: 0, fillOpacity: 1 };
                  case "Hutan Mangrove":
                    return { color: "#2D966E", fillColor: "#2D966E", opacity: 0, fillOpacity: 1 };
                  case "Kawasan Sempadan Situ":
                    return { color: "#05D7D7", fillColor: "#05D7D7", opacity: 0, fillOpacity: 1 };
                  case "Kaw. Resapan Air":
                    return { color: "#194128", fillColor: "#194128", opacity: 0, fillOpacity: 1 };
                  case "Kaw. Hutan Produksi Terbatas":
                    return { color: "#4B9B37", fillColor: "#4B9B37", opacity: 0, fillOpacity: 1 };
                  case "Kawasan Hutan Rakyat":
                    return { color: "#9BC89B", fillColor: "#9BC89B", opacity: 0, fillOpacity: 1 };
                  case "Kawasan Industri":
                    return { color: "#690000", fillColor: "#690000", opacity: 0, fillOpacity: 1 };
                  case "Kawasan Pariwisata":
                    return { color: "#FFA5FF", fillColor: "#FFA5FF", opacity: 0, fillOpacity: 1 };
                  case "Kawasan Perkebunan":
                    return { color: "#AFAF37", fillColor: "#AFAF37", opacity: 0, fillOpacity: 1 };
                  case "Kawasan Permukiman Perdesaan":
                    return { color: "#F59B1E", fillColor: "#F59B1E", opacity: 0, fillOpacity: 1 };
                  case "Kawasan Pertanian Lahan Basah":
                    return { color: "#C8F546", fillColor: "#C8F546", opacity: 0, fillOpacity: 1 };
                  case "Ruang Terbuka Hijau":
                    return { color: "#D2BEFF", fillColor: "#D2BEFF", opacity: 0, fillOpacity: 1 };
                  case "Sungai":
                    return { color: "#FF", fillColor: "#97DBF2", opacity: 0, fillOpacity: 1 };
                }
              },
              onEachFeature: function (feature, layer) {
                layer.bindTooltip(feature.properties.keterangan, {
                  direction: "center",
                  className: "labelstyle",
                });
              },
            }).addTo(this.map);

            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatch", { self: this });
          });
      },
      submitFormDistricts(e) {
        this.$swal({
          title: 'Konfrimasi',
          text: "Pastikan anda telah memeriksa kembali semua inputan.",
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
            console.log($("#districtsInput").val());
            datas.append("districtsInput", $("#districtsInput").val());
            datas.append("statusPemohonInput", $("#statusPemohonInput").val());
            datas.append("alamatLahanInput", $("#alamatLahanInput").val());
            datas.append("luasLahanRencanaInput", $("#luasLahanRencanaInput").val());
            datas.append("statusKepemilikanLahanInput", $("#statusKepemilikanLahanInput").val());
            datas.append("namaPemilikLahanInput", $("#namaPemilikLahanInput").val());
            datas.append("peruntukanInput", $("#peruntukanInput").val());
            datas.append("geojson", JSON.stringify(this.editableLayers.toGeoJSON()));
            datas.append("sertifikatInput", document.getElementById("sertifikatInput").files[0]);
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
                  $("#districtsInput").selectpicker("refresh");
                  setTimeout(() => {
                    $("#districtsInput").val(this.nameKec).selectpicker("refresh");
                  }, 50);
                  this.loadMapSelected();
                  $("#permohonanForm")[0].reset()
                  this.loadList();
                  $('button[data-bs-target="#navs-list-permohonan"]').tab("show");
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
      deleteData(id){
        this.$swal({
          title: 'Konfrimasi',
          text: "Anda akan menghapus baris ini.",
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
            let action = baseurl + "/api/permohonan/destroy";
            let obj = new Object();
            obj.id = id;
            window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
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
                    timeout: 3000
                });
                if (resp.status == "success") {
                  this.loadList();
                }
                this.$isLoading(false);
              })
              .catch((error) => {
                this.$isLoading(false);
                this.$store.dispatch("removeDispatch", { self: this });
              });
            // End
          }
        })
      },
      detailData(id){
        this.$isLoading(true);
        let action = baseurl + "/api/permohonan/show/"+id;
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
        axios
          .get(action, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.map.invalidateSize();
            this.$parent.showPermohonanModal([])
            // $('#districtsModal').on('shown.bs.modal', function() {
            //   if (this.map) {
            //     this.map.invalidateSize();
            //   }
            // });

            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatch", { self: this });
          });
      }
    },
  };
</script>
