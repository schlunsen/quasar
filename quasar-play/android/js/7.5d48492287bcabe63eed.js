webpackJsonp([7,96],{132:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),r=i(a);e.default={data:function(){return{version:r.default.version}},methods:{launch:function(){a.Utils.openURL("http://quasar-framework.org")}}}},222:function(t,e,n){e=t.exports=n(26)(),e.push([t.i,'.index-page .banner{height:50vh;width:100%;font-size:30vmax;color:hsla(0,0%,100%,.2);overflow:hidden}.index-page .card{width:80vw;max-width:500px;padding:25px;margin-top:-35px}.index-page .card img{height:62px;width:62px}.ribbon{width:12.1em;height:12.1em;position:absolute;overflow:hidden;top:0;right:0;z-index:9999;pointer-events:none;font-size:15px;text-decoration:none;text-indent:-999999px}.ribbon.fixed{position:fixed}.ribbon:before{content:"";padding:.38em 0;background-color:#3595e9;background-image:-webkit-linear-gradient(top,transparent,rgba(0,0,0,.15));background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.15));box-shadow:0 .15em .23em 0 rgba(0,0,0,.5);pointer-events:auto}.ribbon:after{content:attr(title);color:#fff;font-weight:700;line-height:1.54em;text-decoration:none;text-shadow:0 -.08em rgba(0,0,0,.5);text-align:center;text-indent:0;padding:.15em 0;margin:.15em 0;border-width:.08em 0;border-style:dotted;border-color:hsla(0,0%,100%,.7)}.ribbon:after,.ribbon:before{position:absolute;display:block;width:15.38em;height:1.74em;top:3.23em;right:-3.23em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}',""])},231:function(t,e,n){var i=n(222);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(27)("92a702c8",i,!0)},29:function(t,e,n){n(231);var i=n(13)(n(132),n(292),null,null);t.exports=i.exports},292:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-page bg-white window-height window-width column items-center"},[n("div",{staticClass:"banner bg-primary flex items-center justify-center"},[t._v("\n    Play\n  ")]),t._v(" "),n("div",{staticClass:"text-center"},[n("div",{staticClass:"card bg-grey-2 shadow-3 column items-center justify-center group"},[n("h1",{staticClass:"text-primary"},[t._v("Quasar")]),t._v(" "),n("img",{attrs:{src:"statics/logo.png"}}),t._v(" "),n("br"),t._v(" "),n("router-link",{staticClass:"full-width primary push",attrs:{to:"/play",tag:"button"}},[n("i",{staticClass:"on-left"},[t._v("play_circle_outline")]),t._v("\n        Play URL\n      ")]),t._v(" "),n("router-link",{staticClass:"full-width primary push",attrs:{to:"/showcase",tag:"button"}},[n("i",{staticClass:"on-left"},[t._v("layers")]),t._v("\n        Quasar Showcase\n      ")]),t._v(" "),n("button",{staticClass:"grey clear",on:{click:function(e){t.launch()}}},[n("i",{staticClass:"on-left"},[t._v("launch")]),t._v("\n        Quasar Documentation\n      ")])],1)]),t._v(" "),n("a",{staticClass:"ribbon",attrs:{title:"Built with Quasar v"+t.version}})])},staticRenderFns:[]}}});