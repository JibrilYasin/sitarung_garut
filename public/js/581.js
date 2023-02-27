/*! For license information please see 581.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[581],{5581:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ke});var n=a(821),o={class:"row"},r={class:"col-lg-8 mb-lg-0 mb-4"},s={class:"card z-index-2 h-100"},i={class:"card-header d-flex align-items-center justify-content-between pb-0"},l={class:"card-title mb-0"},c=(0,n.createElementVNode)("h6",{class:"text-capitalize"},"Informasi Sebaran Lokasi Permohonan",-1),d={class:"text-muted"},m={class:"font-weight-bold"},u={class:"btn-group"},p=["value"],h=["value"],f=(0,n.createElementVNode)("div",{class:"card-body p-3"},[(0,n.createElementVNode)("div",{style:{height:"100vh"},id:"dashboardMap"})],-1),g={class:"col-lg-4"},b={class:"card mb-3"},v=(0,n.createElementVNode)("div",{class:"card-header pb-0 p-3"},[(0,n.createElementVNode)("h6",{class:"mb-0"},"Filter")],-1),y={class:"card-body p-3"},E={class:"row"},k={class:"col-md-6"},w={class:"col-md-6"},N={class:"card mb-3"},x=(0,n.createElementVNode)("div",{class:"card-header pb-0 p-3"},[(0,n.createElementVNode)("h6",{class:"mb-0"},"Statistik Permohonan")],-1),D={class:"card-body p-3"},V={class:"list-group"},S={class:"d-flex align-items-center"},C=[(0,n.createElementVNode)("i",{class:"bx bx-street-view text-white opacity-10",style:{"font-size":"1rem"}},null,-1)],B={class:"d-flex flex-column"},M={class:"mb-1 text-dark text-sm"},T={class:"text-xs"},P={class:"font-weight-bold"},j={class:"card"},O=(0,n.createElementVNode)("div",{class:"card-header pb-0 p-3"},[(0,n.createElementVNode)("h6",{class:"mb-0"},"Permohonan Terbaru")],-1),K={class:"card-body p-3"},_={class:"table-responsive"},z={class:"table align-items-center"},A={class:"align-middle text-sm"},F={class:"col"},G=(0,n.createElementVNode)("p",{class:"text-xs font-weight-bold mb-0"},"Kode Permohonan:",-1),I={class:"text-xs mb-0"},R=(0,n.createElementVNode)("p",{class:"text-xs font-weight-bold mb-0"},"Nama Pemohon:",-1),H={class:"text-xs mb-0"},Y=(0,n.createElementVNode)("p",{class:"text-xs font-weight-bold mb-0"},"Tanggal Permohonan:",-1),Z={class:"text-xs mb-0"},J={class:"card"},W=(0,n.createElementVNode)("div",{class:"card-header pb-0 p-3"},[(0,n.createElementVNode)("h6",{class:"mb-0"},"Pemohon Terbaru")],-1),U={class:"card-body p-3"},q={class:"table-responsive"},Q={class:"table align-items-center"},X={class:"align-middle text-sm"},ee={class:"col"},te=(0,n.createElementVNode)("p",{class:"text-xs font-weight-bold mb-0"},"Nama:",-1),ae={class:"text-xs mb-0"},ne=(0,n.createElementVNode)("p",{class:"text-xs font-weight-bold mb-0"},"Tanggal Daftar:",-1),oe={class:"text-xs mb-0"},re=(0,n.createElementVNode)("p",{class:"text-xs font-weight-bold mb-0"},"Status:",-1),se={key:0,class:"badge badge-pill badge-md w-100 bg-gradient-dark",style:{"font-size":".6rem"}},ie={key:1,class:"badge badge-pill badge-md w-100 bg-gradient-info",style:{"font-size":".6rem"}},le={key:2,class:"badge badge-pill badge-md w-100 bg-gradient-success",style:{"font-size":".6rem"}},ce={key:3,class:"badge badge-pill badge-md w-100 bg-gradient-warning",style:{"font-size":".6rem"}},de={key:4,class:"badge badge-pill badge-md w-100 bg-gradient-danger",style:{"font-size":".6rem"}};var me={class:"modal fade",id:"filterTanggalDashboardModal",tabindex:"-1",role:"dialog","aria-labelledby":"filterTanggalDashboardModalLabel","aria-hidden":"true","data-bs-backdrop":"static"},ue={class:"modal-dialog modal-dialog-centered",role:"document"},pe={class:"modal-content"},he=(0,n.createElementVNode)("div",{class:"modal-header"},[(0,n.createElementVNode)("h6",{class:"modal-title",id:"filterTanggalDashboardModalLabel"},"Filter Tanggal"),(0,n.createElementVNode)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},[(0,n.createElementVNode)("span",{"aria-hidden":"true"},"×")])],-1),fe={class:"modal-body"},ge={class:"row"},be={class:"col-md-6"},ve=(0,n.createElementVNode)("label",{class:"form-label"},"Tanggal Awal",-1),ye={class:"input-group date datepicker"},Ee=["value"],ke=(0,n.createElementVNode)("span",{class:"input-group-text"},[(0,n.createElementVNode)("i",{class:"fs-4 bx bx-calendar-week"})],-1),we={class:"col-md-6"},Ne=(0,n.createElementVNode)("label",{class:"form-label"},"Tanggal Akhir",-1),xe={class:"input-group date datepicker"},De=["value"],Ve=(0,n.createElementVNode)("span",{class:"input-group-text"},[(0,n.createElementVNode)("i",{class:"fs-4 bx bx-calendar-week"})],-1),Le={class:"modal-footer"},Se={class:"btn-group"},$e=(0,n.createElementVNode)("button",{type:"button",class:"btn bg-gradient-secondary","data-bs-dismiss":"modal"},"Close",-1);const Ce={name:"FilterTanggalDashboard",methods:{showModal:function(){$("#filterTanggalDashboardModal").modal("show")}}};var Be=a(3744);function Me(e){return Me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Me(e)}function Te(){Te=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,a){return e[t]=a}}function c(e,t,a,o){var r=t&&t.prototype instanceof u?t:u,s=Object.create(r.prototype),i=new D(o||[]);return n(s,"_invoke",{value:k(e,a,i)}),s}function d(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var m={};function u(){}function p(){}function h(){}var f={};l(f,r,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(V([])));b&&b!==t&&a.call(b,r)&&(f=b);var v=h.prototype=u.prototype=Object.create(f);function y(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function o(n,r,s,i){var l=d(e[n],e,r);if("throw"!==l.type){var c=l.arg,m=c.value;return m&&"object"==Me(m)&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){o("next",e,s,i)}),(function(e){o("throw",e,s,i)})):t.resolve(m).then((function(e){c.value=e,s(c)}),(function(e){return o("throw",e,s,i)}))}i(l.arg)}var r;n(this,"_invoke",{value:function(e,a){function n(){return new t((function(t,n){o(e,a,t,n)}))}return r=r?r.then(n,n):n()}})}function k(e,t,a){var n="suspendedStart";return function(o,r){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw r;return L()}for(a.method=o,a.arg=r;;){var s=a.delegate;if(s){var i=w(s,a);if(i){if(i===m)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var l=d(e,t,a);if("normal"===l.type){if(n=a.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n="completed",a.method="throw",a.arg=l.arg)}}}function w(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=d(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function V(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=h,n(v,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:p,configurable:!0}),p.displayName=l(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(E.prototype),l(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,n,o,r){void 0===r&&(r=Promise);var s=new E(c(t,a,n,o),r);return e.isGeneratorFunction(a)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},y(v),l(v,i,"Generator"),l(v,r,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=V,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return s.type="throw",s.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],s=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var i=a.call(r,"catchLoc"),l=a.call(r,"finallyLoc");if(i&&l){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(i){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=e,s.arg=t,r?(this.method="next",this.next=r.finallyLoc,m):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var o=n.arg;x(a)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:V(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}function Pe(e,t,a,n,o,r,s){try{var i=e[r](s),l=i.value}catch(e){return void a(e)}i.done?t(l):Promise.resolve(l).then(n,o)}function je(e){return function(){var t=this,a=arguments;return new Promise((function(n,o){var r=e.apply(t,a);function s(e){Pe(r,n,o,s,i,"next",e)}function i(e){Pe(r,n,o,s,i,"throw",e)}s(void 0)}))}}const Oe={name:"DashboardPage",props:["title"],components:{modalFilter:(0,Be.Z)(Ce,[["render",function(e,t,a,o,r,s){return(0,n.openBlock)(),(0,n.createElementBlock)("div",me,[(0,n.createElementVNode)("div",ue,[(0,n.createElementVNode)("div",pe,[he,(0,n.createElementVNode)("div",fe,[(0,n.createElementVNode)("div",ge,[(0,n.createElementVNode)("div",be,[ve,(0,n.createElementVNode)("div",ye,[(0,n.createElementVNode)("input",{type:"text",class:"form-control",id:"startdateDashbaord",value:e.$parent.startdateDashbaord,readonly:""},null,8,Ee),ke])]),(0,n.createElementVNode)("div",we,[Ne,(0,n.createElementVNode)("div",xe,[(0,n.createElementVNode)("input",{type:"text",class:"form-control",id:"enddateDashbaord",value:e.$parent.enddateDashbaord,readonly:""},null,8,De),Ve])])])]),(0,n.createElementVNode)("div",Le,[(0,n.createElementVNode)("div",Se,[(0,n.createElementVNode)("button",{type:"button",class:"btn bg-gradient-primary",onClick:t[0]||(t[0]=function(t){e.$parent.boundMap=!1,e.$parent.loadStatistik(),e.$parent.loadMap("empty")}),"data-bs-dismiss":"modal"},"Submit"),$e])])])])])}]])},data:function(){return{startdateDashbaord:"",enddateDashbaord:"",baseurl,imagepath,getDataKecamatan:{},getDesa:{},getDataStatistikPermohonan:{},map:null,zoom:10,center:[-7.422231311992428,107.78223470459028],osm:L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:20,attribution:"© OpenStreetMap"}),gStreet:L.tileLayer("https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}),rbiMap:L.tileLayer("https://portal.ina-sdi.or.id/arcgis/rest/services/RBI/Basemap/MapServer/tile/{z}/{y}/{x}",{attribution:"&copy; https://portal.ina-sdi.or.id/arcgis/rest/services/RBI/Basemap/MapServer/tile/{z}/{y}/{x} Contributors",maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}),grayscaleMap:L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',maxZoom:20}),gSatelliteMap:L.tileLayer("https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",{attribution:'&copy; <a href="https://maps.google.com">GoogleMap</a> Contributors',maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}),googleHybrid:L.tileLayer("https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}),typePolaRuang:["Danau/Situ","Kaw. Rawan Bencana Banjir","Kaw. Cagar Alam dan Cagar Alam Laut","Perlindungan Geologi (Karst)","Hutan Mangrove","Kawasan Sempadan Situ","Kaw. Resapan Air","Kaw. Hutan Produksi Terbatas","Kawasan Hutan Rakyat","Kawasan Industri","Kawasan Pariwisata","Kawasan Perkebunan","Kawasan Permukiman Perdesaan","Kawasan Pertanian Lahan Basah","Ruang Terbuka Hijau","Sungai","Kaw. Hutan Produksi Tetap","Kaw. Rawan Bencana Gunung Api I","Kaw. Rawan Bencana Gunung Api II","Kaw. Rawan Bencana Gunung Api III","Kaw. Rawan Gerakan Tanah Menengah","Kaw. Rawan Gerakan Tanah Tinggi","Kaw. Taman Buru","Kaw. Taman Wisata Alam dan Taman Wisata Laut","Kawasan Hutan Lindung","Kawasan Permukiman Perkotaan","Kawasan Pertanian Lahan Kering","Sempadan Pantai","Sempadan Sungai"],boundMap:!1}},created:function(){this.$store.dispatch("setTitleCMS",this.$props.title),this.map=null,this.boundMap=!1,this.defDate(),this.loadDistricts(),this.loadMap(),this.loadStatistik()},mounted:function(){var e=this;$("#kecamatanDashbaordColumn").addClass("selectpicker"),$("#desaDashbaordColumn").addClass("selectpicker"),setTimeout((function(){$("#kecamatanDashbaordColumn").selectpicker("refresh"),$("#kecamatanDashbaordColumn").val("").selectpicker("refresh"),$("#desaDashbaordColumn").selectpicker("refresh"),$("#desaDashbaordColumn").val("").selectpicker("refresh")}),50),$(document).ready((function(){$((function(){$(".selectpicker").selectpicker(),$("#startdateDashbaord").datepicker({clearBtn:!0,useCurrent:!0,autoclose:!0,endDate:"0d",format:"yyyy-mm-dd"}).on("changeDate",(function(t){e.startdateDashbaord=$("#startdateDashbaord").val(),$("#enddateDashbaord").datepicker("setStartDate",e.startdateDashbaord)})),$("#enddateDashbaord").datepicker({clearBtn:!0,useCurrent:!0,autoclose:!0,startDate:e.startdateDashbaord,endDate:"0d",format:"yyyy-mm-dd"}).on("changeDate",(function(t){e.enddateDashbaord=$("#enddateDashbaord").val()}))}))}))},methods:{defDate:function(){this.startdateDashbaord=moment(new Date).startOf("month").format("YYYY-MM-DD"),this.enddateDashbaord=moment(new Date).format("YYYY-MM-DD")},loadDistricts:function(){var e=this;return je(Te().mark((function t(){return Te().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$isLoading(!0),window.axios.defaults.headers.common.Authorization="Bearer ".concat(e.$store.state.setTokenCMS),t.next=4,axios.post(baseurl+"/api/permohonan/listdistrict",{headers:{Accept:"application/json"}}).then((function(t){e.getDataKecamatan=t.data,setTimeout((function(){$("#kecamatanDashbaordColumn").selectpicker("refresh")}),50),e.$isLoading(!1)})).catch((function(t){e.$isLoading(!1),e.$store.dispatch("removeDispatchCMS",{self:e})}));case 4:case"end":return t.stop()}}),t)})))()},loadDesa:function(){var e=this;this.$isLoading(!0),$("#desaDashbaordColumn").val(""),this.getDesa={};var t=new Object;t.kecamatan=$("#kecamatanDashbaordColumn").val(),window.axios.defaults.headers.common.Authorization="Bearer ".concat(this.$store.state.setTokenCMS),axios.post(baseurl+"/api/permohonan/listdesa",t,{headers:{Accept:"application/json"}}).then((function(t){e.getDesa=t.data,setTimeout((function(){$("#desaDashbaordColumn").selectpicker("refresh")}),50),e.$isLoading(!1)})).catch((function(t){e.$isLoading(!1),e.$store.dispatch("removeDispatchCMS",{self:e})}))},loadStatistik:function(){var e=this;return je(Te().mark((function t(){var a,n;return Te().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$isLoading(!0),a=baseurl+"/api/admin/dashboard",n=e.getObj(),window.axios.defaults.headers.common.Authorization="Bearer ".concat(e.$store.state.setTokenCMS),t.next=6,axios.post(a,n,{headers:{Accept:"application/json"}}).then((function(t){e.getDataStatistikPermohonan=t.data,e.$isLoading(!1)})).catch((function(t){e.$isLoading(!1),e.$store.dispatch("removeDispatchCMS",{self:e})}));case 6:case"end":return t.stop()}}),t)})))()},loadMap:function(){var e=arguments,t=this;return je(Te().mark((function a(){var n,o,r;return Te().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:"",t.$isLoading(!0),o=baseurl+"/api/map",r=new Object,"empty"==n&&($("#kecamatanDashbaordColumn").val("").selectpicker("refresh"),$("#desaDashbaordColumn").val("").selectpicker("refresh")),r.kecamatan=$("#kecamatanDashbaordColumn").val(),r.desa=$("#desaDashbaordColumn").val(),window.axios.defaults.headers.common.Authorization="Bearer ".concat(t.$store.state.setTokenCMS),a.next=10,axios.post(o,r,{headers:{Accept:"application/json"}}).then((function(e){t.map&&t.map.remove(),t.map=new L.Map("dashboardMap",{layers:[t.googleHybrid],center:t.center});var a={"Google Street":t.gStreet,"Google Satellite":t.gSatelliteMap,"Google Hybrid":t.googleHybrid,"Hitam Putih":t.grayscaleMap,"Rupa Bumi Indonesia":t.rbiMap};t.map.setView(t.center,10),L.control.layers(a).addTo(t.map);var n={color:"#ff7800",fillColor:"#ff7800",weight:1,opacity:1,fillOpacity:.4},o=e.data,r=L.geoJSON(o,{style:function(e){return n},onEachFeature:function(e,t){""==$("#kecamatanDashbaordColumn").val()&&""!=$("#desaDashbaordColumn").val()||t.bindTooltip(e.properties.nama_kecamatan),""==$("#kecamatanDashbaordColumn").val()&&""==$("#desaDashbaordColumn").val()||t.bindTooltip(e.properties.nama_desa)}}).addTo(t.map);t.loadPolygon(),1==t.boundMap&&setTimeout((function(){t.map.fitBounds(r.getBounds())}),100),t.$isLoading(!1)})).catch((function(e){t.$store.dispatch("removeDispatchCMS",{self:t}),t.$isLoading(!1)}));case 10:case"end":return a.stop()}}),a)})))()},loadPolygon:function(){var e=this;this.$isLoading(!0);var t=baseurl+"/api/permohonan/polygon",a=this.getObj();a.kecamatan=$("#kecamatanDashbaordColumn").val(),a.desa=$("#desaDashbaordColumn").val(),window.axios.defaults.headers.common.Authorization="Bearer ".concat(this.$store.state.setTokenCMS),axios.post(t,a,{headers:{Accept:"application/json"}}).then((function(t){L.geoJSON(t.data,{style:function(e){return{color:e.properties.status_hex,fillColor:e.properties.status_hex,weight:1,opacity:1,fillOpacity:.8}},onEachFeature:function(e,t){""==$("#kecamatanDashbaordColumn").val()&&""==$("#desaDashbaordColumn").val()||t.bindTooltip("Invoice : "+e.properties.invoice,{permanent:!0})}}).addTo(e.map),e.$isLoading(!1)})).catch((function(t){e.$isLoading(!1),e.$store.dispatch("removeDispatchCMS",{self:e})}))},getObj:function(){var e=new Object;return e.startdate=this.startdateDashbaord,e.enddate=this.enddateDashbaord,e},showFilterModal:function(){var e=this;this.$nextTick((function(){e.$refs.ferModalFilterTanggalDashboard.showModal()}))}}},Ke=(0,Be.Z)(Oe,[["render",function(e,t,a,L,$,me){var ue=this,pe=(0,n.resolveComponent)("router-link"),he=(0,n.resolveComponent)("modalFilter");return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.createElementVNode)("div",r,[(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",l,[c,(0,n.createElementVNode)("span",d,[(0,n.createElementVNode)("small",m,"Total "+(0,n.toDisplayString)($.getDataStatistikPermohonan.totalpermohonan)+" Lokasi",1),(0,n.createTextVNode)(" , "),(0,n.createElementVNode)("small",null,"Periode : "+(0,n.toDisplayString)(e.$filters.formatDateOnly($.startdateDashbaord))+" s/d "+(0,n.toDisplayString)(e.$filters.formatDateOnly($.enddateDashbaord)),1)])]),(0,n.createElementVNode)("div",u,[(0,n.createElementVNode)("select",{id:"kecamatanDashbaordColumn","data-live-search":"true","data-size":"8",class:"form-control",title:"Kecamatan",onChange:t[0]||(t[0]=function(e){ue.boundMap=!0,me.loadDesa(),me.loadMap()})},[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)($.getDataKecamatan,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("option",{key:e.id,value:e.nama_kecamatan},(0,n.toDisplayString)(e.nama_kecamatan),9,p)})),128))],32),(0,n.createElementVNode)("select",{id:"desaDashbaordColumn","data-live-search":"true","data-size":"8",class:"form-control ms-2",title:"Desa",onChange:t[1]||(t[1]=function(e){ue.boundMap=!0,me.loadMap()})},[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)($.getDesa,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("option",{key:e.id,value:e.DESA},(0,n.toDisplayString)(e.DESA),9,h)})),128))],32)])]),f])]),(0,n.createElementVNode)("div",g,[(0,n.createElementVNode)("div",b,[v,(0,n.createElementVNode)("div",y,[(0,n.createElementVNode)("div",E,[(0,n.createElementVNode)("div",k,[(0,n.createElementVNode)("button",{type:"button",class:"btn btn-block bg-gradient-info w-100",onClick:t[2]||(t[2]=function(e){return me.showFilterModal()})},"Filter Tanggal")]),(0,n.createElementVNode)("div",w,[(0,n.createVNode)(pe,{to:"/admin",onClick:t[3]||(t[3]=function(t){return e.$router.go()}),class:"btn btn-block bg-gradient-success w-100"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Refresh Halaman ")]})),_:1})])])])]),(0,n.createElementVNode)("div",N,[x,(0,n.createElementVNode)("div",D,[(0,n.createElementVNode)("ul",V,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)($.getDataStatistikPermohonan.statistikpermohonan,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("li",{key:e.id,class:"list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"},[(0,n.createElementVNode)("div",S,[(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["icon icon-shape icon-sm me-3 shadow text-center",e.status_color])},C,2),(0,n.createElementVNode)("div",B,[(0,n.createElementVNode)("h6",M,(0,n.toDisplayString)(e.status_title),1),(0,n.createElementVNode)("span",T,[(0,n.createElementVNode)("span",P,(0,n.toDisplayString)(e.total_permohonan)+" Pengajuan",1)])])])])})),128))])])]),(0,n.createElementVNode)("div",j,[O,(0,n.createElementVNode)("div",K,[(0,n.createElementVNode)("div",_,[(0,n.createElementVNode)("table",z,[(0,n.createElementVNode)("tbody",null,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)($.getDataStatistikPermohonan.latestpermohonan,(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("tr",{key:t.id},[(0,n.createElementVNode)("td",A,[(0,n.createElementVNode)("div",F,[G,(0,n.createElementVNode)("h6",I,(0,n.toDisplayString)(t.invoice),1)])]),(0,n.createElementVNode)("td",null,[(0,n.createElementVNode)("div",null,[R,(0,n.createElementVNode)("h6",H,(0,n.toDisplayString)(t.name),1)])]),(0,n.createElementVNode)("td",null,[(0,n.createElementVNode)("div",null,[Y,(0,n.createElementVNode)("h6",Z,(0,n.toDisplayString)(e.$filters.formatDate(t.created_at)),1)])])])})),128))])])])])]),(0,n.createElementVNode)("div",J,[W,(0,n.createElementVNode)("div",U,[(0,n.createElementVNode)("div",q,[(0,n.createElementVNode)("table",Q,[(0,n.createElementVNode)("tbody",null,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)($.getDataStatistikPermohonan.latestpemohon,(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("tr",{key:t.id},[(0,n.createElementVNode)("td",X,[(0,n.createElementVNode)("div",ee,[te,(0,n.createElementVNode)("h6",ae,(0,n.toDisplayString)(t.name),1)])]),(0,n.createElementVNode)("td",null,[(0,n.createElementVNode)("div",null,[ne,(0,n.createElementVNode)("h6",oe,(0,n.toDisplayString)(e.$filters.formatDate(t.created_at)),1)])]),(0,n.createElementVNode)("td",null,[(0,n.createElementVNode)("div",null,[re,"New"==t.status&&""!=t.notes?((0,n.openBlock)(),(0,n.createElementBlock)("span",se,"Update Profil")):(0,n.createCommentVNode)("",!0),"New"==t.status&&""==t.notes?((0,n.openBlock)(),(0,n.createElementBlock)("span",ie,"Pendaftaran Baru")):(0,n.createCommentVNode)("",!0),"Approve"==t.status?((0,n.openBlock)(),(0,n.createElementBlock)("span",le,"Disetujui")):(0,n.createCommentVNode)("",!0),"Blokir"==t.status?((0,n.openBlock)(),(0,n.createElementBlock)("span",ce,"Diblokir")):(0,n.createCommentVNode)("",!0),"Reject"==t.status?((0,n.openBlock)(),(0,n.createElementBlock)("span",de,"Direject")):(0,n.createCommentVNode)("",!0)])])])})),128))])])])])])]),(0,n.createVNode)(he,{ref:"ferModalFilterTanggalDashboard"},null,512)])}]])}}]);