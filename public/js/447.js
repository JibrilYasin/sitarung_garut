"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[447],{447:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var s=a(821),o={class:"site-wrapper"},c={class:"pt-table desktop-768"},l={class:"pt-tablecell page-home relative",style:{"background-image":"url(https://images.pexels.com/photos/2036603/pexels-photo-2036603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)","background-position":"center","background-size":"cover"}},n=(0,s.createElementVNode)("div",{class:"overlay"},null,-1),i={class:"container"},r={class:"row"},d={class:"col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8"},p={class:"page-title home text-center"},u=["src"],m=(0,s.createElementVNode)("span",{class:"heading-page"}," Aplikasi Sitarung ",-1),h=(0,s.createElementVNode)("p",{class:"mt20"},"DINAS PEKERJAAN UMUM DAN PENATAAN RUANG KABUPATEN GARUT",-1),g=(0,s.createElementVNode)("div",{class:"mt-5"},[(0,s.createElementVNode)("p",{class:"fw-bold text-uppercase text-white"},"Mohon Tunggu...")],-1);var v=a(3002);const N={name:"ActivationPage",props:["title"],data:function(){return{baseurl}},setup:function(){return{toast:(0,v.pm)()}},created:function(){this.$store.dispatch("setTitle",this.$props.title),this.loadActivation()},methods:{loadActivation:function(){var e=this,t=baseurl+"/api/activation",a=new Object;a.emailActivationInput=this.$route.params.token,axios.post(t,a,{headers:{Accept:"application/json"}}).then((function(t){var a=t.data;e.toast(a.message,{type:a.status,timeout:5e3}),"success"==a.status&&setTimeout((function(){e.$router.push("/")}),2500)})).catch((function(t){e.toast("Maaf terjadi kesalahan.",{type:"error",timeout:5e3})}))}}};const E=(0,a(3744).Z)(N,[["render",function(e,t,a,v,N,E){return(0,s.openBlock)(),(0,s.createElementBlock)("div",null,[(0,s.createElementVNode)("main",o,[(0,s.createElementVNode)("div",c,[(0,s.createElementVNode)("div",l,[n,(0,s.createElementVNode)("div",i,[(0,s.createElementVNode)("div",r,[(0,s.createElementVNode)("div",d,[(0,s.createElementVNode)("div",p,[(0,s.createElementVNode)("div",null,[(0,s.createElementVNode)("img",{src:N.baseurl+"/images/logo.png",width:"170"},null,8,u)]),m,h,g])])])])])])])])}]])}}]);