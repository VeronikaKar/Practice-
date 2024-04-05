const timer = {
  deadline: new Date('2024-04-07T00:00:00'),
  elements: {
    days: document.querySelector('.js-timer__days'),
    hours: document.querySelector('.js-timer__hours'),
    minutes: document.querySelector('.js-timer__minutes'),
    seconds: document.querySelector('.js-timer__seconds'),
  },
  intervalId: null,

  start() {
    this.intervalId = setInterval(() => {
      const diff = this.deadline.getTime() - Date.now();

      if (diff <= 0) {
        this.stop();

        return;
      }

      let { days, hours, minutes, seconds } = this.getTimeComponents(diff);

      this.elements.days.textContent = this.pad(days);
      this.elements.hours.textContent = this.pad(hours);
      this.elements.minutes.textContent = this.pad(minutes);
      this.elements.seconds.textContent = this.pad(seconds);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

  getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },

  pad(value) {
    return String(value).padStart(2, '0');
  },
};

timer.start();

// declensionNum(num, words) {
//   return words[
//     num % 100 > 4 && num % 100 < 20
//       ? 2
//       : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
//   ];
// },

// this.refs.days.dataset.title = this.declensionNum(days, [
//   'day',
//   'days',
//   'days',
// ]);
// this.refs.hours.dataset.title = this.declensionNum(hours, [
//   'hour',
//   'hours',
//   'hours',
// ]);
// this.refs.minutes.dataset.title = this.declensionNum(minutes, [
//   'minute',
//   'minutes',
//   'minutes',
// ]);
// this.refs.seconds.dataset.title = this.declensionNum(seconds, [
//   'second',
//   'seconds',
//   'seconds',
// ]);