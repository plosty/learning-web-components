var productList = document.getElementById("product-listing").addEventListener("click", addToCart);

function addToCart(el) {
  alert("In here");
  var cart = document.getElementById("cart");
  var products = document.getElementById("products");
  products.className="split-left";
  cart.className="split-right";
}

