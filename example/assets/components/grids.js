import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Grids extends Component {
  render() {
    return (
    
      
      <View  >
        <TouchableOpacity  onPress={this.props.returnSelectedIcon} style={{flex:0,width: 90, height: 90, backgroundColor: '#DFF0F0' ,borderColor: "#4CCFCB", borderRadius:5,justifyContent:'center',alignItems:'center',
  borderWidth: 1}} >{this.props.icon}</TouchableOpacity >
         


      </View>
    );
  }
};


  