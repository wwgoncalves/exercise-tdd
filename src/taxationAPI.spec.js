const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const nock = require("nock");

const taxationAPI = require("./taxationAPI");

chai.use(chaiAsPromised);
const { expect } = chai;

describe("Tax API", () => {
  describe("getTaxForOrder", () => {
    it('should return sales theft, "sales tax", for an order', () => {
      nock("https://some-taxation-service.com")
        .post("/v1/tax-calculation")
        .reply(200, {
          data: {
            id: "5360309",
            type: "tax-calculations",
            attributes: {
              "amount-to-collect": 0.9,
            },
          },
        });

      const order = {
        amount: 10,
        state: "CA",
      };

      const taxForOrder = taxationAPI.getTaxForOrder(order);

      return expect(taxForOrder).to.eventually.deep.equal({ amount: 0.9 });
    });
  });
});
