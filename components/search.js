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
  View,
  StyleSheet
} from 'react-native';
import { SocialSentimentDissatisfied } from 'material-ui/svg-icons';


class Search extends Component {
 
 constructor(props){
    super(props);
       
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
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
      rating: this.props.values.rating,
      firstName: value,
      lastName: this.props.values.lastName,
      year: this.props.values.year,
      Sorting: this.props.values.Sort,
      SortDirection:this.props.values.SortDirection
     }
  this.props.dispatch(SearchSuccess(object))
 }

 handleLastName(e) {
  let value = e.target.value;
  //return value;
  this.setState( prevState => ({ values : 
       {...prevState.values, lastName: value
       }
     }))
     let object = {
      rating: this.props.values.rating,
      firstName: this.props.values.firstName,
      lastName: value,
      year: this.props.values.year,
      Sort: this.props.values.Sort,
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
    
    console.log("Redux:",this.props.values.firstName, this.props.values.lastName)

    return (
      <View style={styles.container}>
      
      
      <TextInput  
      style={styles.textFields}
      placeholder="Search First Name" 
      value={this.state.values.firstName}
      onChange={this.handleFirstName}
      id="First Name"
      style={{ height: 40, 
      borderColor: 'gray', 
      borderWidth: 1,
      backgroundColor:'white' }}>
      </TextInput>
      <TextInput  
      style={styles.textFields}
      placeholder="Search Last Name" 
      value={this.state.values.lastName}
      onChange={this.handleLastName}
      id="Last Name"
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

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    textFields: {
     
     

    },
  })