const jwt = require("jsonwebtoken");

require("dotenv").config();


function userAuth(req, res, next) {
  //Get the token from the header
  const bearerToken = req.headers.authorization;

  //Check if no token
  if (!bearerToken) {
    return res.status(401).json({ msg: "No token, authorization denied." });
  }

  const token = bearerToken.split(" ")[1];

  //Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECREAT);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
}

function authRole() {
  return function (req, res, next) {
    if (req.user.role != "admin")
      return res.status(401).send({
        success: false,
        message: "user not authorized",
      });
    next();
  };
}

module.exports = { userAuth, authRole };
