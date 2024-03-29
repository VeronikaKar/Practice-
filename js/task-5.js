// Module 8. Event propagation.

//TODO:=========task-01=======Accordion==========
/**
 * Use the accordion menu template from the HTML file and implement the following functionality:
 * When clicking on a menu item, expand the block with text. Upon clicking the same item again,
 * the expanded text is hidden. Clicking on other menu items does not close previously opened items.
 */
const listEl = document.querySelector(".js-accordion-list");
listEl.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  const target = event.target;
  if (target.nodeName !== "BUTTON") return;
  target.nextElementSibling.classList.toggle("active");
}

//TODO:=========task-02=======Pagination==========
//** */ Use the pagination template from the HTML file to develop the functionality of the paginator.
// * Utilize event propagation. Add the 'active' class to the current page. Create a helper function 'updateActivePage' that should update the active class.
// * The 'handleClick' function should be called when a click event occurs on a 'pagination' element.
const ulElem = document.querySelector(".js-pagination");

ulElem.addEventListener("click", (event) => {
  const target = event.target;
  const activeBtn = ulElem.querySelector(".active");

  if (target.nodeName !== "LI") return;

  if (target.dataset.type === "page") {
    activeBtn.classList.remove("active");
    target.classList.add("active");
  }

  if (
    target.dataset.type === "prev" &&
    activeBtn.previousElementSibling.dataset.type === "page"
  ) {
    activeBtn.classList.remove("active");
    activeBtn.previousElementSibling.classList.add("active");
  }

  if (
    target.dataset.type === "next" &&
    activeBtn.nextElementSibling.dataset.type === "page"
  ) {
    activeBtn.classList.remove("active");
    activeBtn.nextElementSibling.classList.add("active");
  }
});

//TODO:=========task-03=================

const listOfButtons = document.querySelector(".js-btn-wrapper");

listOfButtons.addEventListener("click", onListClick);

function onListClick(event) {
  if (event.target === event.currentTarget) return;
  const btnBackgroundColor = event.target.textContent.toLowerCase();

  const btn = event.target;

  [...listOfButtons.children].forEach((li) => {
    const btn = li.firstElementChild;
    const updateBtnBackground = btn.textContent.toLowerCase();
    btn.classList.remove(updateBtnBackground);
  });
  btn.classList.add(btnBackgroundColor);
}