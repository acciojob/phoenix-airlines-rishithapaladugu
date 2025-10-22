import Flight from "../models/Flight.js";
export const searchFlights = async (req, res) => {
  const { source, destination, date } = req.query;
  const flights = await Flight.find({
    source,
    destination,
    date: new Date(date),
  });
  res.json(flights);
};
