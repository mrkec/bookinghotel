const mongoose = require("mongoose");

const conformedBookingSchema = new mongoose.Schema(
  {
    bookingId: {
      type: String,
      required: true,
    },
    planName: {
      type: String,
      required: true,
    },
    planId: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    cBookingDate: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const conformedBooking = mongoose.model(
  "ConformedBooking",
  conformedBookingSchema
);

module.exports = conformedBooking;
