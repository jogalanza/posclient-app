(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86d6e7b6"],{"0fd9":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var n=a("ade3"),r=a("5530"),l=(a("4b85"),a("2b0e")),i=a("d9f7"),c=a("80d2"),o=["sm","md","lg","xl"],s=["start","end","center"];function u(t,e){return o.reduce((function(a,n){return a[t+Object(c["u"])(n)]=e(),a}),{})}var d=function(t){return[].concat(s,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),b=function(t){return[].concat(s,["space-between","space-around"]).includes(t)},m=u("justify",(function(){return{type:String,default:null,validator:b}})),p=function(t){return[].concat(s,["space-between","space-around","stretch"]).includes(t)},v=u("alignContent",(function(){return{type:String,default:null,validator:p}})),g={align:Object.keys(f),justify:Object.keys(m),alignContent:Object.keys(v)},y={align:"align",justify:"justify",alignContent:"align-content"};function h(t,e,a){var n=y[t];if(null!=a){if(e){var r=e.replace(t,"");n+="-".concat(r)}return n+="-".concat(a),n.toLowerCase()}}var x=new Map;e["a"]=l["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:b}},m),{},{alignContent:{type:String,default:null,validator:p}},v),render:function(t,e){var a=e.props,r=e.data,l=e.children,c="";for(var o in a)c+=String(a[o]);var s=x.get(c);return s||function(){var t,e;for(e in s=[],g)g[e].forEach((function(t){var n=a[t],r=h(e,t,n);r&&s.push(r)}));s.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(t,"align-".concat(a.align),a.align),Object(n["a"])(t,"justify-".concat(a.justify),a.justify),Object(n["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),x.set(c,s)}(),t(a.tag,Object(i["a"])(r,{staticClass:"row",class:s}),l)}})},"22b7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"order-entry"},[a("v-card-text",{staticClass:"entry-parent"},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"2"}},[a("v-text-field",{attrs:{label:"Customer",placeholder:"Customer",outlined:"",dense:"","hide-details":""}})],1),a("v-col",{attrs:{cols:"12",md:"2"}},[a("DatePicker",{attrs:{label:"Date"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),a("v-col",{attrs:{cols:"12",md:"2"}},[a("DatePicker",{attrs:{label:"Due Date",placeholder:"Due Date"},model:{value:t.dueDate,callback:function(e){t.dueDate=e},expression:"dueDate"}})],1),a("v-col",{attrs:{cols:"12",md:"2"}},[a("v-text-field",{attrs:{label:"Order #",placeholder:"Order #",outlined:"",dense:"","hide-details":""}})],1),a("v-col",{attrs:{cols:"12",md:"2"}},[a("v-text-field",{attrs:{label:"Reference",placeholder:"Reference",outlined:"",dense:"","hide-details":""}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{placeholder:"Search Items # or Name",outlined:"",dense:"","hide-details":""}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("q-table",{staticClass:"sticky-header order-entry-grid",attrs:{"virtual-scroll":"",pagination:t.pagination,"rows-per-page-options":[0],"virtual-scroll-sticky-size-start":48,"row-key":"index",data:t.data,columns:t.columns},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"loading",fn:function(){return[a("div",{staticClass:"text-center text-danger my-2"},[a("b-spinner",{staticClass:"align-middle",staticStyle:{"margin-right":"10px",width:"20px",height:"20px"}}),a("strong",[t._v("Loading...")])],1)]},proxy:!0},{key:"no-data",fn:function(e){e.icon,e.message,e.filter;return[t.loading?t._e():a("div",{staticClass:"loading-bar full-width row flex-center text-accent q-gutter-sm"},[a("span",[t._v(" There are no records to show ")])])]}}])})],1)],1),a("v-toolbar",{staticStyle:{"box-shadow":"none",height:"auto","margin-top":"20px","margin-bottom":"20px"}},[a("v-spacer"),a("div",{staticStyle:{"min-width":"250px","margin-left":"auto"}},[a("div",{staticClass:"flex summary-item"},[a("div",{staticClass:"summary-labels"},[t._v("Subtotal")]),a("div",{staticClass:"summary-value"},[t._v("232.00")])]),a("div",{staticClass:"flex summary-item"},[a("div",{staticClass:"summary-labels"},[t._v("Tax")]),a("div",{staticClass:"summary-value"},[t._v("232.00")])]),a("div",{staticClass:"flex summary-item total"},[a("div",{staticClass:"summary-labels",staticStyle:{"text-transform":"uppercase","font-size":"1.3rem","font-weight":"500"}},[t._v("Total")]),a("div",{staticClass:"summary-value",staticStyle:{"text-transform":"uppercase","font-size":"1.3rem","font-weight":"500"}},[t._v("232.00")])])])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green",dark:"","min-width":"160px",small:""}},[t._v(" Save ")]),a("v-btn",{attrs:{color:"gray lighten-2",dark:"","min-width":"100px",small:""},on:{click:function(e){return t.$emit("cancel")}}},[t._v(" Cancel ")])],1)],1)},r=[],l=(a("d3b7"),{name:"OrderEntry",components:{DatePicker:function(){return a.e("chunk-6c81cb56").then(a.bind(null,"762f"))}},data:function(){return{date:null,dueDate:null,calendar:!1,data:[{Item:"test 1",Description:"Test 1 Part description",Qty:1,UnitPrice:1.34},{Item:"test 1"},{Item:"test 1"}],pagination:{rowsPerPage:0},columns:[{name:"index",label:"#",field:"index"},{name:"Item",required:!0,label:"Item",align:"left",field:function(t){return t.Item},sortable:!0},{name:"Description",align:"left",label:"Description",field:"Description",sortable:!0},{name:"Qty",label:"Qty",field:"Qty",sortable:!0},{name:"UnitPrice",label:"Unit Price",field:"UnitPrice"},{name:"Discount",label:"Disc %",field:"Discount"},{name:"TaxRate",label:"Tax Rate",field:"TaxRate"},{name:"Amount",label:"Amount PHP",field:"Amount",sortable:!0}]}}}),i=l,c=(a("3b46"),a("a1c9"),a("2877")),o=a("fe09"),s=a("6544"),u=a.n(s),d=a("8336"),f=a("b0af"),b=a("99d9"),m=a("62ad"),p=a("0fd9"),v=a("2fa4"),g=a("8654"),y=a("71d9"),h=Object(c["a"])(i,n,r,!1,null,"5c865dc1",null);e["default"]=h.exports;h.options.components=Object.assign(h.options.components||{},{QTable:o["a"]}),u()(h,{VBtn:d["a"],VCard:f["a"],VCardActions:b["a"],VCardText:b["b"],VCol:m["a"],VRow:p["a"],VSpacer:v["a"],VTextField:g["a"],VToolbar:y["a"]})},"3b46":function(t,e,a){"use strict";var n=a("6816"),r=a.n(n);r.a},"62ad":function(t,e,a){"use strict";a("4160"),a("caad"),a("13d5"),a("45fc"),a("4ec9"),a("a9e3"),a("b64b"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("2ca0"),a("159b"),a("ddb0");var n=a("ade3"),r=a("5530"),l=(a("4b85"),a("2b0e")),i=a("d9f7"),c=a("80d2"),o=["sm","md","lg","xl"],s=function(){return o.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return o.reduce((function(t,e){return t["offset"+Object(c["u"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return o.reduce((function(t,e){return t["order"+Object(c["u"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(s),offset:Object.keys(u),order:Object.keys(d)};function b(t,e,a){var n=t;if(null!=a&&!1!==a){if(e){var r=e.replace(t,"");n+="-".concat(r)}return"col"!==t||""!==a&&!0!==a?(n+="-".concat(a),n.toLowerCase()):n.toLowerCase()}}var m=new Map;e["a"]=l["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},s),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var a=e.props,r=e.data,l=e.children,c=(e.parent,"");for(var o in a)c+=String(a[o]);var s=m.get(c);return s||function(){var t,e;for(e in s=[],f)f[e].forEach((function(t){var n=a[t],r=b(e,t,n);r&&s.push(r)}));var r=s.some((function(t){return t.startsWith("col-")}));s.push((t={col:!r||!a.cols},Object(n["a"])(t,"col-".concat(a.cols),a.cols),Object(n["a"])(t,"offset-".concat(a.offset),a.offset),Object(n["a"])(t,"order-".concat(a.order),a.order),Object(n["a"])(t,"align-self-".concat(a.alignSelf),a.alignSelf),t)),m.set(c,s)}(),t(a.tag,Object(i["a"])(r,{class:s}),l)}})},6816:function(t,e,a){},a1c9:function(t,e,a){"use strict";var n=a("d132"),r=a.n(n);r.a},d132:function(t,e,a){}}]);
//# sourceMappingURL=chunk-86d6e7b6.d4788ad4.js.map