
import React from 'react';
import Header from '../components/header'
import Table from '../components/table'
import Initializer from '../components/initializer'
import Search from '../components/search'
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Header/>
        <View style={styles.sContainer}>
          <View style={styles.searchBar}>
            <Text style={styles.searchHeader}>SEARCH</Text>
            <Search/>
            <Initializer/>
          </View>
        </View>
        <Table/>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  AppLogo :{
    height: 40,
    resizeMode: 'contain',
    marginTop:3,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
  },
  searchHeader:{
    fontSize: 18,
    lineHeight: 40,
    fontWeight: '700',
    letterSpacing: 2
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  header1:{
    display:'flex',
    flexDirection:'row',
    backgroundColor: '#282c34',
    justifyContent: 'center'
  },
  searchBar: {
    flex: 1,
    display:'flex',
    flexDirection:'column',
    width:'90%',
    borderRadius: 10,
    borderBottomColor: '#282c34',
    borderBottomWidth: 1,
    height:'100%',
    marginTop:'7%',
    backgroundColor: 'white', 
    alignItems:'center',
  },
  sContainer:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
});
