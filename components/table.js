import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
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
      display:[],
      activeActor: {
        name: '',
        age: '',
        profession: '',
      }
    }

  }
 
  //Updating. Used to display new page of celebreties 
  loadData(){
    let rows=[]
    this.props.actors.map(actor => {
      rows.push([actor.rating, actor.firstName +' '+ actor.lastName])
    })
    let display=rows.slice(this.state.firstIndex,this.state.lastIndex)
    this.setState({rows:rows})
    this.setState({display:display})
  }

  //Handles click on button for previous page with celebrities 
  buttonClickPrevPage(){
    let newFirstIndex=this.state.firstIndex-10
    let newLastIndex=newFirstIndex+10
    if (newFirstIndex!=-10){
      this.setState({lastIndex:newLastIndex})
      this.setState({firstIndex:newFirstIndex}),
      this.loadData()
      }
    else {
      this.setState({lastIndex:10})
      this.setState({firstIndex:0}),
      this.loadData()
    }
  }

//Handles click on button for next page of celebrities
  buttonClickNextPage(){
    let newFirstIndex=this.state.lastIndex
    let newLastIndex=newFirstIndex+10
    if (newLastIndex<=(this.props.actors.length)){
      this.setState({lastIndex:newLastIndex})
      this.setState({firstIndex:newFirstIndex}),
      this.loadData()
      }
    else if(newLastIndex<(this.props.actors.length+10)){
      this.setState({lastIndex:(this.props.actors.length)})
      this.setState({firstIndex:newFirstIndex}),
      this.loadData(),
      this.setState({lastIndex:300})
    }
    else{

    } 
  }

  actionOnRow(actor){
    this.setState({
      activeActor: {
        name: actor[1] + " " + actor[2], 
        age: actor[3], 
        profession: actor[4],
      }
    })
  }

  render() {
    const state = this.state;
    //returns an empty view in case redux is not up to date yet
    if (this.props.pending===true){
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
          <View style={styles.tableTop}>
            <Text style={styles.tableTopText}>{ "RATING - NAVN" }</Text>
            </View>
        <FlatList
          style={styles.container}
          data={display}
          keyExtractor={(item, index)=>index.toString()}
          renderItem={({item}) => (
            <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
                <View style={styles.actor}>
                  <Text style={styles.actorText}>{item[0]+ " - " + item[1] + " " + item[2]}</Text>
                </View>
          </TouchableWithoutFeedback>
     )}
        />
        <View style = {styles.buttonView}>
          <Button 
          style={styles.navButtons}
          onPress={this.buttonClickPrevPage.bind(this) } 
          title="Previous page"
          />
          <Button
          style = {styles.navButtons}
          onPress={this.buttonClickNextPage.bind(this) } 
          title="Next page"
          />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.subHeadline}>More Information</Text>
            <View>
              {this.state.activeActor.name !=='' ? <Text style={styles.infoText}>{this.state.activeActor.name+ " is a/an " + this.state.activeActor.profession + " and was born in " + this.state.activeActor.age}.</Text>
              : <Text style={styles.infoText}>Click on a person to display more details.</Text>}
            </View>
        </View>
      </View>
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



export default connect(
  mapStateToProps,
)(Table1);

const styles = StyleSheet.create({
  container: {
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#282c34' 
  },
  actorText: { 
    margin: 6 , 
    color:'white',
    fontSize:18,
    padding:5
  },
  actor: {
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    marginBottom:10,
    borderBottomStartRadius:15,
    borderBottomEndRadius:15,
  },
  tableTop:{
    borderBottomColor:'#ccc',
    marginTop:50,
    borderBottomStartRadius:10,
    borderBottomEndRadius:10,
    borderBottomWidth:2,
    borderTopColor:'#ccc',
    borderTopStartRadius:10,
    borderTopEndRadius:10,
    borderTopWidth:2,
    marginBottom:5
  },
  tableTopText: { 
    margin: 6 , 
    color:'white',
    fontSize:18,
    padding:5,
    marginLeft:21
  },
  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'white',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButtons: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  expandButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    justifyContent: 'space-between',
    margin: 10
  },
  infoText: {
    justifyContent:'center',
    textAlign: 'center'
  },
  expand: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    justifyContent: 'space-between',
    marginBottom: 1
  },
  view: {
    height:50,
    padding: 20,
    justifyContent:'center',
    backgroundColor:'#ffffff',
  },
  inputContainer: 
  {
    fontSize: 15,
    lineHeight: 40,
    borderRadius: 4,
    letterSpacing: 2,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    padding: 5,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10
  },
  subHeadline:{
    fontSize: 20,
    lineHeight: 40,
    fontWeight: '700',
    letterSpacing: 2,
    color: 'black',
    textAlign: 'center'
  },
});
