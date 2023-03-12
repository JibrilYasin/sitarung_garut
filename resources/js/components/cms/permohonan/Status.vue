<template>
  <div class="modal fade" id="updateStatusPermohonanModal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Detail Permohonan : {{ getDetailList['invoice'] }}</h6>
        </div>
        <form id="updateStatusPermohonanForm" @submit.prevent="submitForm" action="javascript:void(0)" method="POST">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-8">
                <div style="height: 100%;" id="detailMap"></div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4">
                  <div class="card-body">
                    <div class="mt-2">
                      <div class="float-start me-3">
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" id="checkPolaRuang" ref="checkPolaRuang" style="vertical-align: middle" @change="loadMap()">
                          <label class="form-check-label" for="checkPolaRuang">Tampilkan Pola Ruang</label>
                        </div>
                      </div>
                      <div class="float-start">
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" id="checkLSD" ref="checkLSD" style="vertical-align: middle" @change="loadMap()">
                          <label class="form-check-label" for="checkLSD">Tampilkan LSD</label>
                        </div>
                      </div>
                    </div>
                    <div style="clear:both"></div>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="mb-3">
                      <label class="form-label fw-bold">Status Saat Ini : <span class="text-info">{{ getDetailList['status_title'] }}</span></label>
                    </div>

                    <div class="d-none">
                      <label for="customRange2" class="form-label d-none">Example range</label>
                      <input type="range" class="form-range" min="0" max="1" step="0.1" id="opacityColor">
                    </div>

                    <div class="mb-3">
                      <label class="form-label text-uppercase">Nama Pemohon</label>
                      <input type="text" class="form-control" :value="getDetailList['name']" disabled/>
                    </div>
                    <div class="row mb-3">
                      <div class="col-md-6">
                        <label class="form-label text-uppercase">Kecamatan</label>
                        <input type="text" class="form-control" :value="getDetailList['kecamatan']" disabled/>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label text-uppercase">Desa</label>
                        <input type="text" class="form-control" :value="getDetailList['desa']" disabled/>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label text-uppercase">Alamat Lahan</label>
                      <textarea class="form-control" rows="4" disabled>{{ getDetailList['alamat_lahan'] }}</textarea>
                    </div>
                    <div class="row mb-3">
                      <div class="col-md-6">
                        <label class="form-label text-uppercase">Status Pemohon</label>
                        <input type="text" class="form-control" :value="getDetailList['status_pemohon']" disabled/>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label text-uppercase">Luas Lahan Rencana (m<sup>2</sup>)</label>
                        <input type="text" class="form-control" :value="getDetailList['luas_lahan_rencana']" disabled/>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-md-6">
                        <label class="form-label text-uppercase">Status kepemilikan</label>
                        <input type="text" class="form-control" :value="getDetailList['status_kepemilikan_lahan']" disabled/>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label text-uppercase">Nama Pemilik Lahan</label>
                        <input type="text" class="form-control" :value="getDetailList['nama_pemilik_lahan']" disabled/>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="row">
                        <div class="col-md-6">
                          <label class="form-label text-uppercase">Foto Lokasi</label>
                          <a :href="lokasi" data-featherlight="image">
                            <div class="mt-2 w-100" :style="{backgroundImage: 'url('+lokasi+')'}" style="height: 150px; background-position: center; background-size: cover;"></div>
                          </a>
                        </div>
                        <div class="col-md-6">
                          <label class="form-label text-uppercase">Foto Sertifikat</label>
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
                    <label class="form-label text-uppercase">Koordinat</label>
                    <table class="table">
                      <tbody>
                        <tr v-for="value in getLatlng">
                          <td class="text-xs">{{ value.split(',')[0] }}</td>
                          <td class="text-xs">{{ value.split(',')[1] }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="card mb-3">
                  <div class="card-body">
                    <label class="form-label text-uppercase">Kawasan Terlintasi</label>
                    <table class="table">
                      <tbody>
                        <tr v-for="value in getLatlng">
                          <td class="text-xs">Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="card mb-0">
                  <div class="card-body">
                    <label class="form-label text-uppercase">Status Selanjutnya</label>
                    <input type="text" id="statusPermohonanInput" class="form-control" readonly />
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="btn-group">
              <button type="submit" class="btn bg-gradient-primary">Ubah Status</button>
              <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { useToast,TYPE } from "vue-toastification"
  export default{
    name : 'ModalUpdateStatusPermohonan',
    data(){
      return{
        getDetailList:{},
        getLatlng:{},
        getNextStatus:{},
        lokasi:'',
        sertifikat:'',
        formErrors: {},
        email:'',
        map: null,
        zoom: 10,
        opacity:0.9,
        center: [-7.3650327, 107.5295489],
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
          attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
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
    setup () {
      const toast = useToast();
      return {toast}
    },
    mounted(){
      let self = this;
      var slider = document.getElementById("opacityColor");
      slider.oninput = function() {
        self.opacity = slider.value
        if (self.map) {
          self.map.remove();
        }
        self.loadMap();
      }
    },
    methods:{
      showModal(data){
        this.getDetailList = data
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
        this.formErrors = {}
        $("#updateStatusPermohonanModal").modal('show')
        $("#updateStatusPermohonanForm")[0].reset()
        $("#statusPermohonanInput").val(this.getDetailList.status_permohonan_id)
        if (this.map) {
          this.map.remove();
        }
        $( "#checkPolaRuang" ).prop( "checked", true )
        $( "#checkLSD" ).prop( "checked", true )
        this.loadStatusPermohonan();
        //this.loadImpact();
        this.loadMap();
        this.loadImpact();
      },
      async loadStatusPermohonan() {
        this.$isLoading(true);
        let obj = new Object();
        obj.currentStatusID = this.getDetailList.status_permohonan_id
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        await axios
          .post(baseurl + "/api/permohonan/listnextstatus",obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            $("#statusPermohonanInput").val(response.data.status_title)
            this.getNextStatus = response.data;
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            this.$store.dispatch("removeDispatchCMS", { self: this });
          });
      },
      async loadImpact() {
        this.$isLoading(true);
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        await axios
          .get(baseurl + "/api/permohonan/impact/"+this.getDetailList.id, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            console.log(JSON.stringify(response.data));
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            //this.$store.dispatch("removeDispatchCMS", { self: this });
          });
      },
      async loadMap() {
        this.$isLoading(true);

        let action = baseurl + "/api/map";
        let obj = new Object();
        obj.kecamatan = this.getDetailList.kecamatan
        obj.desa = this.getDetailList.desa
        await axios
          .post(action, obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            let self = this;

            if (this.map) {
              this.map.invalidateSize();
              this.map.remove();
            }

            this.map = new L.Map("detailMap", {
              layers: [this.googleHybrid],
              center: this.center,
            });
            this.map.setView(this.center, 10);

            var myStyle = {
              color: "#FFF",
              fillColor: "#FFF",
              weight: 0,
              opacity: 1,
              fillOpacity: 0.2,
            };
            var jsonData = L.geoJSON(response.data, {
              style: function (feature) {
                return myStyle;
              },
            }).addTo(this.map);

            if($( "#checkPolaRuang" ).is(":checked")){
              this.loadPolaRuang(this.getDetailList.kecamatan,this.getDetailList.desa);
            }

            if($( "#checkLSD" ).is(":checked")){
              this.loadLSD(this.getDetailList.kecamatan,this.getDetailList.desa);
            }

            this.loadPolygon();
            // setTimeout(() => {
            //
            // }, 100);
            this.$isLoading(false);
          })
          .catch((error) => {
            //this.$store.dispatch("removeDispatchCMS", { self: this });
            this.$isLoading(false);
          });
      },
      loadPolygon(){
        this.$isLoading(true);
        let action = baseurl + "/api/permohonan/polygon";
        let obj = new Object();
        obj.invoice = this.getDetailList.invoice
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        axios
          .post(action, obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            let self = this;
            var jsonData = L.geoJSON(response.data,{
              style: function (feature) {
                return {color:feature.properties.status_hex,fillColor: feature.properties.status_hex,weight: 1,opacity:1,fillOpacity:1};
              },
            }).addTo(this.map);
            setTimeout(() => {
              this.map.fitBounds(jsonData.getBounds());
              jsonData.bringToFront();
            }, 100);
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$isLoading(false);
            //this.$store.dispatch("removeDispatchCMS", { self: this });
          });
      },
      loadPolaRuang(namakecamatan,desa) {
        this.$isLoading(true);
        let action = baseurl + "/api/polaruang";
        let obj = new Object();
        obj.kecamatan = namakecamatan;
        obj.desa = desa;
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
        ];
        axios
          .post(action, obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            let self = this;
            var setopacity = this.opacity;
            var jsonData = L.geoJSON(response.data, {
              style: function (feature) {
                switch (feature.properties.keterangan) {
                  case "Danau/Situ":
                    return { color: "#0001EE", fillColor: "#0001EE", opacity: 0, fillOpacity: setopacity };
                  case "Kaw. Rawan Bencana Banjir":
                    return { color: "#2EA4DB", fillColor: "#2EA4DB", opacity: 0, fillOpacity: setopacity };
                  case "Kaw. Cagar Alam dan Cagar Alam Laut":
                    return { color: "#5A5AC3", fillColor: "#5A5AC3", opacity: 0, fillOpacity: setopacity };
                  case "Perlindungan Geologi (Karst)":
                    return { color: "#968796", fillColor: "#968796", opacity: 0, fillOpacity: setopacity };
                  case "Hutan Mangrove":
                    return { color: "#2D966E", fillColor: "#2D966E", opacity: 0, fillOpacity: setopacity };
                  case "Kawasan Sempadan Situ":
                    return { color: "#05D7D7", fillColor: "#05D7D7", opacity: 0, fillOpacity: setopacity };
                  case "Kaw. Resapan Air":
                    return { color: "#194128", fillColor: "#194128", opacity: 0, fillOpacity: setopacity };
                  case "Kaw. Hutan Produksi Terbatas":
                    return { color: "#4B9B37", fillColor: "#4B9B37", opacity: 0, fillOpacity: setopacity };
                  case "Kawasan Hutan Rakyat":
                    return { color: "#9BC89B", fillColor: "#9BC89B", opacity: 0, fillOpacity: setopacity };
                  case "Kawasan Industri":
                    return { color: "#690000", fillColor: "#690000", opacity: 0, fillOpacity: setopacity };
                  case "Kawasan Pariwisata":
                    return { color: "#FFA5FF", fillColor: "#FFA5FF", opacity: 0, fillOpacity: setopacity };
                  case "Kawasan Perkebunan":
                    return { color: "#AFAF37", fillColor: "#AFAF37", opacity: 0, fillOpacity: setopacity };
                  case "Kawasan Permukiman Perdesaan":
                    return { color: "#F59B1E", fillColor: "#F59B1E", opacity: 0, fillOpacity: setopacity };
                  case "Kawasan Pertanian Lahan Basah":
                    return { color: "#C8F546", fillColor: "#C8F546", opacity: 0, fillOpacity: setopacity };
                  case "Ruang Terbuka Hijau":
                    return { color: "#D2BEFF", fillColor: "#D2BEFF", opacity: 0, fillOpacity: setopacity };
                  case "Sungai":
                    return { color: "#97DBF2", fillColor: "#97DBF2", opacity: 0, fillOpacity: setopacity };
                  case "Kaw. Hutan Produksi Tetap":
                    return { color: "#7db437", fillColor: "#7db437", opacity: 0, fillOpacity: setopacity };
                  case "Kaw. Rawan Bencana Gunung Api I":
                    return { color: "#EC0000", fillColor: "#EC0000", opacity: 0, fillOpacity: setopacity };
                  case "Kaw. Rawan Bencana Gunung Api II":
                    return { color: "#F69331", fillColor: "#F69331", opacity: 0, fillOpacity: setopacity };
                  case "Kaw. Rawan Bencana Gunung Api III":
                    return { color: "#EFDD2E", fillColor: "#EFDD2E", opacity: 0, fillOpacity: setopacity };
                  case "Kaw. Rawan Gerakan Tanah Menengah":
                    return { color: "#fc8d59", fillColor: "#fc8d59", opacity: 0, fillOpacity: setopacity };
                  case "Kaw. Rawan Gerakan Tanah Tinggi":
                    return { color: "#d7301f", fillColor: "#d7301f", opacity: 0, fillOpacity: setopacity };
                  case "Kaw. Taman Buru":
                    return { color: "#4696ff", fillColor: "#4696ff", opacity: 0, fillOpacity: setopacity };
                  case "Kaw. Taman Wisata Alam dan Taman Wisata Laut":
                    return { color: "#e6d2ff", fillColor: "#e6d2ff", opacity: 0, fillOpacity: setopacity };
                  case "Kawasan Hutan Lindung":
                    return { color: "#325f28", fillColor: "#325f28", opacity: 0, fillOpacity: setopacity };
                  case "Kawasan Permukiman Perkotaan":
                    return { color: "#f59b1e", fillColor: "#f59b1e", opacity: 0, fillOpacity: setopacity };
                  case "Kawasan Pertanian Lahan Kering":
                    return { color: "#807c29", fillColor: "#807c29", opacity: 0, fillOpacity: setopacity };
                  case "Sempadan Pantai":
                    return { color: "#429E09", fillColor: "#429E09", opacity: 0, fillOpacity: setopacity };
                  case "Sempadan Sungai":
                    return { color: "#41251D", fillColor: "#41251D", opacity: 0, fillOpacity: setopacity };
                }
              },
              onEachFeature: function (feature, layer) {
                if(feature.properties.kupz_title == null){
                  layer.bindPopup('<b class="text-uppercase">'+feature.properties.keterangan+'</b>');
                }else{
                  layer.bindPopup('<div class="mb-2"><b class="text-uppercase text-primary">'+feature.properties.keterangan+'</b></div><p><b>'+feature.properties.kupz_title+'</b></p><div style="overflow-y: auto;height: 300px;"><ul style="padding-left:15px;line-height:25px;list-style-type:circle">'+feature.properties.kupz_description+'</ul></div>',{maxWidth:500});
                }
                layer.on({
                  click: function(e){
                    //layer.options.fillOpacity = 0.2
                    // var $layer = e.target;
                    // var highlightStyle = {
                    //     fillOpacity: 0.3,
                    // };
                    // $layer.bringToFront();
                    // $layer.setStyle(highlightStyle);
                  }
                })
                // layer.bindTooltip(feature.properties.keterangan, {
                //   direction: "center",
                //   className: "labelstyle",
                // });
              },
            }).addTo(this.map);
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$store.dispatch("removeDispatchCMS", { self: this });
            this.$isLoading(false);
          });
      },
      loadLSD(namakecamatan,desa) {
        this.$isLoading(true);
        let action = baseurl + "/api/polalsd";
        let obj = new Object();
        obj.kecamatan = namakecamatan;
        obj.desa = desa;
        axios
          .post(action, obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            let self = this;
            var setopacity = this.opacity;
            var jsonData = L.geoJSON(response.data, {
              style: function (feature) {
                switch (feature.properties.keterangan) {
                  case "Sepakat Dipertahankan":
                    return { color: "#35a952", fillColor: "#35a952", opacity: 1, fillOpacity: 0.9 };
                }
              },
              onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.keterangan);
              },
            }).addTo(this.map);
            this.$isLoading(false);
          })
          .catch((error) => {
            this.$store.dispatch("removeDispatchCMS", { self: this });
            this.$isLoading(false);
          });
      },
      submitForm(e) {
        this.$isLoading(true)
        this.formErrors = {};
        var form = e.target || e.srcElement
        let action = baseurl + "/api/permohonan/status";
        let datas = new FormData();
        datas.append("id", this.getDetailList.id);
        datas.append("statusPermohonanInput", this.getNextStatus['id']);
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
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
              $("#updateStatusPermohonanModal").modal('hide')
              this.$parent.loadList()
            }
            this.$isLoading(false)
          })
          .catch((error) => {
            this.formErrors = error.response.data.errors;
            this.$isLoading(false)
          });
      },
    }
  }
</script>
