<template>
  <div class="modal fade" id="detailPermohonanModal" data-bs-backdrop="static">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Detail Permohonan : <span class="text-secondary">{{ getData['invoice'] }}</span></h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" @click="detailMapPermohonan.remove();$parent.showPermohonanModal()"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-8" style="position;relative">
              <div style="width: 100%; height: 100%;" id="detailMap"></div>
            </div>
            <div class="col-md-4">
              <div v-if="showCheck" class="card mb-4">
                <div class="card-body">
                  <div class="mt-2">
                    <div class="float-start me-3">
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="checkPolaRuangDetail" ref="checkPolaRuangDetail" style="vertical-align: middle;margin-top:-1px;height:1rem" @change="loadMapSelected()">
                        <label class="form-check-label" for="checkPolaRuangDetail">Tampilkan Pola Ruang</label>
                      </div>
                    </div>
                    <div class="float-start">
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="checkLSDDetail" ref="checkLSDDetail" style="vertical-align: middle;margin-top:-1px;height:1rem" @change="loadMapSelected()">
                        <label class="form-check-label" for="checkLSDDetail">Tampilkan LSD</label>
                      </div>
                    </div>
                  </div>
                  <div style="clear:both"></div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-body">
                  <div class="mb-3">
                    <label class="form-label fw-bold">Status : <span class="text-info">{{ getData['status_title'] }}</span></label>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-6">
                      <label class="form-label">Kecamatan</label>
                      <input type="text" class="form-control" disabled :value="getData['kecamatan']" />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Desa</label>
                      <input type="text" class="form-control" disabled :value="getData['desa']" />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Alamat Lahan</label>
                    <textarea class="form-control" disabled>{{ getData['alamat_lahan'] }}</textarea>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-6">
                      <label class="form-label">Status Pemohon</label>
                      <input type="text" class="form-control" disabled :value="getData['status_pemohon']" />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Luas Lahan Rencana (m<sup>2</sup>)</label>
                      <input type="text" class="form-control" disabled :value="getData['luas_lahan_rencana']" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-6">
                      <label class="form-label">Status kepemilikan</label>
                      <input type="text" class="form-control" disabled :value="getData['status_kepemilikan_lahan']" />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Nama Pemilik Lahan</label>
                      <input type="text" class="form-control" disabled :value="getData['nama_pemilik_lahan']" />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Rencana Kegiatan</label>
                    <input type="text" class="form-control" disabled :value="getData['peruntukan']" />
                  </div>
                  <div class="mb-0">
                    <div class="row">
                      <div class="col-md-6">
                        <label class="form-label">Foto Lokasi</label>
                        <a :href="lokasi" data-featherlight="image">
                          <div class="mt-2 w-100" :style="{backgroundImage: 'url('+lokasi+')'}" style="height: 150px; background-position: center; background-size: cover;"></div>
                        </a>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">Foto Sertifikat</label>
                        <a :href="sertifikat" data-featherlight="image">
                          <div class="mt-2 w-100" :style="{backgroundImage: 'url('+sertifikat+')'}" style="height: 150px; background-position: center; background-size: cover;"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-body">
                  <label class="form-label">Koordinat</label>
                  <table class="table">
                    <tbody>
                      <tr v-for="value in getLatlng">
                        <td>{{ value.split(',')[0] }}</td>
                        <td>{{ value.split(',')[1] }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <label class="form-label text-uppercase">Kawasan Terlintasi</label>
                  <table class="table">
                    <tbody>
                      <tr v-for="value in getImpactPolaRuang">
                        <td class="text-xs">{{ value['keterangan'] }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name : 'DetailPermohonanModal',
    data(){
      return{
        getData:{},
        lokasi:'',
        sertifikat:'',
        showCheck:true,
        detailMapPermohonan: null,
        getLatlng:{},
        getImpactPolaRuang:{},
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
      }
    },
    methods:{
      showModal(data){
        this.getData = data;
        this.getImpactPolaRuang = {};
        this.getLatlng = JSON.parse(data['coordinates'])
        if(data.fotolokasi){
          this.lokasi = imagepath+'/'+data.fotolokasi
        }else{
          this.lokasi = imagepath+'noimage.png'
        }
        if(data.sertifikat){
          this.sertifikat = imagepath+'/'+data.sertifikat
        }else{
          this.sertifikat = imagepath+'noimage.png'
        }
        $("#detailPermohonanModal").modal('show')
        $( "#checkPolaRuangDetail" ).prop( "checked", false )
        $( "#checkLSDDetail" ).prop( "checked", false )
        this.detailMapPermohonan = null
        this.loadMapSelected()
        this.loadImpact();
      },
      loadMapSelected() {
        this.$isLoading(true);
        this.luas = 0;

        if ($("#districtsInput").val() != "") {
          this.nameKec = $("#districtsInput").val();
        }
        let action = baseurl + "/api/map";
        let obj = new Object();
        obj.kecamatan = this.getData.kecamatan;
        obj.desa = this.getData.desa;
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
        axios
          .post(action, obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            let self = this;

            if (this.detailMapPermohonan) {
              this.detailMapPermohonan.invalidateSize();
              this.detailMapPermohonan.remove();
            }
            this.detailMapPermohonan = new L.Map("detailMap", {
              layers: [this.googleHybrid],
              zoom: 10,
            }).setView(this.$parent.center, 10);

            var myStyle = {
              color: "#F00",
              fillColor: "#F00",
              weight: 1,
              opacity: 1,
              fillOpacity: 0.1,
            };
            // End

            var jsonData = L.geoJSON(response.data, {
              style: function (feature) {
                return myStyle;
              },
              onEachFeature: function (feature, layer) {
                self.luas = feature.properties.luas;
              },
            }).addTo(this.detailMapPermohonan);
            if($( "#checkPolaRuangDetail" ).is(":checked")){
              this.loadPolaRuang();
            }
            if($( "#checkLSDDetail" ).is(":checked")){
              this.loadLSD();
            }
            this.loadPolygon();
            this.detailMapPermohonan.invalidateSize();
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            //this.$store.dispatch("removeDispatch", { self: this });
          });
      },
      loadPolygon(){
        this.$isLoading(true);
        let action = baseurl + "/api/permohonan/polygon";
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
        var obj = new Object;
        obj.invoice = this.getData.invoice
        axios
          .post(action,obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            let self = this;
            var jsonData = L.geoJSON(response.data,{
              style: function (feature) {
                return {color:feature.properties.status_hex,fillColor: feature.properties.status_hex,weight: 1,opacity:1,fillOpacity:0.8};
              },
              onEachFeature: function (feature, layer) {
                layer.bindTooltip("Invoice : " + feature.properties.invoice);
              },
            }).addTo(this.detailMapPermohonan);
            setTimeout(() => {
              this.detailMapPermohonan.fitBounds(jsonData.getBounds());
            }, 100);
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            //this.$store.dispatch("removeDispatch", { self: this });
          });
      },
      loadPolaRuang() {
        this.$isLoading(true);
        let action = baseurl + "/api/polaruang";
        let obj = new Object();

        obj.kecamatan = this.getData.kecamatan;
        obj.desa = this.getData.desa;
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
            }).addTo(this.detailMapPermohonan);

            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatch", { self: this });
          });
      },
      loadLSD() {
        this.$isLoading(true);
        let action = baseurl + "/api/polalsd";
        let obj = new Object();
        obj.kecamatan = this.getData.kecamatan;
        obj.desa = this.getData.desa;
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
                  case "Sepakat Dipertahankan":
                    return { color: "#35a952", fillColor: "#35a952", opacity: 1, fillOpacity: 0.9 };
                }
              },
              onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.keterangan);
                // layer.bindTooltip(feature.properties.keterangan, {
                //   direction: "center",
                //   className: "labelstyle",
                // });
              },
            }).addTo(this.detailMapPermohonan);

            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatch", { self: this });
          });
      },
      async loadImpact() {
        this.$isLoading(true);
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        await axios
          .get(baseurl + "/api/permohonan/impact/"+this.getData.id, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.getImpactPolaRuang = response.data.polaruang;
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            //this.$store.dispatch("removeDispatchCMS", { self: this });
          });
      },
    }
  }
</script>
