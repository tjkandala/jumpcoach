const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { registerController } = require("./user.controllers");

const registerValidations = [
  check("name", "name is required")
    .not()
    .isEmpty(),
  check("email", "please include a valid email").isEmail(),
  check(
    "password",
    "please enter a password with 6 or more characters"
  ).isLength({ min: 6 })
];

router.post("/", registerValidations, registerController);

module.exports = router;
