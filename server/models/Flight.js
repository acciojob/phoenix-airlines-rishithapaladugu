import mongoose from "mongoose";
const flightSchema = new mongoose.Schema({
  flightNumber: { type: String, required: true },
  source: { type: String, required: true },
  destination: { type: String, required: true },
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  seats: { type: Number, required: true, min: 0 },
});
export default mongoose.model("Flight", flightSchema);
