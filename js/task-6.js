const calendarBodyEl = document.querySelector('.js-calendar-body');
let prevCalendarItemEl = null;

const onCalendarElementClick = event => {
  if (
    event.target.textContent === '' ||
    event.target.nodeName === 'TR' ||
    event.target.nodeName === 'TBODY'
  ) {
    return;
  }

  // const currentCalendarItemEl = event.target;
  const { target: currentCalendarItemEl } = event;

  if (currentCalendarItemEl === prevCalendarItemEl) {
    currentCalendarItemEl.classList.toggle('active');

    return;
  }

  if (prevCalendarItemEl !== null) {
    prevCalendarItemEl.classList.remove('active');
  }

  currentCalendarItemEl.classList.add('active');
  prevCalendarItemEl = currentCalendarItemEl;
};

calendarBodyEl.addEventListener('click', onCalendarElementClick);