const itemElm = document.querySelector('#categories');
const listElm = itemElm.querySelectorAll('.item');
console.log(`Number of categories: ${listElm.length}`);

listElm.forEach(li => {
  const titleElm = li.querySelector('h2').textContent;
  console.log(`Category: ${titleElm}`);
  const liElm = li.querySelectorAll('ul li');
  console.log(`Elements: ${liElm.length}`);
});



// for (let i = 0; i < listElm.length; i++) {
//   const li = listElm[i];
//   const titleElm = li.querySelector('h2').textContent;
//   console.log(`Category: ${titleElm}`);
//   const liElm = li.querySelectorAll('ul li');
//   console.log(`Elements: ${liElm.length}`);
// }