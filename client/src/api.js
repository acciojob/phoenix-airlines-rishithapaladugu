import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const searchFlights = (query) =>
  api.get("/flights", { params: query }).then((res) => res.data);

export const createBooking = (payload) =>
  api.post("/bookings", payload).then((res) => res.data);
