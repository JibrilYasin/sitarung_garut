/*! For license information please see 810.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[810],{4810:(t,e,r)=>{r.r(e),r.d(e,{default:()=>T});var o=r(821),n={class:"row"},a=(0,o.createElementVNode)("div",{class:"col-lg-8 mb-lg-0 mb-4"},[(0,o.createElementVNode)("div",{style:{height:"100vh"},id:"dashboardMap"})],-1),i={class:"col-lg-4"},c={class:"card mb-3"},s=(0,o.createElementVNode)("div",{class:"card-header pb-0 p-3"},[(0,o.createElementVNode)("h6",{class:"mb-0"},"Statistik Permohonan")],-1),l={class:"card-body p-3"},u={class:"list-group"},d={class:"d-flex align-items-center"},h=[(0,o.createElementVNode)("i",{class:"bx bx-street-view text-white opacity-10",style:{"font-size":"1rem"}},null,-1)],p={class:"d-flex flex-column"},m={class:"mb-1 text-dark text-sm"},f={class:"text-xs"},y={class:"font-weight-bold"},v={class:"card"},g=(0,o.createElementVNode)("div",{class:"card-header pb-0 p-3"},[(0,o.createElementVNode)("h6",{class:"mb-0"},"Permohonan Terbaru")],-1),b={class:"card-body p-3"},w={class:"table align-items-center"},x={class:"align-middle text-sm"},E={class:"col"},N=(0,o.createElementVNode)("p",{class:"text-xs font-weight-bold mb-0"},"Kode Permohonan:",-1),S={class:"text-sm mb-0"},k=(0,o.createElementVNode)("p",{class:"text-xs font-weight-bold mb-0"},"Nama Pemohon:",-1),V={class:"text-sm mb-0"},M=(0,o.createElementVNode)("p",{class:"text-xs font-weight-bold mb-0"},"Kecamatan:",-1),O={class:"text-sm mb-0"};function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function _(){_=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new S(n||[]);return o(i,"_invoke",{value:x(t,r,c)}),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d={};function h(){}function p(){}function m(){}var f={};s(f,a,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(k([])));v&&v!==e&&r.call(v,a)&&(f=v);var g=m.prototype=h.prototype=Object.create(f);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function n(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==P(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function x(t,e,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return V()}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var s=u(t,e,r);if("normal"===s.type){if(o=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o="completed",r.method="throw",r.arg=s.arg)}}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var n=o.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,n=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:V}}function V(){return{value:void 0,done:!0}}return p.prototype=m,o(g,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:p,configurable:!0}),p.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),s(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,o,n,a){void 0===a&&(a=Promise);var i=new w(l(e,r,o,n),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(g),s(g,c,"Generator"),s(g,a,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var o in e)r.push(o);return r.reverse(),function t(){for(;r.length;){var o=r.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return i.type="throw",i.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;N(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function j(t,e,r,o,n,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(o,n)}function B(t){return function(){var e=this,r=arguments;return new Promise((function(o,n){var a=t.apply(e,r);function i(t){j(a,o,n,i,c,"next",t)}function c(t){j(a,o,n,i,c,"throw",t)}i(void 0)}))}}const $={name:"DashboardPage",props:["title"],data:function(){return{baseurl,imagepath,getDataStatistikPermohonan:{},map:null,zoom:10,center:[-7.3650327,107.5295489],osm:L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:20,attribution:"© OpenStreetMap"}),rbiMap:L.tileLayer("https://portal.ina-sdi.or.id/arcgis/rest/services/RBI/Basemap/MapServer/tile/{z}/{y}/{x}",{attribution:"&copy; https://portal.ina-sdi.or.id/arcgis/rest/services/RBI/Basemap/MapServer/tile/{z}/{y}/{x} Contributors",maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}),gSatelliteMap:L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",{attribution:'&copy; <a href="http://maps.google.com">GoogleMap</a> Contributors',maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}),googleHybrid:L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]})}},created:function(){this.$store.dispatch("setTitleCMS",this.$props.title),this.loadMap(),this.loadStatistik()},mounted:function(){},methods:{loadStatistik:function(){var t=this;return B(_().mark((function e(){var r;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$isLoading(!0),r=baseurl+"/api/admin/dashboard",window.axios.defaults.headers.common.Authorization="Bearer ".concat(t.$store.state.setTokenCMS),e.next=5,axios.post(r,{headers:{Accept:"application/json"}}).then((function(e){t.getDataStatistikPermohonan=e.data,t.$isLoading(!1)})).catch((function(e){t.$isLoading(!1),t.$store.dispatch("removeDispatchCMSCMS",{self:t})}));case 5:case"end":return e.stop()}}),e)})))()},loadMap:function(){var t=this;return B(_().mark((function e(){var r,o;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$isLoading(!0),t.map&&t.map.remove(),r=baseurl+"/api/map",o=new Object,window.axios.defaults.headers.common.Authorization="Bearer ".concat(t.$store.state.setTokenCMS),e.next=7,axios.post(r,o,{headers:{Accept:"application/json"}}).then((function(e){t.map=new L.Map("dashboardMap",{layers:[t.gSatelliteMap],center:t.center,zoom:13});var r={OpenStreetMap:t.osm,"Rupa Bumi Indonesia":t.rbiMap,"Google Satellite":t.gSatelliteMap,"Google Hybrid":t.googleHybrid};t.map.setView(t.center,10),L.control.layers(r).addTo(t.map);var o={color:"#FFF",fillColor:"#FFF",weight:.5,opacity:1,fillOpacity:.2},n=e.data;L.geoJSON(n,{style:function(t){return o},onEachFeature:function(t,e){e.bindTooltip("Kec : "+t.properties.nama_kecamatan)}}).addTo(t.map);setTimeout((function(){t.loadPolygon()}),500),t.$isLoading(!1)})).catch((function(e){t.$store.dispatch("removeDispatchCMS",{self:t}),t.$isLoading(!1)}));case 7:case"end":return e.stop()}}),e)})))()},loadPolygon:function(){var t=this;this.$isLoading(!0);var e=baseurl+"/api/admin/polygon";window.axios.defaults.headers.common.Authorization="Bearer ".concat(this.$store.state.setTokenCMS),axios.post(e,{headers:{Accept:"application/json"}}).then((function(e){L.geoJSON(e.data,{style:function(t){return{color:t.properties.status_hex,fillColor:t.properties.status_hex,weight:1,opacity:1,fillOpacity:.8}},onEachFeature:function(t,e){e.bindTooltip("Invoice : "+t.properties.invoice)}}).addTo(t.map),t.$isLoading(!1)})).catch((function(e){t.$isLoading(!1),t.$store.dispatch("removeDispatchCMS",{self:t})}))}}};const T=(0,r(3744).Z)($,[["render",function(t,e,r,L,P,_){return(0,o.openBlock)(),(0,o.createElementBlock)("div",n,[a,(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("div",c,[s,(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("ul",u,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(P.getDataStatistikPermohonan.statistikpermohonan,(function(t){return(0,o.openBlock)(),(0,o.createElementBlock)("li",{key:t.id,class:"list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"},[(0,o.createElementVNode)("div",d,[(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(["icon icon-shape icon-sm me-3 shadow text-center",t.status_color])},h,2),(0,o.createElementVNode)("div",p,[(0,o.createElementVNode)("h6",m,(0,o.toDisplayString)(t.status_title),1),(0,o.createElementVNode)("span",f,[(0,o.createElementVNode)("span",y,(0,o.toDisplayString)(t.total_permohonan)+" Pengajuan",1)])])])])})),128))])])]),(0,o.createElementVNode)("div",v,[g,(0,o.createElementVNode)("div",b,[(0,o.createElementVNode)("table",w,[(0,o.createElementVNode)("tbody",null,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(P.getDataStatistikPermohonan.latestpermohonan,(function(t){return(0,o.openBlock)(),(0,o.createElementBlock)("tr",{key:t.id},[(0,o.createElementVNode)("td",x,[(0,o.createElementVNode)("div",E,[N,(0,o.createElementVNode)("h6",S,(0,o.toDisplayString)(t.invoice),1)])]),(0,o.createElementVNode)("td",null,[(0,o.createElementVNode)("div",null,[k,(0,o.createElementVNode)("h6",V,(0,o.toDisplayString)(t.name),1)])]),(0,o.createElementVNode)("td",null,[(0,o.createElementVNode)("div",null,[M,(0,o.createElementVNode)("h6",O,(0,o.toDisplayString)(t.kecamatan),1)])])])})),128))])])])])])])}]])}}]);