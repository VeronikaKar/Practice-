/*
 * Create product cards based on the products array
 *
 * Implement event delegation on the collection of cards
 * After clicking on a card, a modal window with detailed product information should appear.
 *
 * To implement the modal window, use the basicLightbox library (https://github.com/electerious/basicLightbox)
 */
//* Product card template
/*
<li class="product-card">
  <img src="" alt="" class="product-card-img" />
  <div class="product-card-text-content">
    <h2 class="product-card-title"></h2>
    <p class="product-card-price">Price: uah.</p>
  </div>
</li>
*/

//* Modal card template
/*
<img class="product-modal-img" src="" alt="" />
<div class="product-modal-text-content">
  <h2 class="product-modal-title"></h2>
  <p class="product-modal-price">Price: uah.</p>
  <p class="product-modal-desc"></p>
</div>
*/

const products = [
  {
    id: 1,
    img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
    name: 'Monitor',
    price: 3000,
    description: '23-inch monitor with Full HD resolution.',
  },
  {
    id: 2,
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX',
    name: 'Laptop',
    price: 20000,
    description:
      'Lightweight and powerful laptop with a 15-inch display and SSD.',
  },
  {
    id: 3,
    img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
    name: 'Smartphone',
    price: 8000,
    description: 'Equipped with a triple camera and a multi-core processor.',
  },
  {
    id: 4,
    img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
    name: 'Tablet',
    price: 12000,
    description: '10-inch tablet with high performance and a Retina display.',
  },
];

const productsListEl = document.querySelector('.js-products');

const createProductCardTemplate = product => {
  return `
  <li class="product-card js-product-card" data-id="${product.id}">
    <img src="${product.img}" alt="${product.name}" class="product-card-img" />
    <div class="product-card-text-content">
      <h2 class="product-card-title">${product.name}</h2>
      <p class="product-card-price">Price: ${product.price} UAH.</p>
    </div>
  </li>
  `;
};

const productsCardsTemplate = products
  .map(product => {
    return createProductCardTemplate(product);
  })
  .join('');

productsListEl.innerHTML = productsCardsTemplate;

productsListEl.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    return;
  }

  const cardEl = event.target.closest('.js-product-card');
  const currnetProductId = Number(cardEl.dataset.id);

  const productInfo = products.find(product => product.id === currnetProductId);

  const productModal = basicLightbox.create(
    `
    <img class="product-modal-img" src="${productInfo.img}" alt="${productInfo.name}" />
    <div class="product-modal-text-content">
      <h2 class="product-modal-title">${productInfo.name}</h2>
      <p class="product-modal-price">Price: ${productInfo.price} UAH.</p>
      <p class="product-modal-desc">${productInfo.description}</p>
    </div>
  `
  );

  productModal.show();

  console.log(productModal.element());
});