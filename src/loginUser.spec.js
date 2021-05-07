const sinon = require("sinon");
const { expect } = require("chai");

class Auth {
  constructor() {}

  static attempt(credentials) {
    // implementation
  }
}

class Unauthorized extends Error {}

function login(credentials) {
  return Auth.attempt(credentials).then(
    (auth) => {
      return auth.user;
    },
    () => {
      throw new Unauthorized();
    }
  );
}

describe("Login Function", () => {
  beforeEach(() => {
    this.sinonSandbox = sinon.createSandbox();
  });

  afterEach(() => {
    this.sinonSandbox.restore();
  });

  it("should resolve with the user if authenticated", () => {
    const credentials = {
      email: "test@provider.com",
      password: "secret",
    };

    const authorizationObject = {
      user: {
        email: "test@provider.com",
      },
    };

    this.sinonSandbox
      .stub(Auth, "attempt") // function called internally
      .withArgs(credentials)
      .resolves(authorizationObject);

    return login(credentials).then((auth) => {
      expect(auth.email).to.equal(credentials.email);
    });
  });

  it("should reject with Unauthorized if authenticated", () => {
    const credentials = {
      email: "someone@notallowed.com",
      password: "secret",
    };

    this.sinonSandbox
      .stub(Auth, "attempt") // function called internally
      .withArgs(credentials)
      .rejects();

    return login(credentials).catch((error) => {
      expect(error).to.be.an.instanceOf(Unauthorized);
    });
  });
});
