const modal = document.querySelector("#subscribe-modal");
const modalClose = document.querySelector(".modal__close");

if (!getCookie("modal")) {
  modal.classList.add("modal_active");
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  document.cookie = "modal=" + encodeURIComponent("disable");
});

function getCookie(name) {
  const pairs = document.cookie.split("; ");
  const cookie = pairs.find((el) => el.startsWith(name + "="));
  if (cookie) {
    return cookie.substring(name.length + 1);
  }
  return null;
}
