const selectcity = (state = 'Mumbai', action) => {
  switch (action.type) {
    case 'SELECT_CITY':
      //console.log("SELECT_CITY",action.payload);
      return action.payload
    default:
      return state
  }
}

export default selectcity
