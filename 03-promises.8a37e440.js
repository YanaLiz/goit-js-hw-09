!function(){var e={form:document.querySelector("form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),btnPromise:document.querySelector('button[type="submit"]')};e.form.addEventListener("input",(function(n){var t=parseInt(e.delay.value),o=parseInt(e.step.value),a=parseInt(e.amount.value);e.btnPromise.addEventListener("click",(function(e){function n(e,n){return new Promise((function(t,o){var a=Math.random()>.3;setTimeout((function(){a?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}e.preventDefault();for(var r=1;r<=a;r+=1)n(r,t).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),t+=o}))}))}();
//# sourceMappingURL=03-promises.8a37e440.js.map
