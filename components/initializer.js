import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchActorsAction from './fetchActors'

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
    if(!this.shouldComponentRender()) return (<div>Appen laster ikke</div>)
    return (
      <View ></View>
    )
  }
}

const mapStateToProps = state => {
  return {
  actors: state.actors.actors,
  //error: state.actors.error,
  pending: state.actors.pending,
}}


const mapDispatchToProps = dispatch => bindActionCreators({
  fetchActors: fetchActorsAction,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Initializer);

