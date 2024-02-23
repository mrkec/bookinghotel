const express = require("express");
const tempBooking = require("../models/TempBookingModel");
// const conformedBooking = require("../models/ConformedBookingModel");
const conformedBooking = require("../models/ConformedBookingModel");

const router = express.Router();

router.post("/cadd/:id", async (req, res) => {
  try {
    const { amount } = req.body;
    const bookingId = req.params.id;
    const tempBookingRecord = await tempBooking.findById(bookingId);

    if (!tempBookingRecord) {
      return res.status(400).send({
        success: false,
        msg: "No data Found",
      });
    }

    if (tempBookingRecord.planId == 1) {
      const newCBookingChoti = new conformedBooking({
        bookingId: tempBookingRecord._id,
        planName: tempBookingRecord.planName,
        planId: tempBookingRecord.planId,
        userId: tempBookingRecord.userId,
        cBookingDate: tempBookingRecord.tempBookingDate,
        amount: amount,
      });
      const savedCBookingChoti = await newCBookingChoti.save();

      if (savedCBookingChoti) {
        const upDateTempRecordChoti = await tempBooking.findByIdAndUpdate(
          tempBookingRecord._id,
          { isConformed: true },
          { new: true }
        );
        return res.status(201).send({
          success: true,
          message: "Booking Has been conformed",
          savedCBookingChoti,
          upDateTempRecordChoti,
        });
      }
    } else if (tempBookingRecord.planId == 2) {
      const newCBookingChoti = new conformedBooking({
        bookingId: tempBookingRecord._id,
        planName: tempBookingRecord.planName,
        planId: tempBookingRecord.planId,
        userId: tempBookingRecord.userId,
        cBookingDate: tempBookingRecord.tempBookingDate,
        amount: amount,
      });
      const savedCBookingKamm = await newCBookingChoti.save();

      if (savedCBookingKamm) {
        const upDateTempRecordKamm = await tempBooking.findByIdAndUpdate(
          tempBookingRecord._id,
          { isConformed: true },
          { new: true }
        );
        return res.status(201).send({
          success: true,
          message: "Booking Has been conformed",
          savedCBookingKamm,
          upDateTempRecordKamm,
        });
      }
      // Handle plan 2 case
    } else if (tempBookingRecord.planId == 3) {
      const newCBookingChoti = new conformedBooking({
        bookingId: tempBookingRecord._id,
        planName: tempBookingRecord.planName,
        planId: tempBookingRecord.planId,
        userId: tempBookingRecord.userId,
        cBookingDate: tempBookingRecord.tempBookingDate,
        amount: amount,
      });
      const savedCBookingBig = await newCBookingChoti.save();

      if (savedCBookingBig) {
        const upDateTempRecordBig = await tempBooking.findByIdAndUpdate(
          tempBookingRecord._id,
          { isConformed: true },
          { new: true }
        );
        return res.status(201).send({
          success: true,
          message: "Booking Has been conformed",
          savedCBookingBig,
          upDateTempRecordBig,
        });
      }
      // Handle plan 3 case
    } else if (tempBookingRecord.planId == 4) {
      const newCBookingFull = new conformedBooking({
        bookingId: tempBookingRecord._id,
        planName: tempBookingRecord.planName,
        planId: tempBookingRecord.planId,
        userId: tempBookingRecord.userId,
        cBookingDate: tempBookingRecord.tempBookingDate,
        amount: amount,
      });
      const savedCBookingFull = await newCBookingFull.save();

      // Update tempBookingRecord to mark it as conformed
      const updatedTempBookingFull = await tempBooking.findByIdAndUpdate(
        tempBookingRecord._id,
        { isConformed: true },
        { new: true }
      );

      return res.status(201).send({
        success: true,
        message: "Booking has been confirmed",

        savedCBookingFull,
        updatedTempBookingFull,
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      msg: error.message,
    });
  }
});

router.get("/getallcbooking", async (req, res) => {
  try {
    const getAllCBooking = await conformedBooking.find({});
    return res.status(201).send({
      success: true,
      message: "get all conformed booking succesfully",
      getAllCBooking,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      msg: error.message,
    });
  }
});
// Handle plan 3 case

module.exports = router;
