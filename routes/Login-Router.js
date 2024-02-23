const express = require("express");
const Login = require("../models/LoginModel");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/add", async (req, res) => {
  try {
    const { name, mobile } = req.body;
    const exsistUser = await Login.findOne({ mobile: mobile });
    if (exsistUser) {
      return res.status(500).send({
        success: false,
        msg: "Mobile No Already Exsist",
      });
    }
    const token = jwt.sign(
      {
        name: name,
        mobile: mobile,
      },
      "token123",
      {
        expiresIn: "7d",
      }
    );

    const newLogin = new Login({
      name,
      mobile,
    });

    const savedLogin = await newLogin.save();
    return res.status(201).send({
      success: true,
      msg: "Login Succesfully",
      token,
      savedLogin,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      msg: error.message,
    });
  }
});

module.exports = router;
