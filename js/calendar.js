// console.log(-new Date("2024-02-05").getTimezoneOffset()/ 60);
// console.log(new Date().getDay());
// console.log(new Date().getHours());
// console.log(Date.now());
// console.log(new Date().toLocaleDateString("en-GB", { weekday: "long" }));
const timeContainer = document.querySelector(".js-container");
document.addEventListener("DOMContentLoaded", renderPage);
const currentTime = new Date();

const year = currentTime.toLocaleDateString("en-GB", { year: "numeric" });
const month = currentTime.toLocaleDateString("en-GB", { month: "long" });
const weekDay = currentTime.toLocaleDateString("en-GB", { weekDay: "long" });
const day = currentTime.toLocaleDateString("en-GB", { day: "numeric" });
// console.log(day);
(function renderPage() {
    timeContainer.querySelector(".js-month").textContent = month;
    timeContainer.querySelector(".js-day-number").textContent = day;
    timeContainer.querySelector(".js-day").textContent = weekDay;
    timeContainer.querySelector(".js-year").textContent = year;
})()

// renderPage();