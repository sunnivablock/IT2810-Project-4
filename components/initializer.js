import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchActorsAction from './fetchActors'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  
} from 'react-native';

class Initializer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values:{
      rating: "",
      firstName: '',
      lastName: '',
      year: '',
      Sorting:"rating",
      SortDirection:"descending"

  } }
  }

  shouldComponentRender(){
    if(this.pending === false) return false;
    return true;
}

generateURLQuery = () => {
  return "http://it2810-09.idi.ntnu.no:8000/api/persons?" + ((!this.state.values.firstName) ? '' : `&firstName=${this.state.values.firstName}`)+ 
      ((!this.state.values.lastName) ? '' : `&lastName=${this.state.values.lastName}`) +
      ((!this.state.values.rating) ? '' : `&rating=${this.state.values.rating}`) +
      ((!this.state.values.year) ? '' : `&year=${this.state.values.year}`)+
      ((!this.state.values.Sorting) ? '' : `&sort=${this.state.values.Sorting}`)+
      ((this.state.values.SortDirection === 'ascending') ? '&sortAsc=True' : '');}


   componentDidMount(){
    const {fetchActors}=this.props;
    fetchActors(this.generateURLQuery())

  }

  fire() {
    const {fetchActors}=this.props;
    fetchActors(this.generateURLQuery())
    console.log("fire!")

  }

   handleButtonClick() {
      this.setState({values:{firstName: this.props.values.firstName, 
        lastName:this.props.values.lastName, year:parseInt(this.props.values.year),
        rating:parseInt(this.props.values.rating), Sorting:this.props.values.Sort,
        SortDirection:this.props.values.SortDirection}},this.fire)
        console.log("handleButtonClick")
   }
  

  render() {
    if(!this.shouldComponentRender()) return (<div>Appen laster ikke</div>)
    return (
      <View >
        <Button style={styles.title} title="search" action={() => this.handleButtonClick, console.log('Simple Button pressed')}>Search</Button>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
  actors: state.actors.actors,
  //error: state.actors.error,
  pending: state.actors.pending,
  values: state.values.values,
}}


const mapDispatchToProps = dispatch => bindActionCreators({
  fetchActors: fetchActorsAction,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Initializer);


const styles = StyleSheet.create({
title: {
  textAlign: 'center',
  marginVertical: 8,
  color:'white',
  overlayColor:'red',
  width: 40,
  height:10
} })