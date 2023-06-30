const a = Array.from(document.querySelectorAll(".has-tooltip"));
let b;

a.map((item) => {
  item.insertAdjacentHTML("afterEnd", '<div class="tooltip"></div>');
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const tooltip = item.nextElementSibling;
    if (b !== item) {
      removeTooltip();
    }
    const { left, bottom } = item.getBoundingClientRect();

    tooltip.textContent = item.getAttribute("title");
    tooltip.style = `${bottom}px`;
    tooltip.style.left = `${left}px`;
    tooltip.classList.toggle("tooltip_active");
    b = item;
  });
});

function removeTooltip() {
  Array.from(document.querySelectorAll(".tooltip_active")).map((el) => {
    el.classList.remove("tooltip_active");
  });
}
