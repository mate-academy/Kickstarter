// eslint-disable-next-line no-undef
var t=new IntersectionObserver(function(t,e){t.forEach(function(t){if(t.isIntersecting&&t.boundingClientRect.y>0){switch(t.target.getAttribute("data-target")){case"about":document.querySelectorAll(".features__article").forEach(function(t){t.style.transform="translateY(0)",t.style.opacity="1"});break;case"title":var r;(r=t.target).style.transform="translateX(0)",r.style.opacity="1"}e.unobserve(t.target)}})},{root:null,rootMargin:"0px",threshold:.2});document.querySelectorAll("[data-target]").forEach(function(e){t.observe(e)});//# sourceMappingURL=index.a4be66e6.js.map

//# sourceMappingURL=index.a4be66e6.js.map
