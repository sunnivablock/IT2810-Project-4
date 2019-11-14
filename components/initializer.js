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
import Up from '../assets/images/Up.png'
import Down from '../assets/images/Down.png'
import { CheckBox } from 'react-native-elements'

class Initializer extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick=this.handleButtonClick.bind(this);
    this.fire=this.fire.bind(this);

    this.state = {
      values:{
      rating: "",
      firstName: '',
      lastName: '',
      year: '',
      Sorting:"rating",
      SortDirection:"descending"
  } ,
      checked:true}
  }

  shouldComponentRender(){
    if(this.pending === false) return false;
    return true;
}

//generates api-url 
generateURLQuery = () => {
  return "http://it2810-09.idi.ntnu.no:8000/api/persons?" + ((!this.state.values.firstName) ? '' : `&firstName=${this.state.values.firstName}`)+ 
      ((!this.state.values.lastName) ? '' : `&lastName=${this.state.values.lastName}`) +
      ((!this.state.values.Sorting) ? '' : `&sort=${this.state.values.Sorting}`)+
      ((this.state.values.SortDirection === 'ascending') ? '&sortAsc=True' : '');}


   componentDidMount(){
    const {fetchActors}=this.props;
    fetchActors(this.generateURLQuery())

  }

  //fetches from database. Used to update on serach and sorting
  fire() {
    const {fetchActors}= this.props;
    fetchActors(this.generateURLQuery())
  }

  //handles searching on both last name and first name 
  async handleButtonClick() {
    await this.setState({values:
        {rating:parseInt(this.props.values.rating),
        firstName: this.props.values.firstName, 
        lastName:this.props.values.lastName, 
        year:parseInt(this.props.values.year),
        Sorting:"rating", 
        SortDirection:this.state.values.SortDirection
        }},
        )  
        this.fire()
  }
    
//handles sorting ascending and decending on rating
  async handleCheckClick(word) {
      await this.setState({values:
      {rating:parseInt(this.props.values.rating),
      firstName: this.state.values.firstName, 
      lastName:this.state.values.lastName, 
      year:parseInt(this.props.values.year),
      Sorting:"rating",
      SortDirection:word,
      }})

        this.fire()
      }

  render() {

    if(!this.shouldComponentRender()) return (<div>Appen laster ikke</div>)
    return (
      <View style= {styles.container}>
      

        <Button style={styles.button} title="Search"  backgroundColor='red' onPress={() => (this.handleButtonClick())}></Button>
        <CheckBox
          title='Ascending'
          checkedTitle='Descending'
          checkedIcon={<Image source={Down} style={styles.AppLogo}/>}
          uncheckedIcon={<Image source={Up} style={styles.AppLogo} />}
          checked={this.state.checked}
          onPress={() => (this.setState({checked: !this.state.checked}), 
          (this.state.checked? this.handleCheckClick("ascending"):this.handleCheckClick("descending")))}
        />
        <Text style={styles.writing}>Sort by rating in decending or ascending order</Text>
      </View>
    )
  }
}


const mapStateToProps = state => {
  return {
  actors: state.actors.actors,
  error: state.actors.error,
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
},
writing:{
  width:170,
  color:'gray', 
  marginBottom: 20,
},
button: {
  borderRadius: 10,
  margin: 20,
  marginTop: 20,
  padding: 20,
  color: 'white',
  backgroundColor: '#FF851B',
  borderWidth: 1
},
AppLogo :{
  height: 20,
  width:20,
  resizeMode: 'contain',
  marginTop:3,
},
container: {
  flex: 1,
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-evenly'
}, })