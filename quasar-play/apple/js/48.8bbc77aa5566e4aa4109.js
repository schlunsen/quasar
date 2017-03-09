webpackJsonp([48,96],{150:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{standalone:{min:10,max:35},step:{min:10,max:20},label:{min:-12,max:8},snap:{min:2,max:6},marker:{min:6,max:8},range:{min:20,max:65}}}}},296:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"layout-padding"},[e("p",{staticClass:"caption"},[a._v("\n      Standalone\n      "),e("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),e("span",{staticClass:"right-detail"},[e("em",[a._v(a._s(a.standalone.min)+" to "+a._s(a.standalone.max))]),a._v("   (0 to 50)")])])]),a._v(" "),e("q-double-range",{attrs:{min:0,max:50},model:{value:a.standalone,callback:function(t){a.standalone=t}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      With Label\n      "),e("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),e("span",{staticClass:"right-detail"},[e("em",[a._v(a._s(a.label.min)+" to "+a._s(a.label.max))]),a._v("   (-20 to 20, step 4)")])])]),a._v(" "),e("q-double-range",{attrs:{min:-20,max:20,step:4,label:""},model:{value:a.label,callback:function(t){a.label=t}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      With Step\n      "),e("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),e("span",{staticClass:"right-detail"},[e("em",[a._v(a._s(a.step.min)+" to "+a._s(a.step.max))]),a._v("   (0 to 45, step 5)")])])]),a._v(" "),e("q-double-range",{attrs:{min:0,max:45,step:5,label:""},model:{value:a.step,callback:function(t){a.step=t}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      Snap to Step\n      "),e("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),e("span",{staticClass:"right-detail"},[e("em",[a._v(a._s(a.snap.min)+" to "+a._s(a.snap.max))]),a._v("   (0 to 10, step 2)")])])]),a._v(" "),e("q-double-range",{attrs:{min:0,max:10,step:2,label:"",snap:""},model:{value:a.snap,callback:function(t){a.snap=t}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      With Markers + Snap to Step\n      "),e("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),e("span",{staticClass:"right-detail"},[e("em",[a._v(a._s(a.marker.min)+" to "+a._s(a.marker.max))]),a._v("   (-6 to 10, step 2)")])])]),a._v(" "),e("q-double-range",{attrs:{min:-6,max:10,step:2,label:"",snap:"",markers:""},model:{value:a.marker,callback:function(t){a.marker=t}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      Display Label Always\n      "),e("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),e("span",{staticClass:"right-detail"},[e("em",[a._v(a._s(a.label.min)+" to "+a._s(a.label.max))]),a._v("   (-20 to 20, step 4)")])])]),a._v(" "),e("q-double-range",{attrs:{min:-20,max:20,step:4,"label-always":""},model:{value:a.label,callback:function(t){a.label=t}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      Drag Range\n      "),e("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),e("span",{staticClass:"right-detail"},[e("em",[a._v(a._s(a.range.min)+" to "+a._s(a.range.max))]),a._v("   (0 to 100, step 1)")])])]),a._v(" "),e("q-double-range",{attrs:{min:0,max:100,label:"","drag-range":""},model:{value:a.range,callback:function(t){a.range=t}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      Drag Range + Snap to Step\n      "),e("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),e("span",{staticClass:"right-detail"},[e("em",[a._v(a._s(a.range.min)+" to "+a._s(a.range.max))]),a._v("   (0 to 100, step 5)")])])]),a._v(" "),e("q-double-range",{attrs:{min:0,max:100,step:5,"drag-range":"",label:"",markers:"",snap:""},model:{value:a.range,callback:function(t){a.range=t}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("Disable Min + Drag Range")]),a._v(" "),e("q-double-range",{attrs:{min:0,max:100,"disable-min":"","drag-range":"",label:""},model:{value:a.range,callback:function(t){a.range=t}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("Disable Max + Drag Range + With Step")]),a._v(" "),e("q-double-range",{attrs:{min:0,max:100,step:5,markers:"","disable-max":"","drag-range":"","label-always":""},model:{value:a.range,callback:function(t){a.range=t}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("Disabled State")]),a._v(" "),e("q-double-range",{attrs:{min:0,max:50,disable:""},model:{value:a.standalone,callback:function(t){a.standalone=t}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("Error State")]),a._v(" "),e("q-double-range",{staticClass:"has-error",attrs:{min:0,max:50},model:{value:a.standalone,callback:function(t){a.standalone=t}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("Coloring")]),a._v(" "),e("q-double-range",{staticClass:"secondary",attrs:{min:0,max:50,label:""},model:{value:a.standalone,callback:function(t){a.standalone=t}}}),a._v(" "),e("q-double-range",{staticClass:"orange",attrs:{min:0,max:50,label:""},model:{value:a.standalone,callback:function(t){a.standalone=t}}}),a._v(" "),e("q-double-range",{staticClass:"dark",attrs:{min:0,max:50,label:""},model:{value:a.standalone,callback:function(t){a.standalone=t}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("Inside of a List")]),a._v(" "),e("div",{staticClass:"list"},[e("div",{staticClass:"item two-lines"},[e("i",{staticClass:"item-primary"},[a._v("local_atm")]),a._v(" "),e("div",{staticClass:"item-content"},[e("q-double-range",{attrs:{min:0,max:50,label:""},model:{value:a.standalone,callback:function(t){a.standalone=t}}})],1)]),a._v(" "),e("div",{staticClass:"item two-lines"},[e("i",{staticClass:"item-primary"},[a._v("euro_symbol")]),a._v(" "),e("div",{staticClass:"item-content"},[e("q-double-range",{attrs:{min:0,max:50,label:""},model:{value:a.standalone,callback:function(t){a.standalone=t}}})],1)])])],1)])},staticRenderFns:[]}},76:function(a,t,e){var n=e(13)(e(150),e(296),null,null);a.exports=n.exports}});