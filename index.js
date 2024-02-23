const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cors = require("cors");
const registerRouter = require("./routes/Register-Router");
const loginRouter = require("./routes/Login-Router");
const planRouter = require("./routes/Plan-Router");
const tempRouter = require("./routes/Temp-booking-router");
const conformedRouter = require("./routes/Conformed-booking-router");
const eventsRouter = require("./routes/event-Router");
// const testBookingRouter = require("./routes/Test-booking-router");
// const hotelsRouter = require("./routes/hotels-Router");
// const roomsRouter = require("./routes/rooms-Router");
// const usersRouter = require("./routes/users-Router");
// const feedsbacksRouter = require("./routes/feedback-Router");
// const contactsRouter = require("./routes/contact-router");
// const groupsDRouter = require("./routes/groupD-Router");
// const mangersRouter = require("./routes/manger-Router");
// const messagesRouter = require("./routes/message-Router");
// const bookingsRouter = require("./routes/bookings-Router");
// const paymentsRouter = require("./routes/payments-Router");
// const searchsRouter = require("./routes/search-Router");
const app = express();
app.use(cors());
app.use(express.json());

// ? database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connection is successful");
  })
  .catch((e) => {
    console.log(e);
  });

//  todo auth routes

app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);
app.use("/api/event", eventsRouter);
// app.use("/api/mangers", mangersRouter);
// app.use("/api/search", searchsRouter);
app.use("/api/plan", planRouter);
app.use("/api/tempbooking", tempRouter);
app.use("/api/conformedBooking", conformedRouter);

// todo payments routes

app.get("/test", (req, res) => {
  res.send("<h1>Server is running</>");
});

// !  listening the port

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("server is running");
});
