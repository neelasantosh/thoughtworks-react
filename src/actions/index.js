export const flightData = flightdetails => {
  return{
      type: 'FLIGHT_DATA',
      payload:flightdetails
    }
}

export const toCities = tocitydetails => {
  return{
      type: 'CITY_DATA',
      payload:tocitydetails
    }
}

export const selectedCity = selectcitydetails => {
  return{
      type: 'SELECT_CITY',
      payload:selectcitydetails
    }
}

export const twoWay = twowaydetails => {
  return{
      type: 'TWO_WAY',
      payload:twowaydetails
    }
}

export const fromSearch = fromsearchdetails => {
  return{
      type: 'FROM_SEARCH',
      payload:fromsearchdetails
    }
}
