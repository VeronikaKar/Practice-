import { addDataLocalStorage, getDataFromLocalStorage, removeDataFromLocalStorage } from "./01-json.js";
import refs2 from "./refs2.js"
import {updateDisplay} from "./updateDisplay.js"
import { LS_KEY } from "./LS_KEY.js";

refs2.form.addEventListener("submit", onsubmit);
document.addEventListener("DOMContentLoaded", renderPage);
refs2.clearBtn.addEventListener("click", clearStorage);
const LS_KEY = "userData";

function onSubmit(event) {
  event.preventDefault();
  const { userName, userAge } = event.currentTarget.elements;

  if (!userName.value.trim() && !userAge.value.trim()) return;

  const userData = {
    name: userName.value.trim(),
    age: userAge.value.trim(),
  };

  const data = userName.value.trim() || userAge.value.trim();
  userName.value.trim() && userAge.value.trim()
    ? addDataLocalStorage("userData", userData)
    : addDataLocalStorage("userData", data);
  event.currentTarget.reset();

  renderPage();
}

function renderPage() {
  const lsData = getDataFromLocalStorage(LS_KEY);

  if (!lsData) {
    return updateDisplay("Local storage is empty!");
  }

  typeof lsData === "object"
    ? (updateDisplay = `{name: ${lsData.name}, age: ${lsData.age}}`)
    : (updateDisplay = lsData)
}
renderPage();

function clearStorage() {
  removeDataFromLocalStorage(LS_KEY);
  renderPage();
}

