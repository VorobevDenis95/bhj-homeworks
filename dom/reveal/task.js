const reveals = document.querySelectorAll(".reveal");

document.addEventListener("scroll", isVisible);

function isVisible() {
  for (let reveal of reveals) {
    const { top, bottom } = reveal.getBoundingClientRect();

    if (bottom < 0 || top > window.innerHeight) {
      reveal.classList.remove("reveal_active");
      continue;
    }
    reveal.classList.add("reveal_active");
  }
}
