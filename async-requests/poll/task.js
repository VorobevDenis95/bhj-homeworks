const xhr = new XMLHttpRequest();
const title = document.querySelector(".poll__title");
const pollAnswer = document.querySelector("#poll__answers");

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    let response = JSON.parse(xhr.response);
    const question = response.data.title;
    const answers = response.data.answers;
    title.textContent = question;
    for (let answer of answers) {
      const htmlAnswer = `<button class="poll__answer">
        ${answer}
      </button>`;
      pollAnswer.insertAdjacentHTML("beforeend", htmlAnswer);
    }
    const btns = Array.from(document.querySelectorAll(".poll__answer"));

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
      });
    });
  }
});
