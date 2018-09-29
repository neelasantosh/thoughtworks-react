import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Search, Grid } from 'semantic-ui-react'
import { selectedFlight, selectedCity  } from '../actions'
import _ from 'lodash';

class ToSearchQuery extends Component{

  constructor(props){
    super(props)
    this.state = {
      cityState:''
    }
  }

  componentWillMount(){
    this.setState({cityState:_.uniqBy(this.props.cities,'title')})
  }

  componentWillReceiveProps(nextProps){
    if (this.props!=nextProps) {
      this.setState({cityState:_.uniqBy(nextProps.cities,'title')})
    }
  }



  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(this.state.cityState, isMatch),
      })
    }, 300)
  }

  handleResultSelect = (e, {result}) => {
    this.setState({value:result.to})
    this.props.selectedCity(result.to)
  }

  render(){
    const { isLoading, value, results } = this.state
    return(
      <Grid>
        <Grid.Column>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
      </Grid>

    )
  }
}

const mapDispatchtoProps = dispatch => {
  return{
    selectedCity: selectcitydetails => dispatch(selectedCity(selectcitydetails))
  }
}

const mapStateToProps = state => ({
  flight:state.flight,
  cities:state.cities
})

export default connect(mapStateToProps,mapDispatchtoProps)(ToSearchQuery)
