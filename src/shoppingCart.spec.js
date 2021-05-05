const assert = require("assert");
const ShoppingCart = require("./shoppingCart");

describe("Shopping Cart", () => {
  describe("subtotal", () => {
    it("should be zero, if no items are passed in", () => {
      // arrange
      const shoppingCart = new ShoppingCart();
      // act
      const subtotal = shoppingCart.subtotal;
      //assert
      assert.strictEqual(subtotal, 0);
    });

    it("should be the sum of the price * quantity for all items", () => {
      const shoppingCart = new ShoppingCart([
        {
          id: 1,
          quantity: 4,
          price: 50,
        },
        {
          id: 2,
          quantity: 2,
          price: 30,
        },
        {
          id: 3,
          quantity: 1,
          price: 40,
        },
      ]);

      assert.strictEqual(shoppingCart.subtotal, 300);
    });
  });
});
