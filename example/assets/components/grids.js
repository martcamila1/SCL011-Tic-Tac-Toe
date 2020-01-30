import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Grids extends Component {
  render() {
    return (
    
      
      <View  >
        <TouchableOpacity  onPress={this.props.returnSelectedIcon} style={{width: 90, height: 90, backgroundColor: '#66E11A' ,borderColor: "#F7FA23",
  borderWidth: 1}} >{this.props.icon}</TouchableOpacity >
         


      </View>
    );
  }
};


  