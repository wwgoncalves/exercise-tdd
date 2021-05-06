const { expect } = require("chai");
const ShoppingCart = require("./shoppingCart");

describe("Shopping Cart", () => {
  describe("subtotal", () => {
    it("should be zero, if no items are passed in", () => {
      // arrange
      const shoppingCart = new ShoppingCart();
      // act
      const subtotal = shoppingCart.subtotal;
      //assert
      expect(subtotal).to.equal(0);
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

      expect(shoppingCart.subtotal).to.equal(300);
    });
  });

  describe("addItem method", () => {
    it("should store the item in the shopping cart", () => {
      const shoppingCart = new ShoppingCart([
        {
          id: 3,
          quantity: 1,
          price: 40,
        },
      ]);

      shoppingCart.addItem({
        id: 1,
        quantity: 4,
        price: 50,
      });

      expect(shoppingCart.items).to.be.an("array");
      expect(shoppingCart.items).to.deep.equal([
        {
          id: 3,
          quantity: 1,
          price: 40,
        },
        {
          id: 1,
          quantity: 4,
          price: 50,
        },
      ]);
    });

    it("should return the item that was just stored in the shopping cart", () => {
      const shoppingCart = new ShoppingCart();

      const item = {
        id: 3,
        quantity: 1,
        price: 40,
      };

      const addedItem = shoppingCart.addItem(item);

      expect(addedItem).to.equal(item);
    });
  });
});
