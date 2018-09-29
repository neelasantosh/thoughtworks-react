import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectedFlight } from '../actions'
import { Image, List, Input, Grid, Label, Form } from 'semantic-ui-react';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import ToSearchQuery from './search';
import FromSearchQuery from './fromsearch';
import 'rc-slider/assets/index.css';
import _ from 'lodash';

const style = { width: 400, margin: 50 };
const Range = Slider.Range;

class TwoWay extends Component{

  constructor(props){
    super(props)
    this.state = {
      filterCityState:'',
      maxPrice:0,
      minPrice:0
    }
  }

  componentDidMount(){
    let prices = []
    let filtered = _.filter(this.props.flight,{'from':this.props.fromcity,'to':this.props.selectcity})
    //console.log("filtered",filtered);
    filtered.map((item)=>{
      prices.push(item.price)
    })
    let mxPrice = Math.max(...prices)
    let mnPrice = Math.min(...prices)
    this.setState({maxPrice:mxPrice,minPrice:mnPrice,filterCityState:filtered})
  }

  componentWillReceiveProps(nextProps){
    let prices = []
    let filtered = _.filter(nextProps.flight,{'from':this.props.fromcity,'to':nextProps.selectcity})
    filtered.map((item)=>{
      prices.push(item.price)
    })
    this.setState({maxPrice:Math.max(...prices),minPrice:Math.min(...prices),filterCityState:filtered})
  }

  log = (value) => {
    let newStore = []
    let filteredFlightData = _.filter(this.props.flight,{'from':this.props.fromcity,'to':this.props.selectcity})
    filteredFlightData.map((item)=>{
      if ((parseInt(item.price) >= value[0]) && (parseInt(item.price) <= value[1])) {
        newStore.push(item)
      }
    })
    this.setState({filterCityState:newStore})
  }

  render(){
    let savedData = Object.values(this.state.filterCityState)
    let saveMax = this.state.maxPrice!=null ? this.state.maxPrice : 0
    let saveMin = this.state.minPrice!=null ? this.state.minPrice : 0
    return(
      <div>
        <h2> One Way </h2>
        <Grid columns='equal'>
          <Grid.Column>
          <Form>
            <Form.Group inline>
              <p>From  </p>
              {/*<Input disabled placeholder="default as Hyderabad"/>*/}
              <FromSearchQuery/>
            </Form.Group>
          </Form>
          </Grid.Column>
          <Grid.Column>
            <Form>
              <Form.Group inline>
              <p>Destination </p>
              <ToSearchQuery />
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid>
        <div style={style}>
          <Range dots step={10} defaultValue={[saveMin, saveMax]} onAfterChange={this.log} />
        </div>
        <List animated verticalAlign='middle'>
          {
            savedData.length === 0 ? 'No result' :
            savedData.map((item)=>{
              return(
                <List.Item>
                  <Image avatar src='' />
                  <List.Content>
                    <List.Header>{item.from} to {item.to}</List.Header>
                    <List.Description>
                      {item.flight} is offering the price of $. {item.price}
                    </List.Description>
                  </List.Content>
                </List.Item>
              )
            })
          }
        </List>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  flight:state.flight,
  selectcity:state.selectcity,
  fromcity:state.fromcity
})

export default connect(mapStateToProps)(TwoWay)
