import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Search, Grid } from 'semantic-ui-react'
import { selectedCity, fromSearch  } from '../actions'
import _ from 'lodash';

class FromSearchQuery extends Component{

  constructor(props){
    super(props)
    this.state = {
      cityState:''
    }
  }

  componentWillMount(){
    this.setState({cityState:_.uniqBy(this.props.cities,'title'),value:this.props.fromcity})
    //console.log(this.props);
    //console.log(_.reject(this.state.cities,{'from':'Hyderabad'}));
  }

  componentWillReceiveProps(nextProps){
    if (this.props!==nextProps) {
      this.setState({cityState:_.uniqBy(nextProps.cities,'title')})
    }
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()
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
    this.props.fromSearch(result.to)
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
            onFocus={this.resetComponent}
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
    selectedCity: selectcitydetails => dispatch(selectedCity(selectcitydetails)),
    fromSearch: fromsearchdetails => dispatch(fromSearch(fromsearchdetails))
  }
}

const mapStateToProps = state => ({
  flight:state.flight,
  cities:state.cities,
  selectcity:state.selectcity,
  fromcity:state.fromcity
})

export default connect(mapStateToProps,mapDispatchtoProps)(FromSearchQuery)
