!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(o=a.key,r=void 0,"symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"))?r:String(r)),a)}var o,r}function t(e){return t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},t(e)}function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},n(e,t)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return o=a()?Reflect.construct.bind():function(e,t,a){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return a&&n(r,a.prototype),r},o.apply(null,arguments)}function r(e){var a="function"==typeof Map?new Map:void 0;return r=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==a){if(a.has(e))return a.get(e);a.set(e,c)}function c(){return o(e,arguments,t(this).constructor)}return c.prototype=Object.create(e.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),n(c,e)},r(e)}function c(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}var l=new CSSStyleSheet;l.replaceSync("\n        p, h2 {\n            margin:0px;\n            padding:0px;\n            line-height: 1.3;\n        }\n\n        h2 {\n            font-family: var(--global-typeface-headline-family);\n            font-size: var(--global-typeface-headline-size);\n            font-weight: 300;\n            margin-bottom: var(--global-spacing-scale-small);\n        }\n\n        p {\n            font-family: var(--global-typeface-copy-family);\n            font-weight: 400;\n            font-size: var(--global-typeface-copy-size);\n        }\n\n        h2.light, p.light{\n            color: var(--light-theme-color-on-primary);\n        }\n\n        h2.dark, p.dark{\n            color: var(--dark-theme-color-on-primary);\n        }\n\n       \n    ");var i=function(o){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)}(p,o);var r,i,s,u,d,f=(r=p,i=a(),function(){var e,n=t(r);if(i){var a=t(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return c(this,e)});function p(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),e=f.call(this);var t=document.getElementById("custom-card-template").content,n=e.attachShadow({mode:"open"});return n.appendChild(t.cloneNode(!0)),n.adoptedStyleSheets=[l],e.headline=e.shadowRoot.querySelector(".headline"),e.copy=e.shadowRoot.querySelector(".copy"),e}return s=p,d=[{key:"observedAttributes",get:function(){return["data-theme"]}}],(u=[{key:"connectedCallback",value:function(){var e=this;this.updateStyle(),window.addEventListener("cardUpdated",(function(t){e.setAttribute("data-theme",t.detail.update)}))}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(e,t,n){this.updateStyle()}},{key:"updateStyle",value:function(){"light"===this.dataset.theme?(this.headline.classList.remove("dark"),this.copy.classList.remove("dark"),this.classList.remove("light-bg"),this.headline.classList.add(this.dataset.theme),this.copy.classList.add(this.dataset.theme),this.classList.add("dark-bg")):(this.headline.classList.remove("light"),this.copy.classList.remove("light"),this.classList.remove("dark-bg"),this.headline.classList.add(this.dataset.theme),this.copy.classList.add(this.dataset.theme),this.classList.add("light-bg")),this.classList.add("emphasis-"+this.dataset.elevation),this.classList.add("radius-"+this.dataset.radius)}}])&&e(s.prototype,u),d&&e(s,d),Object.defineProperty(s,"prototype",{writable:!1}),p}(r(HTMLElement)),s=[],u=[],d=[],f=[],p=[],h=[],v=[],y=[],b=[];function g(){fetch("../data/tokens.json").then((function(e){return e.json()})).then((function(e){!function(e){var t=e.global,n=e["light-theme"],a=e["dark-theme"];for(var o in t["ref-color-scale"].primary)s.push("--global-ref-color-scale-primary-".concat(o,": ").concat(t["ref-color-scale"].primary[o].value,";"));for(var r in t["ref-color-scale"].neutral)"emphasis-dark-scale"!==r?u.push("--global-ref-color-scale-neutral-".concat(r,": ").concat(t["ref-color-scale"].neutral[r].value,";")):u.push("--global-ref-color-scale-neutral-".concat(r,"-low: ").concat(t["ref-color-scale"].neutral[r].low.value,";"),"--global-ref-color-scale-neutral-".concat(r,"-high: ").concat(t["ref-color-scale"].neutral[r].high.value,";"));for(var c in t.font)"font-scale"!==c?d.push("--global-font-".concat(c,": ").concat(t.font[c].value,", sans-serif;")):d.push("--global-font-".concat(c,"-0: ").concat(t.font[c][0].value,"px;"),"--global-font-".concat(c,"-1: ").concat(t.font[c][1].value,"px;"),"--global-font-".concat(c,"-2: ").concat(t.font[c][2].value,"px;"),"--global-font-".concat(c,"-3: ").concat(t.font[c][3].value,"px;"));for(var l in t.typeface)("headline"===l||"copy"===l)&&f.push("--global-typeface-".concat(l,"-family: var(--global-").concat(m(t.typeface[l].value.fontFamily),");"),"--global-typeface-".concat(l,"-size: var(--global-").concat(m(t.typeface[l].value.fontSize),");"));for(var i in t["spacing-scale"])v.push("--global-spacing-scale-".concat(i,": ").concat(t["spacing-scale"][i].value,"px;"));for(var g in t["radius-scale"])p.push("--global-radius-scale-".concat(g,": ").concat(t["radius-scale"][g].value,"px;"));for(var w in t["elevation-scale"]){var k=t["elevation-scale"][w].value.x,S=t["elevation-scale"][w].value.y,L=t["elevation-scale"][w].value.blur,j=t["elevation-scale"][w].value.spread,E=m(t["elevation-scale"][w].value.color);h.push("--global-elevation-scale-".concat(w,": ").concat(k,"px ").concat(S,"px ").concat(L,"px ").concat(j,"px var(--global-").concat(E,");"))}for(var O in n["color-light"])y.push("--light-theme-color-".concat(O,": var(--global-").concat(m(n["color-light"][O].value),");"));for(var x in a["color-dark"])b.push("--dark-theme-color-".concat(x,": var(--global-").concat(m(a["color-dark"][x].value),");"));C=new CSSStyleSheet,C.replaceSync("\n        :root {\n            /* Color */\n            ".concat(s.join(" "),"\n            ").concat(u.join(" "),"\n            /* Type */\n            ").concat(d.join(" "),"\n            ").concat(f.join(" "),"\n            /* Scales */\n            ").concat(p.join(" "),"\n            ").concat(h.join(" "),"\n            ").concat(v.join(" "),"\n            /* Themes */\n            ").concat(y.join(" "),"\n            ").concat(b.join(" "),"\n        }\n\n        ")),document.adoptedStyleSheets=[C];var C}(e)}))}function m(e){var t={"{":"","}":"",".":"-"};return e.replace(/[{}.]/g,(function(e){return t[e]}))}g(),document.addEventListener("DOMContentLoaded",(function(e){"customElements"in window&&customElements.define("custom-card",i),g();var t=document.getElementById("theme-select"),n=document.getElementById("site-header"),a=document.getElementsByTagName("body")[0];t.addEventListener("change",(function(e){if("dark"===e.target.value){n.classList.remove("light"),n.classList.add("dark"),a.classList.remove("light-bg"),a.classList.add("dark-bg");var t=new CustomEvent("cardUpdated",{bubbles:!0,detail:{update:"dark"}});dispatchEvent(t)}else{n.classList.remove("dark"),n.classList.add("light"),a.classList.remove("dark-bg"),a.classList.add("light-bg");var o=new CustomEvent("cardUpdated",{bubbles:!0,detail:{update:"light"}});dispatchEvent(o)}}))}))}();