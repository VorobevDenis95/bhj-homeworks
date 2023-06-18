const tab = Array.from(document.querySelectorAll(".tab"));
const tabContent = Array.from(document.querySelectorAll(".tab__content"));

let number;

tab.forEach((item, id) => {
  item.addEventListener("click", () => {
    remoteClass(tab, "tab_active");
    item.classList.add("tab_active");
    remoteClass(tabContent, "tab__content_active");
    tabContent[id].classList.add("tab__content_active");
  });
});

function remoteClass(array, classActive) {
  array.forEach((element) => {
    element.classList.remove(classActive);
  });
}
