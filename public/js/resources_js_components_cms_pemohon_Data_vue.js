"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_cms_pemohon_Data_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/pemohon/Data.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/pemohon/Data.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-vue-pagination */ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.es.js");
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/index.mjs");
/* harmony import */ var _Detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Detail */ "./resources/js/components/cms/pemohon/Detail.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PemohonPage",
  props: ["title"],
  data: function data() {
    return {
      getList: {},
      currentpage: 0
    };
  },
  components: {
    modalDetail: _Detail__WEBPACK_IMPORTED_MODULE_2__["default"],
    'Pagination': laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup() {
    var toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_1__.useToast)();
    return {
      toast: toast
    };
  },
  created: function created() {
    this.$store.dispatch("setTitleCMS", this.$props.title);
    this.loadList();
  },
  methods: {
    loadList: function loadList(page) {
      var _this = this;
      this.$isLoading(true);
      var obj = this.getObj();
      window.axios.defaults.headers.common["Authorization"] = "Bearer ".concat(this.$store.state.setTokenCMS);
      axios.post(baseurl + "/api/admin/pemohon/list?page=" + page, obj).then(function (response) {
        _this.getList = response.data;
        if (_this.getList.current_page == 1) {
          _this.currentpage = 0;
        } else {
          _this.currentpage = (_this.getList.current_page - 1) * 10;
        }
        _this.$isLoading(false);
      })["catch"](function (error) {
        _this.$isLoading(false);
        _this.$store.dispatch("removeDispatchCMS", {
          self: _this
        });
      });
    },
    getObj: function getObj() {
      var obj = new Object();
      // Filter
      obj.namePemohonColumn = $("#namePemohonColumn").val();
      obj.emailPemohonColumn = $("#emailPemohonColumn").val();
      obj.phonePemohonColumn = $("#phonePemohonColumn").val();
      obj.registerViaColumn = $("#registerViaColumn").val();
      obj.userStatusColumn = $("#userStatusColumn").val();
      // End
      return obj;
    },
    showStatusPermohonan: function showStatusPermohonan(data) {
      var _this2 = this;
      this.$nextTick(function () {
        _this2.$refs.refModalDetailPemohon.showModal(data);
      });
    },
    setMatch: function setMatch(current, elem) {
      if (current) {
        var reggie = new RegExp($("#" + elem).val(), "ig");
        var found = current.search(reggie) !== -1;
        return !found ? current : current.replace(reggie, "<code>" + $("#" + elem).val() + "</code>");
      } else {
        return "-";
      }
    },
    onEnter: function onEnter() {
      this.loadList();
    },
    resetFilter: function resetFilter() {
      var _this3 = this;
      $(".filtertext").val("");
      $('.form-control').val('').selectpicker('refresh');
      setTimeout(function () {
        _this3.loadList();
      }, 50);
    },
    deleteData: function deleteData(data) {
      var _this4 = this;
      this.$swal({
        title: 'Konfrimasi',
        text: "Anda akan menghapus baris ini.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Lanjutkan',
        cancelButtonText: "Batal"
      }).then(function (result) {
        if (result.isConfirmed) {
          // Action Here
          _this4.$isLoading(true);
          var action = baseurl + "/api/admin/pemohon/destroy";
          var obj = new Object();
          obj.data = data;
          window.axios.defaults.headers.common["Authorization"] = "Bearer ".concat(_this4.$store.state.setTokenCMS);
          axios.post(action, obj, {
            headers: {
              Accept: "application/json"
            }
          }).then(function (response) {
            var resp = response.data;
            _this4.toast(resp.message, {
              type: resp.status,
              timeout: 3000
            });
            if (resp.status == "success") {
              _this4.loadList();
            }
            _this4.$isLoading(false);
          })["catch"](function (error) {
            _this4.$isLoading(false);
            _this4.$store.dispatch("removeDispatchCMS", {
              self: _this4
            });
          });
          // End
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/pemohon/Detail.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/pemohon/Detail.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/index.mjs");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ModalDetailPemohon',
  data: function data() {
    return {
      getData: {},
      formErrors: {},
      ktpProfile: '',
      npwpProfile: '',
      notes: false,
      groupBtn: true,
      groupBtnHide: false
    };
  },
  setup: function setup() {
    var toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_0__.useToast)();
    return {
      toast: toast
    };
  },
  methods: {
    showModal: function showModal(data) {
      this.getData = data;
      this.formErrors = {};
      if (data.ktp) {
        this.ktpProfile = imagepath + '/' + data.ktp;
      } else {
        this.ktpProfile = imagepath + 'noimage.png';
      }
      if (data.npwp) {
        this.npwpProfile = imagepath + '/' + data.npwp;
      } else {
        this.npwpProfile = imagepath + 'noimage.png';
      }
      this.groupBtn = true;
      this.groupBtnHide = false;
      if (data['notes']) {
        this.notes = true;
        setTimeout(function () {
          $("#notesPemohonInput").val(data['notes']);
          $("#notesPemohonInput").prop('readonly', true);
        }, 50);
      } else {
        this.notes = false;
        setTimeout(function () {
          $("#notesPemohonInput").val('');
          $("#notesPemohonInput").prop('readonly', false);
        }, 50);
      }
      $("#detailPemohonModal").modal('show');
    },
    statusAction: function statusAction(action, status) {
      var _this = this;
      this.$swal({
        title: 'Konfrimasi',
        text: "Anda akan melakukan ".concat(action, " untuk akun ini."),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Lanjutkan',
        cancelButtonText: "Batal"
      }).then(function (result) {
        if (result.isConfirmed) {
          // Action Here
          _this.$isLoading(true);
          var _action = baseurl + "/api/admin/pemohon/approve";
          var obj = new Object();
          obj.data = _this.getData;
          obj.status = status;
          window.axios.defaults.headers.common["Authorization"] = "Bearer ".concat(_this.$store.state.setTokenCMS);
          axios.post(_action, obj, {
            headers: {
              Accept: "application/json"
            }
          }).then(function (response) {
            var resp = response.data;
            _this.toast(resp.message, {
              type: resp.status,
              timeout: 3000
            });
            if (resp.status == "success") {
              $("#detailPemohonModal").modal("hide");
              _this.$parent.loadList();
            }
            _this.$isLoading(false);
          })["catch"](function (error) {
            _this.$isLoading(false);
            if (error.response.status == 422) {
              _this.formErrors = error.response.data.errors;
            } else {
              // if (error.response.status == 401) {
              //   this.$store.dispatch("removeDispatch", { self: this });
              // }
              _this.$store.dispatch("removeDispatch", {
                self: _this
              });
            }
          });
          // End
        }
      });
    },
    openReject: function openReject() {
      this.notes = true;
      this.groupBtn = false;
      this.groupBtnHide = true;
      $("#notesPemohonInput").prop('readonly', false);
    },
    cancelReject: function cancelReject() {
      this.notes = false;
      this.groupBtn = true;
      this.groupBtnHide = false;
      $("#notesPemohonInput").val('');
    },
    rejectAction: function rejectAction() {
      var _this2 = this;
      if (this.getData['status'] == 'New') {
        var status = 'Reject';
      } else if (this.getData['status'] == 'Approve') {
        var status = 'Blokir';
      }
      this.$swal({
        title: 'Konfrimasi',
        text: "Anda akan melakukan ".concat(status, " untuk akun ini."),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Lanjutkan',
        cancelButtonText: "Batal"
      }).then(function (result) {
        if (result.isConfirmed) {
          // Action Here
          _this2.$isLoading(true);
          _this2.formErrors = {};
          var action = baseurl + "/api/admin/pemohon/reject";
          var obj = new Object();
          obj.data = _this2.getData;
          obj.status = status;
          obj.notesPemohonInput = $("#notesPemohonInput").val();
          window.axios.defaults.headers.common["Authorization"] = "Bearer ".concat(_this2.$store.state.setTokenCMS);
          axios.post(action, obj, {
            headers: {
              Accept: "application/json"
            }
          }).then(function (response) {
            var resp = response.data;
            _this2.toast(resp.message, {
              type: resp.status,
              timeout: 3000
            });
            if (resp.status == "success") {
              $("#detailPemohonModal").modal("hide");
              _this2.$parent.loadList();
            }
            _this2.$isLoading(false);
          })["catch"](function (error) {
            _this2.$isLoading(false);
            if (error.response.status == 422) {
              _this2.formErrors = error.response.data.errors;
            } else {
              // if (error.response.status == 401) {
              //   this.$store.dispatch("removeDispatch", { self: this });
              // }
              _this2.$store.dispatch("removeDispatch", {
                self: _this2
              });
            }
          });
          // End
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/pemohon/Data.vue?vue&type=template&id=7ebafdba":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/pemohon/Data.vue?vue&type=template&id=7ebafdba ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "col-lg-12 mb-lg-0 mb-4"
};
var _hoisted_3 = {
  "class": "card z-index-2 h-100"
};
var _hoisted_4 = {
  "class": "card-header pb-0 pt-3 bg-transparent"
};
var _hoisted_5 = {
  "class": "btn-group"
};
var _hoisted_6 = {
  "class": "card-body p-3"
};
var _hoisted_7 = {
  "class": "table-responsive p-0",
  style: {
    "min-height": "500px"
  }
};
var _hoisted_8 = {
  "class": "table align-items-center mb-0"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "#"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  nowrap: "",
  "class": "text-center text-uppercase text-secondary text-xxs font-weight-bolder"
}, "Aksi"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  nowrap: "",
  "class": "text-center text-uppercase text-secondary text-xxs font-weight-bolder"
}, "Tanggal Pendaftaran"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  nowrap: "",
  "class": "text-uppercase text-secondary text-xxs font-weight-bolder"
}, "Nama"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  nowrap: "",
  "class": "text-uppercase text-secondary text-xxs font-weight-bolder"
}, "Email"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  nowrap: "",
  "class": "text-uppercase text-secondary text-xxs font-weight-bolder"
}, "Telepon"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  nowrap: "",
  "class": "text-uppercase text-secondary text-xxs font-weight-bolder text-center"
}, "Daftar Via"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  nowrap: "",
  "class": "text-uppercase text-secondary text-xxs font-weight-bolder text-center"
}, "Total Permohonan"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  nowrap: "",
  "class": "text-uppercase text-secondary text-xxs font-weight-bolder text-center"
}, "Status")], -1 /* HOISTED */);
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, null, -1 /* HOISTED */);
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, null, -1 /* HOISTED */);
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, null, -1 /* HOISTED */);
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Pilih", -1 /* HOISTED */);
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Website"
}, "Website", -1 /* HOISTED */);
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Mobile"
}, "Mobile", -1 /* HOISTED */);
var _hoisted_16 = [_hoisted_13, _hoisted_14, _hoisted_15];
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, null, -1 /* HOISTED */);
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"\">Pilih</option><option value=\"New\">Pendaftaran Baru</option><option value=\"Approve\">Disetujui</option><option value=\"Blokir\">Diblokir</option><option value=\"Reject\">Direject</option>", 5);
var _hoisted_23 = [_hoisted_18];
var _hoisted_24 = {
  "class": "text-center align-top text-xs"
};
var _hoisted_25 = {
  nowrap: "",
  "class": "text-center text-xs"
};
var _hoisted_26 = {
  "class": "btn-group"
};
var _hoisted_27 = ["onClick"];
var _hoisted_28 = ["onClick"];
var _hoisted_29 = {
  key: 1,
  type: "button",
  "class": "btn btn-xs btn-default",
  disabled: ""
};
var _hoisted_30 = {
  nowrap: "",
  "class": "text-center align-top text-xs"
};
var _hoisted_31 = {
  "class": "align-top text-xs"
};
var _hoisted_32 = ["innerHTML"];
var _hoisted_33 = {
  nowrap: "",
  "class": "align-top text-xs"
};
var _hoisted_34 = ["innerHTML"];
var _hoisted_35 = {
  "class": "align-top text-xs"
};
var _hoisted_36 = ["innerHTML"];
var _hoisted_37 = {
  nowrap: "",
  "class": "align-top text-xs text-center"
};
var _hoisted_38 = {
  nowrap: "",
  "class": "align-top text-xs text-center"
};
var _hoisted_39 = {
  nowrap: "",
  "class": "align-top text-xs text-center"
};
var _hoisted_40 = {
  key: 0,
  "class": "badge badge-pill badge-md w-100 bg-gradient-dark"
};
var _hoisted_41 = {
  key: 1,
  "class": "badge badge-pill badge-md w-100 bg-gradient-info"
};
var _hoisted_42 = {
  key: 2,
  "class": "badge badge-pill badge-md w-100 bg-gradient-success"
};
var _hoisted_43 = {
  key: 3,
  "class": "badge badge-pill badge-md w-100 bg-gradient-warning"
};
var _hoisted_44 = {
  key: 4,
  "class": "badge badge-pill badge-md w-100 bg-gradient-danger"
};
var _hoisted_45 = {
  "class": "card-footer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Pagination");
  var _component_modalDetail = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("modalDetail");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-sm bg-gradient-success",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.resetFilter && $options.resetFilter.apply($options, arguments);
    })
  }, "Refresh")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_10, _hoisted_11, _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "namePemohonColumn",
    type: "text",
    "class": "filtertext form-control form-control-sm",
    placeholder: "Cari",
    onKeyup: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function () {
      return $options.onEnter && $options.onEnter.apply($options, arguments);
    }, ["enter"]))
  }, null, 32 /* HYDRATE_EVENTS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "emailPemohonColumn",
    type: "text",
    "class": "filtertext form-control form-control-sm",
    placeholder: "Cari",
    onKeyup: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function () {
      return $options.onEnter && $options.onEnter.apply($options, arguments);
    }, ["enter"]))
  }, null, 32 /* HYDRATE_EVENTS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "phonePemohonColumn",
    type: "text",
    "class": "filtertext form-control form-control-sm",
    placeholder: "Cari",
    onKeyup: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function () {
      return $options.onEnter && $options.onEnter.apply($options, arguments);
    }, ["enter"]))
  }, null, 32 /* HYDRATE_EVENTS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "registerViaColumn",
    "class": "filtertext form-select form-select-sm",
    onChange: _cache[4] || (_cache[4] = function ($event) {
      return $options.loadList();
    })
  }, _hoisted_16, 32 /* HYDRATE_EVENTS */)]), _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "userStatusColumn",
    "class": "filtertext form-select form-select-sm",
    onChange: _cache[5] || (_cache[5] = function ($event) {
      return $options.loadList();
    })
  }, _hoisted_23, 32 /* HYDRATE_EVENTS */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.getList.data, function (value, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: value.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.currentpage + (index + 1)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "class": "btn btn-xs btn-primary",
      onClick: function onClick($event) {
        return $options.showStatusPermohonan(value);
      }
    }, "Detail", 8 /* PROPS */, _hoisted_27), value['total_permohonan'] == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      type: "button",
      "class": "btn btn-xs btn-danger",
      onClick: function onClick($event) {
        return $options.deleteData(value);
      }
    }, "Hapus", 8 /* PROPS */, _hoisted_28)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_29, "Hapus"))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$filters.formatDate(value['created_at'])), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      innerHTML: $options.setMatch(value['name'].toString(), 'namePemohonColumn')
    }, null, 8 /* PROPS */, _hoisted_32)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      innerHTML: $options.setMatch(value['email'].toString(), 'emailPemohonColumn')
    }, null, 8 /* PROPS */, _hoisted_34)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      innerHTML: $options.setMatch(value['phone'].toString(), 'phonePemohonColumn')
    }, null, 8 /* PROPS */, _hoisted_36)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value['register_via']), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value['total_permohonan']), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_39, [value['status'] == 'New' && value['notes'] != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_40, "Update Profil")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), value['status'] == 'New' && value['notes'] == null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_41, "Pendaftaran Baru")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), value['status'] == 'Approve' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_42, "Disetujui")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), value['status'] == 'Blokir' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_43, "Diblokir")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), value['status'] == 'Reject' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_44, "Direject")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
  }), 128 /* KEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Pagination, {
    data: $data.getList,
    onPaginationChangePage: $options.loadList,
    limit: 1,
    "show-disabled": true
  }, null, 8 /* PROPS */, ["data", "onPaginationChangePage"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal Districts "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_modalDetail, {
    ref: "refModalDetailPemohon"
  }, null, 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End ")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/pemohon/Detail.vue?vue&type=template&id=71053ce1":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/pemohon/Detail.vue?vue&type=template&id=71053ce1 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "modal fade",
  id: "detailPemohonModal"
};
var _hoisted_2 = {
  "class": "modal-dialog modal-lg"
};
var _hoisted_3 = {
  "class": "modal-content"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"modal-header\"><h6 class=\"modal-title\">Detail Pemohon</h6><button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\"><i class=\"text-primary bx bx-x text-lg\"></i></span></button></div>", 1);
var _hoisted_5 = {
  "class": "modal-body"
};
var _hoisted_6 = {
  "class": "row mb-3"
};
var _hoisted_7 = {
  "class": "col-md-9"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label text-uppercase"
}, "Nama", -1 /* HOISTED */);
var _hoisted_9 = ["value"];
var _hoisted_10 = {
  "class": "col-md-3"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label text-uppercase"
}, "Pendaftaran Via", -1 /* HOISTED */);
var _hoisted_12 = ["value"];
var _hoisted_13 = {
  "class": "row mb-3"
};
var _hoisted_14 = {
  "class": "col-md-6"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label text-uppercase"
}, "Email", -1 /* HOISTED */);
var _hoisted_16 = ["value"];
var _hoisted_17 = {
  "class": "col-md-6"
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label text-uppercase"
}, "Phone", -1 /* HOISTED */);
var _hoisted_19 = ["value"];
var _hoisted_20 = {
  "class": "mb-3"
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label text-uppercase"
}, "Alamat", -1 /* HOISTED */);
var _hoisted_22 = {
  "class": "form-control",
  disabled: ""
};
var _hoisted_23 = {
  "class": "row mb-3"
};
var _hoisted_24 = {
  "class": "col-md-6"
};
var _hoisted_25 = {
  "class": "row"
};
var _hoisted_26 = {
  "class": "col-md-3"
};
var _hoisted_27 = ["href"];
var _hoisted_28 = {
  "class": "col-md-9"
};
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label text-uppercase"
}, "No KTP", -1 /* HOISTED */);
var _hoisted_30 = ["value"];
var _hoisted_31 = {
  "class": "col-md-6"
};
var _hoisted_32 = {
  "class": "row"
};
var _hoisted_33 = {
  "class": "col-md-3"
};
var _hoisted_34 = ["href"];
var _hoisted_35 = {
  "class": "col-md-9"
};
var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label text-uppercase"
}, "No NPWP", -1 /* HOISTED */);
var _hoisted_37 = ["value"];
var _hoisted_38 = {
  key: 0,
  "class": "mb-0"
};
var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label text-uppercase"
}, "Catatan", -1 /* HOISTED */);
var _hoisted_40 = {
  key: 0,
  "class": "invalid-feedback"
};
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-x"
}, null, -1 /* HOISTED */);
var _hoisted_42 = {
  "class": "modal-footer"
};
var _hoisted_43 = {
  key: 0,
  "class": "btn-group"
};
var _hoisted_44 = {
  key: 1,
  "class": "btn-group"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    value: $data.getData['name'],
    disabled: ""
  }, null, 8 /* PROPS */, _hoisted_9)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    value: $data.getData['register_via'],
    disabled: ""
  }, null, 8 /* PROPS */, _hoisted_12)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    value: $data.getData['email'],
    disabled: ""
  }, null, 8 /* PROPS */, _hoisted_16)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    value: $data.getData['phone'],
    disabled: ""
  }, null, 8 /* PROPS */, _hoisted_19)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.getData['address']), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $data.ktpProfile,
    "data-featherlight": "image"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "mt-2 w-100",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      backgroundImage: 'url(' + $data.ktpProfile + ')'
    }, {
      "height": "70px",
      "background-position": "center",
      "background-size": "cover"
    }])
  }, null, 4 /* STYLE */)], 8 /* PROPS */, _hoisted_27)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    value: $data.getData['ktp_no'],
    disabled: ""
  }, null, 8 /* PROPS */, _hoisted_30)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $data.npwpProfile,
    "data-featherlight": "image"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "mt-2 w-100",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      backgroundImage: 'url(' + $data.npwpProfile + ')'
    }, {
      "height": "70px",
      "background-position": "center",
      "background-size": "cover"
    }])
  }, null, 4 /* STYLE */)], 8 /* PROPS */, _hoisted_34)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    value: $data.getData['npwp_no'],
    disabled: ""
  }, null, 8 /* PROPS */, _hoisted_37)])])])]), $data.notes ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    id: "notesPemohonInput",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", $data.formErrors['notesPemohonInput'] ? 'is-invalid' : ''])
  }, null, 2 /* CLASS */), $data.formErrors['notesPemohonInput'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.formErrors['notesPemohonInput'][0]), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [$data.groupBtn ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_43, [$data.getData['status'] == 'New' || $data.getData['status'] == 'Reject' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "button",
    "class": "btn btn bg-gradient-primary mb-0",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.statusAction('Approve', 'Approve');
    })
  }, "Approve")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.getData['status'] == 'Blokir' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    type: "button",
    "class": "btn btn bg-gradient-primary mb-0",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.statusAction('UnBlock', 'Approve');
    })
  }, "Ublock")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.getData['status'] == 'Approve' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 2,
    type: "button",
    "class": "btn btn bg-gradient-warning mb-0",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.openReject('Blokir', 'Blokir');
    })
  }, "Blokir")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.getData['status'] == 'New' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 3,
    type: "button",
    "class": "btn btn bg-gradient-warning mb-0",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.openReject('Reject', 'Reject');
    })
  }, "Reject")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.groupBtnHide ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    id: "submitBlokir",
    type: "button",
    "class": "btn btn bg-gradient-danger mb-0",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.rejectAction();
    })
  }, "Submit"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    id: "submitBlokir",
    type: "button",
    "class": "btn btn bg-gradient-default mb-0",
    onClick: _cache[5] || (_cache[5] = function () {
      return $options.cancelReject && $options.cancelReject.apply($options, arguments);
    })
  }, "Kembali")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]);
}

/***/ }),

/***/ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.es.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.es.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LaravelVuePagination)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

const _sfc_main$1 = {
  emits: ["pagination-change-page"],
  props: {
    data: {
      type: Object,
      default: () => {
      }
    },
    limit: {
      type: Number,
      default: 0
    },
    showDisabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default",
      validator: (value) => {
        return ["small", "default", "large"].indexOf(value) !== -1;
      }
    },
    align: {
      type: String,
      default: "left",
      validator: (value) => {
        return ["left", "center", "right"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    isApiResource() {
      return !!this.data.meta;
    },
    currentPage() {
      return this.isApiResource ? this.data.meta.current_page : this.data.current_page;
    },
    firstPageUrl() {
      return this.isApiResource ? this.data.links.first : null;
    },
    from() {
      return this.isApiResource ? this.data.meta.from : this.data.from;
    },
    lastPage() {
      return this.isApiResource ? this.data.meta.last_page : this.data.last_page;
    },
    lastPageUrl() {
      return this.isApiResource ? this.data.links.last : null;
    },
    nextPageUrl() {
      return this.isApiResource ? this.data.links.next : this.data.next_page_url;
    },
    perPage() {
      return this.isApiResource ? this.data.meta.per_page : this.data.per_page;
    },
    prevPageUrl() {
      return this.isApiResource ? this.data.links.prev : this.data.prev_page_url;
    },
    to() {
      return this.isApiResource ? this.data.meta.to : this.data.to;
    },
    total() {
      return this.isApiResource ? this.data.meta.total : this.data.total;
    },
    pageRange() {
      if (this.limit === -1) {
        return 0;
      }
      if (this.limit === 0) {
        return this.lastPage;
      }
      var current = this.currentPage;
      var last = this.lastPage;
      var delta = this.limit;
      var left = current - delta;
      var right = current + delta + 1;
      var range = [];
      var pages = [];
      var l;
      for (var i = 1; i <= last; i++) {
        if (i === 1 || i === last || i >= left && i < right) {
          range.push(i);
        }
      }
      range.forEach(function(i2) {
        if (l) {
          if (i2 - l === 2) {
            pages.push(l + 1);
          } else if (i2 - l !== 1) {
            pages.push("...");
          }
        }
        pages.push(i2);
        l = i2;
      });
      return pages;
    }
  },
  methods: {
    previousPage() {
      this.selectPage(this.currentPage - 1);
    },
    nextPage() {
      this.selectPage(this.currentPage + 1);
    },
    selectPage(page) {
      if (page === "...") {
        return;
      }
      this.$emit("pagination-change-page", page);
    }
  },
  render() {
    return this.$slots.default({
      data: this.data,
      limit: this.limit,
      showDisabled: this.showDisabled,
      size: this.size,
      align: this.align,
      computed: {
        isApiResource: this.isApiResource,
        currentPage: this.currentPage,
        firstPageUrl: this.firstPageUrl,
        from: this.from,
        lastPage: this.lastPage,
        lastPageUrl: this.lastPageUrl,
        nextPageUrl: this.nextPageUrl,
        perPage: this.perPage,
        prevPageUrl: this.prevPageUrl,
        to: this.to,
        total: this.total,
        pageRange: this.pageRange
      },
      prevButtonEvents: {
        click: (e) => {
          e.preventDefault();
          this.previousPage();
        }
      },
      nextButtonEvents: {
        click: (e) => {
          e.preventDefault();
          this.nextPage();
        }
      },
      pageButtonEvents: (page) => ({
        click: (e) => {
          e.preventDefault();
          this.selectPage(page);
        }
      })
    });
  }
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  inheritAttrs: false,
  emits: ["pagination-change-page"],
  components: {
    RenderlessLaravelVuePagination: _sfc_main$1
  },
  props: {
    data: {
      type: Object,
      default: () => {
      }
    },
    limit: {
      type: Number,
      default: 0
    },
    showDisabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default",
      validator: (value) => {
        return ["small", "default", "large"].indexOf(value) !== -1;
      }
    },
    align: {
      type: String,
      default: "left",
      validator: (value) => {
        return ["left", "center", "right"].indexOf(value) !== -1;
      }
    }
  },
  methods: {
    onPaginationChangePage(page) {
      this.$emit("pagination-change-page", page);
    }
  }
};
const _hoisted_1 = ["tabindex"];
const _hoisted_2 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { "aria-hidden": "true" }, "\xAB", -1);
const _hoisted_3 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "sr-only" }, "Previous", -1);
const _hoisted_4 = {
  key: 0,
  class: "sr-only"
};
const _hoisted_5 = ["tabindex"];
const _hoisted_6 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { "aria-hidden": "true" }, "\xBB", -1);
const _hoisted_7 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "sr-only" }, "Next", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RenderlessLaravelVuePagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RenderlessLaravelVuePagination");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_RenderlessLaravelVuePagination, {
    data: $props.data,
    limit: $props.limit,
    "show-disabled": $props.showDisabled,
    size: $props.size,
    align: $props.align,
    onPaginationChangePage: $options.onPaginationChangePage
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((slotProps) => [
      slotProps.computed.total > slotProps.computed.perPage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ key: 0 }, _ctx.$attrs, {
        class: ["pagination", {
          "pagination-sm": slotProps.size == "small",
          "pagination-lg": slotProps.size == "large",
          "justify-content-center": slotProps.align == "center",
          "justify-content-end": slotProps.align == "right"
        }]
      }), [
        slotProps.computed.prevPageUrl || slotProps.showDisabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          key: 0,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item pagination-prev-nav", { "disabled": !slotProps.computed.prevPageUrl }])
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            class: "page-link",
            href: "#",
            "aria-label": "Previous",
            tabindex: !slotProps.computed.prevPageUrl && -1
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(slotProps.prevButtonEvents)), [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "prev-nav", {}, () => [
              _hoisted_2,
              _hoisted_3
            ])
          ], 16, _hoisted_1)
        ], 2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true),
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(slotProps.computed.pageRange, (page, key) => {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item pagination-page-nav", { "active": page == slotProps.computed.currentPage }]),
            key
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
              class: "page-link",
              href: "#"
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(slotProps.pageButtonEvents(page))), [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(page) + " ", 1),
              page == slotProps.computed.currentPage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, "(current)")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)
            ], 16)
          ], 2);
        }), 128)),
        slotProps.computed.nextPageUrl || slotProps.showDisabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          key: 1,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item pagination-next-nav", { "disabled": !slotProps.computed.nextPageUrl }])
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            class: "page-link",
            href: "#",
            "aria-label": "Next",
            tabindex: !slotProps.computed.nextPageUrl && -1
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(slotProps.nextButtonEvents)), [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "next-nav", {}, () => [
              _hoisted_6,
              _hoisted_7
            ])
          ], 16, _hoisted_5)
        ], 2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)
      ], 16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)
    ]),
    _: 3
  }, 8, ["data", "limit", "show-disabled", "size", "align", "onPaginationChangePage"]);
}
var LaravelVuePagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);



/***/ }),

/***/ "./resources/js/components/cms/pemohon/Data.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/cms/pemohon/Data.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Data_vue_vue_type_template_id_7ebafdba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data.vue?vue&type=template&id=7ebafdba */ "./resources/js/components/cms/pemohon/Data.vue?vue&type=template&id=7ebafdba");
/* harmony import */ var _Data_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data.vue?vue&type=script&lang=js */ "./resources/js/components/cms/pemohon/Data.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_saktiyasin_Documents_webapp_projects_sitarung_garut_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_saktiyasin_Documents_webapp_projects_sitarung_garut_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Data_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Data_vue_vue_type_template_id_7ebafdba__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/cms/pemohon/Data.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/cms/pemohon/Detail.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/cms/pemohon/Detail.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Detail_vue_vue_type_template_id_71053ce1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail.vue?vue&type=template&id=71053ce1 */ "./resources/js/components/cms/pemohon/Detail.vue?vue&type=template&id=71053ce1");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.vue?vue&type=script&lang=js */ "./resources/js/components/cms/pemohon/Detail.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_saktiyasin_Documents_webapp_projects_sitarung_garut_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_saktiyasin_Documents_webapp_projects_sitarung_garut_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Detail_vue_vue_type_template_id_71053ce1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/cms/pemohon/Detail.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/cms/pemohon/Data.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/cms/pemohon/Data.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Data_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Data_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Data.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/pemohon/Data.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/cms/pemohon/Detail.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/cms/pemohon/Detail.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Detail.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/pemohon/Detail.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/cms/pemohon/Data.vue?vue&type=template&id=7ebafdba":
/*!************************************************************************************!*\
  !*** ./resources/js/components/cms/pemohon/Data.vue?vue&type=template&id=7ebafdba ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Data_vue_vue_type_template_id_7ebafdba__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Data_vue_vue_type_template_id_7ebafdba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Data.vue?vue&type=template&id=7ebafdba */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/pemohon/Data.vue?vue&type=template&id=7ebafdba");


/***/ }),

/***/ "./resources/js/components/cms/pemohon/Detail.vue?vue&type=template&id=71053ce1":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/cms/pemohon/Detail.vue?vue&type=template&id=71053ce1 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Detail_vue_vue_type_template_id_71053ce1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Detail_vue_vue_type_template_id_71053ce1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Detail.vue?vue&type=template&id=71053ce1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/cms/pemohon/Detail.vue?vue&type=template&id=71053ce1");


/***/ })

}]);