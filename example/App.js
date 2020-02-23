import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './assets/components/home';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTest}>Penguin VS Dolphin </Text>
      

      <Home></Home>
     


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: '#4CCFCB',
   
  },
  textTest:{
    flex:0,
    marginTop:40,
    marginLeft:5,
    fontSize:40,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    color:'#1D6C05',
    fontWeight:'700'   
  }
});
