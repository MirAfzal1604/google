(function(e){function t(t){for(var c,a,s=t[0],l=t[1],u=t[2],p=0,f=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);i&&i(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],c=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var c={},n={app:0},o=[];function a(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=c,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(r,c,function(t){return e[t]}.bind(null,c));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var i=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2d7f":function(e,t,r){},"38c8":function(e,t,r){},"3f2a":function(e,t,r){e.exports=r.p+"img/google.81bc9d6b.jpg"},4142:function(e,t,r){"use strict";r("2d7f")},5102:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var c=r("7a23"),n=Object(c["f"])("div",{id:"nav"},null,-1);function o(e,t,r,o,a,s){var l=Object(c["w"])("router-view");return Object(c["p"])(),Object(c["e"])(c["a"],null,[n,Object(c["g"])(l)],64)}r("f9e3"),r("2dd8");var a={},s=r("6b0d"),l=r.n(s);const u=l()(a,[["render",o]]);var i=u,p=r("6c02");function f(e,t,r,n,o,a){var s=Object(c["w"])("Form");return Object(c["p"])(),Object(c["d"])(s)}r("ac1f"),r("841c");var b=r("3f2a"),h=r.n(b),d={class:"form"},g={class:"form_sec"},O=Object(c["f"])("div",{class:"form_sec_img"},[Object(c["f"])("img",{src:h.a,alt:""})],-1),y=Object(c["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",class:"bi bi-search searchIcon",viewBox:"0 0 18 18"},[Object(c["f"])("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})],-1),v=Object(c["f"])("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"},null,-1),j=[v],w=Object(c["f"])("input",{type:"submit",value:"Google search",class:"btnSearch"},null,-1);function m(e,t,r,n,o,a){return Object(c["p"])(),Object(c["e"])("div",d,[Object(c["f"])("div",g,[O,Object(c["f"])("form",{class:"form_action",onSubmit:t[2]||(t[2]=Object(c["F"])((function(){return a.search&&a.search.apply(a,arguments)}),["prevent"]))},[Object(c["E"])(Object(c["f"])("input",{type:"text",class:"form_input","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.keyword=e})},null,512),[[c["A"],o.keyword]]),y,Object(c["E"])((Object(c["p"])(),Object(c["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x closeIcon",viewBox:"0 0 16 16",onClick:t[1]||(t[1]=function(){return a.closeFunc&&a.closeFunc.apply(a,arguments)})},j,512)),[[c["B"],this.keyword.length>1]]),w],32)])])}r("a15b"),r("1276"),r("498a");var k={name:"Form",data:function(){return{keyword:""}},methods:{search:function(){var e=this.keyword.trim().split(" ").join("+");this.$router.push({name:"result",params:{query:e}})},closeFunc:function(){this.keyword=""}}};r("5937");const A=l()(k,[["render",m]]);var x=A,F={name:"Home",components:{Form:x}};const I=l()(F,[["render",f]]);var P=I,R=r("e7db"),Y=r.n(R),C=function(e){return Object(c["s"])("data-v-6e879ef1"),e=e(),Object(c["q"])(),e},B={class:"result"},Q={class:"result_fix"},U={class:"result_img"},G=C((function(){return Object(c["f"])("img",{src:Y.a,alt:""},null,-1)})),M=C((function(){return Object(c["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",class:"bi bi-search searchIcon",viewBox:"0 0 18 18"},[Object(c["f"])("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})],-1)})),E=C((function(){return Object(c["f"])("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"},null,-1)})),T=[E];function J(e,t,r,n,o,a){var s=Object(c["w"])("router-link"),l=Object(c["w"])("show");return Object(c["p"])(),Object(c["e"])("div",B,[Object(c["f"])("div",Q,[Object(c["f"])("div",U,[Object(c["g"])(s,{to:"/google"},{default:Object(c["D"])((function(){return[G]})),_:1})]),Object(c["f"])("form",{class:"form_action",onSubmit:t[2]||(t[2]=Object(c["F"])((function(){return a.search&&a.search.apply(a,arguments)}),["prevent"]))},[Object(c["E"])(Object(c["f"])("input",{type:"text",class:"form_input","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.keyword=e})},null,512),[[c["A"],o.keyword]]),M,Object(c["E"])((Object(c["p"])(),Object(c["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x closeIcon",viewBox:"0 0 16 16",onClick:t[1]||(t[1]=function(){return a.closeFunc&&a.closeFunc.apply(a,arguments)})},T,512)),[[c["B"],this.keyword.length>1]])],32)]),Object(c["g"])(l,{results:o.googleResults},null,8,["results"])])}var z=r("1da1"),V=(r("96cf"),r("99af"),r("bc3a")),N=r.n(V),D=(r("9911"),{class:"show"}),X={class:"pages"},W={class:"link_page"},q={class:"links"},L=["href"],S={class:"description"};function Z(e,t,r,n,o,a){return Object(c["p"])(),Object(c["e"])("div",D,[(Object(c["p"])(!0),Object(c["e"])(c["a"],null,Object(c["v"])(r.results,(function(e,t){return Object(c["p"])(),Object(c["e"])("div",{class:"show_result",key:t},[Object(c["f"])("div",X,[Object(c["f"])("p",W,Object(c["y"])(e.link),1),Object(c["f"])("p",q,[Object(c["f"])("a",{href:e.link,target:"_blank"},Object(c["y"])(e.title),9,L)]),Object(c["f"])("p",S,Object(c["y"])(e.snippet),1)])])})),128))])}var H={name:"show",props:["results"]};r("d9ce");const K=l()(H,[["render",Z],["__scopeId","data-v-cee1c15c"]]);var _=K,$={name:"result",components:{show:_},data:function(){return{api_key:"AIzaSyAgYrBroPJnXyP4W_6kYOk8lQcRCpNx7V8",cx:"613e0c3f4db0328bc",keyword:this.$route.params.query?this.$route.params.query.split("+").join(" "):"",googleResults:[]}},methods:{closeFunc:function(){this.keyword=""},search:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.keyword.split(" ").join("+"),e.$router.push({name:"result",params:{query:r}}),t.prev=2,t.next=5,N.a.get("https://www.googleapis.com/customsearch/v1?key=".concat(e.api_key,"&cx=").concat(e.cx,"&q=").concat(e.keyword));case 5:c=t.sent,e.googleResults=c.data.items,console.log(e.googleResults),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()}},created:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$route.params.query){t.next=12;break}return t.prev=1,t.next=4,N.a.get("https://www.googleapis.com/customsearch/v1?key=".concat(e.api_key,"&cx=").concat(e.cx,"&q=").concat(e.keyword));case 4:r=t.sent,e.googleResults=r.data.items,console.log(e.googleResults),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()}};r("4142");const ee=l()($,[["render",J],["__scopeId","data-v-6e879ef1"]]);var te=ee,re=[{path:"/google",name:"Home",component:P},{path:"/results/:query",name:"result",component:te}],ce=Object(p["a"])({history:Object(p["b"])("/"),routes:re}),ne=ce;r("38c8");Object(c["c"])(i).use(ne).mount("#app")},5937:function(e,t,r){"use strict";r("6e63")},"6e63":function(e,t,r){},d9ce:function(e,t,r){"use strict";r("5102")},e7db:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.102897cc.js.map