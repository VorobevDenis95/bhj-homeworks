const form = document.querySelector("form");
const welcome = document.querySelector(".welcome");
const signin = document.querySelector(".signin");
const id = document.querySelector("#user_id");
const store = localStorage.getItem("user_id");
const card = document.querySelector(".card");

const btnLogout = document.createElement("button");
btnLogout.textContent = "Выйти";
btnLogout.style.marginTop = `30px`;
btnLogout.style.display = "none";

card.appendChild(btnLogout);

if (store) {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  btnLogout.style.display = "block";
  id.textContent = store;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.responseType = "json";
  xhr.send(formData);
  xhr.onload = () => {
    const responce = xhr.response;
    if (responce.success) {
      signin.classList.remove("signin_active");
      welcome.classList.add("welcome_active");
      btnLogout.style.display = "block";
      id.textContent = xhr.response.user_id;
      localStorage.setItem("user_id", JSON.parse(xhr.response.user_id));
    } else {
      alert("Неверный логин/пароль");
      form.reset();
    }
  };
});

btnLogout.addEventListener("click", () => {
  delete localStorage.user_id;
  signin.classList.add("signin_active");
  welcome.classList.remove("welcome_active");
  btnLogout.style.display = "none";
});
