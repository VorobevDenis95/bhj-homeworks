const xhr = new XMLHttpRequest();
const load = document.querySelector(".loader");
const itemCode = document.querySelector(".item__code");
const items = document.querySelector("#items");

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    load.classList.remove("loader_active");
    const response = JSON.parse(xhr.response);
    const valutes = response["response"]["Valute"];
    for (let valute in valutes) {
      const html = `<div class="item">
      <div class="item__code">
      ${valute}
  </div>
  <div class="item__value">
      ${valutes[valute].Value}
  </div>
  <div class="item__currency">
      руб.
  </div>
  </div>`;
      items.insertAdjacentHTML("beforeend", html);
    }
  }
});
