!function(){var t=function(t){return document.querySelector(t)};var e=t("[data-stop]"),r=t("[data-start]"),n=document.body;r.addEventListener("click",(function(){r.setAttribute("disabled",!0),e.removeAttribute("disabled"),a=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){r.removeAttribute("disabled"),e.setAttribute("disabled",!0),clearInterval(a)})),e.setAttribute("disabled",!0);var a=null}();
//# sourceMappingURL=01-color-switcher.b0222512.js.map
