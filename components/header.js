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
    paddingTop: 30, 
    justifyContent: 'center',
    alignContent: 'center'
  },
  firstHeader:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '1%',
    marginRight: '1%',
    marginTop: 20,
    color:'white',
    fontSize: 22,
    lineHeight: 40,
    fontWeight: '700',
    letterSpacing: 2
  },
  AppLogo :{
    height: 80,
    width:100,
    resizeMode: 'contain',
    marginTop:3,
  }

})

export default Header;