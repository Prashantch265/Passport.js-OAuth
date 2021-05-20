const jwt = require("jsonwebtoken");
require("dotenv").config();

const issueJwt = (user) => {
  const payload = {
    sub: user.uid,
    iat: Date.now(),
  };

  const expiresIn = 900;

  const signedToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: expiresIn,
    algorithm: "HS256",
  });

  return {
    token: "Bearer " + signedToken,
    expiresIn: expiresIn,
  };
};

module.exports = { issueJwt };
