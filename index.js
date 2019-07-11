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
  var total = 0;
  for (var i = 0; i<cart.length; i++){
  total += cart[i].itemPrice
  }
return total;
}

function removeFromCart(item){
  for (var i=0; i<cart.length; i++){
    if (item === cart[i].itemName){
      cart.splice(i,1);
    }
  }
  
  if (item!=cart[item]){
    return "That item is not in your cart."
  }
}

function placeOrder(creditCard) {
  if (!creditCard) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCard + ".");
    cart = [];
  }
}
