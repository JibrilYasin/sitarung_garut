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
              <div class="card">
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
        detailMapPermohonan: null,
        getLatlng:{}
      }
    },
    methods:{
      showModal(data){
        this.getData = data;
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
        this.detailMapPermohonan = null
        this.loadMapSelected()
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
              layers: [this.$parent.gStreet],
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
      }
    }
  }
</script>
