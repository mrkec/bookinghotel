const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: [],
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Register = mongoose.model("Register", RegisterSchema);

module.exports = Register;
