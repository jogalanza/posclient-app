(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cfb6b4e","chunk-0486833d"],{1800:function(t,e,i){"use strict";i("4de4");var s=i("2b0e");e["a"]=s["a"].extend({name:"v-list-item-action",functional:!0,render:function(t,e){var i=e.data,s=e.children,n=void 0===s?[]:s;i.staticClass=i.staticClass?"v-list-item__action ".concat(i.staticClass):"v-list-item__action";var a=n.filter((function(t){return!1===t.isComment&&" "!==t.text}));return a.length>1&&(i.staticClass+=" v-list-item__action--stack"),t("div",i,n)}})},3408:function(t,e,i){},"34c3":function(t,e,i){"use strict";i("498a");var s=i("2b0e");e["a"]=s["a"].extend({name:"v-list-item-icon",functional:!0,render:function(t,e){var i=e.data,s=e.children;return i.staticClass="v-list-item__icon ".concat(i.staticClass||"").trim(),t("div",i,s)}})},"3ad0":function(t,e,i){},"56b0":function(t,e,i){"use strict";i("ac1f"),i("466d");var s=i("5530"),n=i("ade3"),a=(i("db42"),i("9d26")),o=i("da13"),l=i("34c3"),c=i("7e2b"),r=i("9d65"),u=i("a9ad"),d=i("f2e7"),h=i("3206"),v=i("5607"),p=i("0789"),f=i("58df"),m=i("80d2"),b=Object(f["a"])(c["a"],r["a"],u["a"],Object(h["a"])("list"),d["a"]);e["a"]=b.extend().extend({name:"v-list-group",directives:{ripple:v["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:String,noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes:function(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive:function(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created:function(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list&&this.list.unregister(this)},methods:{click:function(t){var e=this;this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((function(){return e.isActive=!e.isActive})))},genIcon:function(t){return this.$createElement(a["a"],t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(l["a"],{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader:function(){return this.$createElement(o["a"],{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:Object(n["a"])({},this.activeClass,this.isActive),props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(s["a"])(Object(s["a"])({},this.listeners$),{},{click:this.click})},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:t.isActive}]},Object(m["n"])(t))]}))},genPrependIcon:function(){var t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(l["a"],{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange:function(t){if(this.group){var e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e}},toggle:function(t){var e=this,i=this._uid===t;i&&(this.isBooted=!0),this.$nextTick((function(){return e.isActive=i}))},matchRoute:function(t){return null!==t.match(this.group)}},render:function(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(p["a"],this.genItems())])}})},"5d23":function(t,e,i){"use strict";i.d(e,"a",(function(){return _})),i.d(e,"b",(function(){return C}));var s=i("80d2"),n=i("8860"),a=i("56b0"),o=i("da13"),l=i("5530"),c=(i("899c"),i("604c")),r=i("a9ad"),u=i("58df"),d=Object(u["a"])(c["a"],r["a"]).extend({name:"v-list-item-group",provide:function(){return{isInGroup:!0,listItemGroup:this}},computed:{classes:function(){return Object(l["a"])(Object(l["a"])({},c["a"].options.computed.classes.call(this)),{},{"v-list-item-group":!0})}},methods:{genData:function(){return this.setTextColor(this.color,Object(l["a"])(Object(l["a"])({},c["a"].options.methods.genData.call(this)),{},{attrs:{role:"listbox"}}))}}}),h=i("1800"),v=(i("a9e3"),i("3408"),i("24b2")),p=Object(u["a"])(r["a"],v["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48},tile:Boolean},computed:{classes:function(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,"v-avatar--tile":this.tile}},styles:function(){return Object(l["a"])({height:Object(s["f"])(this.size),minWidth:Object(s["f"])(this.size),width:Object(s["f"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),f=p,m=f.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes:function(){return Object(l["a"])(Object(l["a"])({"v-list-item__avatar--horizontal":this.horizontal},f.options.computed.classes.call(this)),{},{"v-avatar--tile":this.tile||this.horizontal})}},render:function(t){var e=f.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}}),b=i("34c3"),g=Object(s["h"])("v-list-item__action-text","span"),_=Object(s["h"])("v-list-item__content","div"),C=Object(s["h"])("v-list-item__title","div"),j=Object(s["h"])("v-list-item__subtitle","div");n["a"],a["a"],o["a"],h["a"],b["a"]},"61d2":function(t,e,i){},"84a7":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"select-customer"},[i("v-menu",{attrs:{bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){e.on;return[i("v-text-field",{attrs:{label:"Customer",placeholder:"Customer",outlined:"",dense:"","hide-details":"","append-icon":"mdi-chevron-down"},on:{"click:append":t.ShowSelection,blur:t.ValidateEntry},model:{value:t.customer,callback:function(e){t.customer=e},expression:"customer"}})]}}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[i("v-list",{attrs:{dense:""}},[i("v-list-item",{on:{click:t.AddNew}},[i("v-icon",{staticStyle:{"margin-right":"10px"},attrs:{color:"green",small:""}},[t._v("mdi-plus")]),t._v(" Add "+t._s(t.customer)+" ")],1),t._l(t.items,(function(e,s){return i("v-list-item",{key:s,on:{click:function(t){}}},[i("v-list-item-title",[t._v(t._s(e.title))])],1)}))],2)],1)],1)},n=[],a={name:"SelectCustomer",components:{},data:function(){return{customer:"",value:!1,items:[]}},computed:{},watch:{customer:function(t,e){this.value=null!==t&&""!==t}},methods:{ShowSelection:function(){this.value=!this.value},AddNew:function(){console.log("Add New")},ValidateEntry:function(){console.log("Validate Entry")}}},o=a,l=i("2877"),c=i("6544"),r=i.n(c),u=i("132d"),d=i("8860"),h=i("da13"),v=i("5d23"),p=i("e449"),f=i("8654"),m=Object(l["a"])(o,s,n,!1,null,null,null);e["default"]=m.exports;r()(m,{VIcon:u["a"],VList:d["a"],VListItem:h["a"],VListItemTitle:v["b"],VMenu:p["a"],VTextField:f["a"]})},8860:function(t,e,i){"use strict";i("c740"),i("0481"),i("a434"),i("4069");var s=i("b85c"),n=i("5530"),a=(i("3ad0"),i("8dd9"));e["a"]=a["a"].extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,shaped:Boolean,subheader:Boolean,threeLine:Boolean,tile:{type:Boolean,default:!0},twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--shaped":this.shaped,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex((function(e){return e._uid===t._uid}));e>-1&&this.groups.splice(e,1)},listClick:function(t){if(!this.expand){var e,i=Object(s["a"])(this.groups);try{for(i.s();!(e=i.n()).done;){var n=e.value;n.toggle(t)}}catch(a){i.e(a)}finally{i.f()}}}},render:function(t){var e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:Object(n["a"])({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},"899c":function(t,e,i){},da13:function(t,e,i){"use strict";var s=i("5530"),n=(i("61d2"),i("a9ad")),a=i("1c87"),o=i("4e82"),l=i("7560"),c=i("f2e7"),r=i("5607"),u=i("80d2"),d=i("d9bd"),h=i("58df"),v=Object(h["a"])(n["a"],a["a"],l["a"],Object(o["a"])("listItemGroup"),Object(c["b"])("inputValue"));e["a"]=v.extend().extend({name:"v-list-item",directives:{Ripple:r["a"]},inheritAttrs:!1,inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-list-item":!0},a["a"].options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(a["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&Object(d["d"])("avatar",this)},methods:{click:function(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs:function(){var t=Object(s["a"])({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="listitem",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-".concat(this._uid)):this.isInList&&(t.role="listitem")),t}},render:function(t){var e=this,i=this.generateRouteLink(),n=i.tag,a=i.data;a.attrs=Object(s["a"])(Object(s["a"])({},a.attrs),this.genAttrs()),a.on=Object(s["a"])(Object(s["a"])({},a.on),{},{click:this.click,keydown:function(t){t.keyCode===u["r"].enter&&e.click(t),e.$emit("keydown",t)}});var o=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return n=this.inactive?"div":n,t(n,this.setTextColor(this.color,a),o)}})},db42:function(t,e,i){}}]);
//# sourceMappingURL=chunk-0cfb6b4e.27230240.js.map