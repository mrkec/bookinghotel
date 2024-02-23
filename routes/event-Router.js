const express = require("express");
const Event = require("../models/EventModel");

const router = express.Router();

router.post("/addevent", async (req, res) => {
  try {
    const { name, imageUrl } = req.body;
    const exsistName = await Event.findOne({ name: name });
    if (exsistName) {
      return res.status(400).send({
        success: true,
        msg: "Event Name Already Exsist!",
      });
    }

    const newEvent = await Event({
      name,
      imageUrl,
    });
    const saveEvent = await newEvent.save();
    return res.status(201).send({
      success: true,
      msg: "Event Name Added successfully!",
      saveEvent,
    });
  } catch (error) {
    return res.status(400).send({
      success: true,
      msg: "Error in adding Event!",
    });
  }
});
// todo get all event
router.get("/getallevent", async (req, res) => {
  try {
    const getAllEvent = await Event.find({});

    return res.status(200).send({
      success: true,
      msg: "All Event Get successfully!",
      getAllEvent,
    });
  } catch (error) {
    return res.status(400).send({
      success: true,
      msg: "Error in adding Event!",
    });
  }
});

module.exports = router;
