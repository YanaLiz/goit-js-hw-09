
let getEl = selector => document.querySelector(selector);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
} 
const btnStop = getEl('[data-stop]');
const btnStart = getEl('[data-start]');
const body = document.body;
btnStart.addEventListener('click', clickStart);
btnStop.addEventListener('click', clickStop);

btnStop.setAttribute('disabled', true);
let interval = null;

function clickStart() {
    btnStart.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled');
    interval = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}
function clickStop() {
    btnStart.removeAttribute('disabled');
    btnStop.setAttribute('disabled', true);
    clearInterval(interval);
}