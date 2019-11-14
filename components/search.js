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
import searchIcon from '../assets/images/search-icon.png'


class Search extends Component {
 
 constructor(props){
    super(props);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
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

//handles input from user in tekxtfield (first name)
async handleFirstName(e) {
  let value = e.nativeEvent.text;
  await this.setState( prevState => ({ values : 
       {...prevState.values, firstName: value
       }, 
     }) )
     let object = {
      rating: this.props.values.rating,
      firstName: value,
      lastName: this.props.values.lastName,
      year: this.props.values.year,
      Sorting: this.props.values.Sorting,
      SortDirection:this.props.values.SortDirection
     }
  this.props.dispatch(SearchSuccess(object))
 }

//handles input from user in textfield (last name)
 async handleLastName(e) {
  let value = e.nativeEvent.text;
  await this.setState( prevState => ({ values : 
       {...prevState.values, lastName: value
       }
     }))
     let object = {
      rating: this.props.values.rating,
      firstName: this.props.values.firstName,
      lastName: value,
      year: this.props.values.year,
      Sorting: this.props.values.Sorting,
      SortDirection:this.props.values.SortDirection
     }
  this.props.dispatch(SearchSuccess(object))
 }


render() {
  const state = this.state;
  if (this.props.pending===true){
    return (
      <View></View>
    )}

  else{
    return (
      <View style={styles.container}>
      
      <Image source={searchIcon} style={styles.AppLogo} />
      <TextInput  
      
      placeholder="First Name" 
      value={this.state.values.firstName}
      onChange={(firstname)=>{this.handleFirstName(firstname)}}
      id="First Name"
      style={styles.searchText }>
      </TextInput>
      <TextInput  
      
      placeholder="Last Name" 
      value={this.state.values.lastName}
      onChange={this.handleLastName}
      id="Last Name"
      style={styles.searchText}>
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
      
      flexDirection:'row',
      justifyContent:'space-around',
      width:'100%',
      paddingTop:20,
      paddingBottom:20,
      //flexGrow: 1,
      
      
    },
    AppLogo :{
      height: 40,
      width:40,
      resizeMode: 'contain',
      marginTop:3,
    },
   
  
  
    searchText:{
      textAlign: 'center',
      alignContent: 'center',
      flex: 1,
      height: 40,
      color: 'black',
      borderBottomColor: '#282c34',
      borderBottomWidth: 1,
      marginTop: 5,
      marginBottom: 8
    },
    textFields: {
     
    },
  })