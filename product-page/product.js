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

var productList = document.getElementsByClassName("add-to-cart-button");
for (i=0; i<productList.length; i++) {
  productList[i].addEventListener("click", addToCart);
}

function addToCart(buttonId) {

  if(cartIsHidden()) { toggleCart() };
  var cartProducts = document.getElementById("cart-products");
  var baseNode = this.parentNode.parentNode;
  // capture the details from the product that triggered the add to cart event
  var imageUrl = baseNode.childNodes[1].childNodes[1].childNodes[0].getAttribute("src");
  var title = baseNode.childNodes[3].childNodes[1].innerText;
  var price = baseNode.childNodes[3].childNodes[5].innerText.slice(1);
  
  // construct lines for inserting the product
  // container
  var containerLine = '<div class="product-cart-listing">';
  //image
  var imageLine = '<div class="product-cart-image"><img src="' + imageUrl + '" alt="Product Image" /></div>';
  // title
  var detailContainerLine = '<div class="product-cart-text">';
  var titleLine = '<div class="product-cart-name">' + title +  '</div>';
  // price
  var priceLine = '<div>£<span class="product-cart-price">' + price + '</span></div>';
  var unitPriceLine = '<div>£<span class="product-unit-price">' + price + '</span></div>';
  // quantity,  button and closure
  var closureLine = '<div class="product-cart-quantity-row"><label for="product-cart-quantity">Quantity</label><input type="text" name="product-cart-quantity" class="product-cart-quantity" value="1" /></div><input type="button" class="product-cart-remove-button button" value="Remove Item" /></div></div>';
  // put the html lines together
  var productCartListing = containerLine + imageLine + detailContainerLine + titleLine + priceLine + unitPriceLine + closureLine;

  cartProducts.insertAdjacentHTML( 'afterbegin', productCartListing);

  calculateTotal();

  // add event listener to buttons
  var newCartProducts = document.getElementsByClassName("product-cart-remove-button");
  for (i=0; i<newCartProducts.length; i++) {
    newCartProducts[i].addEventListener("click", removeProduct);
  }

  var newCartProductQuantities = document.getElementsByClassName("product-cart-quantity");
  for (i=0; i<newCartProductQuantities.length; i++) {
    newCartProductQuantities[i].addEventListener("change", changeProductQuantity);
  }
}

function removeProduct() {
  var cartProductContainer = this.parentNode.parentNode;
  cartProductContainer.parentNode.removeChild(cartProductContainer);
  calculateTotal();
}

function changeProductQuantity() {
  var baseNode = this.parentNode.parentNode;
  var quantity = this.value;
  var price = baseNode.childNodes[1].childNodes[1];
  var unitPrice = baseNode.childNodes[1].innerText.slice(1);
  price.innerText = (unitPrice * quantity).toFixed(2);
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
  var subtotal = document.getElementById("subtotal-price-amount");
  var discountPercent = document.getElementById("discount-percent-amount");
  var discountAmount = document.getElementById("discount-amount");
  var total = document.getElementById("total-price-amount-value");

  subtotal.innerText = totalPrice.toFixed(2);
  discountAmount.innerText = (subtotal.innerText * (discountPercent.innerText / 100)).toFixed(2);
  total.innerText = (subtotal.innerText - discountAmount.innerText).toFixed(2);
}

document.getElementById("apply-voucher-button").addEventListener("click", applyDiscountCode);

function applyDiscountCode() {
  var discountCode = document.getElementById("voucher-code");
  var discountField = document.getElementById("discount-percent-amount");
  var currentDiscount = parseInt(discountField.innerText);
  
  switch(discountCode.value) {
    case("DISCOUNT_10"):
      discountField.innerText = currentDiscount + 10;
      break;
    case("DISCOUNT_5"):
      discountField.innerText  = currentDiscount + 5;
      break;
    default:
      discountCode.value="Code Not Found";
      break;
  }
  
  calculateTotal();
}
