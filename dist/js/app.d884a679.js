(function(t){function e(e){for(var n,r,c=e[0],s=e[1],l=e[2],p=0,d=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,c=1;c<i.length;c++){var s=i[c];0!==o[s]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},o={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/gaodemapproject/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"12c9":function(t,e,i){t.exports=i.p+"img/kangkang.50406fca.png"},2152:function(t,e,i){},"25c2":function(t,e,i){"use strict";var n=i("2152"),o=i.n(n);o.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{app:""}},[n("v-app-bar",{staticClass:"white--text",attrs:{color:"indigo accent-2",app:"","clipped-left":!0,tile:""}},[n("v-app-bar-nav-icon",{staticClass:"white--text",on:{click:t.switchBar}}),n("v-toolbar-title",[t._v(t._s(t.AppTitle))]),n("v-spacer"),t.isLogin?n("v-btn",{staticClass:"white--text mr-2",attrs:{icon:""},on:{click:t.handleAccountSignOut}},[n("v-icon",[t._v("mdi-account")]),t._v(" 退出 ")],1):n("v-btn",{staticClass:"white--text mr-2",attrs:{icon:""},on:{click:t.handleAccountClick}},[n("v-icon",[t._v("mdi-account")]),t._v(" 登陆 ")],1)],1),n("v-navigation-drawer",{attrs:{clipped:this.jeremy2,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-card",{staticClass:"mx-auto my-10",staticStyle:{"border-radius":"50%",overflow:"hidden","z-index":"999999999999"},attrs:{width:"200px",height:"200px",flat:""},on:{click:t.handleImgClick}},[n("v-img",{attrs:{src:i("12c9")}})],1),n("v-list-item-group",{attrs:{mandatory:""}},[n("v-list",{attrs:{shaped:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,on:{click:function(i){return t.handleNavListItemClick(e.link)}}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"ml-6"},[t._v(t._s(e.title))])],1)],1)})),1)],1)],1),n("router-view")],1)},a=[],r=(i("ac1f"),i("5319"),{name:"App",data:function(){return{AppTitle:"JeremyMap",drawer:null,jeremy2:!0,items:[{title:"Map",icon:"mdi-map-search",link:"/"},{title:"Me",icon:"mdi-account-search",link:"/me"},{title:"About",icon:"mdi-information",link:"/about"}]}},methods:{switchBar:function(){this.drawer=!this.drawer},handleImgClick:function(){},handleAccountClick:function(){this.$router.replace("/login")},handleAccountSignOut:function(){this.$store.commit("changeUserKey","undefined"),this.$store.commit("changeIsLogin",!1),this.$router.replace("/")},handleNavListItemClick:function(t){this.$router.replace(t)}},computed:{isLogin:function(){var t=this.$store.state.isLogin;return"true"===t||!0===t}},mounted:function(){this.$store.commit("changeUserKey",localStorage.userKey),this.$store.commit("changeIsLogin",localStorage.isLogin)}}),c=r,s=i("2877"),l=i("6544"),u=i.n(l),p=i("7496"),d=i("40dc"),m=i("5bc1"),f=i("8336"),h=i("b0af"),g=i("132d"),v=i("adda"),y=i("8860"),L=i("da13"),b=i("5d23"),k=i("1baa"),w=i("34c3"),C=i("f774"),x=i("2fa4"),_=i("2a7f"),S=Object(s["a"])(c,o,a,!1,null,null,null),I=S.exports;u()(S,{VApp:p["a"],VAppBar:d["a"],VAppBarNavIcon:m["a"],VBtn:f["a"],VCard:h["a"],VIcon:g["a"],VImg:v["a"],VList:y["a"],VListItem:L["a"],VListItemContent:b["a"],VListItemGroup:k["a"],VListItemIcon:w["a"],VListItemTitle:b["c"],VNavigationDrawer:C["a"],VSpacer:x["a"],VToolbarTitle:_["a"]});var M=i("8c4f"),V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("div",{attrs:{id:"container"}},[i("v-btn",{staticClass:"mt-8 mr-4 float-right locBtn",attrs:{color:t.wifiColor,"text-color":"white",rounded:""},on:{click:t.WiFiLocHandler}},[i("v-icon",{attrs:{left:""}},[t._v(" mdi-map-marker ")]),t._v(" WiFi ")],1),i("v-btn",{staticClass:"mt-8 mr-4 float-right locBtn",attrs:{color:t.cellColor,"text-color":"white",rounded:""},on:{click:t.CellLocHandler}},[i("v-icon",{attrs:{left:""}},[t._v(" mdi-map-marker ")]),t._v(" Cell ")],1),i("v-btn",{staticClass:"mt-8 mr-4 float-right locBtn",attrs:{color:t.gpsColor,"text-color":"white",rounded:""},on:{click:t.GPSLocHandler}},[i("v-icon",{attrs:{left:""}},[t._v(" mdi-map-marker ")]),t._v(" GPS ")],1),i("v-btn",{staticClass:"mt-8 mr-4 float-right locBtn",attrs:{color:"primary","text-color":"white",rounded:"",disabled:t.refreshDisable},on:{click:t.refresh}},[i("v-icon",{attrs:{left:""}},[t._v(" mdi-cached ")]),t._v(" 刷新 ")],1)],1)])},A=[],K=(i("99af"),i("d81d"),i("862d")),$=i.n(K),O={name:"Map",data:function(){return{refreshDisable:!1,wifiColor:"gray",cellColor:"gray",gpsColor:"gray",cellLocInfo:{},wifiLocInfo:{},gpsLocInfo:{},cellMarker:{},wifiMarker:{},gpsMarker:{},cellLocStatus:!1,wifiLocStatus:!1,gpsLocStatus:!1,getCellAxiosConfig:{url:"http://wiki.airm2m.com:48080/getCellLocInfo",method:"get"},getWiFiAxiosConfig:{url:"http://wiki.airm2m.com:48080/getWiFiLocInfo",method:"get"},getGPSAxiosConfig:{url:"http://wiki.airm2m.com:48080/getGPSLocInfo",method:"get"}}},methods:{loadMap:function(){var t=this;$.a.load({key:"3c618ebb54475fb63eb35b900519cd6f",version:"2.0"}).then((function(e){t.map=new e.Map("container",{resizeEnable:!0}),e.plugin(["AMap.ToolBar","AMap.Scale","AMap.GraspRoad"],(function(){t.map.addControl(new e.ToolBar({position:{top:"80px",right:"40px"}})),t.map.addControl(new e.Scale({position:"RB"}))}))})).catch((function(t){console.log(t)}))},CellLocHandler:function(){"primary"===this.cellColor?this.cellColor="gray":this.cellColor="primary",!0===this.cellLocStatus?this.cellLocStatus=!1:this.cellLocStatus=!0},WiFiLocHandler:function(){"primary"===this.wifiColor?this.wifiColor="gray":this.wifiColor="primary",!0===this.wifiLocStatus?this.wifiLocStatus=!1:this.wifiLocStatus=!0},GPSLocHandler:function(){"primary"===this.gpsColor?this.gpsColor="gray":this.gpsColor="primary",!0===this.gpsLocStatus?this.gpsLocStatus=!1:this.gpsLocStatus=!0},refresh:function(){var t=this;t.map.remove(t.cellMarker),t.map.remove(t.wifiMarker),t.map.remove(t.gpsMarker),t.refreshDisable=!0,t.cellLocStatus&&this.axios(this.getCellAxiosConfig).then((function(e){e&&(t.cellLocInfo=e.data,t.refreshDisable=!1)})).catch((function(e){t.refreshDisable=!1,console.log(e)})),t.wifiLocStatus&&this.axios(this.getWiFiAxiosConfig).then((function(e){e&&(t.wifiLocInfo=e.data,t.refreshDisable=!1)})).catch((function(e){t.refreshDisable=!1,console.log(e)})),t.gpsLocStatus&&this.axios(this.getGPSAxiosConfig).then((function(e){e&&(t.gpsLocInfo=e.data,t.refreshDisable=!1)})).catch((function(e){t.refreshDisable=!1,console.log(e)})),t.refreshDisable=!1}},watch:{cellLocInfo:function(){var t=this;AMap.convertFrom([t.cellLocInfo.lng,t.cellLocInfo.lat],"gps",(function(e,i){if("ok"===i.info){var n=i.locations,o=n[0].lng,a=n[0].lat,r=new AMap.LngLat(o,a),c=new Date(1e3*t.cellLocInfo.timestamp),s=c.toLocaleString();t.cellMarker=new AMap.Marker({position:r,label:{content:"Cell\r\nLng:".concat(o,", Lat:").concat(a,", time:").concat(s),direction:"top"}}),t.map.add(t.cellMarker),t.map.setFitView()}}))},wifiLocInfo:function(){var t=this;AMap.convertFrom([t.wifiLocInfo.lng,t.wifiLocInfo.lat],"gps",(function(e,i){if("ok"===i.info){var n=i.locations,o=n[0].lng,a=n[0].lat,r=new AMap.LngLat(o,a),c=new Date(1e3*t.wifiLocInfo.timestamp),s=c.toLocaleString();t.wifiMarker=new AMap.Marker({position:r,label:{content:"WiFi\r\nLng:".concat(o,", Lat:").concat(a,", time:").concat(s),direction:"top"}}),t.map.add(t.wifiMarker),t.map.setFitView()}}))},gpsLocInfo:function(){}},mounted:function(){this.loadMap()}},j=O,P=(i("25c2"),i("f6c4")),B=Object(s["a"])(j,V,A,!1,null,"599c960c",null),T=B.exports;u()(B,{VBtn:f["a"],VIcon:g["a"],VMain:P["a"]});var D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("v-card",[t.isRightKey?i("v-list",t._l(t.tree,(function(e){return i("v-list-group",{key:e.sid,attrs:{"prepend-icon":e.icon},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"service.active"}},t._l(e.terminals,(function(e){return i("v-list-item",{key:e.tid,on:{click:function(i){return t.handleTerminalClick(e.tid)}}},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:t._s(t.tericon)}})],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s("id: "+e.tid)+" "),i("br"),t._v(" "+t._s("name: "+e.name)+" ")]),i("v-list-item-subtitle",[t._v(" "+t._s(e.desc)+" ")])],1)],1)})),1)})),1):i("v-alert",{attrs:{type:"error"}},[t._v(" Your key "+t._s(t.userKey)+" is Wrong! "),i("br"),t._v(" Please input a right key. ")])],1)],1)},F=[],G=(i("b0c0"),{name:"Me",components:{},data:function(){return{userKey:localStorage.userKey,isRightKey:!1,tericon:"mdi-chip",tree:[]}},methods:{handleTerminalClick:function(t){var e="https://tsapi.amap.com/v1/track/terminal/trsearch?key=aebd43e54a7517f9dfce0467d6a84807&sid=165050&tid="+t+"&trid=20&pagesize=999";this.$store.commit("changeRequestLineAddr",e),this.$router.replace("/")}},mounted:function(){if(!1===this.isLogin)this.$router.replace("/login");else{var t=this,e=localStorage.userKey,i={method:"get",url:"https://tsapi.amap.com/v1/track/service/list?key="+e};this.axios(i).then((function(i){if(i.data.data){t.isRightKey=!0;for(var n=i.data.data.results,o=function(i){0===i?t.tree.push({sid:n[i].sid,name:n[i].name,desc:n[i].desc,icon:"mdi-cloud-search",active:!0,terminals:[]}):t.tree.push({sid:n[i].sid,name:n[i].name,desc:n[i].desc,icon:"mdi-cloud-search",terminals:[]});var o={method:"get",url:"https://tsapi.amap.com/v1/track/terminal/list?key="+e+"&sid="+n[i].sid};t.axios(o).then((function(e){for(var n=e.data.data.results,o=0;o<n.length;o++)t.tree[i].terminals.push(n[o])}))},a=0;a<n.length;a++)o(a)}})).catch((function(t){console.log(t)}))}},computed:{isLogin:function(){var t=this.$store.state.isLogin;return"true"===t||!0===t}}}),H=G,R=i("0798"),W=i("56b0"),E=Object(s["a"])(H,D,F,!1,null,null,null),N=E.exports;u()(E,{VAlert:R["a"],VCard:h["a"],VIcon:g["a"],VList:y["a"],VListGroup:W["a"],VListItem:L["a"],VListItemContent:b["a"],VListItemIcon:w["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"],VMain:P["a"]});var U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("div",{staticStyle:{"text-align":"center","margin-top":"200px"}},[i("v-btn",{attrs:{outlined:"",color:"primary",dark:""},on:{click:t.handleNameClick}},[t._v("联系我(HashJeremy) ")])],1)])},q=[],J={name:"About",components:{},methods:{handleNameClick:function(){console.log("click"),window.location.href="https://gitee.com/HashJeremy"}}},z=J,Y=Object(s["a"])(z,U,q,!1,null,"efd9c184",null),Q=Y.exports;u()(Y,{VBtn:f["a"],VMain:P["a"]});var X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[t.isLogin?i("div",[i("v-text-field",{staticClass:"ma-12",attrs:{label:"Your key","prepend-inner-icon":"mdi-key-variant",readonly:"",outlined:""},model:{value:t.userKey,callback:function(e){t.userKey=e},expression:"userKey"}}),i("div",{staticStyle:{"text-align":"center"}},[i("v-btn",{attrs:{width:"200px",outlined:"",color:"primary"},on:{click:t.handleSignOut}},[t._v("退出 ")])],1)],1):i("div",[i("v-text-field",{ref:"inputKey",staticClass:"ma-12",attrs:{label:"Your key","prepend-inner-icon":"mdi-key-variant",rules:t.rules,clearable:"",outlined:""},model:{value:t.inputKey,callback:function(e){t.inputKey=e},expression:"inputKey"}}),i("div",{staticStyle:{"text-align":"center"}},[i("v-btn",{attrs:{width:"200px",outlined:"",color:"primary"},on:{click:t.handleLogin}},[t._v("登陆 ")])],1)],1)])},Z=[],tt={name:"Login",data:function(){return{inputKey:"",rules:[function(t){return!!t||"UserKey is Required."}]}},methods:{handleLogin:function(){""!==this.inputKey&&(this.$store.commit("changeUserKey",this.inputKey),this.$store.commit("changeIsLogin",!0),this.$router.replace("/"))},handleSignOut:function(){this.$store.commit("changeUserKey","undefined"),this.$store.commit("changeIsLogin",!1)}},mounted:function(){},computed:{userKey:function(){return console.log("userKey refresh = "+this.$store.state.userKey),this.$store.state.userKey},isLogin:function(){var t=this.$store.state.isLogin;return"true"===t||!0===t}}},et=tt,it=i("8654"),nt=Object(s["a"])(et,X,Z,!1,null,null,null),ot=nt.exports;u()(nt,{VBtn:f["a"],VMain:P["a"],VTextField:it["a"]}),n["a"].use(M["a"]);var at=[{path:"/",name:"Home",component:T},{path:"/me",name:"Me",component:N},{path:"/about",name:"About",component:Q},{path:"/login",name:"Login",component:ot}],rt=new M["a"]({mode:"history",base:"/gaodemapproject/",routes:at}),ct=rt,st=i("2f62");n["a"].use(st["a"]);var lt=new st["a"].Store({state:{userKey:"undefined",isLogin:!1,requestLineAddr:""},mutations:{changeUserKey:function(t,e){t.userKey=e,localStorage.userKey=e},changeIsLogin:function(t,e){t.isLogin=e,localStorage.isLogin=e},changeRequestLineAddr:function(t,e){t.requestLineAddr=e}},actions:{},modules:{}}),ut=i("f309");n["a"].use(ut["a"]);var pt=new ut["a"]({}),dt=i("bc3a"),mt=i.n(dt);n["a"].config.productionTip=!1,n["a"].prototype.axios=mt.a,new n["a"]({router:ct,store:lt,vuetify:pt,render:function(t){return t(I)}}).$mount("#app")}});
//# sourceMappingURL=app.d884a679.js.map