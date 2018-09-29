const cities = (state = {}, action) => {
  switch (action.type) {
    case 'CITY_DATA':
      //console.log("CITY_DATA",action.payload);
      return action.payload
    default:
      return state
  }
}

export default cities
