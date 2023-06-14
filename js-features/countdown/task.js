const time = document.getElementById("timer");

let remaningTime = time.innerText;
function reverseTimer() {
  if (remaningTime === 0) {
    clearInterval(intervalId);
    alert("Вы победили в конкурсе!");
    window.location = "https://apparat.gov-murman.ru/files/17.doc";
  }
  remaningTime = remaningTime - 1;
  time.textContent = formatTime(remaningTime);
}

function formatTime(remaningTime) {
  let hours = Math.floor((remaningTime / 3600) % 24),
    minutes = Math.floor((remaningTime / 60) % 60),
    seconds = Math.floor(remaningTime % 60);
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

const intervalId = setInterval(reverseTimer, 1000);
