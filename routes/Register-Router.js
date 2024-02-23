const express = require("express");
const Register = require("../models/RegisterModel");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/add", async (req, res) => {
  try {
    const { name, mobile, email, password, address } = req.body;
    const exsistUser = await Register.findOne({ mobile: mobile });
    if (exsistUser) {
      return res.status(500).send({
        success: false,
        msg: "Mobile No Already Exsist",
      });
    }

    const newRegister = new Register({
      name,
      mobile,
      email,
      password,
      address,
    });

    const savedRegister = await newRegister.save();
    return res.status(201).send({
      success: true,
      msg: "Register Succesfully",

      savedRegister,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      msg: error.message,
    });
  }
});

// todo admin login

router.post("/admin", async (req, res) => {
  try {
    const { name, password } = req.body;
    const exsistUser = await Register.findOne({ name: name });
    if (!exsistUser) {
      return res.status(500).send({
        success: false,
        msg: "Admin Name does not found",
      });
    }
    const token = jwt.sign(
      {
        _id: exsistUser._id,
      },
      "token123",
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).send({
      success: true,
      msg: "login Succesffuly",
      token,
      exsistUser,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      msg: error.message,
    });
  }
});

module.exports = router;
