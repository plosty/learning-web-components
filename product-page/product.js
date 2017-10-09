
document.getElementById("product-listing").addEventListener("load", addListenersToProductButtons());

function addListenersToProductButtons() {
  var buttonList = document.getElementsByClassName("add-to-cart-button");
  for (bNum = 0; bNum < buttonList.length; bNum++) {
      buttonList[bNum].addEventListener("click", function() {
          // adding product-button-10 to every method call
          addToCart("product-button-" + bNum);
      });
  }
}

document.getElementById("display-checkout-button").addEventListener("click", toggleCart);
// document.getElementById("product-button-01").addEventListener("click", addToCart());


function toggleCart() {
  var cart = document.getElementById("cart");
  var products = document.getElementById("products");
  if (cart.className==="split-right hidden") {
    products.className="split-left";
    cart.className="split-right";
  }
  else {
    products.className="split-left w100";
    cart.className="split-right hidden";
  }
}

function addToCart(buttonId) {
  var cart = document.getElementById("cart");
  var products = document.getElementById("products");
  if (cartIsHidden()) {
    toggleCart();
  }
  alert(buttonId);
}

function cartIsEmpty() {
  var cartProductCount = document.getElementsByClassName("product-cart-listing");
  return cartProductCount === 0 ? true : false;
}

function cartIsHidden() {
  var cart = document.getElementById("cart");
  return cart.className.indexOf("hidden") !== -1 ? true : false;
}
