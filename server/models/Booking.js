import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
  flightId: { type: mongoose.Schema.Types.ObjectId, ref: "Flight" },
  returnFlightId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Flight",
    default: null,
  },
  tripType: { type: String, enum: ["one-way", "round-trip"], required: true },
  passenger: {
    name: String,
    email: String,
    phone: String,
  },
  bookingDate: { type: Date, default: Date.now },
});
export default mongoose.model("Booking", bookingSchema);
