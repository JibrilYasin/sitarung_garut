"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_front_auth_Activation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/front/auth/Activation.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/front/auth/Activation.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/index.mjs");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ActivationPage',
  props: ['title'],
  data: function data() {
    return {
      baseurl: baseurl
    };
  },
  setup: function setup() {
    var toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_0__.useToast)();
    return {
      toast: toast
    };
  },
  created: function created() {
    this.$store.dispatch("setTitle", this.$props.title);
    this.loadActivation();
  },
  methods: {
    loadActivation: function loadActivation() {
      var _this = this;
      var action = baseurl + "/api/activation";
      var obj = new Object();
      obj.emailActivationInput = this.$route.params.token;
      axios.post(action, obj, {
        headers: {
          Accept: "application/json"
        }
      }).then(function (response) {
        var resp = response.data;
        _this.toast(resp.message, {
          type: resp.status,
          timeout: 5000
        });
        if (resp.status == "success") {
          setTimeout(function () {
            _this.$router.push("/");
          }, 2500);
        }
      })["catch"](function (error) {
        _this.toast('Maaf terjadi kesalahan.', {
          type: 'error',
          timeout: 5000
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/front/auth/Activation.vue?vue&type=template&id=25875b5c":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/front/auth/Activation.vue?vue&type=template&id=25875b5c ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "site-wrapper"
};
var _hoisted_2 = {
  "class": "pt-table desktop-768"
};
var _hoisted_3 = {
  "class": "pt-tablecell page-home relative",
  style: {
    "background-image": "url(https://images.pexels.com/photos/2036603/pexels-photo-2036603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
    "background-position": "center",
    "background-size": "cover"
  }
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "overlay"
}, null, -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "container"
};
var _hoisted_6 = {
  "class": "row"
};
var _hoisted_7 = {
  "class": "col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8"
};
var _hoisted_8 = {
  "class": "page-title home text-center"
};
var _hoisted_9 = ["src"];
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "heading-page"
}, " Aplikasi Sitarung ", -1 /* HOISTED */);
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mt20"
}, "DINAS PEKERJAAN UMUM DAN PENATAAN RUANG KABUPATEN GARUT", -1 /* HOISTED */);
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "fw-bold text-uppercase text-white"
}, "Mohon Tunggu...")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.baseurl + '/images/logo.png',
    width: "170"
  }, null, 8 /* PROPS */, _hoisted_9)]), _hoisted_10, _hoisted_11, _hoisted_12])])])])])])])]);
}

/***/ }),

/***/ "./resources/js/components/front/auth/Activation.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/front/auth/Activation.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Activation_vue_vue_type_template_id_25875b5c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Activation.vue?vue&type=template&id=25875b5c */ "./resources/js/components/front/auth/Activation.vue?vue&type=template&id=25875b5c");
/* harmony import */ var _Activation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Activation.vue?vue&type=script&lang=js */ "./resources/js/components/front/auth/Activation.vue?vue&type=script&lang=js");
/* harmony import */ var _Volumes_SaktiYasin_webapp_projects_sitarung_garut_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Volumes_SaktiYasin_webapp_projects_sitarung_garut_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Activation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Activation_vue_vue_type_template_id_25875b5c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/front/auth/Activation.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/front/auth/Activation.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/front/auth/Activation.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Activation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Activation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Activation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/front/auth/Activation.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/front/auth/Activation.vue?vue&type=template&id=25875b5c":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/front/auth/Activation.vue?vue&type=template&id=25875b5c ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Activation_vue_vue_type_template_id_25875b5c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Activation_vue_vue_type_template_id_25875b5c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Activation.vue?vue&type=template&id=25875b5c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/front/auth/Activation.vue?vue&type=template&id=25875b5c");


/***/ })

}]);