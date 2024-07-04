class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  displayItems() {
    this.items.forEach((item) => {
      console.log(
        `Product: ${item.product.name}, Quantity: ${
          item.quantity
        }, Total Price: $${item.getTotalPrice().toFixed(2)}`
      );
    });
  }
}

// Create products
const product1 = new Product(1, "Laptop", 999.99);
const product2 = new Product(2, "Mouse", 19.99);
const product3 = new Product(3, "Keyboard", 49.99);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);

// Display the cart
console.log("Cart items after adding:");
cart.displayItems();
console.log(`Total Price: $${cart.getTotalPrice().toFixed(2)}`);

// Remove an item from the cart
cart.removeItem(2); // Remove Mouse

// Display the cart again
console.log("Cart items after removing Mouse:");
cart.displayItems();
console.log(`Total Price: $${cart.getTotalPrice().toFixed(2)}`);
