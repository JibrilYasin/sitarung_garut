"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[307],{9307:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var o=r(821),a={class:"row"},s={class:"col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto"},n={class:"card card-plain"},l={class:"card-header text-center pb-0 text-start"},i={class:"logo mb-3"},c={class:"p-2"},d=["src"],p=(0,o.createElementVNode)("h4",{class:"font-weight-bolder"},"Form Password Baru",-1),m=(0,o.createElementVNode)("p",{class:"mb-0"},[(0,o.createElementVNode)("small",null,[(0,o.createElementVNode)("code",null,"(Kombinasi Huruf Kapital, Huruf Kecil & Angka)")])],-1),u={class:"card-body"},b={class:"mb-3"},f={style:{position:"relative"}},h={style:{position:"absolute",top:"10px",right:"15px","font-size":"1rem"}},g={key:0,class:"invalid-feedback d-block"},w=(0,o.createElementVNode)("i",{class:"bx bx-x"},null,-1),E=(0,o.createElementVNode)("div",{class:"text-center"},[(0,o.createElementVNode)("button",{type:"submit",class:"btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"},"Submit")],-1),v={class:"card-footer text-center pt-0 px-lg-2 px-1"},y={class:"mb-4 text-sm mx-auto"},x={class:"col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column"},N=[(0,o.createElementVNode)("span",{class:"mask bg-gradient-primary opacity-6"},null,-1),(0,o.createElementVNode)("h6",{class:"mt-5 text-white font-weight-bolder position-relative"},"CONTENT MANAGEMENT SYSTEM",-1),(0,o.createElementVNode)("h3",{class:"mt-1 text-white font-weight-bolder position-relative"},"APLIKASI SITARUNG",-1),(0,o.createElementVNode)("p",{class:"text-white position-relative"},"Dinas pekerjaan Umum dan Penataan Ruang Kabupaten Garut",-1)];var V=r(3907),O=r(3002);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const j={name:"ResetPage",data:function(){return{baseurl,imagepath,formErrors:{},showHidepassword:"bx-hide"}},setup:function(){return{toast:(0,O.pm)()}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},(0,V.rn)(["setCompany"])),created:function(){if(this.$store.dispatch("setCompany",""),""!=this.$store.state.setTokenCMS)return location.assign(baseurl+"/admin")},methods:{submitCMSResetForgot:function(){var e=this;this.$isLoading(!0),this.formErrors={};var t=baseurl+"/api/auth/reset",r=new Object;r.emailResetInput=this.$store.state.setEmailOTPCMS,r.passwordResetInput=$("#passwordResetInput").val(),axios.post(t,r,{headers:{Accept:"application/json"}}).then((function(t){var r=t.data;e.toast(r.message,{type:r.status,timeout:3e3}),"success"==r.status&&(e.$store.dispatch("setEmailOTPCMS",""),e.$router.push("/auth/login")),e.$isLoading(!1)})).catch((function(t){e.formErrors=t.response.data.errors,e.$isLoading(!1)}))},showPassword:function(e){var t=document.getElementById(e);"password"===t.type?(t.type="text",this.showHidepassword="bx-show-alt"):(t.type="password",this.showHidepassword="bx-hide")}}};const C=(0,r(3744).Z)(j,[["render",function(e,t,r,V,O,k){var P=(0,o.resolveComponent)("router-link");return(0,o.openBlock)(),(0,o.createElementBlock)("div",a,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",n,[(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("img",{src:O.imagepath+"/"+e.setCompany.company_logo,width:"150"},null,8,d)])]),p,m]),(0,o.createElementVNode)("div",u,[(0,o.createElementVNode)("form",{id:"forgotCMSForm",onSubmit:t[1]||(t[1]=(0,o.withModifiers)((function(){return k.submitCMSResetForgot&&k.submitCMSResetForgot.apply(k,arguments)}),["prevent"])),class:"mb-3",action:"javascript:void(0)",method:"POST"},[(0,o.createElementVNode)("div",b,[(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("input",{type:"password",class:(0,o.normalizeClass)(["form-control form-control-lg",O.formErrors.passwordResetInput?"is-invalid":""]),placeholder:"Password","aria-label":"Password",id:"passwordResetInput"},null,2),(0,o.createElementVNode)("a",{href:"javascript:void(0)",onClick:t[0]||(t[0]=function(e){return k.showPassword("passwordResetInput")})},[(0,o.createElementVNode)("span",h,[(0,o.createElementVNode)("i",{class:(0,o.normalizeClass)(["bx",O.showHidepassword])},null,2)])])]),O.formErrors.passwordResetInput?((0,o.openBlock)(),(0,o.createElementBlock)("div",g,[w,(0,o.createTextVNode)(" "+(0,o.toDisplayString)(O.formErrors.passwordResetInput[0]),1)])):(0,o.createCommentVNode)("",!0)]),E],32)]),(0,o.createElementVNode)("div",v,[(0,o.createElementVNode)("p",y,[(0,o.createVNode)(P,{class:"text-primary text-gradient font-weight-bold",to:"/auth/forgot"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)("Lupa Password")]})),_:1})])])])]),(0,o.createElementVNode)("div",x,[(0,o.createElementVNode)("div",{class:"position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden",style:(0,o.normalizeStyle)([{backgroundImage:"url("+O.imagepath+"bg.jpeg)"},{"background-position":"center","background-size":"cover"}])},N,4)])])}]])}}]);