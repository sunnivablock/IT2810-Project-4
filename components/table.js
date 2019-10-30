import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import getActors from './data'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchActorsAction from './fetchActors'
import {
  Image,
  Platform,
  ScrollView,
  
  Text,
  TouchableOpacity,
  
} from 'react-native';
import {getActorsError, getActorsPending} from './reducers/reducer'

export default class Table1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Rating', 'First Name', 'Last Name', 'Year'],
      tableData: [
        [10, 'Channing', 'Tatum', 1986],
        [9, 'Brad', 'Pitt', 1964],
        [8, 'James', 'Bond', 1972],
        [7, 'Channing', 'Tatum', 1976],      

      ]
      
      
      //getActors()
    }
  }



  render() {
    const state = this.state;
    console.log(getActors())
    return (

      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#282c34' },
  head: { height: 40, backgroundColor: 'grey' },
  text: { margin: 6 , color:'white'}
});