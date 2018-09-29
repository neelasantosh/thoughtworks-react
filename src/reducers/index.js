import { combineReducers } from 'redux';
import flight from './flightdata';
import cities from './tocities';
import selectcity from './selectcity';
import twowaydata from './twowaydata';
import fromcity from './fromcity';

const rootReducer = combineReducers({
  flight,
  cities,
  selectcity,
  twowaydata,
  fromcity
})

export default rootReducer
