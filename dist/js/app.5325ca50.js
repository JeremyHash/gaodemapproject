(function(t){function e(e){for(var i,r,c=e[0],s=e[1],l=e[2],p=0,d=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={app:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/gaodemapproject/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"12c9":function(t,e,n){t.exports=n.p+"img/kangkang.50406fca.png"},"3b16":function(t,e,n){"use strict";var i=n("64c1"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{app:""}},[i("v-app-bar",{staticClass:"white--text",attrs:{color:"indigo accent-2",app:"","clipped-left":!0,tile:""}},[i("v-app-bar-nav-icon",{staticClass:"white--text",on:{click:t.switchBar}}),i("v-toolbar-title",[t._v(t._s(t.AppTitle))]),i("v-spacer"),t.isLogin?i("v-btn",{staticClass:"white--text mr-2",attrs:{icon:""},on:{click:t.handleAccountSignOut}},[i("v-icon",[t._v("mdi-account")]),t._v(" 退出 ")],1):i("v-btn",{staticClass:"white--text mr-2",attrs:{icon:""},on:{click:t.handleAccountClick}},[i("v-icon",[t._v("mdi-account")]),t._v(" 登陆 ")],1)],1),i("v-navigation-drawer",{attrs:{clipped:this.jeremy2,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-card",{staticClass:"mx-auto my-10",staticStyle:{"border-radius":"50%",overflow:"hidden","z-index":"999999999999"},attrs:{width:"200px",height:"200px",flat:""},on:{click:t.handleImgClick}},[i("v-img",{attrs:{src:n("12c9")}})],1),i("v-list-item-group",{attrs:{mandatory:""}},[i("v-list",{attrs:{shaped:""}},t._l(t.items,(function(e){return i("v-list-item",{key:e.title,on:{click:function(n){return t.handleNavListItemClick(e.link)}}},[i("v-list-item-icon",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"ml-6"},[t._v(t._s(e.title))])],1)],1)})),1)],1)],1),i("router-view")],1)},a=[],r=(n("ac1f"),n("5319"),{name:"App",data:function(){return{AppTitle:"JeremyMap",drawer:null,jeremy2:!0,items:[{title:"Map",icon:"mdi-map-search",link:"/"},{title:"Me",icon:"mdi-account-search",link:"/me"},{title:"About",icon:"mdi-information",link:"/about"}]}},methods:{switchBar:function(){this.drawer=!this.drawer},handleImgClick:function(){},handleAccountClick:function(){this.$router.replace("/login")},handleAccountSignOut:function(){this.$store.commit("changeUserKey","undefined"),this.$store.commit("changeIsLogin",!1),this.$router.replace("/")},handleNavListItemClick:function(t){this.$router.replace(t)}},computed:{isLogin:function(){var t=this.$store.state.isLogin;return"true"===t||!0===t}},mounted:function(){this.$store.commit("changeUserKey",localStorage.userKey),this.$store.commit("changeIsLogin",localStorage.isLogin)}}),c=r,s=n("2877"),l=n("6544"),u=n.n(l),p=n("7496"),d=n("40dc"),m=n("5bc1"),f=n("8336"),h=n("b0af"),g=n("132d"),v=n("adda"),L=n("8860"),y=n("da13"),k=n("5d23"),w=n("1baa"),b=n("34c3"),S=n("f774"),C=n("2fa4"),_=n("2a7f"),x=Object(s["a"])(c,o,a,!1,null,null,null),I=x.exports;u()(x,{VApp:p["a"],VAppBar:d["a"],VAppBarNavIcon:m["a"],VBtn:f["a"],VCard:h["a"],VIcon:g["a"],VImg:v["a"],VList:L["a"],VListItem:y["a"],VListItemContent:k["a"],VListItemGroup:w["a"],VListItemIcon:b["a"],VListItemTitle:k["c"],VNavigationDrawer:S["a"],VSpacer:C["a"],VToolbarTitle:_["a"]});var M=n("8c4f"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",[n("div",{attrs:{id:"container"}},[n("v-btn",{staticClass:"mt-8 mr-4 float-right locBtn",attrs:{color:t.wifiColor,"text-color":"white",rounded:""},on:{click:t.WiFiLocHandler}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-map-marker ")]),t._v(" WiFi ")],1),n("v-btn",{staticClass:"mt-8 mr-4 float-right locBtn",attrs:{color:t.cellColor,"text-color":"white",rounded:""},on:{click:t.CellLocHandler}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-map-marker ")]),t._v(" Cell ")],1),n("v-btn",{staticClass:"mt-8 mr-4 float-right locBtn",attrs:{color:t.gpsColor,"text-color":"white",rounded:""},on:{click:t.GPSLocHandler}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-map-marker ")]),t._v(" GPS ")],1),n("v-btn",{staticClass:"mt-8 mr-4 float-right locBtn",attrs:{color:"primary","text-color":"white",rounded:""},on:{click:t.changeRefreshStatus}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-cached ")]),t._v(" "+t._s(t.refreshStatus)+" ")],1),n("v-btn",{staticClass:"mt-8 mr-4 float-right locBtn",attrs:{color:"primary","text-color":"white",rounded:""},on:{click:t.refresh}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-cached ")]),t._v(" 手动刷新 ")],1)],1)])},V=[],K=(n("99af"),n("d81d"),n("862d")),$=n.n(K),O={name:"Map",data:function(){return{refreshStatus:"自动刷新",wifiColor:"primary",cellColor:"primary",gpsColor:"red",refreshInterval:0,cellLocInfo:{},wifiLocInfo:{},gpsLocInfo:{},cellMarker:{},wifiMarker:{},gpsMarker:{},cellLocStatus:!0,wifiLocStatus:!0,gpsLocStatus:!0,getCellAxiosConfig:{url:"http://airtest.openluat.com:2900/getCellLocInfo",method:"get"},getWiFiAxiosConfig:{url:"http://airtest.openluat.com:2900/getWiFiLocInfo",method:"get"},getGPSAxiosConfig:{url:"http://airtest.openluat.com:2900/getGPSLocInfo",method:"get"}}},methods:{loadMap:function(){var t=this;$.a.load({key:"3c618ebb54475fb63eb35b900519cd6f",version:"2.0"}).then((function(e){t.map=new e.Map("container",{resizeEnable:!0}),e.plugin(["AMap.ToolBar","AMap.Scale","AMap.GraspRoad"],(function(){t.map.addControl(new e.Scale({position:"RB"}))}))})).catch((function(t){console.log(t)}))},CellLocHandler:function(){"gray"===this.cellColor?this.cellColor="primary":this.cellColor="gray",!0===this.cellLocStatus?this.cellLocStatus=!1:this.cellLocStatus=!0},WiFiLocHandler:function(){"gray"===this.wifiColor?this.wifiColor="primary":this.wifiColor="gray",!0===this.wifiLocStatus?this.wifiLocStatus=!1:this.wifiLocStatus=!0},GPSLocHandler:function(){"gray"===this.gpsColor?this.gpsColor="red":this.gpsColor="gray",!0===this.gpsLocStatus?this.gpsLocStatus=!1:this.gpsLocStatus=!0},changeRefreshStatus:function(){var t=this.refreshStatus;"自动刷新"===t?(this.refreshStatus="刷新中",this.refreshInterval=setInterval(this.refresh,5e3)):(this.refreshStatus="自动刷新",clearInterval(this.refreshInterval))},refresh:function(){var t=this;t.map.remove(t.cellMarker),t.map.remove(t.wifiMarker),t.map.remove(t.gpsMarker),t.cellLocStatus&&this.axios(this.getCellAxiosConfig).then((function(e){e&&(t.cellLocInfo=e.data)})).catch((function(t){console.log(t)})),t.wifiLocStatus&&this.axios(this.getWiFiAxiosConfig).then((function(e){e&&(t.wifiLocInfo=e.data)})).catch((function(t){console.log(t)})),t.gpsLocStatus&&this.axios(this.getGPSAxiosConfig).then((function(e){e&&(t.gpsLocInfo=e.data)})).catch((function(t){console.log(t)}))}},watch:{refreshStatus:function(){},cellLocInfo:function(){var t=this;AMap.convertFrom([t.cellLocInfo.lng,t.cellLocInfo.lat],"gps",(function(e,n){if("ok"===n.info){var i=n.locations,o=i[0].lng,a=i[0].lat,r=new AMap.LngLat(o,a),c=new Date(1e3*t.cellLocInfo.timestamp),s=c.toLocaleString();t.cellMarker=new AMap.Marker({position:r,label:{content:"Cell\r\nLng:".concat(o,", Lat:").concat(a,", time:").concat(s),direction:"top"}}),t.map.add(t.cellMarker),t.map.setFitView()}}))},wifiLocInfo:function(){var t=this;AMap.convertFrom([t.wifiLocInfo.lng,t.wifiLocInfo.lat],"gps",(function(e,n){if("ok"===n.info){var i=n.locations,o=i[0].lng,a=i[0].lat,r=new AMap.LngLat(o,a),c=new Date(1e3*t.wifiLocInfo.timestamp),s=c.toLocaleString();t.wifiMarker=new AMap.Marker({position:r,label:{content:"WiFi\r\nLng:".concat(o,", Lat:").concat(a,", time:").concat(s),direction:"top"}}),t.map.add(t.wifiMarker),t.map.setFitView()}}))},gpsLocInfo:function(){var t=this;AMap.convertFrom([t.gpsLocInfo.lng,t.gpsLocInfo.lat],"gps",(function(e,n){if("ok"===n.info){var i=n.locations,o=i[0].lng,a=i[0].lat,r=new AMap.LngLat(o,a),c=new Date(1e3*t.gpsLocInfo.timestamp),s=c.toLocaleString();t.gpsMarker=new AMap.Marker({position:r,label:{content:"GPS\r\nLng:".concat(o,", Lat:").concat(a,", ").concat(s),direction:"top"},icon:new AMap.Icon({size:new AMap.Size(19,26),image:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png",imageSize:new AMap.Size(19,26)})}),t.map.add(t.gpsMarker),t.map.setFitView()}}))}},mounted:function(){this.loadMap()}},j=O,P=(n("3b16"),n("f6c4")),B=Object(s["a"])(j,A,V,!1,null,"4170c898",null),F=B.exports;u()(B,{VBtn:f["a"],VIcon:g["a"],VMain:P["a"]});var T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",[n("v-card",[t.isRightKey?n("v-list",t._l(t.tree,(function(e){return n("v-list-group",{key:e.sid,attrs:{"prepend-icon":e.icon},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"service.active"}},t._l(e.terminals,(function(e){return n("v-list-item",{key:e.tid,on:{click:function(n){return t.handleTerminalClick(e.tid)}}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(t.tericon)}})],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s("id: "+e.tid)+" "),n("br"),t._v(" "+t._s("name: "+e.name)+" ")]),n("v-list-item-subtitle",[t._v(" "+t._s(e.desc)+" ")])],1)],1)})),1)})),1):n("v-alert",{attrs:{type:"error"}},[t._v(" Your key "+t._s(t.userKey)+" is Wrong! "),n("br"),t._v(" Please input a right key. ")])],1)],1)},G=[],R=(n("b0c0"),{name:"Me",components:{},data:function(){return{userKey:localStorage.userKey,isRightKey:!1,tericon:"mdi-chip",tree:[]}},methods:{handleTerminalClick:function(t){var e="https://tsapi.amap.com/v1/track/terminal/trsearch?key=aebd43e54a7517f9dfce0467d6a84807&sid=165050&tid="+t+"&trid=20&pagesize=999";this.$store.commit("changeRequestLineAddr",e),this.$router.replace("/")}},mounted:function(){if(!1===this.isLogin)this.$router.replace("/login");else{var t=this,e=localStorage.userKey,n={method:"get",url:"https://tsapi.amap.com/v1/track/service/list?key="+e};this.axios(n).then((function(n){if(n.data.data){t.isRightKey=!0;for(var i=n.data.data.results,o=function(n){0===n?t.tree.push({sid:i[n].sid,name:i[n].name,desc:i[n].desc,icon:"mdi-cloud-search",active:!0,terminals:[]}):t.tree.push({sid:i[n].sid,name:i[n].name,desc:i[n].desc,icon:"mdi-cloud-search",terminals:[]});var o={method:"get",url:"https://tsapi.amap.com/v1/track/terminal/list?key="+e+"&sid="+i[n].sid};t.axios(o).then((function(e){for(var i=e.data.data.results,o=0;o<i.length;o++)t.tree[n].terminals.push(i[o])}))},a=0;a<i.length;a++)o(a)}})).catch((function(t){console.log(t)}))}},computed:{isLogin:function(){var t=this.$store.state.isLogin;return"true"===t||!0===t}}}),H=R,W=n("0798"),z=n("56b0"),E=Object(s["a"])(H,T,G,!1,null,null,null),N=E.exports;u()(E,{VAlert:W["a"],VCard:h["a"],VIcon:g["a"],VList:L["a"],VListGroup:z["a"],VListItem:y["a"],VListItemContent:k["a"],VListItemIcon:b["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VMain:P["a"]});var U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",[n("div",{staticStyle:{"text-align":"center","margin-top":"200px"}},[n("v-btn",{attrs:{outlined:"",color:"primary",dark:""},on:{click:t.handleNameClick}},[t._v("联系我(HashJeremy) ")])],1)])},q=[],J={name:"About",components:{},methods:{handleNameClick:function(){console.log("click"),window.location.href="https://gitee.com/HashJeremy"}}},D=J,Y=Object(s["a"])(D,U,q,!1,null,"efd9c184",null),Q=Y.exports;u()(Y,{VBtn:f["a"],VMain:P["a"]});var X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",[t.isLogin?n("div",[n("v-text-field",{staticClass:"ma-12",attrs:{label:"Your key","prepend-inner-icon":"mdi-key-variant",readonly:"",outlined:""},model:{value:t.userKey,callback:function(e){t.userKey=e},expression:"userKey"}}),n("div",{staticStyle:{"text-align":"center"}},[n("v-btn",{attrs:{width:"200px",outlined:"",color:"primary"},on:{click:t.handleSignOut}},[t._v("退出 ")])],1)],1):n("div",[n("v-text-field",{ref:"inputKey",staticClass:"ma-12",attrs:{label:"Your key","prepend-inner-icon":"mdi-key-variant",rules:t.rules,clearable:"",outlined:""},model:{value:t.inputKey,callback:function(e){t.inputKey=e},expression:"inputKey"}}),n("div",{staticStyle:{"text-align":"center"}},[n("v-btn",{attrs:{width:"200px",outlined:"",color:"primary"},on:{click:t.handleLogin}},[t._v("登陆 ")])],1)],1)])},Z=[],tt={name:"Login",data:function(){return{inputKey:"",rules:[function(t){return!!t||"UserKey is Required."}]}},methods:{handleLogin:function(){""!==this.inputKey&&(this.$store.commit("changeUserKey",this.inputKey),this.$store.commit("changeIsLogin",!0),this.$router.replace("/"))},handleSignOut:function(){this.$store.commit("changeUserKey","undefined"),this.$store.commit("changeIsLogin",!1)}},mounted:function(){},computed:{userKey:function(){return console.log("userKey refresh = "+this.$store.state.userKey),this.$store.state.userKey},isLogin:function(){var t=this.$store.state.isLogin;return"true"===t||!0===t}}},et=tt,nt=n("8654"),it=Object(s["a"])(et,X,Z,!1,null,null,null),ot=it.exports;u()(it,{VBtn:f["a"],VMain:P["a"],VTextField:nt["a"]}),i["a"].use(M["a"]);var at=[{path:"/",name:"Home",component:F},{path:"/me",name:"Me",component:N},{path:"/about",name:"About",component:Q},{path:"/login",name:"Login",component:ot}],rt=new M["a"]({mode:"history",base:"/gaodemapproject/",routes:at}),ct=rt,st=n("2f62");i["a"].use(st["a"]);var lt=new st["a"].Store({state:{userKey:"undefined",isLogin:!1,requestLineAddr:""},mutations:{changeUserKey:function(t,e){t.userKey=e,localStorage.userKey=e},changeIsLogin:function(t,e){t.isLogin=e,localStorage.isLogin=e},changeRequestLineAddr:function(t,e){t.requestLineAddr=e}},actions:{},modules:{}}),ut=n("f309");i["a"].use(ut["a"]);var pt=new ut["a"]({}),dt=n("bc3a"),mt=n.n(dt);i["a"].config.productionTip=!1,i["a"].prototype.axios=mt.a,new i["a"]({router:ct,store:lt,vuetify:pt,render:function(t){return t(I)}}).$mount("#app")},"64c1":function(t,e,n){}});
//# sourceMappingURL=app.5325ca50.js.map