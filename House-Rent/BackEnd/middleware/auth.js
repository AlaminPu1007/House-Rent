const JWT = require("jsonwebtoken");

/// this middle ware give the ability
// to check user is login or not

module.exports = function (req, res, next) {
  /// bring token form headers first
  const tokenValue = req.headers["authorization"];
  if (!tokenValue) return res.status(401).send("No token is found");
  //split bearer token
  const token = tokenValue.split(" ");
  ///if is not token
  if (!token[1]) return res.status(401).send("No token is found");

  try {
    //// if token is found, then verify it
    /// if this token is not valid, it will throw inside cath block
    const verifyToken = JWT.verify(token[1].trim(), "jwtPrivateKey");
    /// put verifyToken inside req.user property
    req.user = verifyToken;
    // every middleware need a next()
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};
