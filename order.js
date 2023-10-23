window.onload = () => {
  const product = JSON.parse(localStorage.getItem("order-active-item"));

  const orderProductImage = document.getElementById("order-product-image");
  const orderProductTitle = document.getElementById("order-product-title");
  const orderSize = document.getElementById("order-size");
  const description = document.getElementById("description");
  const price = document.getElementById("price");
  const addToCartButton = document.getElementById("add-to-cart-button");

  orderProductImage.src = product.image;
  orderProductTitle.innerHTML = product.name;
  orderSize.innerHTML = product.size === "M" ? "SIZE MEDIUM" : product.size === "S" ? "SIZE SMALL" : "SIZE LARGE";
  description.innerHTML = product.description;
  price.innerHTML = product.deal_duration
    ? `
      <p>$${product.original_price}</p>
      <p>$${product.sale_price}</p>`
    : `<p class="original-price">$${product.original_price}</p>`;

  addToCartButton.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart"));

    const isExistingInCart = cart?.find((item) => item.id === product.id);

    if (isExistingInCart) {
      localStorage.setItem(
        "cart",
        JSON.stringify(
          cart.map((item) => {
            if (item.id === product.id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          })
        )
      );
    } else {
      localStorage.setItem("cart", JSON.stringify(cart ? [...cart, { ...product, quantity: 1 }] : [{ ...product, quantity: 1 }]));
    }
  });
};
