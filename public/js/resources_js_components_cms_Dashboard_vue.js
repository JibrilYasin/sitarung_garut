"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_cms_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/Dashboard.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/Dashboard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilterTanggalDashbaord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterTanggalDashbaord */ "./resources/js/components/cms/FilterTanggalDashbaord.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DashboardPage",
  props: ["title"],
  components: {
    modalFilter: _FilterTanggalDashbaord__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      startdateDashbaord: "",
      enddateDashbaord: "",
      baseurl: baseurl,
      imagepath: imagepath,
      getDataKecamatan: {},
      getDesa: {},
      getDataStatistikPermohonan: {},
      map: null,
      zoom: 10,
      center: [-7.422231311992428, 107.78223470459028],
      osm: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '© OpenStreetMap'
      }),
      gStreet: L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      }),
      rbiMap: L.tileLayer('https://portal.ina-sdi.or.id/arcgis/rest/services/RBI/Basemap/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; https://portal.ina-sdi.or.id/arcgis/rest/services/RBI/Basemap/MapServer/tile/{z}/{y}/{x} Contributors',
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      }),
      grayscaleMap: L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 20
      }),
      gSatelliteMap: L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        attribution: '&copy; <a href="https://maps.google.com">GoogleMap</a> Contributors',
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      }),
      googleHybrid: L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      }),
      typePolaRuang: ["Danau/Situ", "Kaw. Rawan Bencana Banjir", "Kaw. Cagar Alam dan Cagar Alam Laut", "Perlindungan Geologi (Karst)", "Hutan Mangrove", "Kawasan Sempadan Situ", "Kaw. Resapan Air", "Kaw. Hutan Produksi Terbatas", "Kawasan Hutan Rakyat", "Kawasan Industri", "Kawasan Pariwisata", "Kawasan Perkebunan", "Kawasan Permukiman Perdesaan", "Kawasan Pertanian Lahan Basah", "Ruang Terbuka Hijau", "Sungai", 'Kaw. Hutan Produksi Tetap', 'Kaw. Rawan Bencana Gunung Api I', 'Kaw. Rawan Bencana Gunung Api II', 'Kaw. Rawan Bencana Gunung Api III', 'Kaw. Rawan Gerakan Tanah Menengah', 'Kaw. Rawan Gerakan Tanah Tinggi', 'Kaw. Taman Buru', 'Kaw. Taman Wisata Alam dan Taman Wisata Laut', 'Kawasan Hutan Lindung', 'Kawasan Permukiman Perkotaan', 'Kawasan Pertanian Lahan Kering', 'Sempadan Pantai', 'Sempadan Sungai'],
      boundMap: false
    };
  },
  created: function created() {
    this.$store.dispatch("setTitleCMS", this.$props.title);
    this.map = null;
    this.boundMap = false;
    this.defDate();
    this.loadDistricts();
    this.loadMap();
    this.loadStatistik();
  },
  mounted: function mounted() {
    var self = this;
    $("#kecamatanDashbaordColumn").addClass("selectpicker");
    $("#desaDashbaordColumn").addClass("selectpicker");
    setTimeout(function () {
      $("#kecamatanDashbaordColumn").selectpicker("refresh");
      $("#kecamatanDashbaordColumn").val("").selectpicker("refresh");
      $("#desaDashbaordColumn").selectpicker("refresh");
      $("#desaDashbaordColumn").val("").selectpicker("refresh");
    }, 50);
    $(document).ready(function () {
      $(function () {
        $(".selectpicker").selectpicker();
        $("#startdateDashbaord").datepicker({
          clearBtn: true,
          useCurrent: true,
          autoclose: true,
          endDate: "0d",
          format: "yyyy-mm-dd"
        }).on("changeDate", function (e) {
          self.startdateDashbaord = $("#startdateDashbaord").val();
          $("#enddateDashbaord").datepicker("setStartDate", self.startdateDashbaord);
        });
        $("#enddateDashbaord").datepicker({
          clearBtn: true,
          useCurrent: true,
          autoclose: true,
          startDate: self.startdateDashbaord,
          endDate: "0d",
          format: "yyyy-mm-dd"
        }).on("changeDate", function (e) {
          self.enddateDashbaord = $("#enddateDashbaord").val();
        });
      });
    });
  },
  methods: {
    defDate: function defDate() {
      this.startdateDashbaord = moment(new Date()).startOf("month").format("YYYY-MM-DD");
      this.enddateDashbaord = moment(new Date()).format("YYYY-MM-DD");
    },
    loadDistricts: function loadDistricts() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$isLoading(true);
                window.axios.defaults.headers.common["Authorization"] = "Bearer ".concat(_this.$store.state.setTokenCMS);
                _context.next = 4;
                return axios.post(baseurl + "/api/permohonan/listdistrict", {
                  headers: {
                    Accept: "application/json"
                  }
                }).then(function (response) {
                  _this.getDataKecamatan = response.data;
                  setTimeout(function () {
                    $("#kecamatanDashbaordColumn").selectpicker("refresh");
                  }, 50);
                  _this.$isLoading(false);
                })["catch"](function (error) {
                  _this.$isLoading(false);
                  _this.$store.dispatch("removeDispatchCMS", {
                    self: _this
                  });
                });
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    loadDesa: function loadDesa() {
      var _this2 = this;
      this.$isLoading(true);
      $("#desaDashbaordColumn").val('');
      this.getDesa = {};
      var obj = new Object();
      obj.kecamatan = $("#kecamatanDashbaordColumn").val();
      window.axios.defaults.headers.common["Authorization"] = "Bearer ".concat(this.$store.state.setTokenCMS);
      axios.post(baseurl + "/api/permohonan/listdesa", obj, {
        headers: {
          Accept: "application/json"
        }
      }).then(function (response) {
        _this2.getDesa = response.data;
        setTimeout(function () {
          $("#desaDashbaordColumn").selectpicker("refresh");
        }, 50);
        _this2.$isLoading(false);
      })["catch"](function (error) {
        _this2.$isLoading(false);
        _this2.$store.dispatch("removeDispatchCMS", {
          self: _this2
        });
      });
    },
    loadStatistik: function loadStatistik() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var action, obj;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.$isLoading(true);
                action = baseurl + "/api/admin/dashboard";
                obj = _this3.getObj();
                window.axios.defaults.headers.common["Authorization"] = "Bearer ".concat(_this3.$store.state.setTokenCMS);
                _context2.next = 6;
                return axios.post(action, obj, {
                  headers: {
                    Accept: "application/json"
                  }
                }).then(function (response) {
                  _this3.getDataStatistikPermohonan = response.data;
                  _this3.$isLoading(false);
                })["catch"](function (error) {
                  _this3.$isLoading(false);
                  _this3.$store.dispatch("removeDispatchCMS", {
                    self: _this3
                  });
                });
              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    loadMap: function loadMap() {
      var _arguments = arguments,
        _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var param, action, obj;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                param = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : '';
                _this4.$isLoading(true);
                action = baseurl + "/api/map";
                obj = new Object();
                if (param == 'empty') {
                  $("#kecamatanDashbaordColumn").val("").selectpicker("refresh");
                  $("#desaDashbaordColumn").val("").selectpicker("refresh");
                }
                obj.kecamatan = $("#kecamatanDashbaordColumn").val();
                obj.desa = $("#desaDashbaordColumn").val();
                window.axios.defaults.headers.common["Authorization"] = "Bearer ".concat(_this4.$store.state.setTokenCMS);
                _context3.next = 10;
                return axios.post(action, obj, {
                  headers: {
                    Accept: "application/json"
                  }
                }).then(function (response) {
                  var self = _this4;
                  if (_this4.map) {
                    _this4.map.remove();
                  }
                  _this4.map = new L.Map("dashboardMap", {
                    layers: [_this4.googleHybrid],
                    center: _this4.center
                  });
                  var baseLayers = {
                    "Google Street": _this4.gStreet,
                    "Google Satellite": _this4.gSatelliteMap,
                    "Google Hybrid": _this4.googleHybrid,
                    //"Google Terrain": this.googleTerrain,
                    "Hitam Putih": _this4.grayscaleMap,
                    "Rupa Bumi Indonesia": _this4.rbiMap
                  };
                  _this4.map.setView(_this4.center, 10);
                  L.control.layers(baseLayers).addTo(_this4.map);
                  var myStyle = {
                    "color": "#ff7800",
                    "fillColor": "#ff7800",
                    "weight": 1,
                    "opacity": 1,
                    "fillOpacity": 0.4
                  };
                  var geojsonFeature = response.data;
                  var jsonData = L.geoJSON(geojsonFeature, {
                    style: function style(feature) {
                      return myStyle;
                    },
                    onEachFeature: function onEachFeature(feature, layer) {
                      if ($("#kecamatanDashbaordColumn").val() != '' || $("#desaDashbaordColumn").val() == '') {
                        layer.bindTooltip(feature.properties.nama_kecamatan);
                      }
                      if ($("#kecamatanDashbaordColumn").val() != '' || $("#desaDashbaordColumn").val() != '') {
                        layer.bindTooltip(feature.properties.nama_desa);
                      }
                      // layer.on('click', function () {
                      //   self.showDistrictsModal(feature.properties.nama_kecamatan)
                      // });
                    }
                  }).addTo(_this4.map);
                  _this4.loadPolygon();
                  if (_this4.boundMap == true) {
                    setTimeout(function () {
                      _this4.map.fitBounds(jsonData.getBounds());
                    }, 100);
                  }
                  _this4.$isLoading(false);
                })["catch"](function (error) {
                  _this4.$store.dispatch("removeDispatchCMS", {
                    self: _this4
                  });
                  _this4.$isLoading(false);
                });
              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    loadPolygon: function loadPolygon() {
      var _this5 = this;
      this.$isLoading(true);
      var action = baseurl + "/api/permohonan/polygon";
      var obj = this.getObj();
      obj.kecamatan = $("#kecamatanDashbaordColumn").val();
      obj.desa = $("#desaDashbaordColumn").val();
      window.axios.defaults.headers.common["Authorization"] = "Bearer ".concat(this.$store.state.setTokenCMS);
      axios.post(action, obj, {
        headers: {
          Accept: "application/json"
        }
      }).then(function (response) {
        var self = _this5;
        L.geoJSON(response.data, {
          style: function style(feature) {
            return {
              color: feature.properties.status_hex,
              fillColor: feature.properties.status_hex,
              weight: 1,
              opacity: 1,
              fillOpacity: 0.8
            };
          },
          onEachFeature: function onEachFeature(feature, layer) {
            if ($("#kecamatanDashbaordColumn").val() != '' || $("#desaDashbaordColumn").val() != '') {
              layer.bindTooltip("Invoice : " + feature.properties.invoice, {
                permanent: true
              });
            }
          }
        }).addTo(_this5.map);
        _this5.$isLoading(false);
      })["catch"](function (error) {
        _this5.$isLoading(false);
        _this5.$store.dispatch("removeDispatchCMS", {
          self: _this5
        });
      });
    },
    getObj: function getObj() {
      var obj = new Object();
      obj.startdate = this.startdateDashbaord;
      obj.enddate = this.enddateDashbaord;
      // End
      return obj;
    },
    showFilterModal: function showFilterModal() {
      var _this6 = this;
      this.$nextTick(function () {
        _this6.$refs.ferModalFilterTanggalDashboard.showModal();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/FilterTanggalDashbaord.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/FilterTanggalDashbaord.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FilterTanggalDashboard',
  methods: {
    showModal: function showModal() {
      $("#filterTanggalDashboardModal").modal('show');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/Dashboard.vue?vue&type=template&id=1ded9df3":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/Dashboard.vue?vue&type=template&id=1ded9df3 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row"
};
var _hoisted_2 = {
  "class": "col-lg-8 mb-lg-0 mb-4"
};
var _hoisted_3 = {
  "class": "card z-index-2 h-100"
};
var _hoisted_4 = {
  "class": "card-header d-flex align-items-center justify-content-between pb-0"
};
var _hoisted_5 = {
  "class": "card-title mb-0"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "text-capitalize"
}, "Informasi Sebaran Lokasi Permohonan", -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "text-muted"
};
var _hoisted_8 = {
  "class": "font-weight-bold"
};
var _hoisted_9 = {
  "class": "btn-group"
};
var _hoisted_10 = ["value"];
var _hoisted_11 = ["value"];
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-body p-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  style: {
    "height": "100vh"
  },
  id: "dashboardMap"
})], -1 /* HOISTED */);
var _hoisted_13 = {
  "class": "col-lg-4"
};
var _hoisted_14 = {
  "class": "card mb-3"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header pb-0 p-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "mb-0"
}, "Filter")], -1 /* HOISTED */);
var _hoisted_16 = {
  "class": "card-body p-3"
};
var _hoisted_17 = {
  "class": "row"
};
var _hoisted_18 = {
  "class": "col-md-6"
};
var _hoisted_19 = {
  "class": "col-md-6"
};
var _hoisted_20 = {
  "class": "card mb-3"
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header pb-0 p-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "mb-0"
}, "Statistik Permohonan")], -1 /* HOISTED */);
var _hoisted_22 = {
  "class": "card-body p-3"
};
var _hoisted_23 = {
  "class": "list-group"
};
var _hoisted_24 = {
  "class": "d-flex align-items-center"
};
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-street-view text-white opacity-10",
  style: {
    "font-size": "1rem"
  }
}, null, -1 /* HOISTED */);
var _hoisted_26 = [_hoisted_25];
var _hoisted_27 = {
  "class": "d-flex flex-column"
};
var _hoisted_28 = {
  "class": "mb-1 text-dark text-sm"
};
var _hoisted_29 = {
  "class": "text-xs"
};
var _hoisted_30 = {
  "class": "font-weight-bold"
};
var _hoisted_31 = {
  "class": "card"
};
var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header pb-0 p-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "mb-0"
}, "Permohonan Terbaru")], -1 /* HOISTED */);
var _hoisted_33 = {
  "class": "card-body p-3"
};
var _hoisted_34 = {
  "class": "table-responsive"
};
var _hoisted_35 = {
  "class": "table align-items-center"
};
var _hoisted_36 = {
  "class": "align-middle text-sm"
};
var _hoisted_37 = {
  "class": "col"
};
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-xs font-weight-bold mb-0"
}, "Kode Permohonan:", -1 /* HOISTED */);
var _hoisted_39 = {
  "class": "text-xs mb-0"
};
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-xs font-weight-bold mb-0"
}, "Nama Pemohon:", -1 /* HOISTED */);
var _hoisted_41 = {
  "class": "text-xs mb-0"
};
var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-xs font-weight-bold mb-0"
}, "Tanggal Permohonan:", -1 /* HOISTED */);
var _hoisted_43 = {
  "class": "text-xs mb-0"
};
var _hoisted_44 = {
  "class": "card"
};
var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header pb-0 p-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "mb-0"
}, "Pemohon Terbaru")], -1 /* HOISTED */);
var _hoisted_46 = {
  "class": "card-body p-3"
};
var _hoisted_47 = {
  "class": "table-responsive"
};
var _hoisted_48 = {
  "class": "table align-items-center"
};
var _hoisted_49 = {
  "class": "align-middle text-sm"
};
var _hoisted_50 = {
  "class": "col"
};
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-xs font-weight-bold mb-0"
}, "Nama:", -1 /* HOISTED */);
var _hoisted_52 = {
  "class": "text-xs mb-0"
};
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-xs font-weight-bold mb-0"
}, "Tanggal Daftar:", -1 /* HOISTED */);
var _hoisted_54 = {
  "class": "text-xs mb-0"
};
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-xs font-weight-bold mb-0"
}, "Status:", -1 /* HOISTED */);
var _hoisted_56 = {
  key: 0,
  "class": "badge badge-pill badge-md w-100 bg-gradient-dark",
  style: {
    "font-size": ".6rem"
  }
};
var _hoisted_57 = {
  key: 1,
  "class": "badge badge-pill badge-md w-100 bg-gradient-info",
  style: {
    "font-size": ".6rem"
  }
};
var _hoisted_58 = {
  key: 2,
  "class": "badge badge-pill badge-md w-100 bg-gradient-success",
  style: {
    "font-size": ".6rem"
  }
};
var _hoisted_59 = {
  key: 3,
  "class": "badge badge-pill badge-md w-100 bg-gradient-warning",
  style: {
    "font-size": ".6rem"
  }
};
var _hoisted_60 = {
  key: 4,
  "class": "badge badge-pill badge-md w-100 bg-gradient-danger",
  style: {
    "font-size": ".6rem"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  var _component_modalFilter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("modalFilter");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", _hoisted_8, "Total " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.getDataStatistikPermohonan['totalpermohonan']) + " Lokasi", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" , "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, "Periode : " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$filters.formatDateOnly($data.startdateDashbaord)) + " s/d " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$filters.formatDateOnly($data.enddateDashbaord)), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "kecamatanDashbaordColumn",
    "data-live-search": "true",
    "data-size": "8",
    "class": "form-control",
    title: "Kecamatan",
    onChange: _cache[0] || (_cache[0] = function ($event) {
      _this.boundMap = true;
      $options.loadDesa();
      $options.loadMap();
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.getDataKecamatan, function (value) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: value['id'],
      value: value['nama_kecamatan']
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value['nama_kecamatan']), 9 /* TEXT, PROPS */, _hoisted_10);
  }), 128 /* KEYED_FRAGMENT */))], 32 /* HYDRATE_EVENTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "desaDashbaordColumn",
    "data-live-search": "true",
    "data-size": "8",
    "class": "form-control ms-2",
    title: "Desa",
    onChange: _cache[1] || (_cache[1] = function ($event) {
      _this.boundMap = true;
      $options.loadMap();
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.getDesa, function (value) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: value['id'],
      value: value['DESA']
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value['DESA']), 9 /* TEXT, PROPS */, _hoisted_11);
  }), 128 /* KEYED_FRAGMENT */))], 32 /* HYDRATE_EVENTS */)])]), _hoisted_12])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-block bg-gradient-info w-100",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.showFilterModal();
    })
  }, "Filter Tanggal")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/admin",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.$router.go();
    }),
    "class": "btn btn-block bg-gradient-success w-100"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Refresh Halaman ")];
    }),
    _: 1 /* STABLE */
  })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_23, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.getDataStatistikPermohonan['statistikpermohonan'], function (value) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: value['id'],
      "class": "list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["icon icon-shape icon-sm me-3 shadow text-center", value['status_color']])
    }, _hoisted_26, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value['status_title']), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value['total_permohonan']) + " Pengajuan", 1 /* TEXT */)])])])]);
  }), 128 /* KEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.getDataStatistikPermohonan['latestpermohonan'], function (value) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: value['id']
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value['invoice']), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value['name']), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$filters.formatDate(value['created_at'])), 1 /* TEXT */)])])]);
  }), 128 /* KEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.getDataStatistikPermohonan['latestpemohon'], function (value) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: value['id']
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value['name']), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$filters.formatDate(value['created_at'])), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_55, value['status'] == 'New' && value['notes'] != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_56, "Update Profil")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), value['status'] == 'New' && value['notes'] == '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_57, "Pendaftaran Baru")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), value['status'] == 'Approve' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_58, "Disetujui")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), value['status'] == 'Blokir' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_59, "Diblokir")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), value['status'] == 'Reject' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_60, "Direject")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]);
  }), 128 /* KEYED_FRAGMENT */))])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal Filter Tanggal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_modalFilter, {
    ref: "ferModalFilterTanggalDashboard"
  }, null, 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End ")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/FilterTanggalDashbaord.vue?vue&type=template&id=2282e026":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/FilterTanggalDashbaord.vue?vue&type=template&id=2282e026 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "modal fade",
  id: "filterTanggalDashboardModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "filterTanggalDashboardModalLabel",
  "aria-hidden": "true",
  "data-bs-backdrop": "static"
};
var _hoisted_2 = {
  "class": "modal-dialog modal-dialog-centered",
  role: "document"
};
var _hoisted_3 = {
  "class": "modal-content"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "modal-title",
  id: "filterTanggalDashboardModalLabel"
}, "Filter Tanggal"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-hidden": "true"
}, "×")])], -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "modal-body"
};
var _hoisted_6 = {
  "class": "row"
};
var _hoisted_7 = {
  "class": "col-md-6"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Tanggal Awal", -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "input-group date datepicker"
};
var _hoisted_10 = ["value"];
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fs-4 bx bx-calendar-week"
})], -1 /* HOISTED */);
var _hoisted_12 = {
  "class": "col-md-6"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Tanggal Akhir", -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "input-group date datepicker"
};
var _hoisted_15 = ["value"];
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fs-4 bx bx-calendar-week"
})], -1 /* HOISTED */);
var _hoisted_17 = {
  "class": "modal-footer"
};
var _hoisted_18 = {
  "class": "btn-group"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn bg-gradient-secondary",
  "data-bs-dismiss": "modal"
}, "Close", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    id: "startdateDashbaord",
    value: _ctx.$parent.startdateDashbaord,
    readonly: ""
  }, null, 8 /* PROPS */, _hoisted_10), _hoisted_11])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    id: "enddateDashbaord",
    value: _ctx.$parent.enddateDashbaord,
    readonly: ""
  }, null, 8 /* PROPS */, _hoisted_15), _hoisted_16])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn bg-gradient-primary",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      _ctx.$parent.boundMap = false;
      _ctx.$parent.loadStatistik();
      _ctx.$parent.loadMap('empty');
    }),
    "data-bs-dismiss": "modal"
  }, "Submit"), _hoisted_19])])])])]);
}

/***/ }),

/***/ "./resources/js/components/cms/Dashboard.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/cms/Dashboard.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1ded9df3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1ded9df3 */ "./resources/js/components/cms/Dashboard.vue?vue&type=template&id=1ded9df3");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ "./resources/js/components/cms/Dashboard.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_saktiyasin_Documents_webapp_projects_sitarung_garut_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_saktiyasin_Documents_webapp_projects_sitarung_garut_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Dashboard_vue_vue_type_template_id_1ded9df3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/cms/Dashboard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/cms/FilterTanggalDashbaord.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/cms/FilterTanggalDashbaord.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilterTanggalDashbaord_vue_vue_type_template_id_2282e026__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterTanggalDashbaord.vue?vue&type=template&id=2282e026 */ "./resources/js/components/cms/FilterTanggalDashbaord.vue?vue&type=template&id=2282e026");
/* harmony import */ var _FilterTanggalDashbaord_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterTanggalDashbaord.vue?vue&type=script&lang=js */ "./resources/js/components/cms/FilterTanggalDashbaord.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_saktiyasin_Documents_webapp_projects_sitarung_garut_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_saktiyasin_Documents_webapp_projects_sitarung_garut_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FilterTanggalDashbaord_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FilterTanggalDashbaord_vue_vue_type_template_id_2282e026__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/cms/FilterTanggalDashbaord.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/cms/Dashboard.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/cms/Dashboard.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/Dashboard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/cms/FilterTanggalDashbaord.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/cms/FilterTanggalDashbaord.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FilterTanggalDashbaord_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FilterTanggalDashbaord_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FilterTanggalDashbaord.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/FilterTanggalDashbaord.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/cms/Dashboard.vue?vue&type=template&id=1ded9df3":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/cms/Dashboard.vue?vue&type=template&id=1ded9df3 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_1ded9df3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_1ded9df3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=template&id=1ded9df3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/Dashboard.vue?vue&type=template&id=1ded9df3");


/***/ }),

/***/ "./resources/js/components/cms/FilterTanggalDashbaord.vue?vue&type=template&id=2282e026":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/cms/FilterTanggalDashbaord.vue?vue&type=template&id=2282e026 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FilterTanggalDashbaord_vue_vue_type_template_id_2282e026__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FilterTanggalDashbaord_vue_vue_type_template_id_2282e026__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FilterTanggalDashbaord.vue?vue&type=template&id=2282e026 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/FilterTanggalDashbaord.vue?vue&type=template&id=2282e026");


/***/ })

}]);