import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchActorsAction from './fetchActors'
import {getActorsError, getActorsPending} from './reducers/reducer'

class Table1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Rating', 'First Name', 'Last Name', 'Year'],
      tableData: [
        ['10', '', 'Hemsworth', '1986'],
        ['9', 'Channing', 'Tatum', '1983'],
        ['8', 'Michael', 'Jordannnn', '1981'],
        ['7', 'Brad', 'Pitt', '1967']
      ]
    }
  }

  componentDidMount(){
    const {fetchActors}=this.props;
    fetchActors('http://it2810-09.idi.ntnu.no:8000/api/persons?sort=rating')
  }

  render() {
    const state = this.state;
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

const mapStateToProps = state => {
  return {
  actors: state.actors.actors,
  //topactors: state.topactors.topactors,
  //error: getActorsError(state),
 // pending: getActorsPending(state),
  //values: state.values.values
 
}}

 

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchActors: fetchActorsAction,
  //fetchTopActors: fetchTopActorsAction
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