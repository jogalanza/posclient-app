(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10f18f6a"],{"0fd9":function(e,t,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var a=n("ade3"),r=n("5530"),c=(n("4b85"),n("2b0e")),i=n("d9f7"),o=n("80d2"),l=["sm","md","lg","xl"],s=["start","end","center"];function u(e,t){return l.reduce((function(n,a){return n[e+Object(o["u"])(a)]=t(),n}),{})}var f=function(e){return[].concat(s,["baseline","stretch"]).includes(e)},d=u("align",(function(){return{type:String,default:null,validator:f}})),b=function(e){return[].concat(s,["space-between","space-around"]).includes(e)},p=u("justify",(function(){return{type:String,default:null,validator:b}})),g=function(e){return[].concat(s,["space-between","space-around","stretch"]).includes(e)},v=u("alignContent",(function(){return{type:String,default:null,validator:g}})),y={align:Object.keys(d),justify:Object.keys(p),alignContent:Object.keys(v)},h={align:"align",justify:"justify",alignContent:"align-content"};function j(e,t,n){var a=h[e];if(null!=n){if(t){var r=t.replace(e,"");a+="-".concat(r)}return a+="-".concat(n),a.toLowerCase()}}var m=new Map;t["a"]=c["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:f}},d),{},{justify:{type:String,default:null,validator:b}},p),{},{alignContent:{type:String,default:null,validator:g}},v),render:function(e,t){var n=t.props,r=t.data,c=t.children,o="";for(var l in n)o+=String(n[l]);var s=m.get(o);return s||function(){var e,t;for(t in s=[],y)y[t].forEach((function(e){var a=n[e],r=j(t,e,a);r&&s.push(r)}));s.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(e,"align-".concat(n.align),n.align),Object(a["a"])(e,"justify-".concat(n.justify),n.justify),Object(a["a"])(e,"align-content-".concat(n.alignContent),n.alignContent),e)),m.set(o,s)}(),e(n.tag,Object(i["a"])(r,{staticClass:"row",class:s}),c)}})},"62ad":function(e,t,n){"use strict";n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0");var a=n("ade3"),r=n("5530"),c=(n("4b85"),n("2b0e")),i=n("d9f7"),o=n("80d2"),l=["sm","md","lg","xl"],s=function(){return l.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),u=function(){return l.reduce((function(e,t){return e["offset"+Object(o["u"])(t)]={type:[String,Number],default:null},e}),{})}(),f=function(){return l.reduce((function(e,t){return e["order"+Object(o["u"])(t)]={type:[String,Number],default:null},e}),{})}(),d={col:Object.keys(s),offset:Object.keys(u),order:Object.keys(f)};function b(e,t,n){var a=e;if(null!=n&&!1!==n){if(t){var r=t.replace(e,"");a+="-".concat(r)}return"col"!==e||""!==n&&!0!==n?(a+="-".concat(n),a.toLowerCase()):a.toLowerCase()}}var p=new Map;t["a"]=c["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},s),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},f),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,r=t.data,c=t.children,o=(t.parent,"");for(var l in n)o+=String(n[l]);var s=p.get(o);return s||function(){var e,t;for(t in s=[],d)d[t].forEach((function(e){var a=n[e],r=b(t,e,a);r&&s.push(r)}));var r=s.some((function(e){return e.startsWith("col-")}));s.push((e={col:!r||!n.cols},Object(a["a"])(e,"col-".concat(n.cols),n.cols),Object(a["a"])(e,"offset-".concat(n.offset),n.offset),Object(a["a"])(e,"order-".concat(n.order),n.order),Object(a["a"])(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),p.set(o,s)}(),e(n.tag,Object(i["a"])(r,{class:s}),c)}})},"6a75":function(e,t,n){"use strict";var a=n("efa8"),r=n.n(a);r.a},7277:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard-page",staticStyle:{height:"calc(100vh - 64px)","overflow-y":"auto","padding-bottom":"10px"}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("InvoiceOwed",{attrs:{title:"Cash Flow",series:e.series2,"plot-options":e.cashFlowPlot}}),n("InvoiceOwed",{attrs:{title:"Profit & Loss",series:e.series,"plot-options":e.cashFlowPlot}})],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("InvoiceOwed",{staticClass:"side-chart",attrs:{title:"Customer Receivables",series:e.series,menu:e.customerReceivableMenu}}),n("InvoiceOwed",{staticClass:"side-chart",attrs:{title:"Suppliers Payable",series:e.series,menu:e.supplierPayableMenu}})],1)],1)],1),n("SpeedDial")],1)},r=[],c=(n("d3b7"),{name:"Dashboard",components:{InvoiceOwed:function(){return Promise.all([n.e("chunk-562b5ac4"),n.e("chunk-de09aa6e")]).then(n.bind(null,"ddf3"))},SpeedDial:function(){return n.e("chunk-069b11ba").then(n.bind(null,"3814"))}},data:function(){return{cashFlowPlot:{bar:{startingShape:"flat",endingShape:"flat"}},customerReceivableMenu:[{title:"New Sales",emit:"customer-new-sales"},{title:"Account Sales",emit:"customer-acct-sales"}],supplierPayableMenu:[{title:"New Purchase",emit:"supplier-new-purchase"},{title:"Suppliers Payable",emit:"supplier-payable"}],series:[{name:"series-1",data:[30,40,45,50,49,60,70,91,74,80,105,125]}],series2:[{name:"Profit",data:[60,80,45,90,69,60,80,91,74,80,105,125]},{name:"Loss",data:[40,65,32,76,59,49,45,85,36,68,43,75]}]}}}),i=c,o=(n("6a75"),n("2877")),l=n("6544"),s=n.n(l),u=n("62ad"),f=n("a523"),d=n("0fd9"),b=Object(o["a"])(i,a,r,!1,null,"4912f2ba",null);t["default"]=b.exports;s()(b,{VCol:u["a"],VContainer:f["a"],VRow:d["a"]})},efa8:function(e,t,n){}}]);
//# sourceMappingURL=chunk-10f18f6a.d9efe62b.js.map