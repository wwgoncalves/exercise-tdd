const { expect } = require("chai");

function doSomethingAsyncCallback(callback) {
  setTimeout(() => callback("done!"), 100);
}

function doSomethingAsyncPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!!"), 110);
  });
}

describe("Async Functions", () => {
  it("should execute asynchronously", (done) => {
    doSomethingAsyncCallback((result) => {
      expect(result).to.equal("done!");
      done();
    });
  });

  it("should execute asynchronously too", async () => {
    return doSomethingAsyncPromise().then((result) => {
      expect(result).to.equal("done!!");
    });
  });
});
