import React, {Component} from 'react';  
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  FlatList
} from 'react-native';

class FavoritesPage extends Component{
    constructor(props){
        super(props);
        

    }
    _storeData = async () => {
        try {
          await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
        } catch (error) {
          // Error saving data
        }
      };
    
    _retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem('TASKS');
        if (value !== null) {
        // We have data!!
        console.log(value);
        }
    } catch (error) {
        // Error retrieving data
    }
    };

    /*fillList = () => {

    }*/
        
   
    Item({ title }) {
        return (
          <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
          </View>
        );
      }
    render(){
        
        return (
            <View>
                <Text style={styles.newPersonHeadline}>MY FAVORITES</Text>
                <View style={styles.favContainer}>
               
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    newPersonHeadline:{
        fontSize: 25,
        lineHeight: 40,
        fontWeight: '700',
        letterSpacing: 2,
        color: 'white',
        textAlign: 'center'
    },
    favContainer: {
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
    container: {
    flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
}); 


export default FavoritesPage;


/*
<Text style={styles.textHeader}>NAME</Text>
                    <TextInput style={styles.textInput}
                        title= {'Name '} 
                        name= {'name'}
                        value={this.state.newPerson.firstName} 
                        placeholder = {'John'}
                        onChange = {this.handleFirstName}/> 
                    
                    <Text style={styles.textHeader}>RATING</Text>
                    <TextInput style={styles.textInput}
                        name = {'rating'}
                        title= {'Rating '} 
                        maxLength = {3}
                        value = {this.state.newPerson.rating} 
                        placeholder = {'1-100'}
                        onChange = {this.handleRating}/>
                    <Button 
                        style={styles.button}
                        title={'SUBMIT'}
                        onPress={this._storeData}
                    />*/