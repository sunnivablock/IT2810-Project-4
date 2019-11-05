import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
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


class Table1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Rating', 'First Name', 'Last Name', 'Year'],
      tableData: []
    }
  }
  


  render() {
    const state = this.state;
    if (this.props.pending===true){
      console.log("fetching data")
      return (
        <View></View>
      )}
  
    else{
      let rows=[]
      this.props.actors.map(actor => {
        rows.push([actor.rating, actor.firstName, actor.lastName, actor.year])
      })
      //this.setState({tableData: rows}
      return (
        <ScrollView>
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
  pending: state.actors.pending
}}


const mapDispatchToProps = dispatch => bindActionCreators({
  fetchActors: fetchActorsAction,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table1);



const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#282c34' },
  head: { height: 40, backgroundColor: 'grey' },
  text: { margin: 6 , color:'white'}
});