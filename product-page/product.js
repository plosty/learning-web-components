document.getElementById("display-checkout-button").addEventListener("click", toggleCart);
document.getElementById("product-listing").addEventListener("click", addToCart);

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
  var cartProducts = document.getElementById("cart-products");
  var products = document.getElementById("products");
  if (cartIsHidden()) {
    toggleCart();
  }

  cartProducts.insertAdjacentHTML( 'afterbegin',
    '<div class="product-cart-listing"><div class="product-image"><img src="images/product-1.jpg" alt="Product Image" /></div><div class="product-text"><div class="product-name">Pinarello Gan 2017 Shimano 105 Mix Carbon/Sky </div><div class="product-price">£1,920.00</div><div class="product-quantity-row"><label for="product-quantity">Quantity</label><input type="text" name="product-quantity" class="product-quantity" placeholder="1" /></div><input type="button" class="remove-buttonbutton" value="Remove Item" /></div></div>'
  );
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
  alert("array: " + cartPrices + " length: " + cartPrices.length);
  var totalPrice = 0;
  for (var i=0; i<cartPrices.length; i++) {
    cartValue=parseFloat(cartPrices[i].innerText);
    totalPrice+=cartValue;
  }
  alert("totalPrice: " + totalPrice);
  alert("totalPrice: " + totalPrice.toFixed(2));
  
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