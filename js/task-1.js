/*
 * Event Bubbling
 * event.target - target (originating) element - (innermost)
 * event.currentTarget - current element where the event listener caught the event
 */

const parentEl = document.querySelector('.js-parent');
const childEl = document.querySelector('.js-child');
const innerChildEl = document.querySelector('.js-inner-child');

parentEl.addEventListener('click', event => {
  console.group('Parent click!');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd();
});

childEl.addEventListener('click', event => {
  console.group('Child click!');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd();
});

innerChildEl.addEventListener('click', event => {
  console.group('Inner child click!');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd();
});