import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import FlightSearch from "./pages/FlightSearch";
import FlightBooking from "./pages/FlightBooking";
import Confirmation from "./pages/Confirmation";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/flight-search" element={<FlightSearch />} />
      <Route path="/flight-booking" element={<FlightBooking />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  </BrowserRouter>
);
