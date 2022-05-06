(function(){"use strict";var t={9319:function(t,e,s){var o=s(144),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-main",{attrs:{app:""}},[s("router-view")],1)],1)},n=[],i={data(){return{navItems:[{text:"Info",to:"/info"},{text:"About",to:"/about"},{text:"Contact",to:"/contect"},{text:"Projects",to:"/projects"}]}}},c=i,a=s(1001),p=s(3453),l=s.n(p),u=s(7524),h=s(1009),d=(0,a.Z)(c,r,n,!1,null,null,null),m=d.exports;l()(d,{VApp:u.Z,VMain:h.Z});var g=s(8345),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{attrs:{id:"black-background"}}),s("div",{attrs:{id:"background"}},[s("div",{staticClass:"d-flex"},t._l(t.images_one,(function(t){return s("div",{key:t.src,attrs:{id:"background-image-parent-one"}},[s("v-img",{attrs:{src:t.src,"lazy-src":t.src,width:"100vh",height:"50vh"}})],1)})),0),s("div",{staticClass:"d-flex"},t._l(t.images_two,(function(t){return s("div",{key:t.src,attrs:{id:"background-image-parent-two"}},[s("v-img",{attrs:{src:t.src,"lazy-src":t.src,width:"100vh",height:"50vh"}})],1)})),0)]),s("div",{attrs:{id:"opacity-background"}}),s("div",{staticClass:"content d-flex align-center justify-center flex-column",staticStyle:{height:"100vh"}},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"d-flex",attrs:{id:"anim-text-parent"}},[s("div",{attrs:{id:"anim-text-text"}},t._l(t.texts,(function(e,o){return s("div",{key:o,staticClass:"text-h2 font-weight-bold blue--text mb-2 text--lighten-3"},[t._v(" "+t._s(e)+" ")])})),0)]),s("div",{staticClass:"text-h2 font-weight-bold white--text"},[t._v("를 더욱 아름답게")])]),s("div",{staticClass:"d-flex mt-5"},[s("div",{staticClass:"text-h6 font-weight-medium white--text"},[t._v(" Make The   ")]),s("div",{attrs:{id:"anim-text-en-parent"}},[s("div",{staticClass:"d-flex flex-column align-center",attrs:{id:"anim-text-en-text"}},t._l(t.texts_en,(function(e,o){return s("div",{key:o,staticClass:"text-h6 font-weight-medium blue--text text--lighten-3"},[t._v(" "+t._s(e)+" ")])})),0)]),s("div",{staticClass:"text-h6 font-weight-medium white--text"},[t._v("   More Beautiful ")])])])])},x=[],v={data(){return{scrollPosY:0,texts:["세계","예술","사랑","인생","하늘","운명","소원","청춘","시작","신뢰"],texts_en:["World","Art","Love","Life","Sky","Fate","Wish","Youth","Start","Trust"],images_one:[{src:"https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{src:"https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg"},{src:"https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{src:"https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{src:"https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{src:"https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg"},{src:"https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}],images_two:[{src:"https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{src:"https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{src:"https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{src:"https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{src:"https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{src:"https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{src:"https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}]}},methods:{onScroll(t){this.scrollPosY=t.target.documentElement.scrollTop,console.log(this.scrollPosY)}},mounted(){document.addEventListener("scroll",this.onScroll),this.$vuetify.theme.dark=!0}},b=v,y=s(9418),w=(0,a.Z)(b,f,x,!1,null,null,null),j=w.exports;l()(w,{VImg:y.Z}),o.Z.use(g.Z);const _=[{path:"/",component:j}],k=new g.Z({mode:"history",base:"/",routes:_});var Z=k,C=s(629);o.Z.use(C.ZP);var O=new C.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),P=s(4023);o.Z.use(P.Z);var S=new P.Z({}),T=s(7398);o.Z.config.productionTip=!1,o.Z.use(T.ZP,{config:{id:"G-0MXFLJMKTQ"}}),new o.Z({router:Z,store:O,vuetify:S,render:t=>t(m)}).$mount("#app")}},e={};function s(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,o,r,n){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],n=t[l][2];for(var c=!0,a=0;a<o.length;a++)(!1&n||i>=n)&&Object.keys(s.O).every((function(t){return s.O[t](o[a])}))?o.splice(a--,1):(c=!1,n<i&&(i=n));if(c){t.splice(l--,1);var p=r();void 0!==p&&(e=p)}}return e}n=n||0;for(var l=t.length;l>0&&t[l-1][2]>n;l--)t[l]=t[l-1];t[l]=[o,r,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,n,i=o[0],c=o[1],a=o[2],p=0;if(i.some((function(e){return 0!==t[e]}))){for(r in c)s.o(c,r)&&(s.m[r]=c[r]);if(a)var l=a(s)}for(e&&e(o);p<i.length;p++)n=i[p],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(l)},o=self["webpackChunkapp"]=self["webpackChunkapp"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(9319)}));o=s.O(o)})();
//# sourceMappingURL=app.a7a8e003.js.map