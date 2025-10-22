import mongoose from "mongoose";
import Flight from "./models/Flight.js";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.MONGO_URI);
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
await Flight.insertMany([
  {
    flightNumber: "PA-101",
    source: "Delhi",
    destination: "Mumbai",
    date: tomorrow,
    price: 4500,
    seats: 20,
  },
  {
    flightNumber: "PA-202",
    source: "Mumbai",
    destination: "Delhi",
    date: tomorrow,
    price: 4700,
    seats: 15,
  },
]);
console.log("Seeded");
process.exit();
