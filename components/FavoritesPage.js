import React, {Component} from 'react';  
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';

const STORAGE_KEY = '@save_name'

// Functionality for adding a favorite to AsyncStorage
class FavoritesPage extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            text: '',
            name: ''
          }
    }
    
    componentDidMount() {
        this.retrieveData()
    }
    
    //fetch from AsyncStorage
    retrieveData = async () => {
        try {
          const name = await AsyncStorage.getItem(STORAGE_KEY)
    
          if (name !== null) {
            this.setState({ name })
          }
        } catch (e) {
          alert('Failed to load name.')
        }
    }
    
    // save to AsyncStorage
    save = async name => {
        try {
          await AsyncStorage.setItem(STORAGE_KEY, name)
          alert('Data successfully saved!')
          this.setState({ name })
        } catch (e) {
          alert('Failed to save name.')
        }
      }

    // remove from AsyncStorage
    removeEverything = async () => {
        try {
          await AsyncStorage.clear()
          alert('Storage successfully cleared!')
          this.setState({ name: '' })
        } catch (e) {
          alert('Failed to clear the async storage.')
        }
    }
    
    onChangeText = text => this.setState({ text })

    onSubmitEditing = () => {
          const onSave = this.save
          const { text } = this.state
      
          if (!text) return
      
          onSave(text)
          this.setState({ text: '' })
    }

    
     render() {
        const { text, name } = this.state
        return (
            <View>
                <Text style={styles.newPersonHeadline}>MY FAVORITE</Text>
                <View style={styles.favContainer}>
                    
                    <TextInput
                        style={styles.input}
                        value={text}
                        placeholder='Type the name of your favorite, hit enter, and refresh'
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitEditing}
                    />
                    <Text style={styles.text}>Current favorite: {name}</Text>
                    <TouchableOpacity onPress={this.removeEverything} style={styles.button}>
                        <Text style={styles.buttonText}>Clear Storage</Text>
                    </TouchableOpacity>
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
    text: {
        fontSize: 20,
        padding: 10,
        backgroundColor: 'white'
    },
    input: {
        padding: 15,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        margin: 10
    },
    button: {
        margin: 10,
        padding: 10,
        backgroundColor: '#FF851B'
    },
    buttonText: {
        fontSize: 14,
        color: '#fff'
    }
}); 


export default FavoritesPage;