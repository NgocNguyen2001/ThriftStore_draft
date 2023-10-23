import productList from "./data.js";

window.onload = () => {
  const womenProductList = document.getElementById("women-product-list");

  const productListHTML = productList
    .filter((item) => item.category === "women")
    .map(
      (product) => `
      <a href="/order.html">
        <!-- Add a data attribute to store product ID -->
        <div class="order-box" data-product-id="${product.id}">
          <img src="${product.image}" />
          <h4>${product.name}</h4>
          ${
            product.deal_duration
              ? `<p><span class="price">$${product.original_price}</span> <span class="discount-price">$${product.sale_price}</span></p>`
              : `<p><span class="original-price">$${product.original_price}</span></p>`
          }
          <p>Size: ${product.size}</p>
        </div>
      </a>`
    )
    .join("");

  womenProductList.innerHTML = productListHTML;

  // Add click event listeners to the product elements
  const productElements = document.querySelectorAll(".order-box");
  productElements.forEach((productElement) => {
    productElement.addEventListener("click", () => {
      const productId = productElement.getAttribute("data-product-id"); // Get the product ID from the data attribute
      const product = productList.find((item) => item.id === +productId);
      localStorage.setItem("order-active-item", JSON.stringify(product));
    });
  });
};
