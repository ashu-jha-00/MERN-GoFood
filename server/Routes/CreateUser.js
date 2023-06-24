const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
);

router.post("/loginuser",[
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

  let email = req.body.email;

  try {
    let userData = await User.findOne({ email });

    if (!userData) {
      return res.status(400).json({ errors: "Plese enter valid credentials" });
    }

    if (req.body.password !== userData.password) {
      return res.status(400).json({ errors: "Plese enter valid credentials" });
    }
    
    return res.json({ success: true });

  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

module.exports = router;
