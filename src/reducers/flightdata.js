const flight = (state = {}, action) => {
  switch (action.type) {
    case 'FLIGHT_DATA':
      //console.log("FLIGHT_DATA",action.payload);
      return action.payload
    default:
      return state
  }
}

export default flight
