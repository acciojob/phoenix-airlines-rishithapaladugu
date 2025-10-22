import Booking from "../models/Booking.js";
import Flight from "../models/Flight.js";
export const createBooking = async (req, res) => {
  const { flightId, returnFlightId, tripType, passenger } = req.body;
  const flight = await Flight.findById(flightId);
  if (!flight || flight.seats <= 0)
    return res.status(400).json({ msg: "Main flight unavailable" });

  if (tripType === "round-trip") {
    const ret = await Flight.findById(returnFlightId);
    if (!ret || ret.seats <= 0)
      return res.status(400).json({ msg: "Return flight unavailable" });
    ret.seats -= 1;
    await ret.save();
  }
  flight.seats -= 1;
  await flight.save();
  const booking = await Booking.create({
    flightId,
    returnFlightId,
    tripType,
    passenger,
  });
  res.json({ ok: true, bookingId: booking._id });
};
