(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/VueDashboad/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"login"!=t.$route.name&&"root"!=this.$route.name?a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[t._l(t.items,(function(e){return[e.heading?a("v-layout",{key:e.heading,attrs:{row:"","align-center":""}},[a("v-flex",{attrs:{xs6:""}},[e.heading?a("v-subheader",[t._v(" "+t._s(e.heading)+" ")]):t._e()],1),a("v-flex",{staticClass:"text-xs-center",attrs:{xs6:""}},[a("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[t._v("EDIT")])])],1):a("v-list-item",{key:e.text},[a("v-list-item-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])],1)],1)]}))],2)],1),a("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"blue darken-3",dark:""}},[a("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("span",{staticClass:"hidden-sm-and-down"},[t._v("User Dashboard")])],1),a("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Search"}}),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-apps")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-bell")])],1)],1),a("v-content",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1)],1):a("v-app",[a("router-view")],1)},i=[],r={name:"App",props:{source:String},data:function(){return{drawer:null,items:[{icon:"mdi-view-dashboard",text:"Dashboard"},{icon:"mdi-contact-phone",text:"Contacts"},{icon:"mdi-chat",text:"Chats"}]}}},o=r,l=a("2877"),c=a("6544"),d=a.n(c),u=a("7496"),p=a("40dc"),f=a("5bc1"),b=a("8336"),v=a("a523"),h=a("a75b"),m=a("0e8f"),j=a("132d"),g=a("a722"),y=a("8860"),k=a("da13"),x=a("1800"),w=a("5d23"),_=a("f774"),V=a("2fa4"),C=a("e0c7"),T=a("8654"),z=a("2a7f"),D=Object(l["a"])(o,n,i,!1,null,null,null),S=D.exports;d()(D,{VApp:u["a"],VAppBar:p["a"],VAppBarNavIcon:f["a"],VBtn:b["a"],VContainer:v["a"],VContent:h["a"],VFlex:m["a"],VIcon:j["a"],VLayout:g["a"],VList:y["a"],VListItem:k["a"],VListItemAction:x["a"],VListItemContent:w["a"],VListItemTitle:w["b"],VNavigationDrawer:_["a"],VSpacer:V["a"],VSubheader:C["a"],VTextField:T["a"],VToolbarTitle:z["a"]});a("5363");var O=a("f309");s["a"].use(O["a"]);var P=new O["a"]({icons:{iconfont:"mdi"}}),$=a("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",t._l(t.items,(function(e,s){return a("v-col",{key:s,attrs:{cols:"3"}},[a("v-card",{attrs:{color:e.color,dark:""}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("div",[a("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(e.title)}}),a("v-card-subtitle",{domProps:{textContent:t._s(e.artist)}})],1),a("v-avatar",{staticClass:"ma-3",attrs:{size:"80",tile:""}},[a("v-sparkline",{attrs:{value:e.spalike.value,gradient:e.spalike.gradient,smooth:e.spalike.radius||!1,padding:e.spalike.padding,"line-width":e.spalike.width,"stroke-linecap":e.spalike.lineCap,"gradient-direction":e.spalike.gradientDirection,fill:e.spalike.fill,type:e.spalike.type,"auto-line-width":e.spalike.autoLineWidth,"auto-draw":""}})],1)],1)])],1)})),1),a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"8"}},[a("v-card",{attrs:{height:"405px"}},[a("v-card-title",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-poll")])],1),t._v(" User Visits "),a("v-spacer"),a("v-btn-toggle",{attrs:{tile:"",color:"deep-purple accent-3",group:""},on:{change:t.changeBarChart},model:{value:t.barType,callback:function(e){t.barType=e},expression:"barType"}},[a("v-btn",{attrs:{value:"week"}},[t._v(" Weekly ")]),a("v-btn",{attrs:{value:"month"}},[t._v(" Monthly ")]),a("v-btn",{attrs:{value:"year"}},[t._v(" Yearly ")])],1)],1),a("column-chart",{attrs:{data:t.barData}}),a("v-card-actions")],1)],1),a("v-col",{attrs:{cols:"4"}},[a("v-card",{attrs:{height:"405px"}},[a("v-card-title",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-chart-pie")])],1),t._v(" User Stats "),a("v-spacer"),a("v-switch",{attrs:{label:"Anonymous"},on:{change:t.changePieChart},model:{value:t.pieType,callback:function(e){t.pieType=e},expression:"pieType"}})],1),a("pie-chart",{attrs:{data:t.pieChart,colors:["#ef7d0e","#378d3b","#e23e3d","#21b2c6"]}})],1)],1)],1),a("v-row",[a("v-col",{attrs:{col:"12"}},[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Name")]),a("th",{staticClass:"text-left"},[t._v("Company")]),a("th",{staticClass:"text-left"},[t._v("Job Title")]),a("th",{staticClass:"text-left"},[t._v("Email")]),a("th",{staticClass:"text-left"},[t._v("Phone")]),a("th",{staticClass:"text-left"},[t._v("Action")])])]),a("tbody",t._l(t.users,(function(e,s){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.company))]),a("td",[t._v(t._s(e.job))]),a("td",[t._v(t._s(e.email))]),a("td",[t._v(t._s(e.phone))]),a("td",[a("v-btn",{attrs:{text:"",icon:"",color:"green"},on:{click:function(e){return t.viewData(s)}}},[a("v-icon",[t._v("mdi-eye")])],1),a("v-btn",{attrs:{text:"",icon:"",color:"red"},on:{click:function(e){return t.deleteData(s)}}},[a("v-icon",[t._v("mdi-delete")])],1)],1)])})),0)]},proxy:!0}])})],1)],1),a("v-dialog",{attrs:{width:"800px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"blue white--text"},[t._v(" Create contact ")]),a("v-container",{attrs:{"grid-list-sm":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"","align-center":"","justify-space-between":""}},[a("v-layout",{attrs:{"align-center":""}},[a("v-avatar",{staticClass:"mr-3",attrs:{size:"40px"}},[a("img",{attrs:{src:"//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png",alt:""}})]),a("v-text-field",{attrs:{placeholder:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-domain",placeholder:"Company"},model:{value:t.company,callback:function(e){t.company=e},expression:"company"}})],1),a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{placeholder:"Job title"},model:{value:t.job,callback:function(e){t.job=e},expression:"job"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-email",placeholder:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{type:"tel","prepend-icon":"mdi-phone",placeholder:"(000) 000 - 0000"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-text",placeholder:"Notes"},model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1)],1),a("v-btn",{attrs:{bottom:"",color:"pink",dark:"",fab:"",fixed:"",right:""},on:{click:t.openDialog}},[a("v-icon",[t._v("mdi-account-multiple-plus")])],1)],1)},L=[],F=(a("a434"),a("b0c0"),[["#222"]]),q={data:function(){return{dialog:!1,show:!1,gradients:F,pieChart:null,items:null,users:null,barData:null,name:"FFFFF",company:null,email:null,job:null,phone:null,notes:null,barType:"week",pieType:null}},methods:{viewData:function(t){var e=this.users[t];this.name=e.name,this.job=e.job,this.company=e.company,this.email=e.email,this.phone=e.phone,this.notes=e.notes,this.dialog=!0},deleteData:function(t){this.users.splice(t,1)},changeBarChart:function(){var t=this;this.$http.get("https://shafeequeom.github.io/VueDashboad/json/"+this.barType+".json").then((function(e){t.barData=e.data}))},changePieChart:function(){var t=this;console.log(JSON.stringify(this.pieType)),this.$http.get("https://shafeequeom.github.io/VueDashboad/json/pie.json").then((function(e){t.pieType?t.pieChart=e.data[0]:t.pieChart=e.data[1]}))},openDialog:function(){this.name=null,this.job=null,this.company=null,this.email=null,this.phone=null,this.notes=null,this.dialog=!0}},mounted:function(){var t=this;this.$http.get("https://shafeequeom.github.io/VueDashboad/json/week.json").then((function(e){t.barData=e.data})),this.$http.get("https://shafeequeom.github.io/VueDashboad/json/pie.json").then((function(e){t.pieChart=e.data[1]})),this.$http.get("https://shafeequeom.github.io/VueDashboad/json/stats.json").then((function(e){t.items=e.data})),this.$http.get("https://shafeequeom.github.io/VueDashboad/json/users.json").then((function(e){t.users=e.data,console.log(JSON.stringify(t.users))}))}},E=q,N=a("8212"),B=a("a609"),I=a("b0af"),U=a("99d9"),J=a("62ad"),M=a("169a"),G=a("0fd9"),R=a("1f4f"),W=a("7f2e"),Z=a("b73d"),Y=Object(l["a"])(E,A,L,!1,null,null,null),H=Y.exports;d()(Y,{VAvatar:N["a"],VBtn:b["a"],VBtnToggle:B["a"],VCard:I["a"],VCardActions:U["a"],VCardSubtitle:U["b"],VCardTitle:U["d"],VCol:J["a"],VContainer:v["a"],VDialog:M["a"],VFlex:m["a"],VIcon:j["a"],VLayout:g["a"],VRow:G["a"],VSimpleTable:R["a"],VSpacer:V["a"],VSparkline:W["a"],VSwitch:Z["a"],VTextField:T["a"]});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Login form")]),a("v-spacer")],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"Login",name:"login","prepend-icon":"mdi-account",type:"text"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.login()}}},[t._v("Login")])],1)],1)],1)],1)],1),a("v-snackbar",{attrs:{bottom:"bottom",color:t.color,left:null,"multi-line":"multi-line",right:null,timeout:4e3,top:"top",vertical:"vertical"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.message)+" "),a("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v(" Close ")])],1)],1)},Q=[],X={data:function(){return{email:null,password:null,snackbar:!1,message:"",color:"red"}},methods:{login:function(){this.email&&this.password?this.validateEmail(this.email)?this.$router.push({name:"dashboard"}):(this.message="Valid email required. Please enter a valid email address",this.snackbar=!0,this.errors.push("")):(this.password||(this.message="Password required. Please password for your email.",this.snackbar=!0),this.email||(this.message="Email required. Please fill email field",this.snackbar=!0))},validateEmail:function(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(String(t).toLowerCase())}}},tt=X,et=a("4bd4"),at=a("2db4"),st=a("71d9"),nt=Object(l["a"])(tt,K,Q,!1,null,null,null),it=nt.exports;d()(nt,{VBtn:b["a"],VCard:I["a"],VCardActions:U["a"],VCardText:U["c"],VCol:J["a"],VContainer:v["a"],VContent:h["a"],VForm:et["a"],VRow:G["a"],VSnackbar:at["a"],VSpacer:V["a"],VTextField:T["a"],VToolbar:st["a"],VToolbarTitle:z["a"]}),s["a"].use($["a"]);var rt=new $["a"]({mode:"history",routes:[{name:"root",path:"/",component:it},{name:"login",path:"/login",component:it},{name:"dashboard",path:"/dashboard",component:H}]}),ot=a("d842"),lt=a("30ef"),ct=a.n(lt),dt=a("bc3a"),ut=a.n(dt);s["a"].prototype.$http=ut.a,s["a"].use(ot["a"].use(ct.a)),s["a"].config.productionTip=!1,new s["a"]({router:rt,vuetify:P,render:function(t){return t(S)}}).$mount("#app")}});
//# sourceMappingURL=app.32063ebc.js.map