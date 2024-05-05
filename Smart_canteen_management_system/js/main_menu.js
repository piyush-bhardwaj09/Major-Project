function addToCart(item) {
  var cart = document.getElementById('cart-items');
  var li = document.createElement('li');
  li.textContent = item;
  cart.appendChild(li);
}


