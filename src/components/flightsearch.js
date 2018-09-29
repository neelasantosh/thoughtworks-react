import React, { Component } from 'react';
import {
  Container,
  Dropdown,
  Header,
  Image,
  Menu,
} from 'semantic-ui-react'
import { Tab } from 'semantic-ui-react'
import OneWay from './oneway'
import TwoWay from './twoway'
import logo from '../assets/images/logo.png'

export default class FlightSearch extends Component{

  render(){
    const panes = [
    { menuItem: 'One Way', render: () => <Tab.Pane attached={false}><OneWay /></Tab.Pane> },
    { menuItem: 'Two Way', render: () => <Tab.Pane attached={false}><TwoWay /></Tab.Pane> }]

    return(
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image size='mini' src={logo} style={{ marginRight: '1.5em',width:'20%' }} />
              Flight Search
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>

            <Dropdown item simple text='Flights'>
              <Dropdown.Menu>
                <Dropdown.Item>Air Asia</Dropdown.Item>
                <Dropdown.Item>Air India</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Flights</Dropdown.Header>
                <Dropdown.Item>
                  <i className='dropdown icon' />
                  <span className='text'>Types</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>Classic</Dropdown.Item>
                    <Dropdown.Item>Gold</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>Spice Jet</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Flight Search</Header>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </Container>
      </div>
    )
  }

}
