import React, {Component} from 'react';  
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class FavoritesPage extends Component{

    render(){
        return (
            <View>
                <Text style={styles.newPersonHeadline}>MY FAVORITES</Text>
                <View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    newPersonHeadline:
    {
      //fontFamily: 'Georgia',
      fontSize: 25,
      lineHeight: 40,
      fontWeight: '700',
      letterSpacing: 2,
      color: 'white',
      textAlign: 'center'
    }
}); 


export default FavoritesPage;