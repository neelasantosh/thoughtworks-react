import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectedFlight } from '../actions'
import { Image, List, Input, Grid, Label, Form } from 'semantic-ui-react';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import SearchQuery from './search';
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
    let filtered = _.filter(this.props.twowaydata,{'from':this.props.fromcity,'to':this.props.selectcity})
    filtered.map((item)=>{
      prices.push(item.price)
    })
    let mxPrice = Math.max(...prices)
    let mnPrice = Math.min(...prices)
    this.setState({maxPrice:mxPrice,minPrice:mnPrice,filterCityState:filtered})
  }

  componentWillReceiveProps(nextProps){
    let prices = []
    let filtered = _.filter(nextProps.twowaydata,{'from':this.props.fromcity,'to':nextProps.selectcity})
    filtered.map((item)=>{
      prices.push(item.price)
    })
    this.setState({maxPrice:Math.max(...prices),minPrice:Math.min(...prices),filterCityState:filtered})
  }

  log = (value) => {
    let newStore = []
    //console.log("nothing",value,this.props.flight,this.props.selectcity);
    let filteredFlightData = _.filter(this.props.twowaydata,{'from':this.props.fromcity,'to':this.props.selectcity})
    //console.log("flitered",filteredFlightData);
    filteredFlightData.map((item)=>{
      //console.log(value[0], parseInt(item.price), value[1]);
      if ((parseInt(item.price) >= value[0]) && (parseInt(item.price) <= value[1])) {
        newStore.push(item)
        //console.log("to",item);
      }
    })
    this.setState({filterCityState:newStore})
  }

  render(){
    let savedDatas = Object.values(this.state.filterCityState)
    let saveMax = this.state.maxPrice!=null ? this.state.maxPrice : 0
    let saveMin = this.state.minPrice!=null ? this.state.minPrice : 0
    //console.log(saveMax,saveMin);
    return(
      <div>
        <h2> Two Way </h2>
        <Grid columns='equal'>
          <Grid.Column>
          <Form>
            <Form.Group inline widths='equal'>
              <p>From  </p>
              <FromSearchQuery/>
            </Form.Group>
          </Form>
          </Grid.Column>
          <Grid.Column>
            <Form>
              <Form.Group inline widths='equal'>
              <p>Destination </p>
              <SearchQuery />
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid>
        <div style={style}>
          <Range dots step={10} defaultValue={[saveMin, saveMax]} onAfterChange={this.log} />
        </div>
        <List animated verticalAlign='middle'>
          {
            savedDatas.length === 0 ? 'No result' :
            savedDatas.map((item)=>{
              return(
                <List.Item>
                  <Image avatar src='' />
                  <List.Content>
                    <List.Header>{item.from} to {item.to}</List.Header>
                    <List.Description>
                      {item.flight} is offering the price of Rs. {item.price}
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
  twowaydata:state.twowaydata,
  fromcity:state.fromcity
})

export default connect(mapStateToProps)(TwoWay)
