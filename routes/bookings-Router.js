const express = require("express");
const BookingModel = require("../models/Booking");
const Room = require("../models/Room");
const router = express.Router();

router.post("/bookedroom", async (req, res) => {
  const { room, checkInDate } = req.body;
  // console.log(typeof checkInDate);

  // todo check for avaliabilty of dates

  if (room._id == 1) {
    BookingModel.insertMany([
      {
        roomId: room._id,
        userId: "12358",
        checkInDate: checkInDate,
      },
    ])
      .then(function () {
        console.log("Data inserted"); // Success
      })
      .catch(function (error) {
        console.log(error); // Failure
      });
  } else if (room._id == 2 || room._id == 3) {
    BookingModel.insertMany([
      {
        roomId: room._id,
        userId: "12358",
        checkInDate: checkInDate,
      },
      {
        roomId: 4,
        userId: "12358",
        checkInDate: checkInDate,
      },
    ])
      .then(function () {
        console.log("Data inserted"); // Success
      })
      .catch(function (error) {
        console.log(error); // Failure
      });
  } else {
    //room id = 4
    BookingModel.insertMany([
      {
        roomId: 2,
        userId: "12358",
        checkInDate: checkInDate,
      },
      {
        roomId: 3,
        userId: "12358",
        checkInDate: checkInDate,
      },
      {
        roomId: 4,
        userId: "12358",
        checkInDate: checkInDate,
      },
    ])
      .then(function () {
        console.log("Data inserted"); // Success
      })
      .catch(function (error) {
        console.log(error); // Failure
      });
  }

  res.status(201).json("Room booked Successfully");
});
router.get("/", async (req, res) => {
  const getAllBooking = await BookingModel.find({});
  res.status(200).json(getAllBooking);
});

module.exports = router;
