const twowaydata = (state = {}, action) => {
  switch (action.type) {
    case 'TWO_WAY':
      //console.log("FLIGHT_DATA",action.payload);
      return action.payload
    default:
      return state
  }
}

export default twowaydata
