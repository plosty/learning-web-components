document.getElementById("display-checkout-button").addEventListener("click", toggleCart);

function toggleCart() {
  var cart = document.getElementById("cart");
  var products = document.getElementById("products");
  if (cart.className==="split-right hidden") {
    products.className="split-left";
    cart.className="split-right";
    calculateTotal();
  }
  else {
    products.className="split-left w100";
    cart.className="split-right hidden";
  }
}

document.getElementById("product-listing").addEventListener("click", addToCart);

function addToCart(buttonId) {
  var cart = document.getElementById("cart");
  var cartProducts = document.getElementById("cart-products");
  var products = document.getElementById("products");
  if (cartIsHidden()) {
    toggleCart();
  }

  cartProducts.insertAdjacentHTML( 'afterbegin',
    '<div class="product-cart-listing"><div class="product-cart-image"><img src="images/product-1.jpg" alt="Product Image" /></div><div class="product-cart-text"><div class="product-cart-name">Pinarello Gan 2017 Shimano 105 Mix Carbon/Sky </div><div>£<span class="product-cart-price">1920.00</span></div><div class="product-cart-quantity-row"><label for="product-cart-quantity">Quantity</label><input type="text" name="product-cart-quantity" class="product-cart-quantity" placeholder="1" /></div><input type="button" class="product-cart-remove-button button" value="Remove Item" /></div></div>'
  );

  calculateTotal();
}

var cartProducts = document.getElementsByClassName("product-cart-remove-button");
for (i=0; i<cartProducts.length; i++) {
  cartProducts[i].addEventListener("click", removeProduct);
}

function removeProduct() {
  var cartProductContainer = document.getElementById("cart-products");
  cartProductContainer.removeChild(cartProductContainer.childNodes[0]);
  calculateTotal();
}

var cartProductQuantities = document.getElementsByClassName("product-cart-quantity");
for (i=0; i<cartProductQuantities.length; i++) {
  cartProducts[i].addEventListener("change", changeProductQuantity);
}

function changeProductQuantity() {
  calculateTotal();
}

function cartIsEmpty() {
  var cartProductCount = document.getElementsByClassName("product-cart-listing");
  return cartProductCount === 0 ? true : false;
}

function cartIsHidden() {
  var cart = document.getElementById("cart");
  return cart.className.indexOf("hidden") !== -1 ? true : false;
}

document.getElementById("cart-products").addEventListener("change", calculateTotal);

function calculateTotal() {
  var cartPrices = document.getElementsByClassName("product-cart-price");
    var totalPrice = 0;
  for (var i=0; i<cartPrices.length; i++) {
    cartValue=parseFloat(cartPrices[i].innerText);
    totalPrice+=cartValue;
  }
  document.getElementById("total-price-amount").innerText = totalPrice.toFixed(2);
}

document.getElementById("apply-voucher-button").addEventListener("click", applyDiscountCode);

function applyDiscountCode() {
  var currentAmount=document.getElementById("total-price-amount").innerText;
  var discountCode=document.getElementById("voucher-code");

  var discountAmount = 0;

  switch(discountCode.value) {
    case("DISCOUNT_10"):
      discountAmount = 0.1;
      discountCode.value="";
      break;
    case("DISCOUNT_5"):
      discountAmount = 0.05;
      discountCode.value="";
    break;
    default:
      discountCode.value="Code Not Found";
      break;
  }

  currentAmount=currentAmount-(currentAmount*discountAmount);
  document.getElementById("total-price-amount").innerText = currentAmount.toFixed(2);
}
