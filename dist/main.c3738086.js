parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".contact__send"),t=document.querySelector(".contact__button-wrapper"),n=document.querySelector("#email-input");function r(r){if(!n.checkValidity()){n.reportValidity();var o=t.getBoundingClientRect(),i=e.getBoundingClientRect(),s=r.clientX,a=i.width,c=o.width,d=0;(d=s>i.left+a/2?i.left-o.left-a:i.left-o.left+a)<0?d=c-a:d+a>c&&(d=0),e.style.left=d+"px"}}function o(){a=i.offsetWidth,d=[0,a,2*a],window.innerWidth<=1024?i.style.transform="translateX(-".concat(d[c-1],"px)"):i.style.transform="translateX(0px)",L()}e.addEventListener("mouseenter",function(){t.addEventListener("mousemove",r)}),e.addEventListener("mouseleave",function(){t.removeEventListener("mousemove",r)}),window.onresize=o;var i=document.querySelector(".features__slider"),s=document.querySelector(".features__current"),a=i.offsetWidth,c=1,d=[0,a,2*a],l=document.querySelector("#arrow-prev"),u=document.querySelector("#arrow-next");function f(){c>=2&&(c--,y(),i.style.transform="translateX(-".concat(d[c-1],"px)"),v())}function m(){c<=2&&(c++,y(),i.style.transform="translateX(-".concat(d[c-1],"px)"),v())}function y(){s.innerText="0"+c}function v(){c>1?l.classList.remove("arrow--disabled"):l.classList.add("arrow--disabled"),c<3?u.classList.remove("arrow--disabled"):u.classList.add("arrow--disabled")}l.addEventListener("click",f),u.addEventListener("click",m),setInterval(h,5e3);var w=document.querySelector(".icons-section__wrapper"),p=document.querySelector(".icons-section__card"),_=p.offsetWidth;function h(){window.innerWidth<768&&(w.style.transition="0.2s ease-in-out",w.style.transform="translateX(".concat(-_,"px)"),setTimeout(function(){w.style.transition="none",w.style.transform="translateX(0)",w.appendChild(w.firstElementChild)},200))}function L(){_=p.offsetWidth}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=/main.c3738086.js.map