class ShoppingCart {
  constructor(items = []) {
    this._items = items;
  }

  addItem(item) {
    this._items.push(item);
    return item;
  }

  get items() {
    return this._items;
  }

  get subtotal() {
    return this._items.reduce((accumulatedSubTotal, item) => {
      return accumulatedSubTotal + item.quantity * item.price;
    }, 0);
  }
}

module.exports = ShoppingCart;
