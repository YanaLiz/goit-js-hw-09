import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


    const input = document.querySelector('#datetime-picker');
    const btnStart= document.querySelector('[data-start]');
    const days = document.querySelector('[data-days]');
    const hours = document.querySelector('[data-hours]');
    const minutes= document.querySelector('[data-minutes]');
    const seconds= document.querySelector('[data-seconds]');


let timerId = null;
const DELAY = 1000;
btnStart.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        let currentDate = new Date();
        let exan = currentDate < selectedDates[0];
        if (exan) {
            btnStart.removeAttribute('disabled');
            btnStart.addEventListener('click', () => {
                timerId = setInterval(() => {
                    btnStart.setAttribute('disabled', true);
                    btnStart.setAttribute('disabled', true);
                    currentDate = new Date();
                    let delta = selectedDates[0] - currentDate;
                    let values = convertMs(delta);
                    addLeadingZero(values);
                    if (delta < 1000) {
                        clearInterval(timerId);
                        Notiflix.Notify.success('Timeout');
                    }
                }, DELAY);
            });
        } else {
            btnStart.setAttribute('disabled', true);
            Notiflix.Notify.failure('Please choose a date in the fature');
        }
  },
};

function addLeadingZero(values) {
    days.textContent = values.days.toString().padStart(2, '0');
    hours.textContent = values.hours.toString().padStart(2, '0');
    minutes.textContent = values.minutes.toString().padStart(2, '0');
    seconds.textContent = values.seconds.toString().padStart(2, '0');
}

flatpickr(`input[type="text"]`, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}