import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchActorsAction from './fetchActors'

import {getActorsError, getActorsPending} from './reducers/reducer'
import getActors from './data';

class Initializer extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentRender(){
    if(this.pending === false) return false;
    return true;
}

  componentDidMount(){
    const {fetchActors}=this.props;
    fetchActors('http://it2810-09.idi.ntnu.no:8000/api/persons?sort=rating')
  }

  render() {
    const state = this.state;
    const { error, actors} = this.props;
    if(!this.shouldComponentRender()) return (<div>Appen laster ikke</div>)
    getActors()
    return (

      <View >
        
    
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
  actors: state.actors.actors,
  //topactors: state.topactors.topactors,
  error: getActorsError(state),
  pending: getActorsPending(state),
  //values: state.values.values
 
}}

 

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchActors: fetchActorsAction,
  //fetchTopActors: fetchTopActorsAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Initializer);

