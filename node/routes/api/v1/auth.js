const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { check, validationResult } = require("express-validator");

const auth = require("../../../middleware/auth");

const { getUserByEmail } = require("../../../services/users");

const { matchPassword } = require("../../../services/auth");

//LOGIN ROUTE
router.post(
  "/",
  [
    check("email", "Valid email required").isEmail(),
    check("password", "Password required").trim().not().isEmpty(),
  ],
  async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(400).json({
        error: validationErrors.array(),
        success: false,
      });
    }

    const userCredentials = req.body;

    const user = await getUserByEmail(userCredentials.email);
    if (!user) {
      return res.status(400).json({
        error: [{ msg: "Invalid credentials" }],
        success: false,
      });
    }

    //Check password
    const isMatch = await matchPassword(
      userCredentials.password || "",
      user.password || ""
    );
    if (!isMatch) {
      return res.status(400).json({
        error: [{ msg: "Invalid credentials" }],
        success: false,
      });
    }

    //Generate JSON Web Token
    const payload = {
      user: {
        email: user.email,
        name: user.name,
        role:user.role
      },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECREAT,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) {
          console.log(err);
        }
        res.status(200).json({
          data: {
            token: token,
            role:user.role
          },
          success: true,
        });
      }
    );
  }
);

module.exports = router;
