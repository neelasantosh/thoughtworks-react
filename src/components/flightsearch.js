import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react'
import OneWay from './oneway'
import TwoWay from './twoway'

export default class FlightSearch extends Component{

  render(){
    const panes = [
    { menuItem: 'One Way', render: () => <Tab.Pane attached={false}><OneWay /></Tab.Pane> },
    { menuItem: 'Two Way', render: () => <Tab.Pane attached={false}><TwoWay /></Tab.Pane> }]

    return(
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    )
  }

}
