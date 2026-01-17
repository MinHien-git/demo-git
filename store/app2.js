let items = [];
let cart = {};

const container = document.getElementById("container");
const cartContainer = document.getElementById("cart-container");
const cartQty = document.getElementById("cartQty");
const totalPriceEl = document.getElementById("totalPrice");
const confirmItems = document.getElementById("confirm-items");

const keyOf = (name) => name.split(" ").join("-");

function renderProducts() {
  container.innerHTML = items
    .map(
      (item) => `
    <div class="col-md-6 col-lg-4  bg-transparent ">
      <div class="card h-100 border-0 product-card bg-transparent" data-key="${keyOf(
        item.name
      )}">
        <img src="${item.image.thumbnail}" class="card-img-top rounded">
        <div class="card-body position-relative">
          <p class="text-muted small fs-6 mb-1">${item.category}</p>
          <h6 class="fs-6 text-nowrap text-truncate fw-bold mb-1">${
            item.name
          }</h6>
          <p class="price">$${item.price}</p>
          <button class="button-align btn btn-outline-danger w-75 add-btn rounded-pill  position-absolute ">Add to Cart</button>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  document.querySelectorAll(".add-btn").forEach((btn) => {
    btn.onclick = () => {
      const card = btn.closest(".product-card");
      const key = card.dataset.key;
      const item = items.find((i) => keyOf(i.name) === key);

      cart[key] = cart[key]
        ? { ...cart[key], amount: cart[key].amount + 1 }
        : { key, name: item.name, price: item.price, amount: 1 };

      updateCart();
    };
  });
}

function updateCart() {
  cartContainer.innerHTML = "";
  confirmItems.innerHTML = "";
  let total = 0;
  let qty = 0;

  Object.values(cart).forEach((item) => {
    total += item.price * item.amount;
    qty += item.amount;

    cartContainer.innerHTML += `
      <div class="cart-item" data-key="${item.key}">
        <div>
          <div class="cart-title">${item.name}</div>
          <div class="cart-details">
            <span class="amount">${item.amount}x</span>
            @ $${item.price}
            <span class="fw-bold">$${(item.price * item.amount).toFixed(
              2
            )}</span>
          </div>
        </div>
        <button class="btn btn-sm btn-outline-danger remove-btn">&times;</button>
      </div>
    `;

    confirmItems.innerHTML += `
      <div class="d-flex justify-content-between align-items-center mb-2">
        <div class="small fw-bold">${item.name} (${item.amount}x)</div>
        <div class="fw-bold">$${(item.price * item.amount).toFixed(2)}</div>
      </div>
    `;
  });

  cartQty.innerText = qty;
  totalPriceEl.innerText = `$${total.toFixed(2)}`;

  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.onclick = () => {
      const key = btn.closest(".cart-item").dataset.key;
      delete cart[key];
      updateCart();
    };
  });
}

async function GetData() {
  const res = await fetch("data.json");
  items = await res.json();
  renderProducts();
}

GetData();
