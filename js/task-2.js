// *
//  * Adding an events-listener to each element
//  */

//? Get the color of the square that was clicked

// const boxesEl = document.querySelectorAll('.js-box');

// console.log(boxesEl);

// boxesEl.forEach(boxEl => {
//   boxEl.addEventListener('click', event => {
//     console.log(event.target.dataset.color);
//   });
// });

/*
 * Event delegation
 */

//? Get the color of the square that was clicked

const containerEl = document.querySelector('.js-container');

containerEl.addEventListener('click', event => {
  // if (event.target.classList.contains('js-box')) {
  //   console.log(event.target.dataset.color);
  // }

  if (event.target !== event.currentTarget) {
    console.log(event.target.dataset.color);
  }
});