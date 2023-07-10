const textarea = document.querySelector("#editor");
const store = localStorage.getItem("textarea");
const card = document.querySelector(".card");
const button = document.createElement("button");

button.textContent = "Очистить содержимое";
card.appendChild(button);

if (store) {
  textarea.textContent = store;
}

textarea.addEventListener("change", () => {
  if (textarea.value.trim()) {
    localStorage.setItem("textarea", textarea.value);
  }
});

button.addEventListener("click", () => {
  delete localStorage.textarea;
  textarea.value = "";
});
