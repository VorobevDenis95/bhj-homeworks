const productAdd = Array.from(document.querySelectorAll(".product__add"));
const btnInc = Array.from(
  document.querySelectorAll(".product__quantity-control_inc")
);
const btnDec = Array.from(
  document.querySelectorAll(".product__quantity-control_dec")
);
const countProduct = Array.from(
  document.querySelectorAll(".product__quantity-value")
);
const cart = document.querySelector(".cart__products");
const carts = document.querySelectorAll(".cart_product");

const image = document.querySelectorAll(".product__image");

const cartItem = [];

btnInc.forEach((item) => {
  item.addEventListener("click", () => {
    const count = item.previousElementSibling;
    count.textContent = Number(count.textContent) + 1;
  });
});

btnDec.forEach((el) => {
  el.addEventListener("click", () => {
    const count = el.nextElementSibling;
    if (Number(count.textContent) === 1) {
      return;
    }
    count.textContent = Number(count.textContent) - 1;
  });
});

productAdd.forEach((product, id) => {
  product.addEventListener("click", (e) => {
    const idProduct = id + 1;

    if (cartItem.includes(id)) {
      Array.from(cart.querySelectorAll(".cart__product")).forEach((item) => {
        if (Number(item.getAttribute("data-id")) === idProduct) {
          const count = item.querySelector(".cart__product-count");
          count.textContent =
            Number(count.textContent) + Number(countProduct[id].textContent);
        }
      });
    } else {
      cart.insertAdjacentHTML(
        "beforeend",
        `<div class="cart__product" data-id="${idProduct}">
      <img class="cart__product-image" src="${image[id].src}">
      <div class="cart__product-count">${countProduct[id].textContent}</div>
  </div>`
      );
      cartItem.push(id);
    }
  });
});
