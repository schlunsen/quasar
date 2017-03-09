webpackJsonp([11,96],{111:function(t,i,a){var o=a(13)(a(180),a(243),null,null);t.exports=o.exports},180:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=a(2);i.default={data:function(){return{anchorOrigin:{vertical:"bottom",horizontal:"left"},selfOrigin:{vertical:"top",horizontal:"left"}}},computed:{anchor:function(){return this.anchorOrigin.vertical+" "+this.anchorOrigin.horizontal},self:function(){return this.selfOrigin.vertical+" "+this.selfOrigin.horizontal}},methods:{showToast:function(){o.Toast.create((o.Platform.is.desktop?"Clicked":"Tapped")+" on a Popover item")}}}},238:function(t,i,a){t.exports=a.p+"img/map.956e5dd.png"},243:function(t,i,a){t.exports={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",[o("div",{staticClass:"layout-padding"},[t._m(0),t._v(" "),o("div",[o("button",{staticClass:"primary"},[o("i",[t._v("assignment")]),t._v(" "),o("q-popover",{ref:"popover1"},[o("div",{staticClass:"list scroll highlight",staticStyle:{"min-width":"150px","max-height":"500px"}},t._l(20,function(i){return o("div",{staticClass:"item item-link two-lines item-delimiter",on:{click:function(i){t.showToast(),t.$refs.popover1.close()}}},[o("div",{staticClass:"item-content"},[o("div",[t._v("Label")]),t._v(" "),o("div",[t._v("Value")])])])}))])],1),t._v(" "),o("button",{ref:"target4",staticClass:"negative"},[t._v("\n        Disabled Popover\n\n        "),o("q-popover",{attrs:{disable:""}},[t._v('\n          This Popover content won\'t be shown because of "disable"\n        ')])],1),t._v(" "),o("div",{staticClass:"card",staticStyle:{"margin-top":"75px"}},[o("div",{staticClass:"card-title bg-primary text-center"},[o("button",{staticClass:"orange push"},[o("span",{staticClass:"desktop-only"},[t._v("Click")]),t._v(" "),o("span",{staticClass:"mobile-only"},[t._v("Tap")]),t._v("\n            Me\n\n            "),o("q-popover",{ref:"popover2",attrs:{anchor:t.anchor,self:t.self}},[o("div",{staticClass:"list highlight",staticStyle:{"min-width":"100px"}},t._l(3,function(i){return o("div",{staticClass:"item item-link item-delimiter",on:{click:function(i){t.showToast(),t.$refs.popover2.close()}}},[o("div",{staticClass:"item-content"},[t._v("\n                    Label\n                  ")])])}))])],1)]),t._v(" "),o("p",{staticClass:"caption text-center"},[t._v("Configure the Popover for button above.")]),t._v(" "),o("p",{staticClass:"text-center"},[o("span",{staticClass:"tag label bg-light"},[t._v('anchor="'+t._s(t.anchor)+'"')]),t._v(" "),o("span",{staticClass:"tag label bg-light"},[t._v('self="'+t._s(t.self)+'"')])]),t._v(" "),o("div",{staticClass:"card-content group row sm-column"},[o("div",{staticClass:"auto column items-center"},[o("p",{staticClass:"caption"},[t._v("Anchor Origin")]),t._v(" "),o("div",{staticClass:"flex"},[o("div",{staticClass:"column group"},[o("div",[t._v("Vertical")]),t._v(" "),o("label",[o("q-radio",{attrs:{val:"top"},model:{value:t.anchorOrigin.vertical,callback:function(i){t.anchorOrigin.vertical=i}}}),t._v("\n                  Top\n                ")],1),t._v(" "),o("label",[o("q-radio",{attrs:{val:"center"},model:{value:t.anchorOrigin.vertical,callback:function(i){t.anchorOrigin.vertical=i}}}),t._v("\n                  Center\n                ")],1),t._v(" "),o("label",[o("q-radio",{attrs:{val:"bottom"},model:{value:t.anchorOrigin.vertical,callback:function(i){t.anchorOrigin.vertical=i}}}),t._v("\n                  Bottom\n                ")],1)]),t._v(" "),o("div",{staticClass:"column group"},[o("div",[t._v("Horizontal")]),t._v(" "),o("label",[o("q-radio",{attrs:{val:"left"},model:{value:t.anchorOrigin.horizontal,callback:function(i){t.anchorOrigin.horizontal=i}}}),t._v("\n                  Left\n                ")],1),t._v(" "),o("label",[o("q-radio",{attrs:{val:"middle"},model:{value:t.anchorOrigin.horizontal,callback:function(i){t.anchorOrigin.horizontal=i}}}),t._v("\n                  Middle\n                ")],1),t._v(" "),o("label",[o("q-radio",{attrs:{val:"right"},model:{value:t.anchorOrigin.horizontal,callback:function(i){t.anchorOrigin.horizontal=i}}}),t._v("\n                  Right\n                ")],1)])])]),t._v(" "),o("div",{staticClass:"auto column items-center"},[o("p",{staticClass:"caption"},[t._v("Self Origin")]),t._v(" "),o("div",{staticClass:"flex"},[o("div",{staticClass:"column group"},[o("div",[t._v("Vertical")]),t._v(" "),o("label",[o("q-radio",{attrs:{val:"top"},model:{value:t.selfOrigin.vertical,callback:function(i){t.selfOrigin.vertical=i}}}),t._v("\n                  Top\n                ")],1),t._v(" "),o("label",[o("q-radio",{attrs:{val:"center"},model:{value:t.selfOrigin.vertical,callback:function(i){t.selfOrigin.vertical=i}}}),t._v("\n                  Center\n                ")],1),t._v(" "),o("label",[o("q-radio",{attrs:{val:"bottom"},model:{value:t.selfOrigin.vertical,callback:function(i){t.selfOrigin.vertical=i}}}),t._v("\n                  Bottom\n                ")],1)]),t._v(" "),o("div",{staticClass:"column group"},[o("div",[t._v("Horizontal")]),t._v(" "),o("label",[o("q-radio",{attrs:{val:"left"},model:{value:t.selfOrigin.horizontal,callback:function(i){t.selfOrigin.horizontal=i}}}),t._v("\n                  Left\n                ")],1),t._v(" "),o("label",[o("q-radio",{attrs:{val:"middle"},model:{value:t.selfOrigin.horizontal,callback:function(i){t.selfOrigin.horizontal=i}}}),t._v("\n                  Middle\n                ")],1),t._v(" "),o("label",[o("q-radio",{attrs:{val:"right"},model:{value:t.selfOrigin.horizontal,callback:function(i){t.selfOrigin.horizontal=i}}}),t._v("\n                  Right\n                ")],1)])])])])]),t._v(" "),o("div",{staticStyle:{"margin-bottom":"700px"}}),t._v(" "),o("button",{staticClass:"secondary fixed-top-right",staticStyle:{top:"65px",right:"16px"}},[o("i",[t._v("directions")]),t._v(" "),o("q-popover",{ref:"popover3"},[o("img",{staticStyle:{height:"150px",width:"200px"},attrs:{src:a(238)},on:{click:function(i){t.showToast(),t.$refs.popover3.close()}}})])],1),t._v(" "),o("button",{staticClass:"tertiary fixed-bottom-right",staticStyle:{bottom:"10px",right:"16px"}},[o("i",[t._v("plus_one")]),t._v(" "),o("q-popover",{ref:"popover4"},[o("div",{staticClass:"group",staticStyle:{width:"200px",height:"50px","text-align":"center"}},[o("button",{staticClass:"primary clear",on:{click:function(i){t.showToast(),t.$refs.popover4.close()}}},[o("i",[t._v("thumb_up")])]),t._v(" "),o("button",{staticClass:"primary clear",on:{click:function(i){t.showToast(),t.$refs.popover4.close()}}},[o("i",[t._v("thumb_down")])]),t._v(" "),o("button",{staticClass:"secondary clear",on:{click:function(i){t.showToast(),t.$refs.popover4.close()}}},[o("i",[t._v("share")])])])])],1)]),t._v(" "),o("button",{staticClass:"primary fixed-bottom-left",staticStyle:{bottom:"10px",left:"10px"}},[o("i",[t._v("menu")]),t._v(" "),o("q-popover",{ref:"popover5"},[o("div",{staticClass:"list highlight",staticStyle:{"min-width":"150px"}},t._l(20,function(i){return o("div",{staticClass:"item item-link two-lines item-delimiter",on:{click:function(i){t.showToast(),t.$refs.popover5.close()}}},[o("div",{staticClass:"item-content"},[o("div",[t._v("Label")]),t._v(" "),o("div",[t._v("Value")])])])}))])],1)])])},staticRenderFns:[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("p",{staticClass:"caption",staticStyle:{"margin-top":"120px"}},[a("span",{staticClass:"desktop-only"},[t._v("Click")]),t._v(" "),a("span",{staticClass:"mobile-only"},[t._v("Tap")]),t._v(" on buttons and image below to open Popovers.\n      "),a("br"),t._v(" "),a("em",[t._v("This page has intended scroll so you can see multiple scenarios.")])])}]}}});