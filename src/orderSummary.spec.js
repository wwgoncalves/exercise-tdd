const { expect } = require("chai");
const sinon = require("sinon");

const OrderSummary = require("./orderSummary");
const taxationAPI = require("./taxationAPI");

describe("Order Summary", () => {
  describe("calculate method", () => {
    it("should call taxationAPI.getTaxForOrder() once", () => {
      // assert
      const mock = sinon.mock(taxationAPI);
      mock
        .expects("getTaxForOrder")
        .once()
        .withArgs({
          amount: 10,
          state: "CA",
          country: "USA",
        })
        .resolves({ amount: 20 });

      // arrange
      const shoppingCart = { subtotal: 10 };
      const customerAddress = { state: "CA", country: "USA" };
      const orderSummary = new OrderSummary(shoppingCart, customerAddress);

      // act
      return orderSummary.calculate().then((order) => {
        mock.verify();
        mock.restore();
      });
    });
  });
});
