class ShoppingCart {
  constructor(items = []) {
    this._items = items;
  }

  get subtotal() {
    return this._items.reduce((accumulatedSubTotal, item) => {
      return accumulatedSubTotal + item.quantity * item.price;
    }, 0);
  }
}

module.exports = ShoppingCart;
