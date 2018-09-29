import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchQuery from './search';
import { Image, List, Input } from 'semantic-ui-react';
import _ from 'lodash';

class OneWay extends Component{

  constructor(props){
    super(props)
    this.state = {
      filterCityState:''
    }
  }

  componentDidMount(){
    this.setState({filterCityState:this.props.selectcity})
    let filtered = _.filter(this.props.flight,['to',this.props.selectcity])
    this.setState({filterCityState:filtered})
  }

  componentWillReceiveProps(nextProps){
    if (this.props!==nextProps) {
      this.setState({filterCityState:nextProps.selectcity})
    }
    let filtered = _.filter(nextProps.flight,['to',nextProps.selectcity])
    this.setState({filterCityState:filtered})
  }

  render(){
    let savedData = Object.values(this.state.filterCityState)
    return(
      <div>
        <h2> One Way </h2>
        <Input disabled placeholder="default as Hyderabad"/>
        <SearchQuery />
          <List animated verticalAlign='middle'>
            {
              savedData.map((item)=>{
                return(
                  <List.Item>
                    <Image avatar src='' />
                    <List.Content>
                      <List.Header>{item.to}</List.Header>
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
  selectcity:state.selectcity
})

export default connect(mapStateToProps)(OneWay)
