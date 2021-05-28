// DOM SELECTORS
const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav-container");
const mobileNavClose = document.querySelector(".nav-close");
const transparentBackdrop = document.getElementById("backdrop");
const totalAmount = document.querySelector(".total-amount");
const shoppingCart = document.querySelector(".shopping-cart-container");
const shoppingCartButton = document.querySelector(".fa-shopping-cart");
const shoppingCartClose = document.querySelector(".cart-close");
const shoppingCartItems = document.querySelector(".shopping-cart-items");

// FUNCTIONS
const openMobileNav = (event) => {
  mobileNav.style.display = "block";
  transparentBackdrop.classList.add("backdrop");
};

const openShoppingCart = (event) => {
  shoppingCart.style.display = "block";
  transparentBackdrop.classList.add("backdrop");
};

const closeMenus = (event) => {
  mobileNav.style.display = "none";
  shoppingCart.style.display = "none";
  transparentBackdrop.classList.remove("backdrop");
};

// EVENT LISTENERS
menuButton.addEventListener("click", openMobileNav);
mobileNavClose.addEventListener("click", closeMenus);
shoppingCartButton.addEventListener("click", openShoppingCart);
shoppingCartClose.addEventListener("click", closeMenus);
transparentBackdrop.addEventListener("click", closeMenus);

// totalAmount.innerText = "$35.00";
