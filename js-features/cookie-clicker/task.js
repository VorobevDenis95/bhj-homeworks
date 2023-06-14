const cookie = document.getElementById("cookie"),
  clickerCounter = document.getElementById("clicker__counter"),
  clickerStatus = document.getElementById("clicker__status"),
  clickerScore = document.getElementById("clicker__score");
span = document.createElement("span");

let counter = 0;
time = new Date();

cookie.onclick = function () {
  let differenceTime = (1 / ((new Date() - time) / 1000)).toFixed(2);
  clickerScore.textContent = differenceTime;
  time = new Date();
  counter = counter + 1;
  clickerCounter.textContent = counter;
  if (counter % 2 === 1) {
    cookie.width = 230;
  } else {
    cookie.width = 200;
  }
};
