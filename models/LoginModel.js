const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Login = mongoose.model("Login", LoginSchema);

module.exports = Login;
