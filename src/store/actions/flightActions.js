export const SEARCH_FLIGHTS = 'SEARCH_FLIGHTS';
export const SET_FLIGHT_TYPE = 'SET_FLIGHT_TYPE';
export const SET_SEARCH_PARAMS = 'SET_SEARCH_PARAMS';

export const setFlightType = (flightType) => ({
  type: SET_FLIGHT_TYPE,
  payload: flightType
});

export const setSearchParams = (params) => ({
  type: SET_SEARCH_PARAMS,
  payload: params
});

export const searchFlights = (searchParams) => {
  return (dispatch) => {
    // Mock flight data - in a real app, this would be an API call
    const mockFlights = [
      {
        id: 1,
        flightNumber: 'PA101',
        airline: 'Phoenix Airlines',
        departure: {
          city: searchParams.from,
          time: '08:00',
          date: searchParams.departureDate
        },
        arrival: {
          city: searchParams.to,
          time: '10:30',
          date: searchParams.departureDate
        },
        price: 299,
        duration: '2h 30m',
        stops: 0
      },
      {
        id: 2,
        flightNumber: 'PA102',
        airline: 'Phoenix Airlines',
        departure: {
          city: searchParams.from,
          time: '14:00',
          date: searchParams.departureDate
        },
        arrival: {
          city: searchParams.to,
          time: '16:30',
          date: searchParams.departureDate
        },
        price: 349,
        duration: '2h 30m',
        stops: 0
      },
      {
        id: 3,
        flightNumber: 'PA103',
        airline: 'Phoenix Airlines',
        departure: {
          city: searchParams.from,
          time: '18:00',
          date: searchParams.departureDate
        },
        arrival: {
          city: searchParams.to,
          time: '20:30',
          date: searchParams.departureDate
        },
        price: 279,
        duration: '2h 30m',
        stops: 1
      }
    ];

    // Add return flights for round-trip
    if (searchParams.flightType === 'round-trip' && searchParams.returnDate) {
      const returnFlights = [
        {
          id: 4,
          flightNumber: 'PA201',
          airline: 'Phoenix Airlines',
          departure: {
            city: searchParams.to,
            time: '09:00',
            date: searchParams.returnDate
          },
          arrival: {
            city: searchParams.from,
            time: '11:30',
            date: searchParams.returnDate
          },
          price: 299,
          duration: '2h 30m',
          stops: 0
        },
        {
          id: 5,
          flightNumber: 'PA202',
          airline: 'Phoenix Airlines',
          departure: {
            city: searchParams.to,
            time: '15:00',
            date: searchParams.returnDate
          },
          arrival: {
            city: searchParams.from,
            time: '17:30',
            date: searchParams.returnDate
          },
          price: 349,
          duration: '2h 30m',
          stops: 0
        }
      ];
      mockFlights.push(...returnFlights);
    }

    dispatch({
      type: SEARCH_FLIGHTS,
      payload: mockFlights
    });
  };
};
