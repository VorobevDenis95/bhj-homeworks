const taskInput = document.querySelector(".tasks__input");
const tasksList = document.querySelector(".tasks__list");
const form = document.querySelector("#tasks__form");
const tasksRemove = Array.from(document.querySelectorAll(".task__remove"));

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (taskInput.value.trim()) {
    const todoList = `<div class="task">
    <div class="task__title">${taskInput.value}</div>
    <a href="#" class="task__remove">&times;</a>
    </div>`;
    tasksList.insertAdjacentHTML("beforeend", todoList);

    form.reset();
  } else {
    form.reset();
  }
});

tasksList.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className === "task__remove") {
    e.target.closest("div").remove();
  }
});
