"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[203],{7823:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(821);var s=(e,t)=>{const a=e.__vccOpts||e;for(const[e,n]of t)a[e]=n;return a};const i={inheritAttrs:!1,emits:["pagination-change-page"],components:{RenderlessLaravelVuePagination:{emits:["pagination-change-page"],props:{data:{type:Object,default:()=>{}},limit:{type:Number,default:0},showDisabled:{type:Boolean,default:!1},size:{type:String,default:"default",validator:e=>-1!==["small","default","large"].indexOf(e)},align:{type:String,default:"left",validator:e=>-1!==["left","center","right"].indexOf(e)}},computed:{isApiResource(){return!!this.data.meta},currentPage(){return this.isApiResource?this.data.meta.current_page:this.data.current_page},firstPageUrl(){return this.isApiResource?this.data.links.first:null},from(){return this.isApiResource?this.data.meta.from:this.data.from},lastPage(){return this.isApiResource?this.data.meta.last_page:this.data.last_page},lastPageUrl(){return this.isApiResource?this.data.links.last:null},nextPageUrl(){return this.isApiResource?this.data.links.next:this.data.next_page_url},perPage(){return this.isApiResource?this.data.meta.per_page:this.data.per_page},prevPageUrl(){return this.isApiResource?this.data.links.prev:this.data.prev_page_url},to(){return this.isApiResource?this.data.meta.to:this.data.to},total(){return this.isApiResource?this.data.meta.total:this.data.total},pageRange(){if(-1===this.limit)return 0;if(0===this.limit)return this.lastPage;for(var e,t=this.currentPage,a=this.lastPage,n=this.limit,s=t-n,i=t+n+1,r=[],o=[],l=1;l<=a;l++)(1===l||l===a||l>=s&&l<i)&&r.push(l);return r.forEach((function(t){e&&(t-e==2?o.push(e+1):t-e!=1&&o.push("...")),o.push(t),e=t})),o}},methods:{previousPage(){this.selectPage(this.currentPage-1)},nextPage(){this.selectPage(this.currentPage+1)},selectPage(e){"..."!==e&&this.$emit("pagination-change-page",e)}},render(){return this.$slots.default({data:this.data,limit:this.limit,showDisabled:this.showDisabled,size:this.size,align:this.align,computed:{isApiResource:this.isApiResource,currentPage:this.currentPage,firstPageUrl:this.firstPageUrl,from:this.from,lastPage:this.lastPage,lastPageUrl:this.lastPageUrl,nextPageUrl:this.nextPageUrl,perPage:this.perPage,prevPageUrl:this.prevPageUrl,to:this.to,total:this.total,pageRange:this.pageRange},prevButtonEvents:{click:e=>{e.preventDefault(),this.previousPage()}},nextButtonEvents:{click:e=>{e.preventDefault(),this.nextPage()}},pageButtonEvents:e=>({click:t=>{t.preventDefault(),this.selectPage(e)}})})}}},props:{data:{type:Object,default:()=>{}},limit:{type:Number,default:0},showDisabled:{type:Boolean,default:!1},size:{type:String,default:"default",validator:e=>-1!==["small","default","large"].indexOf(e)},align:{type:String,default:"left",validator:e=>-1!==["left","center","right"].indexOf(e)}},methods:{onPaginationChangePage(e){this.$emit("pagination-change-page",e)}}},r=["tabindex"],o=(0,n.createElementVNode)("span",{"aria-hidden":"true"},"«",-1),l=(0,n.createElementVNode)("span",{class:"sr-only"},"Previous",-1),c={key:0,class:"sr-only"},d=["tabindex"],p=(0,n.createElementVNode)("span",{"aria-hidden":"true"},"»",-1),g=(0,n.createElementVNode)("span",{class:"sr-only"},"Next",-1);var u=s(i,[["render",function(e,t,a,s,i,u){const m=(0,n.resolveComponent)("RenderlessLaravelVuePagination");return(0,n.openBlock)(),(0,n.createBlock)(m,{data:a.data,limit:a.limit,"show-disabled":a.showDisabled,size:a.size,align:a.align,onPaginationChangePage:u.onPaginationChangePage},{default:(0,n.withCtx)((t=>[t.computed.total>t.computed.perPage?((0,n.openBlock)(),(0,n.createElementBlock)("ul",(0,n.mergeProps)({key:0},e.$attrs,{class:["pagination",{"pagination-sm":"small"==t.size,"pagination-lg":"large"==t.size,"justify-content-center":"center"==t.align,"justify-content-end":"right"==t.align}]}),[t.computed.prevPageUrl||t.showDisabled?((0,n.openBlock)(),(0,n.createElementBlock)("li",{key:0,class:(0,n.normalizeClass)(["page-item pagination-prev-nav",{disabled:!t.computed.prevPageUrl}])},[(0,n.createElementVNode)("a",(0,n.mergeProps)({class:"page-link",href:"#","aria-label":"Previous",tabindex:!t.computed.prevPageUrl&&-1},(0,n.toHandlers)(t.prevButtonEvents)),[(0,n.renderSlot)(e.$slots,"prev-nav",{},(()=>[o,l]))],16,r)],2)):(0,n.createCommentVNode)("",!0),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(t.computed.pageRange,((e,a)=>((0,n.openBlock)(),(0,n.createElementBlock)("li",{class:(0,n.normalizeClass)(["page-item pagination-page-nav",{active:e==t.computed.currentPage}]),key:a},[(0,n.createElementVNode)("a",(0,n.mergeProps)({class:"page-link",href:"#"},(0,n.toHandlers)(t.pageButtonEvents(e))),[(0,n.createTextVNode)((0,n.toDisplayString)(e)+" ",1),e==t.computed.currentPage?((0,n.openBlock)(),(0,n.createElementBlock)("span",c,"(current)")):(0,n.createCommentVNode)("",!0)],16)],2)))),128)),t.computed.nextPageUrl||t.showDisabled?((0,n.openBlock)(),(0,n.createElementBlock)("li",{key:1,class:(0,n.normalizeClass)(["page-item pagination-next-nav",{disabled:!t.computed.nextPageUrl}])},[(0,n.createElementVNode)("a",(0,n.mergeProps)({class:"page-link",href:"#","aria-label":"Next",tabindex:!t.computed.nextPageUrl&&-1},(0,n.toHandlers)(t.nextButtonEvents)),[(0,n.renderSlot)(e.$slots,"next-nav",{},(()=>[p,g]))],16,d)],2)):(0,n.createCommentVNode)("",!0)],16)):(0,n.createCommentVNode)("",!0)])),_:3},8,["data","limit","show-disabled","size","align","onPaginationChangePage"])}]])},5203:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var n=a(821),s={class:"row"},i={class:"col-lg-12 mb-lg-0 mb-4"},r={class:"card z-index-2 h-100"},o={class:"card-header pb-0 pt-3 bg-transparent"},l={class:"card-body p-3"},c={class:"table-responsive p-0",style:{"min-height":"500px"}},d={class:"table align-items-center mb-0"},p=(0,n.createElementVNode)("thead",null,[(0,n.createElementVNode)("tr",null,[(0,n.createElementVNode)("th",{class:"text-center"},"#"),(0,n.createElementVNode)("th",{nowrap:"",class:"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"},"Aksi"),(0,n.createElementVNode)("th",{nowrap:"",class:"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"},"Tanggal Dibuat"),(0,n.createElementVNode)("th",{nowrap:"",class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"},"Status"),(0,n.createElementVNode)("th",{nowrap:"",class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"},"Kecamatan"),(0,n.createElementVNode)("th",{nowrap:"",class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"},"Alamat Lokasi"),(0,n.createElementVNode)("th",{nowrap:"",class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-end"},"Luas Lahan Rencana (ha)"),(0,n.createElementVNode)("th",{nowrap:"",class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"},"Nama pemilik"),(0,n.createElementVNode)("th",{nowrap:"",class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"},"Peruntukan")])],-1),g={class:"table-border-bottom-0"},u={class:"text-center align-top text-sm"},m={nowrap:"",class:"text-center text-sm"},h=["onClick"],x={nowrap:"",class:"text-center align-top text-sm"},f={class:"text-sm align-top"},P={nowrap:"",class:"text-sm align-top"},v={class:"text-sm align-top"},b={nowrap:"",class:"text-end text-sm align-top"},k={nowrap:"",class:"text-sm align-top"},y={nowrap:"",class:"text-sm align-top"},E={class:"card-footer"};var N=a(7823),w=a(3002);const V={name:"PermohonanPage",props:["title"],data:function(){return{getList:{},currentpage:0}},components:{Pagination:N.Z},setup:function(){return{toast:(0,w.pm)()}},created:function(){this.$store.dispatch("setTitleCMS",this.$props.title),this.loadList()},methods:{loadList:function(e){var t=this;this.$isLoading(!0);var a=this.getObj();window.axios.defaults.headers.common.Authorization="Bearer ".concat(this.$store.state.setTokenCMS),axios.post(baseurl+"/api/permohonan/list?page="+e,a).then((function(e){t.getList=e.data,1==t.getList.current_page?t.currentpage=0:t.currentpage=10*(t.getList.current_page-1),t.$isLoading(!1)})).catch((function(e){t.$isLoading(!1),t.$store.dispatch("getStatusNotif",{self:t,error:e})}))},getObj:function(){var e=new Object;return e.developerIDColumn=$("#developerIDColumn").val(),e.publishColumn=$("#publishColumn").val(),e},deleteData:function(e){var t=this;this.$swal({title:"Konfrimasi",text:"Anda akan menghapus baris ini.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Lanjutkan",cancelButtonText:"Batal"}).then((function(a){if(a.isConfirmed){t.$isLoading(!0);var n=baseurl+"/api/permohonan/destroy",s=new Object;s.id=e,window.axios.defaults.headers.common.Authorization="Bearer ".concat(t.$store.state.setTokenCMS),axios.post(n,s,{headers:{Accept:"application/json"}}).then((function(e){var a=e.data;t.toast(a.message,{type:a.status,timeout:3e3}),"success"==a.status&&t.loadList(),t.$isLoading(!1)})).catch((function(e){t.$isLoading(!1),t.$store.dispatch("removeDispatch",{self:t})}))}}))}}};const B=(0,a(3744).Z)(V,[["render",function(e,t,a,N,w,V){var B=(0,n.resolveComponent)("Pagination");return(0,n.openBlock)(),(0,n.createElementBlock)("div",s,[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",r,[(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("button",{type:"button",class:"btn btn-success",onClick:t[0]||(t[0]=function(){return V.loadList&&V.loadList.apply(V,arguments)})},"Refresh")]),(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("table",d,[p,(0,n.createElementVNode)("tbody",g,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(w.getList.data,(function(t,a){return(0,n.openBlock)(),(0,n.createElementBlock)("tr",{key:t.id},[(0,n.createElementVNode)("td",u,(0,n.toDisplayString)(w.currentpage+(a+1)),1),(0,n.createElementVNode)("td",m,[(0,n.createElementVNode)("button",{type:"button",class:"btn btn-xs btn-danger",onClick:function(e){return V.deleteData(t.id)}},"Hapus",8,h)]),(0,n.createElementVNode)("td",x,(0,n.toDisplayString)(e.$filters.formatDate(t.created_at)),1),(0,n.createElementVNode)("td",f,(0,n.toDisplayString)(t.status_title),1),(0,n.createElementVNode)("td",P,(0,n.toDisplayString)(t.kecamatan),1),(0,n.createElementVNode)("td",v,(0,n.toDisplayString)(t.alamat_lahan),1),(0,n.createElementVNode)("td",b,(0,n.toDisplayString)(t.luas_lahan_rencana),1),(0,n.createElementVNode)("td",k,(0,n.toDisplayString)(t.nama_pemilik_lahan),1),(0,n.createElementVNode)("td",y,(0,n.toDisplayString)(t.peruntukan),1)])})),128))])])])]),(0,n.createElementVNode)("div",E,[(0,n.createVNode)(B,{data:w.getList,onPaginationChangePage:V.loadList,limit:1,"show-disabled":!0},null,8,["data","onPaginationChangePage"])])])])])}]])}}]);