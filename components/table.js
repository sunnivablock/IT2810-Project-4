import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { connect } from 'react-redux';
import { bindActionCreators, dispatch } from 'redux';
import fetchActorsAction from './fetchActors'
import {SearchSuccess} from './actions/index'
import {
  Image,
  Platform,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  
} from 'react-native';


class Table1 extends Component {
  constructor(props) {
    super(props);
    this.handleFirstName = this.handleFirstName.bind(this);
    //this.boundActionCreators=bindActionCreators(SearchSuccess, dispatch)
    /*this.handleLastName = this.handleLastName.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleSorting=this.handleSorting.bind(this);
    this.handleSortDirection=this.handleSortDirection.bind(this); */
    this.state = {
      tableHead: ['Rating', 'Name'],
      tableData: [],
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
      return (
        <View></View>
      )}
  
    else{
      let rows=[]
      this.props.actors.map(actor => {
        rows.push([actor.rating, actor.firstName +' '+ actor.lastName])
      })
      //this.setState({tableData: rows}
      return (
        <ScrollView>

        {/*<Text>{"Values:",this.props.values.values}</Text>
        <TextInput  placeholder="Search" 
        value={this.state.values.firstName}
        onChange={this.handleFirstName}
        id="Fornavn"
        style={{ height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        backgroundColor:'white' }}>

        </TextInput>*/}
        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={rows} textStyle={styles.text}/>
          </Table>
        </View>
        </ScrollView>
      )
    }
    
    
   
    
  }
}
const mapStateToProps = state => {
  return {
  actors: state.actors.actors,
  error: state.actors.error,
  pending: state.actors.pending,
  values: state.values.values
}}


/*const mapDispatchToProps = dispatch => bindActionCreators({
  fetchActors: fetchActorsAction,
}, dispatch)*/

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(Table1);



const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#282c34' },
  head: { height: 40, backgroundColor: 'grey' },
  text: { margin: 6 , color:'white'}
});