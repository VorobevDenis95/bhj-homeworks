const fontSize = Array.from(document.querySelectorAll(".font-size"));
const bookFont = document.querySelector("#book");
const fontColor = Array.from(document.querySelectorAll(".color"));
const colorBg = document.querySelector(".book__control_background");
const color = document.querySelector(".book__control_color");
const colorItemBg = Array.from(colorBg.querySelectorAll(".color"));
const colorItem = Array.from(color.querySelectorAll(".color"));

fontSize.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    remoteClassName();
    if (item.getAttribute("data-size") === "small") {
      bookFont.classList.add("book_fs-small");
    }
    if (item.getAttribute("data-size") === "big") {
      bookFont.classList.add("book_fs-big");
    }
    item.classList.add("font-size_active");
  });
});

function remoteClassName() {
  fontSize.map((el) => {
    el.classList.remove("font-size_active");
    bookFont.classList.remove("book_fs-big");
    bookFont.classList.remove("book_fs-small");
  });
}

colorItemBg.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    remoteColorActive(colorItemBg);
    item.classList.add("color_active");

    if (item.getAttribute("data-bg-color") === "black") {
      remoteColorBg();
      bookFont.classList.add("book_bg-black");
    }
    if (item.getAttribute("data-bg-color") === "gray") {
      remoteColorBg();
      bookFont.classList.add("book_bg-gray");
    }
    if (item.getAttribute("data-bg-color") === "white") {
      remoteColorBg();
      bookFont.classList.add("book_bg-white");
    }
  });
});

colorItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    remoteColorActive(colorItem);
    item.classList.add("color_active");
    if (item.getAttribute("data-text-color") === "black") {
      remoteColor();
      bookFont.classList.add("book_color-black");
    }
    if (item.getAttribute("data-text-color") === "gray") {
      remoteColor();
      bookFont.classList.add("book_color-gray");
    }
    if (item.getAttribute("data-text-color") === "whitesmoke") {
      remoteColor();
      bookFont.classList.add("book_color-whitesmoke");
    }
  });
});

function remoteColor() {
  bookFont.classList.remove("book_color-whitesmoke");
  bookFont.classList.remove("book_color-gray");
  bookFont.classList.remove("book_color-whitesmoke");
}

function remoteColorBg() {
  bookFont.classList.remove("book_bg-black");
  bookFont.classList.remove("book_bg-gray");
  bookFont.classList.remove("book_bg-white");
}

function remoteColorActive(array) {
  array.map((el) => {
    el.classList.remove("color_active");
  });
}
