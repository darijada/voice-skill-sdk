(function(t){function e(e){for(var a,r,i=e[0],l=e[1],c=e[2],v=0,p=[];v<i.length;v++)r=i[v],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0316":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-tabs",[n("v-tab",{attrs:{disabled:""}},[t._v("Design")]),n("v-tab",[t._v("Test")]),n("v-tab-item"),n("v-tab-item",[n("TestIntent")],1)],1)],1)},o=[],r=function(){var t=this,e=this,n=e.$createElement,a=e._self._c||n;return a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-row",[this.openapi.info?a("v-card",{attrs:{flat:""}},[a("v-card-title",[e._v(" "+e._s(this.openapi.info.title)+" v"+e._s(this.openapi.info.version)+" "),a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,s=t.attrs;return[a("v-icon",e._g(e._b({attrs:{color:"primary",dark:""},on:{click:e.info}},"v-icon",s,!1),n),[e._v(" mdi-information ")])]}}],null,!1,1729539784)},[a("span",[e._v("Get Skill Info")])])],1),a("v-card-text",[a("sub",[e._v(e._s(this.openapi.info.description))])])],1):e._e()],1),a("v-row",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[e._v("Intents")])],1),a("v-expansion-panels",{attrs:{accordion:"",focusable:""},model:{value:e.intentsPanel,callback:function(t){e.intentsPanel=t},expression:"intentsPanel"}},e._l(e.intents,(function(t){return a("v-expansion-panel",{key:t.name,on:{click:function(n){return e.select(t)}}},[a("v-expansion-panel-header",[e._v(e._s(t.name))]),a("v-expansion-panel-content",e._l(t.parameters,(function(n){return a("v-row",{key:n.name},[a("v-col",[a("v-subheader",[e._v(e._s(n.name))])],1),a("v-col",[a("v-text-field",{attrs:{label:n.type,hint:n.sample,"persistent-hint":"",clearable:"",rules:n.required?e.rules:[]},on:{change:function(n){return e.select(t)}},model:{value:n.values,callback:function(t){e.$set(n,"values",t)},expression:"param.values"}})],1),a("v-col",{attrs:{cols:"2"}},[a("v-btn",{attrs:{icon:""}},[a("v-icon",[e._v("mdi-plus")])],1)],1)],1)})),1)],1)})),1),a("v-card",{attrs:{flat:""}},[a("v-card-text",[e._v("Session")])],1),a("v-expansion-panels",[a("v-expansion-panel",[a("v-expansion-panel-header",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.open;return[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"text--secondary"},[a("v-fade-transition",{attrs:{"leave-absolute":""}},[n?a("span",[e._v("Attributes:")]):a("v-row",{staticStyle:{width:"100%"}},[a("v-col",{attrs:{cols:"4"}},[e._v(" attrs: "+e._s(e.session.attributes?"{...}":"Not set")+" ")]),a("v-col",{attrs:{cols:"4"}},[e._v(" id: "+e._s(e.session.id||"Not set")+" ")]),a("v-col",{attrs:{cols:"4"}},[e._v(" new: "+e._s(e.session.new||"Not set")+" ")])],1)],1)],1)],1)]}}])}),a("v-expansion-panel-content",[a("v-row",[e._l(e.session.attributes,(function(t){return a("v-row",{key:t.key,attrs:{justify:"space-around"}},[a("v-col",{attrs:{cols:"3"}},[a("v-text-field",{attrs:{label:"Name"},on:{change:function(t){null!==e.intentsPanel&&e.select(e.intents[e.intentsPanel])}},model:{value:t.key,callback:function(n){e.$set(t,"key",n)},expression:"attr.key"}})],1),a("v-col",{attrs:{cols:"3"}},[a("v-text-field",{attrs:{label:"Value"},on:{change:function(t){null!==e.intentsPanel&&e.select(e.intents[e.intentsPanel])}},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"attr.value"}})],1),a("v-col",{attrs:{cols:"1"}},[a("v-btn",{attrs:{icon:""}},[a("v-icon",[e._v("mdi-plus")])],1)],1)],1)})),a("v-row",{attrs:{justify:"space-around"}},[a("v-col",{attrs:{cols:"3"}},[a("v-text-field",{attrs:{clearable:"",label:"id"},on:{change:function(t){null!==e.intentsPanel&&e.select(e.intents[e.intentsPanel])}},model:{value:e.session.id,callback:function(t){e.$set(e.session,"id",t)},expression:"session.id"}})],1),a("v-col",{attrs:{cols:"3"}},[a("v-checkbox",{attrs:{label:"new"},on:{change:function(t){null!==e.intentsPanel&&e.select(e.intents[e.intentsPanel])}},model:{value:e.session.new,callback:function(t){e.$set(e.session,"new",t)},expression:"session.new"}})],1),a("v-col",{attrs:{cols:"1"}})],1)],2)],1)],1)],1)],1)],1),a("v-col",[a("v-row",[a("v-col",[a("v-form",[a("v-textarea",{staticClass:"v-textarea-json",attrs:{outlined:"",label:"Request",required:"",rules:[function(e){return t.validate(e)||"Request must be valid JSON!"}],rows:"10"},model:{value:e.request,callback:function(t){e.request=t},expression:"request"}})],1)],1),a("v-col",[a("v-textarea",{staticClass:"v-textarea-json",attrs:{readonly:"",outlined:"",label:"Response",rows:"10"},model:{value:e.response,callback:function(t){e.response=t},expression:"response"}})],1)],1),a("v-row",[a("v-col",[a("v-textarea",{attrs:{readonly:"",filled:"",outlined:"",label:"Log",id:"log"},model:{value:e.log,callback:function(t){e.log=t},expression:"log"}})],1)],1),a("v-row",[a("v-col",[a("v-btn",{on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1)],1)},i=[],l=(n("4de4"),n("d81d"),n("b0c0"),n("a9e3"),n("8ba4"),n("4fad"),n("c1f9"),n("b64b"),n("d3b7"),n("8a79"),n("498a"),n("ddb0"),n("3835")),c={data:function(){return{openapi:{},intents:{},session:{id:123,new:!0,attributes:[{key:"attr-1",value:"value-1"}]},request:"{}",response:"",connection:null,log:"",intentsPanel:null,rules:[function(t){return!!t||"Field required!"},function(t){return t instanceof Array?t.length>0:(t||"").trim().length>0||"Non-blank value required!"}]}},created:function(){this.getAPIDescription(),this.getIntents(),this.connectLogs()},methods:{validate:function(t){try{return JSON.parse(t),!0}catch(e){return!1}},submit:function(){var t=this,e=this.openapi.paths,n=Object.keys(e).filter((function(t){return e[t]["post"]&&e[t]["post"].summary.endsWith("Intent")}))[0],a=JSON.parse(this.request),s=this.intentsPanel;this.axios.post("http://localhost:4242"+n,a).then((function(e){var n;t.response=JSON.stringify(e.data,null,2);var a=null===(n=e.data)||void 0===n?void 0:n.session;a&&(t.session.attributes=Object.entries(a.attributes).map((function(t){var e=Object(l["a"])(t,2),n=e[0],a=e[1];return{key:n,value:a}}))),Number.isInteger(s)&&t.select(t.intents[s])})).catch((function(e){return t.response=e}))},select:function(t){var e=Object.fromEntries(t.parameters.filter((function(t){return t.values instanceof Array?t.values.length>0:null!=t.values})).map((function(t){return[t.name,t.values instanceof Array?t.values:[t.values]]}))),n=function(t){return Object({id:0,nestedIn:[],overlapsWith:[],value:t,extras:{}})},a=Object.fromEntries(t.parameters.filter((function(t){return t.values instanceof Array?t.values.length>0:null!=t.values})).map((function(t){return[t.name,t.values instanceof Array?t.values.map((function(t){return n(t)})):[n(t.values)]]})));this.request=JSON.stringify({context:{intent:t.name,locale:"de",attributes:e,attributesV2:a,configuration:{},tokens:{}},session:{id:this.session.id,attributes:Object.fromEntries(this.session.attributes.map((function(t){return[t.key,t.value]}))),new:this.session.new},spiVersion:1.2},null,2)},info:function(){var t=this,e=this.openapi.paths,n=Object.keys(e).filter((function(t){return e[t]["get"]&&e[t]["get"].summary.endsWith("Info")}))[0];this.axios.get("http://localhost:4242"+n).then((function(e){return t.response=JSON.stringify(e.data,null,2)})).catch((function(e){return t.response=e}))},getIntents:function(){var t=this,e="http://localhost:4242/intents";this.axios.get(e).then((function(e){return t.intents=e.data}))},getAPIDescription:function(){var t=this,e="http://localhost:4242/openapi.json";this.axios.get(e).then((function(e){return t.openapi=e.data}))},connectLogs:function(){this.connection=new WebSocket("ws://localhost:4242/logs");var t=this;this.connection.onmessage=function(e){var n=document.getElementById("log");n.scrollTop=n.scrollHeight,t.log+=JSON.parse(e.data).msg+"\n"},this.connection.onopen=function(t){console.log(t),console.log("Successfully connected to the logs server...")}}}},u=c,v=(n("afb0"),n("2877")),p=n("6544"),f=n.n(p),d=n("8336"),b=n("b0af"),h=n("99d9"),m=n("ac7c"),g=n("62ad"),x=n("a523"),y=n("cd55"),_=n("49e2"),w=n("c865"),k=n("0393"),O=n("0789"),P=n("4bd4"),V=n("132d"),j=n("0fd9"),S=n("e0c7"),T=n("8654"),I=n("a844"),N=n("3a2f"),q=Object(v["a"])(u,r,i,!1,null,"26c2863c",null),A=q.exports;f()(q,{VBtn:d["a"],VCard:b["a"],VCardText:h["a"],VCardTitle:h["b"],VCheckbox:m["a"],VCol:g["a"],VContainer:x["a"],VExpansionPanel:y["a"],VExpansionPanelContent:_["a"],VExpansionPanelHeader:w["a"],VExpansionPanels:k["a"],VFadeTransition:O["b"],VForm:P["a"],VIcon:V["a"],VRow:j["a"],VSubheader:S["a"],VTextField:T["a"],VTextarea:I["a"],VTooltip:N["a"]});var C={name:"App",components:{TestIntent:A},data:function(){return{}}},E=C,J=n("7496"),$=n("71a3"),F=n("c671"),M=n("fe57"),R=Object(v["a"])(E,s,o,!1,null,null,null),W=R.exports;f()(R,{VApp:J["a"],VTab:$["a"],VTabItem:F["a"],VTabs:M["a"]});var D=n("f309");a["a"].use(D["a"]);var L=new D["a"]({}),B=n("bc3a"),H=n.n(B),G=n("2106"),z=n.n(G);a["a"].config.productionTip=!1,a["a"].use(z.a,H.a),new a["a"]({vuetify:L,render:function(t){return t(W)}}).$mount("#app")},afb0:function(t,e,n){"use strict";n("0316")}});
//# sourceMappingURL=app.6a4b3d92.js.map