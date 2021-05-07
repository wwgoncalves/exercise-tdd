const request = require("request");

module.exports = {
  getTaxForOrder(order) {
    return new Promise((resolve, reject) => {
      request.post(
        {
          url: "https://some-taxation-service.com/v1/tax-calculation",
          json: order,
        },
        (error, response, body) => {
          if (error) {
            reject(error);
            return;
          }

          resolve({ amount: body.data.attributes["amount-to-collect"] });
        }
      );
    });
  },
};
