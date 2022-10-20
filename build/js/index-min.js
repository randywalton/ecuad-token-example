!function(){"use strict";function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}function t(e,n){return t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},t(e,n)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function c(e,n,a){return c=o()?Reflect.construct.bind():function(e,n,o){var c=[null];c.push.apply(c,n);var a=new(Function.bind.apply(e,c));return o&&t(a,o.prototype),a},c.apply(null,arguments)}function a(e){var o="function"==typeof Map?new Map:void 0;return a=function(e){if(null===e||(a=e,-1===Function.toString.call(a).indexOf("[native code]")))return e;var a;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(e))return o.get(e);o.set(e,r)}function r(){return c(e,arguments,n(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),t(r,e)},a(e)}function r(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}var l=new CSSStyleSheet;l.replaceSync("p {color: var(--global-color-scale-primary-primary30)");var u=function(c){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&t(e,n)}(v,c);var a,u,i,f,s,p=(a=v,u=o(),function(){var e,t=n(a);if(u){var o=n(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return r(this,e)});function v(){var e;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,v),e=p.call(this);var n=document.getElementById("custom-card-template").content,t=e.attachShadow({mode:"open"});return t.appendChild(n.cloneNode(!0)),t.adoptedStyleSheets=[l],e}return i=v,(f=[{key:"connectedCallback",value:function(){}},{key:"disconnectedCallback",value:function(){console.log("disconnected",this)}}])&&e(i.prototype,f),s&&e(i,s),Object.defineProperty(i,"prototype",{writable:!1}),v}(a(HTMLElement)),i=[],f=[],s=[],p=[],v=[],y=[],h=[],b=[],d=[];function g(){fetch("../data/tokens.json").then((function(e){return e.json()})).then((function(e){!function(e){var n=e.global,t=e["light-theme"],o=e["dark-theme"];for(var c in n["color-scale"].primary)i.push("--global-color-scale-primary-".concat(c,": ").concat(n["color-scale"].primary[c].value,";"));for(var a in n["color-scale"].neutral)"emphasis-dark-scale"!==a?f.push("--global-color-scale-neutral-".concat(a,": ").concat(n["color-scale"].neutral[a].value,";")):f.push("--global-color-scale-neutral-".concat(a,"-low: ").concat(n["color-scale"].neutral[a].low.value,";"),"--global-color-scale-neutral-".concat(a,"-high: ").concat(n["color-scale"].neutral[a].high.value,";"));for(var r in n.font)"font-scale"!==r?s.push("--global-font-".concat(r,": ").concat(n.font[r].value,", sans-serif;")):s.push("--global-font-".concat(r,"-0: ").concat(n.font[r][0].value,"px;"),"--global-font-".concat(r,"-1: ").concat(n.font[r][1].value,"px;"),"--global-font-".concat(r,"-2: ").concat(n.font[r][2].value,"px;"),"--global-font-".concat(r,"-3: ").concat(n.font[r][3].value,"px;"));for(var l in n.typeface)("headline"===l||"copy"===l)&&p.push("--global-typeface-".concat(l,"-family: var(--global-").concat(m(n.typeface[l].value.fontFamily),");"),"--global-typeface-".concat(l,"-size: var(--global-").concat(m(n.typeface[l].value.fontSize),");"));for(var u in n["spacing-scale"])h.push("--global-spacing-scale-".concat(u,": ").concat(n["spacing-scale"][u].value,"px;"));for(var g in n["radius-scale"])v.push("--global-radius-scale-".concat(g,": ").concat(n["radius-scale"][g].value,"px;"));for(var w in n["elevation-scale"]){var j=n["elevation-scale"][w].value.x,S=n["elevation-scale"][w].value.y,O=n["elevation-scale"][w].value.blur,x=n["elevation-scale"][w].value.spread,E=m(n["elevation-scale"][w].value.color);y.push("--global-elevation-scale-".concat(w,": ").concat(j,"px ").concat(S,"px ").concat(O,"px ").concat(x,"px var(--global-").concat(E,");"))}for(var k in t.color)b.push("--light-theme-color-".concat(k,": var(--global-").concat(m(t.color[k].value),");"));for(var P in o.color)d.push("--dark-theme-color-".concat(P,": var(--global-").concat(m(o.color[P].value),");"));C=new CSSStyleSheet,C.replaceSync("\n        :root {\n            /* Color */\n            ".concat(i.join(" "),"\n            ").concat(f.join(" "),"\n            /* Type */\n            ").concat(s.join(" "),"\n            ").concat(p.join(" "),"\n            /* Scales */\n            ").concat(v.join(" "),"\n            ").concat(y.join(" "),"\n            ").concat(h.join(" "),"\n            /* Themes */\n            ").concat(b.join(" "),"\n            ").concat(d.join(" "),"\n        }\n\n        ")),document.adoptedStyleSheets=[C];var C}(e)}))}function m(e){var n={"{":"","}":"",".":"-"};return e.replace(/[{}.]/g,(function(e){return n[e]}))}g(),document.addEventListener("DOMContentLoaded",(function(e){"customElements"in window&&customElements.define("custom-card",u),g()}))}();