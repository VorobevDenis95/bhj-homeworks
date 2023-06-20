const rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));
let count = 0;
rotatorCase[count].style.color = rotatorCase[count].getAttribute("data-color");

setInterval(changeRotator, 1000);

function changeRotator() {
  setTimeout(() => {
    removeClassName();
    rotatorCase[count].classList.add("rotator__case_active");
    rotatorCase[count].style.color =
      rotatorCase[count].getAttribute("data-color");
    count++;

    if (count === rotatorCase.length) {
      count = 0;
    }
  }, rotatorCase[count].getAttribute("data-speed"));
}

function removeClassName() {
  rotatorCase.map((item) => {
    if (item.className === "rotator__case rotator__case_active")
      item.classList.remove("rotator__case_active");
  });
}
