const express = require("express");
const Plan = require("../models/PlanModel");

const router = express.Router();

router.post("/addplan", async (req, res) => {
  try {
    const { planId, name, imageUrl, purpose } = req.body;

    // Check if the plan name already exists
    const existingPlan = await Plan.findOne({ name });
    if (existingPlan) {
      return res.status(400).send({
        success: false,
        message: "Plan name already exists!",
      });
    }

    // Create a new plan
    const newPlan = new Plan({
      planId,
      name,
      imageUrl,
      purpose,
    });

    // Save the new plan to the database
    const savedPlan = await newPlan.save();

    res.status(201).send({
      success: true,
      message: "Plan added successfully",
      savedPlan,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Failed to add plan",
      error: error.message,
    });
  }
});
router.get("/getplans", async (req, res) => {
  try {
    // Check if the plan name already exists
    const getAllPlans = await Plan.find({});

    // Create a new plan

    // Save the new plan to the database

    res.status(201).send({
      success: true,
      message: "Get all plan successfully",
      getAllPlans,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Failed to get all plan",
      error: error.message,
    });
  }
});

// todo get single plan
router.get("/getsingleplan/:id", async (req, res) => {
  try {
    // Check if the plan name already exists

    // const getSinglePlan
    const getOnePlan = await Plan.findById({ _id: req.params.id });

    // Create a new plan

    // Save the new plan to the database

    res.status(200).send({
      success: true,
      message: "Get single plan successfully",
      getOnePlan,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Failed to get plan",
      error: error.message,
    });
  }
});

module.exports = router;
