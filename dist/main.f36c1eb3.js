parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";function t(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=e(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){s=!0,c=t},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw c}}}}function e(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var n=document.querySelectorAll(".feature"),o=document.querySelectorAll(".features__control"),a=document.querySelector(".features__control--prev"),c=document.querySelector(".features__current"),i=0,s=["01","02","03"],l=i;function u(t){n[i].classList.remove("active"),n[t].classList.add("active"),i=t}function f(t){t.forEach(function(t){t.isIntersecting&&t.target.classList.add("anim-active")})}c.textContent="".concat(s[l]),console.log(a),o.forEach(function(t){t.addEventListener("click",function(){if(t.classList.contains("features__control--prev")){var e=i-1;o[0].classList.add("features__control--prev--active"),o[1].classList.remove("features__control--next--active"),e<0&&(e=n.length-1),c.textContent="".concat(s[e]),u(e)}else if(t.classList.contains("features__control--next")){var r=i+1;o[1].classList.add("features__control--next--active"),o[0].classList.remove("features__control--prev--active"),r>=n.length&&(r=0),c.textContent="".concat(s[r]),u(r)}})}),u(i);var v,d={threshold:[.5]},y=new IntersectionObserver(f,d),m=document.querySelectorAll(".anim"),_=t(m);try{for(_.s();!(v=_.n()).done;){var h=v.value;y.observe(h)}}catch(p){_.e(p)}finally{_.f()}
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.f36c1eb3.js.map