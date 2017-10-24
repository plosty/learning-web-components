// Add event listeners
document.getElementById("display-checkout-button").addEventListener("click", toggleCart);
document.getElementById("cart-products").addEventListener("change", calculateTotal);
document.getElementById("apply-voucher-button").addEventListener("click", applyDiscountCode);

var productList = document.getElementsByClassName("add-to-cart-button");
for (var i=0; i<productList.length; i++) {
  productList[i].addEventListener("click", addToCart);
}

function toggleCart() {
  var checkoutButton = document.getElementById("display-checkout-button");
  var cart = document.getElementById("cart");
  var products = document.getElementById("products");
  if (cart.className==="split-right hidden") {
    products.className="split-left";
    cart.className="split-right";
    calculateTotal();
    checkoutButton.innerHTML="Close Cart";
  }
  else {
    products.className="split-left w100";
    cart.className="split-right hidden";    
    checkoutButton.innerHTML="Open Cart";
  }
}

function cartIsHidden() {
  return cart.classList.contains("hidden");
}

function addToCart() {
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
  for (var i=0; i<newCartProducts.length; i++) {
    newCartProducts[i].addEventListener("click", removeProduct);
  }

  var newCartProductQuantities = document.getElementsByClassName("product-cart-quantity");
  for (var i=0; i<newCartProductQuantities.length; i++) {
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

function calculateTotal() {  
  var subtotal = document.getElementById("subtotal-price-amount");
  var discountCode = document.getElementById("applied-discount-code");
  var discountAmount = document.getElementById("discount-amount");
  var total = document.getElementById("total-price-amount-value");

  subtotal.innerText = calculateSubtotal();
  discountAmount.innerText = calculateDiscountAmount(discountCode.innerHTML);
  total.innerText = (subtotal.innerText - discountAmount.innerText).toFixed(2);
}

function calculateSubtotal() {
  var cartPrices = document.getElementsByClassName("product-cart-price");
  var totalPrice = 0;
  for (var i=0; i<cartPrices.length; i++) {
    cartValue=parseFloat(cartPrices[i].innerText);
    totalPrice+=cartValue;
  }
  return totalPrice.toFixed(2);
}

function calculateDiscountAmount(discountCode) {
  if(!discountCode || discountCode==="" || discountCode==="None") {
    return 0;
  }
  else {
    var subtotal = document.getElementById("subtotal-price-amount").innerText;
    switch(discountCode) {
      case("DISCOUNT_5"):
        // remove 5% off all products
        return (subtotal*0.05).toFixed(2);
        break;
      case("DISCOUNT_10"):
        // remove 10% off the highest priced item
        var prices = document.getElementsByClassName("product-cart-price");
        var highestPrice = 0;
        for(var i=0; i<prices.length; i++) {
          highestPrice = highestPrice > prices[i].innerText ? highestPrice : prices[i].innerText;
        }
        return (highestPrice * 0.1).toFixed(2);
        break;
      case("DISCOUNT_15"):
        // apply 15% discount to products over £4000
        var prices = document.getElementsByClassName("product-cart-price");
        var total = 0;
        for(var i=0; i<prices.length; i++) {
          if (prices[i].innerText >= 4000)
            total += prices[i].innerText;
        }
        return (total * 0.15).toFixed(2);
      default:
        return 0;
    }
  }
}

function applyDiscountCode() {
  var newDiscountCode = document.getElementById("voucher-code");
  var currentDiscountCode = document.getElementById("applied-discount-code");
  var currentDiscountAmount = document.getElementById("discount-amount");
  var newDiscountAmount = calculateDiscountAmount(newDiscountCode.value);
  if (newDiscountAmount > currentDiscountAmount.innerText) {
    currentDiscountAmount.innerText = newDiscountAmount;
    currentDiscountCode.innerText = newDiscountCode.value;
  }
  calculateTotal();
}
