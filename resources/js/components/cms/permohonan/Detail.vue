<template>
  <div class="row">
    <div class="col-lg-12 mb-lg-0 mb-4">
      <div class="card z-index-2 h-100">
        <div class="card-header pb-0 pt-3 bg-transparent">
          <button type="button" class="btn btn bg-gradient-success" @click="resetFilter">Refresh</button>
        </div>
        <div class="card-body p-3">
          <div class="row">
            <div class="col-md-9">
              <div style="height: 100vh;" id="detailMap"></div>
            </div>
            <div class="col-md-3">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { useToast,TYPE } from "vue-toastification"
  export default{
    name: "PermohonanDetailPage",
    props: ["title"],
    data() {
      return {
        getData: {},
        formErrors: {},
        detailmap: null,
        zoom: 10,
        center: [-7.3650327, 107.5295489],
        osm: L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 20,
          attribution: "© OpenStreetMap",
        }),
        rbiMap: L.tileLayer("https://portal.ina-sdi.or.id/arcgis/rest/services/RBI/Basemap/MapServer/tile/{z}/{y}/{x}", {
          attribution: "&copy; https://portal.ina-sdi.or.id/arcgis/rest/services/RBI/Basemap/MapServer/tile/{z}/{y}/{x} Contributors",
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"],
        }),
        gSatelliteMap: L.tileLayer("https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}", {
          attribution: '&copy; <a href="https://maps.google.com">GoogleMap</a> Contributors',
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"],
        }),
        googleHybrid: L.tileLayer("https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}", {
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"],
        }),
      };
    },
    setup () {
      const toast = useToast();
      return {toast}
    },
    created(){
      this.loadMap();
    },
    methods:{
      async loadMap() {
        this.$isLoading(true);

        if (this.detailmap) {
          this.detailmap.remove();
        }

        let action = baseurl + "/api/map";
        let obj = new Object();
        obj.kecamatan = 'LELES'
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        await axios
          .post(action, obj, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            let self = this;

            this.detailmap = new L.Map("detailMap", {
              layers: [this.gSatelliteMap],
              center: this.center,
            });

            var baseLayers = {
              OpenStreetMap: this.osm,
              "Rupa Bumi Indonesia": this.rbiMap,
              "Google Satellite": this.gSatelliteMap,
              "Google Hybrid": this.googleHybrid,
            };
            this.detailmap.setView(this.center, 10);
            L.control.layers(baseLayers).addTo(this.detailmap);

            var myStyle = {
              color: "#FFF",
              fillColor: "#FFF",
              weight: 0.5,
              opacity: 1,
              fillOpacity: 0.2,
            };
            var jsonData = L.geoJSON(response.data, {
              style: function (feature) {
                return myStyle;
              },
              onEachFeature: function (feature, layer) {
                layer.bindTooltip("Kec : " + feature.properties.nama_kecamatan);
              },
            }).addTo(this.detailmap);

            // setTimeout(() => {
            //   this.loadPolygon();
            // }, 100);
            //
            // setTimeout(() => {
            //   this.loadPolaRuang(this.getDetailList.kecamatan);
            // }, 500);
            console.log(jsonData);
            this.detailmap.fitBounds(jsonData.getBounds());

            this.$isLoading(false);
          })
          .catch((error) => {
            //this.$store.dispatch("removeDispatchCMS", { self: this });
            this.$isLoading(false);
          });
      },
    }
  }
</script>
