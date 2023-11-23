const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/appointments", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const appointmentSchema = new mongoose.Schema({
  clientName: String,
  date: Date,
  time: String,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

app.get("/available-time", async (req, res) => {
  try {
    const availableTimeSlots = [
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
    ];

    // Fetch booked time slots from the database
    const bookedTimeSlots = await Appointment.find({ date: req.query.date });

    // Remove booked time slots from available ones
    const filteredTimeSlots = availableTimeSlots.filter(
      (slot) => !bookedTimeSlots.includes(slot)
    );

    res.json({ availableTimeSlots: filteredTimeSlots });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
