import React, {Component} from 'react';
import { connect } from 'react-redux';
import {SearchSuccess} from '../components/actions/index'
import {
  Image,
  Platform,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  View
  
} from 'react-native';


class Search extends Component {
 
 constructor(props){
    super(props);
       
    this.handleFirstName = this.handleFirstName.bind(this);
    //this.handleLastName = this.handleLastName.bind(this);
    //this.handleRating = this.handleRating.bind(this);
    //this.handleSorting=this.handleSorting.bind(this);
    //this.handleSortDirection=this.handleSortDirection.bind(this);
    this.state = {
      values:{
      rating: '',
      firstName: '',
      lastName: '',
      year: '',
      Sorting:'',
      SortDirection:''
  }
  } 
}
      
handleFirstName(e) {
  let value = e.target.value;
  this.setState( prevState => ({ values : 
       {...prevState.values, firstName: value
       }, 
     }) )
     console.log("State:",this.state.values.firstName)
     let object = {
      rating: this.props.values.Rating,
      firstName: value,
      lastName: this.props.values.Etternavn,
      year: this.props.values.Født,
      Sorting: this.props.values.Sorting,
      SortDirection:this.props.values.SortDirection
     }
  this.props.dispatch(SearchSuccess(object))
 }





render() {
  const state = this.state;
  if (this.props.pending===true){
    console.log("fetching data")
    return (
      <View></View>
    )}

  else{
    
    console.log("Redux:",this.props.values)

    return (
      <View>

      <Text>{"Values:",this.props.values.values}</Text>
      <TextInput  placeholder="Search" 
      value={this.state.values.firstName}
      onChange={this.handleFirstName}
      id="Fornavn"
      style={{ height: 40, 
      borderColor: 'gray', 
      borderWidth: 1,
      backgroundColor:'white' }}>

      </TextInput>
      </View>
    )}}
      }
   
   
   const mapStateToProps = state => ({
     values: state.values.values
   })


   export default connect(mapStateToProps)(Search)