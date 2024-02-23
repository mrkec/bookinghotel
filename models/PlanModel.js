const mongoose = require("mongoose");

const PlanSchema = new mongoose.Schema({
  planId: {
    type: Number,
    required: true,
    // unique: true,
  },

  name: { type: String, required: true },
  imageUrl: {
    type: String,
    required: true,
  },
  purpose: [],
});

const Plan = mongoose.model("Plan", PlanSchema);

module.exports = Plan;
