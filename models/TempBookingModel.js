const mongoose = require("mongoose");

const tempBookingSchema = new mongoose.Schema(
  {
    planId: {
      type: Number,
      required: true,
    },
    planName: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    tempBookingDate: {
      type: String,
      required: true,
    },
    isConformed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const tempBooking = mongoose.model("TempBooking", tempBookingSchema);

module.exports = tempBooking;
