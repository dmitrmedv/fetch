!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return a.default(e)||s.default(e)||c.default(e)||l.default()};var a=d(o("kMC0W")),s=d(o("7AJDX")),l=d(o("8CtQK")),c=d(o("auk6i"));function d(e){return e&&e.__esModule?e:{default:e}}var f=document.querySelector(".box"),v=document.querySelector(".game");v.innerHTML=S();var p=document.querySelectorAll(".sub-box"),y=document.querySelector(".overlay"),b=document.querySelector(".restart-button"),m=document.querySelector(".message"),g=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],x="",_=[],M=[],h='<div class="markerX"><div class="stick1"></div><div class="stick2"></div></div>',k='<div class="markerO"></div>',O=h;function S(){var e="";for(i=0;i<9;i+=1)e+='<div class="sub-box" data-id='.concat(i,"></div>");return e}function A(){b.addEventListener("click",L),setTimeout((function(){y.classList.remove("hide")}),500)}function L(){y.classList.add("hide"),b.removeEventListener("click",L),v.innerHTML=S(),x="",_=[],M=[],p=document.querySelectorAll(".sub-box")}function w(t){t.forEach((function(t){e(u)(p)[t].classList.add("winner")}))}function C(e){return g.find((function(t){return t.every((function(t){return e.includes(t)}))}))}f.addEventListener("click",(function(t){if(!t.target.classList.contains("sub-box")||t.target.firstChild||x)return;t.target.innerHTML=O,O===h&&_.push(Number(t.target.dataset.id));O===k&&M.push(Number(t.target.dataset.id));if(O=O===h?k:h,C(_))return w(C(_)),x="гравець X",m.textContent="виграв ".concat(x),void A();if(C(M))return w(C(M)),x="гравець O",m.textContent="виграв ".concat(x),void A();9===e(u)(M).concat(e(u)(_)).length&&(m.textContent="Нічия...",A())}))}();
//# sourceMappingURL=index.2702557d.js.map
