var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  var itemObj = {itemName: item, itemPrice: price};
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else {
    var items = [];
    for (var i = 0; i < cart.length; i++) {
      items.push(cart[i].itemName + " at $" + cart[i].itemPrice)
      };
   return "In your cart, you have " + items.join(", ") + ".";
  }
}

function total(){
  var totalPrice = 0;
  for (var i = 0; i<cart.length; i++){
  totalPrice += cart[i].itemPrice
  }
return totalPrice;
}

function removeFromCart(item){
  for (var i=0; i<cart.length; i++){
    if (item === cart[i].itemName){
      
    }
  }
}
