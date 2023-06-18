const dropDown = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownLink = Array.from(document.querySelectorAll(".dropdown__link"));

function openCloseMenu() {
  dropdownList.classList.toggle("dropdown__list_active");
}

dropDown.addEventListener("click", openCloseMenu);

dropdownLink.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    dropDown.textContent = item.textContent;
    openCloseMenu();
  });
});
