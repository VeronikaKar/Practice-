
import { modalBtnEl } from "./refs.js";

modalBtnEl.addEventListener("click", onModalBtnClick);
let modal = null;

function onModalBtnClick(event) {
  modal = basicLightbox.create(
    `
    <div class="modal">
    <button type="button" class="close-btn js-modal-close">
    X
    </button>

    <form class="login-form js-modal__form">
    <label>
    Name
    <input type="text" name="name" placeholder="enter your name" />
    </label>
    <label>
    Email
    <input type="email" name="email" placeholder="enter your email" />
    </label>
    <label>
    Password
    <input
    type="password"
    name="password"
    placeholder="enter your password"
    />
    </label>
    <button class="login-btn" type="submit">
    Login
    </button>
    </form>
    </div>
    `,
    {
      onShow: () => {
        document.addEventListener("keydown", onEscapeClick);
        document.body.style.overflow = "hidden";
      },
      onClose: () => {
        document.removeEventListener("keydown", onEscapeClick);
        document.body.style.overflow = "visible";
        crossBtnEl.removeEventListener("click", closeModalBtnClick);
      },
    }
  );
  modal.show();
  const crossBtnEl = document.querySelector(".js-modal-close");
  crossBtnEl.addEventListener("click", closeModalBtnClick);

  const formEl = document.querySelector(".js-modal__form");
  formEl.addEventListener("submit", onSubmit);
}

function onEscapeClick(event) {
  if (event.code !== "Escape") return;
  closeModalBtnClick();
}

function closeModalBtnClick() {
  modal.close();
}
// Form
function onSubmit(event) {
  event.preventDefault();
  const { name, email, password } = event.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert("Email or Password is empty");
  }
  const userData = {
    name: name.value.trim() || "Anonymous",
    email: email.value.trim(),
    password: password.value.trim(),
  };
  console.log(userData);
  event.currentTarget.reset();
  closeModalBtnClick();
  setTimeout(() => {
    alert("Thanks for your registration!");
  }, 1000);
}