
const clockContainer = document.querySelector(".js-clock-items");
const stopBtn = document.querySelector(".js-stop-clock");
const timeZone = -new Date().getTimezoneOffset() / 60;

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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

const intervalId = setInterval(() => {
const currentTime = Date.now();
const { hours, minutes, seconds } = convertMs(currentTime);
    clockContainer.querySelector(".js-clock__hours").textContent = addZero(timeZone+ hours);
    clockContainer.querySelector(".js-clock__minutes").textContent =addZero(minutes);
    clockContainer.querySelector(".js-clock__seconds").textContent = addZero(seconds);
}, 1000);
function addZero(value) {
  return String(value).padStart(2, "0");
}

stopBtn.addEventListener('click', () => {
    clearInterval(IntervalId);
     clockContainer.querySelector(".js-clock__hours").textContent = "00";
    clockContainer.querySelector(".js-clock__minutes").textContent ="00";
    clockContainer.querySelector(".js-clock__seconds").textContent = "00";
}, 1000);
