const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("./user.model");

const registerController = async (req, res) => {
  // move business logic to utils

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    // make sure user (by email) doesn't already exist
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    const lowercaseEmail = email.toLowerCase();

    user = new User({
      name,
      lowercaseEmail,
      password
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // CRESTE vertHistory when creating user!

    // send user an email in utils!

    // return jwt
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(payload, config.get("jwtSecret"), (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
};

module.exports = {
  registerController
};
