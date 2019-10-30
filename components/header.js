import React, {Component} from 'react';

import brad from '../assets/images/brad.png'
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';

class Header extends Component{
    
    render(){
        return (
        <View style={styles.Header}>
            <Image source={brad} style={styles.AppLogo} />
            <Text style={styles.firstHeader}>THE BAROMETER</Text>
            <Image source={brad} style={styles.AppLogo}  />
        </View>
        );
    };
};

const styles = StyleSheet.create({
    Header:{
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'row',
    //backgroundImage: 'linear-gradient(black, #282c34)',
    paddingTop: '2%',
    color: 'white',
    //width: 100,
    justifyContent: 'center',
    //minWidth: '775px'
  },
  firstHeader:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //fontFamily: 'Georgia',
    //letterSpacing: '6px',
    marginLeft: '4%',
    marginRight: '4%',
    color:'white',

    //verticalAlign: 'middle'
  },
  AppLogo :{
    height: 80,
    width:100,
    resizeMode: 'contain',
    marginTop:3,
    //display: 'block'
  }

})

export default Header;