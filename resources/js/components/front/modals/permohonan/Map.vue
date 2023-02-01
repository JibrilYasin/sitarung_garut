<template>
  <div class="modal fade" id="mapModal" data-bs-backdrop="static">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Kecamatan {{ kecamatan }}</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" @click="map.remove()"></button>
        </div>
        <div class="modal-body">
          <div class="row mb-3">
            <div class="col-md-6">
              <select id="mapDistrictsInput" class="form-control" data-live-search="true" data-size="8" v-on:change="loadDesa();loadMapSelected()">
                <option value="">Pilih Kecamatan</option>
                <option v-for="value in getDataKecamatan" :key="value['id']" :value="value['nama_kecamatan']">{{ value['nama_kecamatan'] }}</option>
              </select>
            </div>
            <div class="col-md-6">
              <select id="mapDesaInput" class="form-control" data-live-search="true" data-size="8" v-on:change="loadMapSelected()">
                <option value="">Pilih Desa</option>
                <option v-for="value in getDataDesa" :key="value['id']" :value="value['DESA']">{{ value['DESA'] }}</option>
              </select>
            </div>
          </div>
          <div style="width: 100%; height: 100vh;" id="authmap"></div>
        </div>
        <div class="modal-footer">
          <div class="btn-group">
            <button type="button" class="btn bg-gradient-primary" data-bs-dismiss="modal" @click="map.remove();$parent.showLoginModal()">Login</button>
            <button type="button" class="btn bg-gradient-info" data-bs-dismiss="modal" @click="map.remove();$parent.showRegisterModal()">Pendaftaran</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "MapModal",
    data() {
      return {
        kecamatan: "",
        desa: "",
        map: null,
        getDataKecamatan:{},
        getDataDesa:{},
        formErrors: {}
      };
    },
    methods: {
      showModal(kecamatan) {
        this.kecamatan = kecamatan;
        this.map = null
        $("#mapModal").modal("show")
        $("#mapDistrictsInput").addClass("selectpicker")
        $("#mapDesaInput").addClass("selectpicker")
        setTimeout(() => {
          $("#mapDistrictsInput").selectpicker("refresh")
          $("#mapDistrictsInput").val("").selectpicker("refresh")
          $("#mapDesaInput").selectpicker("refresh")
          $("#mapDesaInput").val("").selectpicker("refresh")
        }, 50);
        setTimeout(() => {
          this.loadDistricts()
        }, 100);

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
            this.getDataKecamatan = response.data;

            $("#mapDistrictsInput").selectpicker("refresh");
            setTimeout(() => {
              $("#mapDistrictsInput").val(this.kecamatan).selectpicker("refresh");
            }, 10);
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
        $("#mapDesaInput").val('')
        this.getDataDesa = {}
        var obj = new Object();
        obj.kecamatan = $("#mapDistrictsInput").val()
        axios
          .post(baseurl + "/api/permohonan/listdesa",obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.getDataDesa = response.data;
            setTimeout(() => {
              $("#mapDesaInput").selectpicker("refresh");
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
        if ($("#mapDistrictsInput").val() != "") {
          this.kecamatan = $("#mapDistrictsInput").val();
        }
        let action = baseurl + "/api/map";
        let obj = new Object();
        obj.kecamatan = this.kecamatan;
        obj.desa = $("#mapDesaInput").val();
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
            this.map = new L.Map("authmap", {
              layers: [this.$parent.gStreet],
            }).setView(response.data['features'][0]['properties']['center_point'], 11);

            var myStyle = {
              color: "#F00",
              fillColor: "#F00",
              weight: 2,
              opacity: 1,
              fillOpacity: 0.5,
            };
            var jsonData = L.geoJSON(response.data, {
              zIndexOffset: 1,
              style: function (feature) {
                return myStyle;
              },
            }).addTo(this.map);

            if(obj.desa != ''){
              setTimeout(() => {
                this.map.fitBounds(jsonData.getBounds());
              }, 100);
              setTimeout(() => {
                this.loadPolaRuang();
              }, 200);
            }

            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatch", { self: this });
          });
      },
      loadPolaRuang() {
        this.$isLoading(true);
        let action = baseurl + "/api/polaruang";
        let obj = new Object();
        obj.kecamatan = this.kecamatan;
        obj.desa = $("#mapDesaInput").val();
        obj.type = this.$parent.typePolaRuang;
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
                    return { color: "#0001EE", fillColor: "#0001EE", opacity: 0, fillOpacity: 0.7 };
                  case "Kaw. Rawan Bencana Banjir":
                    return { color: "#2EA4DB", fillColor: "#2EA4DB", opacity: 0, fillOpacity: 0.7 };
                  case "Kaw. Cagar Alam dan Cagar Alam Laut":
                    return { color: "#5A5AC3", fillColor: "#5A5AC3", opacity: 0, fillOpacity: 0.7 };
                  case "Perlindungan Geologi (Karst)":
                    return { color: "#968796", fillColor: "#968796", opacity: 0, fillOpacity: 0.7 };
                  case "Hutan Mangrove":
                    return { color: "#2D966E", fillColor: "#2D966E", opacity: 0, fillOpacity: 0.7 };
                  case "Kawasan Sempadan Situ":
                    return { color: "#05D7D7", fillColor: "#05D7D7", opacity: 0, fillOpacity: 0.7 };
                  case "Kaw. Resapan Air":
                    return { color: "#194128", fillColor: "#194128", opacity: 0, fillOpacity: 0.7 };
                  case "Kaw. Hutan Produksi Terbatas":
                    return { color: "#4B9B37", fillColor: "#4B9B37", opacity: 0, fillOpacity: 0.7 };
                  case "Kawasan Hutan Rakyat":
                    return { color: "#9BC89B", fillColor: "#9BC89B", opacity: 0, fillOpacity: 0.7 };
                  case "Kawasan Industri":
                    return { color: "#690000", fillColor: "#690000", opacity: 0, fillOpacity: 0.7 };
                  case "Kawasan Pariwisata":
                    return { color: "#FFA5FF", fillColor: "#FFA5FF", opacity: 0, fillOpacity: 0.7 };
                  case "Kawasan Perkebunan":
                    return { color: "#AFAF37", fillColor: "#AFAF37", opacity: 0, fillOpacity: 0.7 };
                  case "Kawasan Permukiman Perdesaan":
                    return { color: "#F59B1E", fillColor: "#F59B1E", opacity: 0, fillOpacity: 0.7 };
                  case "Kawasan Pertanian Lahan Basah":
                    return { color: "#C8F546", fillColor: "#C8F546", opacity: 0, fillOpacity: 0.7 };
                  case "Ruang Terbuka Hijau":
                    return { color: "#D2BEFF", fillColor: "#D2BEFF", opacity: 0, fillOpacity: 0.7 };
                  case "Sungai":
                    return { color: "#97DBF2", fillColor: "#97DBF2", opacity: 0, fillOpacity: 0.7 };
                  case "Kaw. Hutan Produksi Tetap":
                    return { color: "#7db437", fillColor: "#7db437", opacity: 0, fillOpacity: 0.7 };
                  case "Kaw. Rawan Bencana Gunung Api I":
                    return { color: "#EC0000", fillColor: "#EC0000", opacity: 0, fillOpacity: 0.7 };
                  case "Kaw. Rawan Bencana Gunung Api II":
                    return { color: "#F69331", fillColor: "#F69331", opacity: 0, fillOpacity: 0.7 };
                  case "Kaw. Rawan Bencana Gunung Api III":
                    return { color: "#EFDD2E", fillColor: "#EFDD2E", opacity: 0, fillOpacity: 0.7 };
                  case "Kaw. Rawan Gerakan Tanah Menengah":
                    return { color: "#fc8d59", fillColor: "#fc8d59", opacity: 0, fillOpacity: 0.7 };
                  case "Kaw. Rawan Gerakan Tanah Tinggi":
                    return { color: "#d7301f", fillColor: "#d7301f", opacity: 0, fillOpacity: 0.7 };
                  case "Kaw. Taman Buru":
                    return { color: "#4696ff", fillColor: "#4696ff", opacity: 0, fillOpacity: 0.7 };
                  case "Kaw. Taman Wisata Alam dan Taman Wisata Laut":
                    return { color: "#e6d2ff", fillColor: "#e6d2ff", opacity: 0, fillOpacity: 0.7 };
                  case "Kawasan Hutan Lindung":
                    return { color: "#325f28", fillColor: "#325f28", opacity: 0, fillOpacity: 0.7 };
                  case "Kawasan Permukiman Perkotaan":
                    return { color: "#f59b1e", fillColor: "#f59b1e", opacity: 0, fillOpacity: 0.7 };
                  case "Kawasan Pertanian Lahan Kering":
                    return { color: "#807c29", fillColor: "#807c29", opacity: 0, fillOpacity: 0.7 };
                  case "Sempadan Pantai":
                    return { color: "#429E09", fillColor: "#429E09", opacity: 0, fillOpacity: 0.7 };
                  case "Sempadan Sungai":
                    return { color: "#41251D", fillColor: "#41251D", opacity: 0, fillOpacity: 0.7 };
                }
              },
              onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.keterangan);
              },
            }).addTo(this.map);

            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatch", { self: this });
          });
      },
    }
  }
</script>
