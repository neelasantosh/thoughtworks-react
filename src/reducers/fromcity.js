const fromcity = (state = 'Mumbai', action) => {
  switch (action.type) {
    case 'FROM_SEARCH':
      //console.log("FROM_SEARCH",action.payload);
      return action.payload
    default:
      return state
  }
}

export default fromcity
