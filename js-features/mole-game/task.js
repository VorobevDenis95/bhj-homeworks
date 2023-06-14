let dead = document.getElementById("dead"),
  lost = document.getElementById("lost"),
  countDead = 0,
  countLost = 0;

for (let index = 1; index <= 9; index++) {
  let getHole = document.getElementById(`hole${index}`);
  getHole.onclick = function () {
    if (getHole.className === "hole hole_has-mole") {
      countDead += 1;
      dead.textContent = countDead;
    } else {
      countLost += 1;
      lost.textContent = countLost;
    }
    if (countDead >= 10) {
      alert("Победа!");
      countDead = 0;
      countLost = 0;
      lost.textContent = countLost;
      dead.textContent = countDead;
    }
    if (countLost === 5) {
      alert("Вы проиграли!");
      countDead = 0;
      countLost = 0;
      lost.textContent = countLost;
      dead.textContent = countDead;
    }
  };
}
