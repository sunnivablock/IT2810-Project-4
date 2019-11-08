import React, { Component } from 'react';
import { StyleSheet, View, Text, ListItem, Button, TouchableWithoutFeedback } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchActorsAction from './fetchActors'
import { FlatList } from 'react-native-gesture-handler';


class Table1 extends Component {
  constructor(props) {
    super(props);
    this.loadData=this.loadData.bind(this);
    this.state = {
      tableHead: ['Rating', 'Name'],
      tableData: [],
      firstIndex:0,
      lastIndex:10,
      rows:[],
      display:[]
    }

  }
  

  loadData(){
    let rows=[]
    this.props.actors.map(actor => {
      rows.push([actor.rating, actor.firstName +' '+ actor.lastName])
    })
    let display=rows.slice(this.state.firstIndex,this.state.lastIndex)
    this.setState({rows:rows})
    this.setState({display:display})
  }

  buttonClickNextPage(){
    let newFirstIndex=this.state.lastIndex+1
    let newLastIndex=this.state.lastIndex+11
    if (newLastIndex<=(this.props.actors.length)){
      this.setState({lastIndex:newLastIndex})
      this.setState({firstIndex:newFirstIndex}),
      this.loadData()
      }
    else if(newLastIndex<(this.props.actors.length+11)){
      this.setState({lastIndex:(this.props.actors.length-1)})
      this.setState({firstIndex:newFirstIndex}),
      this.loadData(),
      this.setState({lastIndex:300})
    }
    else{

    } 
  }

  actionOnRow(actor){
    console.log(actor[1] + " " + actor[2] + " er " + actor[4] + " og er født i " + actor[3])
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
        rows.push([actor.rating, actor.firstName, actor.lastName, actor.year, actor.profession])
      })
      let display = rows.slice(this.state.firstIndex, this.state.lastIndex)

      return (
        <View>
        <FlatList
        style={styles.container}
        data={display}
        keyExtractor={(item, index)=>index.toString()}
        //renderItem={this.renderRow}
        renderItem={({item}) => (
          <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
              <View style={styles.actor}>
                 <Text style={styles.actorText}>{item[0]+ " - " + item[1] + " " + item[2]}</Text>
              </View>

         </TouchableWithoutFeedback>

     )}



        />
        <Button
        onPress={this.buttonClickNextPage.bind(this) } 
        title="Neste side"
      />
      </View>
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
  container: {padding: 16, paddingTop: 30, 
    backgroundColor: '#282c34' },
  head: { height: 40, backgroundColor: 'grey' },
  actorText: { 
    margin: 6 , 
    color:'white',
    fontSize:18,
    padding:5},
  actor: {
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    marginBottom:10
  }
});
