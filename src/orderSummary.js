const taxationAPI = require("./taxationAPI");

class OrderSummary {
  constructor(shoppingCart, customerAddress) {
    this.shoppingCart = shoppingCart;
    this.customerAddress = customerAddress;
  }

  calculate() {
    const subtotal = this.shoppingCart.subtotal;
    const order = { ...this.customerAddress, amount: subtotal };
    return taxationAPI.getTaxForOrder(order).then((taxation) => {
      const taxationAmount = taxation.amount;
      const total = subtotal + taxationAmount;
      return { subtotal, taxation: taxationAmount, total };
    });
  }
}

module.exports = OrderSummary;
