import React, { Component } from 'react';
import { connect } from 'react-redux'
import { flightData, toCities, twoWay } from './actions/index';
import FlightSearch from './components/flightsearch'
import './App.css';

const tocity = [
  {from:'Vizag', to:'Hyderabad', title:'Hyderabad'},
  {from:'Gujarat', to:'Hyderabad', title:'Hyderabad'},
  {from:'Chennai', to:'Hyderabad', title:'Hyderabad'},
  {from:'Banglore', to:'Hyderabad', title:'Hyderabad'},
  {from:'Mumbai', to:'Hyderabad', title:'Hyderabad'},
  {from:'Indore', to:'Hyderabad', title:'Hyderabad'},
  {from:'Hyderabad', to:'Vizag', title:'Vizag'},
  {from:'Gujarat', to:'Vizag', title:'Vizag'},
  {from:'Chennai', to:'Vizag', title:'Vizag'},
  {from:'Mumbai', to:'Vizag', title:'Vizag'},
  {from:'Indore', to:'Vizag', title:'Vizag'},
  {from:'Hyderabad', to:'Gujarat', title:'Gujarat'},
  {from:'Vizag', to:'Gujarat', title:'Gujarat'},
  {from:'Chennai', to:'Gujarat', title:'Gujarat'},
  {from:'Banglore', to:'Gujarat', title:'Gujarat'},
  {from:'Mumbai', to:'Gujarat', title:'Gujarat'},
  {from:'Hyderabad', to:'Chennai', title:'Chennai'},
  {from:'Vizag',  to:'Chennai', title:'Chennai'},
  {from:'Gujarat', to:'Chennai', title:'Chennai'},
  {from:'Banglore',to:'Chennai', title:'Chennai'},
  {from:'Mumbai', to:'Chennai', title:'Chennai'},
  {from:'Indore',to:'Chennai', title:'Chennai'},
  {from:'Hyderabad', to:'Banglore', title:'Banglore'},
  {from:'Hyderabad', to:'Mumbai', title:'Mumbai'},
  {from:'Hyderabad', to:'Indore', title:'Indore'},
]

const flight= [
  {flight:'Air India',from:'Hyderabad',to:'Banglore',title:'Banglore',price:'50',returndate:'30-08-2018'},
  {flight:'Spice Jet',from:'Hyderabad',to:'Banglore',title:'Banglore',price:'30',returndate:'30-08-2018'},
  {flight:'Indigo',from:'Hyderabad',to:'Banglore',title:'Banglore',price:'60',returndate:'30-08-2018'},
  {flight:'Indigo',from:'Hyderabad',to:'Chennai',title:'Chennai',price:'40',returndate:'30-08-2018'},
  {flight:'Spice Jet',from:'Hyderabad',to:'Chennai',title:'Chennai',price:'50',returndate:'30-08-2018'},
  {flight:'Air India',from:'Hyderabad',to:'Chennai',title:'Chennai',price:'30',returndate:'30-08-2018'},
  {flight:'Spice Jet',from:'Hyderabad',to:'Mumbai',title:'Mumbai',price:'50',returndate:'30-08-2018'},
  {flight:'Air India',from:'Hyderabad',to:'Mumbai',title:'Mumbai',price:'40',returndate:'30-08-2018'},
  {flight:'Indigo',from:'Hyderabad',to:'Mumbai',title:'Mumbai',price:'60',returndate:'30-08-2018'},
  {flight:'Air India',from:'Hyderabad',to:'Vizag',title:'Vizag',price:'30',returndate:'30-08-2018'},
  {flight:'Indigo',from:'Hyderabad',to:'Vizag',title:'Vizag',price:'20',returndate:'30-08-2018'},
  {flight:'Spice Jet',from:'Hyderabad',to:'Vizag',title:'Vizag',price:'30',returndate:'30-08-2018'},
  {flight:'Indigo',from:'Hyderabad',to:'Indore',title:'Indore',price:'60',returndate:'30-08-2018'},
  {flight:'Spice Jet',from:'Hyderabad',to:'Indore',title:'Indore',price:'60',returndate:'30-08-2018'},
  {flight:'Air India',from:'Hyderabad',to:'Indore',title:'Indore',price:'70',returndate:'30-08-2018'},
  {flight:'Air India',from:'Hyderabad',to:'Gujarat',title:'Gujarat',price:'80',returndate:'30-08-2018'},
  {flight:'Indigo',from:'Hyderabad',to:'Gujarat',title:'Gujarat',price:'90',returndate:'30-08-2018'},
  {flight:'Spice Jet',from:'Hyderabad',to:'Gujarat',title:'Gujarat',price:'60',returndate:'30-08-2018'},

  {flight:'Air India',from:'Vizag',to:'Hyderabad',title:'Hyderabad',price:'70',returndate:'30-08-2018'},
  {flight:'SPice Jet',from:'Vizag',to:'Hyderabad',title:'Hyderabad',price:'60',returndate:'30-08-2018'},
  {flight:'India',from:'Vizag',to:'Hyderabad',title:'Hyderabad',price:'20',returndate:'30-08-2018'},

  {flight:'Air India',from:'Gujarat',to:'Hyderabad',title:'Hyderabad',price:'70',returndate:'30-08-2018'},
  {flight:'SPice Jet',from:'Gujarat',to:'Hyderabad',title:'Hyderabad',price:'60',returndate:'30-08-2018'},
  {flight:'India',from:'Gujarat',to:'Hyderabad',title:'Hyderabad',price:'20',returndate:'30-08-2018'},

  {flight:'Air India',from:'Gujarat',to:'Vizag',title:'Vizag',price:'70',returndate:'30-08-2018'},
  {flight:'SPice Jet',from:'Gujarat',to:'Vizag',title:'Vizag',price:'60',returndate:'30-08-2018'},
  {flight:'India',from:'Gujarat',to:'Vizag',title:'Vizag',price:'20',returndate:'30-08-2018'},

  {flight:'Air India',from:'Chennai',to:'Hyderabad',title:'Hyderabad',price:'70',returndate:'30-08-2018'},
  {flight:'SPice Jet',from:'Chennai',to:'Hyderabad',title:'Hyderabad',price:'60',returndate:'30-08-2018'},
  {flight:'India',from:'Chennai',to:'Hyderabad',title:'Hyderabad',price:'20',returndate:'30-08-2018'},

  {flight:'Air India',from:'Chennai',to:'Gujarat',title:'Gujarat',price:'70',returndate:'30-08-2018'},
  {flight:'SPice Jet',from:'Chennai',to:'Gujarat',title:'Gujarat',price:'60',returndate:'30-08-2018'},
  {flight:'India',from:'Chennai',to:'Gujarat',title:'Gujarat',price:'20',returndate:'30-08-2018'},

  {flight:'Air India',from:'Banglore',to:'Hyderabad',title:'Hyderabad',price:'70',returndate:'30-08-2018'},
  {flight:'SPice Jet',from:'Banglore',to:'Hyderabad',title:'Hyderabad',price:'60',returndate:'30-08-2018'},
  {flight:'India',from:'Banglore',to:'Hyderabad',title:'Hyderabad',price:'20',returndate:'30-08-2018'},

  {flight:'Air India',from:'Mumbai',to:'Hyderabad',title:'Hyderabad',price:'70',returndate:'30-08-2018'},
  {flight:'SPice Jet',from:'Mumbai',to:'Hyderabad',title:'Hyderabad',price:'60',returndate:'30-08-2018'},
  {flight:'India',from:'Mumbai',to:'Hyderabad',title:'Hyderabad',price:'20',returndate:'30-08-2018'},

  {flight:'Air India',from:'Indore',to:'Hyderabad',title:'Hyderabad',price:'70',returndate:'30-08-2018'},
  {flight:'SPice Jet',from:'Indore',to:'Hyderabad',title:'Hyderabad',price:'60',returndate:'30-08-2018'},
  {flight:'India',from:'Indore',to:'Hyderabad',title:'Hyderabad',price:'20',returndate:'30-08-2018'},

  {flight:'Air India',from:'Indore',to:'Chennai',title:'Chennai',price:'70',returndate:'30-08-2018'},
  {flight:'SPice Jet',from:'Indore',to:'Chennai',title:'Chennai',price:'60',returndate:'30-08-2018'},
  {flight:'India',from:'Indore',to:'Chennai',title:'Chennai',price:'20',returndate:'30-08-2018'},
]

const twowayfilght = [
  {flight:'Air India',from:'Hyderabad',to:'Banglore',title:'Banglore',price:'100',returndate:'30-08-2018'},
  {flight:'Spice Jet',from:'Hyderabad',to:'Banglore',title:'Banglore',price:'60',returndate:'30-08-2018'},
  {flight:'Indigo',from:'Hyderabad',to:'Banglore',title:'Banglore',price:'100',returndate:'30-08-2018'},
  {flight:'Indigo',from:'Hyderabad',to:'Chennai',title:'Chennai',price:'80',returndate:'30-08-2018'},
  {flight:'Spice Jet',from:'Hyderabad',to:'Chennai',title:'Chennai',price:'100',returndate:'30-08-2018'},
  {flight:'Air India',from:'Hyderabad',to:'Chennai',title:'Chennai',price:'60',returndate:'30-08-2018'},
  {flight:'Spice Jet',from:'Hyderabad',to:'Mumbai',title:'Mumbai',price:'100',returndate:'30-08-2018'},
  {flight:'Air India',from:'Hyderabad',to:'Mumbai',title:'Mumbai',price:'80',returndate:'30-08-2018'},
  {flight:'Indigo',from:'Hyderabad',to:'Mumbai',title:'Mumbai',price:'70',returndate:'30-08-2018'},
  {flight:'Air India',from:'Hyderabad',to:'Vizag',title:'Vizag',price:'60',returndate:'30-08-2018'},
  {flight:'Indigo',from:'Hyderabad',to:'Vizag',title:'Vizag',price:'40',returndate:'30-08-2018'},
  {flight:'Spice Jet',from:'Hyderabad',to:'Vizag',title:'Vizag',price:'60',returndate:'30-08-2018'},
  {flight:'Indigo',from:'Hyderabad',to:'Indore',title:'Indore',price:'90',returndate:'30-08-2018'},
  {flight:'Spice Jet',from:'Hyderabad',to:'Indore',title:'Indore',price:'80',returndate:'30-08-2018'},
  {flight:'Air India',from:'Hyderabad',to:'Indore',title:'Indore',price:'80',returndate:'30-08-2018'},
  {flight:'Air India',from:'Hyderabad',to:'Gujarat',title:'Gujarat',price:'90',returndate:'30-08-2018'},
  {flight:'Indigo',from:'Hyderabad',to:'Gujarat',title:'Gujarat',price:'100',returndate:'30-08-2018'},
  {flight:'Spice Jet',from:'Hyderabad',to:'Gujarat',title:'Gujarat',price:'80',returndate:'30-08-2018'},

  {flight:'Air India',from:'Vizag',to:'Hyderabad',title:'Hyderabad',price:'90',returndate:'30-08-2018'},
  {flight:'SPice Jet',from:'Vizag',to:'Hyderabad',title:'Hyderabad',price:'80',returndate:'30-08-2018'},
  {flight:'India',from:'Vizag',to:'Hyderabad',title:'Hyderabad',price:'60',returndate:'30-08-2018'},

  {flight:'Air India',from:'Gujarat',to:'Hyderabad',title:'Hyderabad',price:'80',returndate:'30-08-2018'},
  {flight:'SPice Jet',from:'Gujarat',to:'Hyderabad',title:'Hyderabad',price:'70',returndate:'30-08-2018'},
  {flight:'India',from:'Gujarat',to:'Hyderabad',title:'Hyderabad',price:'50',returndate:'30-08-2018'},

  {flight:'Air India',from:'Gujarat',to:'Vizag',title:'Vizag',price:'80',returndate:'30-08-2018'},
  {flight:'SPice Jet',from:'Gujarat',to:'Vizag',title:'Vizag',price:'80',returndate:'30-08-2018'},
  {flight:'India',from:'Gujarat',to:'Vizag',title:'Vizag',price:'40',returndate:'30-08-2018'},

  {flight:'Air India',from:'Chennai',to:'Hyderabad',title:'Hyderabad',price:'80',returndate:'30-08-2018'},
  {flight:'SPice Jet',from:'Chennai',to:'Hyderabad',title:'Hyderabad',price:'70',returndate:'30-08-2018'},
  {flight:'India',from:'Chennai',to:'Hyderabad',title:'Hyderabad',price:'60',returndate:'30-08-2018'},

  {flight:'Air India',from:'Chennai',to:'Gujarat',title:'Gujarat',price:'100',returndate:'30-08-2018'},
  {flight:'SPice Jet',from:'Chennai',to:'Gujarat',title:'Gujarat',price:'80',returndate:'30-08-2018'},
  {flight:'India',from:'Chennai',to:'Gujarat',title:'Gujarat',price:'90',returndate:'30-08-2018'},

  {flight:'Air India',from:'Banglore',to:'Hyderabad',title:'Hyderabad',price:'90',returndate:'30-08-2018'},
  {flight:'SPice Jet',from:'Banglore',to:'Hyderabad',title:'Hyderabad',price:'80',returndate:'30-08-2018'},
  {flight:'India',from:'Banglore',to:'Hyderabad',title:'Hyderabad',price:'60',returndate:'30-08-2018'},

  {flight:'Air India',from:'Mumbai',to:'Hyderabad',title:'Hyderabad',price:'80',returndate:'30-08-2018'},
  {flight:'SPice Jet',from:'Mumbai',to:'Hyderabad',title:'Hyderabad',price:'70',returndate:'30-08-2018'},
  {flight:'India',from:'Mumbai',to:'Hyderabad',title:'Hyderabad',price:'70',returndate:'30-08-2018'},

  {flight:'Air India',from:'Indore',to:'Hyderabad',title:'Hyderabad',price:'80',returndate:'30-08-2018'},
  {flight:'SPice Jet',from:'Indore',to:'Hyderabad',title:'Hyderabad',price:'70',returndate:'30-08-2018'},
  {flight:'India',from:'Indore',to:'Hyderabad',title:'Hyderabad',price:'50',returndate:'30-08-2018'},

  {flight:'Air India',from:'Indore',to:'Chennai',title:'Chennai',price:'100',returndate:'30-08-2018'},
  {flight:'SPice Jet',from:'Indore',to:'Chennai',title:'Chennai',price:'80',returndate:'30-08-2018'},
  {flight:'India',from:'Indore',to:'Chennai',title:'Chennai',price:'70',returndate:'30-08-2018'},
]

class App extends Component {

  componentDidMount(){
    this.props.flightData(flight)
    this.props.toCities(tocity)
    this.props.twoWay(twowayfilght)
  }

  render() {
    return (
      <div className="App">
        <FlightSearch />
      </div>
    );
  }
}

const mapDispatchtoProps = dispatch => {
  return{
    flightData: flightdetails => dispatch(flightData(flightdetails)),
    toCities : tocitydetails => dispatch(toCities(tocitydetails)),
    twoWay : twowaydetails => dispatch(twoWay(twowaydetails))
  }
}

export default connect(null,mapDispatchtoProps)(App);
