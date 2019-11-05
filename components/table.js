import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchActorsAction from './fetchActors'
import {
  Image,
  Platform,
  TouchableOpacity,
  
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


class Table1 extends Component {
  constructor(props) {
    super(props);
    this.loadData=this.loadData.bind(this);
    this.state = {
      tableHead: ['Rating', 'Name'],
      tableData: [],
      firstIndex:1,
      lastIndex:10,
      rows:[],
      display:[]
    }

  }
  

  renderRow = ({item}) => {
      return (
        <View style={styles.actor}>
          <Text style={styles.actorText}>{item}</Text>
        </View>
      )
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
    if (newLastIndex<=this.props.actors.length){
      this.setState({firstIndex:newFirstIndex}),
      this.setState({lastIndex:newLastIndex}),
      console.log(this.state.lastIndex, this.state.firstIndex)
      this.loadData()}
    else{
      console.log("feil")}
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
        rows.push([actor.rating, actor.firstName +' '+ actor.lastName])
      })
      //this.setState({tableData: rows}
      return (
        <View>
        <FlatList
        style={styles.container}
        data={this.state.display}
        renderItem={this.renderRow}
        keyExtractor={(item, index)=>index.toString()}
        />
        <Button
        onPress={ this.buttonClickNextPage.bind(this) } 
        title="Press Me"
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
    fontSize:30,
    padding:5},
  actor: {
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    marginBottom:10
  }
});

/* <ScrollView
          pagingEnabled={true} // animates ScrollView to nearest multiple of it's own width
          showsHorizontalScrollIndicator={false}>

            {rows.map((actor) => { // for every object in the photos array...
                return ( // ... we will return a square Image with the corresponding object as the source
                  <Text style={{color:"white"}}> {actor} </Text>
                  );
              })}
          </ScrollView>



        {<View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={rows} textStyle={styles.text}/>
          </Table>
        </View>}





          buttonClickNextPage(){
    let newLastIndex=this.state.lastIndex+11
    if (newLastIndex<=this.props.actors.length){
      this.setState({lastIndex:newLastIndex})}
    else{
      let newLastIndex=this.props.actors.length
      this.setState({lastIndex:newLastIndex})
    }
    let newFirstIndex=this.state.lastIndex+1
    this.setState({firstIndex:newFirstIndex}),
    console.log(this.state.lastIndex, this.state.firstIndex)
    this.loadData()}
        )*/