export const SEARCH_FLIGHTS = 'SEARCH_FLIGHTS';
export const BOOK_FLIGHT = 'BOOK_FLIGHT';

export const searchFlights = (searchData) => ({
    type: SEARCH_FLIGHTS,
    payload: searchData,
});

export const bookFlight = (bookingData) => ({
    type: BOOK_FLIGHT,
    payload: bookingData,
});
