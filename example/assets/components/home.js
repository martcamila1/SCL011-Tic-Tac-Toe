import React, { Component } from 'react'
import { View, Image, Text, TouchableHighlight, Alert } from 'react-native'
import Grids from './grids'



export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      winner: null,
      gameOver: false,
      currentPlayer: 1,
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],

    }


  }


  clickButton(row, col) {
    let grids = [...this.state.gameState]
    if (grids[row][col] != 0) return;

    grids[row][col] = this.state.currentPlayer;
    let nexPlayer = (this.state.currentPlayer == 1) ? -1 : 1

    this.setState({
      gameState: grids,
      currentPlayer: nexPlayer

    });
    // hacer un for que recorra todo
    for (let j = 0; j < grids.length; j++) {
      // console.log("Primer recorrido de arrays" + grids[j])
      //  if(grids[j] !== 0 && grids[j] == 1){
      //    return Alert.alert("Empate")
      //  }

      let winner = true;
      let winner2 = true;
      let gridsRow = grids[j][0];
      let gridCol = grids[0][j];
      //  console.log("prueba de variable prueba " + prueba);

      for (let i = 0; i < grids[j].length; i++) {
        // console.log("Segundo conjunto de arrays :( " + grids[i]);

        if (gridsRow !== grids[j][i] || grids[j][i] === 0) {
          winner = false;
        }
      }
      if (winner) {
        if (this.state.currentPlayer == 1) {
          Alert.alert("Ganador Dolphin")

        }
        else {
          Alert.alert("Ganador Penguin")
        }
        this.restart()
        break;
      }

      for (let h = 0; h < grids[j].length; h++) {
        // console.log("Segundo conjunto de arrays :( " + grids[i]);

        if (gridCol !== grids[h][j] || grids[h][j] === 0) {
          winner2 = false;
        }
      }
      if (winner2) {
        if (this.state.currentPlayer == 1) {
          Alert.alert("Ganador Dolphin")

        }
        else {
          Alert.alert("Ganador Penguin")
        }

        this.restart()
        break;
      }

      if (grids[0][0] == -1 && grids[1][1] == -1 && grids[2][2] == -1) {
        Alert.alert("Ganador Penguin")
        this.restart()
        break
      }
      if (grids[0][0] == 1 && grids[1][1] == 1 && grids[2][2] == 1) {
        Alert.alert("Ganador Dolphin")
        this.restart()
        break
      }
      if (grids[0][2] == 1 && grids[1][1] == 1 && grids[2][0] == 1) {
        Alert.alert("Ganador Dolphin")
        this.restart()
        break
      }
      if (grids[0][2] == -1 && grids[1][1] == -1 && grids[2][0] == -1) {
        Alert.alert("Ganador Penguin")
        this.restart()
        break
      }

    }



  }


  restart() {
    this.setState({
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
    })
  }

  returnSelectedIcon(row, col) {

    let x = [...this.state.gameState]
    let currentPlayeriIcon = x[row][col]

    if (currentPlayeriIcon == 1) {
      return <Image source={require('./images/dolphin.png')} style={{ flex: 0, width: 50, height: 50, alignSelf:'center', alignItems:'center'}} />
    }

    else if (currentPlayeriIcon == -1) {
      return <Image source={require('./images/penguin.png')} style={{ flex: 0, width: 50, height: 50, alignSelf: 'center', justifyContent: 'center' }} />
    }


  }

  playerChange = () => {
    if (this.state.currentPlayer == 1) {
      return <Image source={require('./images/dolphin.png')} style={{ flex: 0, width: 20, height: 20, justifyContent: 'center', alignItems: 'center' }} />
    }
    else return <Image source={require('./images/penguin.png')} style={{ flex: 0, width: 20, height: 20, alignSelf: 'center', justifyContent: 'center' }} />
  }

  returnGame = () => {
    this.setState({
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
    })
  }


  render() {
    return <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
      <View style={{ flex: 0, flexDirection: "row" }}>

        <Text style={{ flex: 0, margin: 20, fontSize: 18 }}> Turno de : {this.playerChange()} </Text>

        <TouchableHighlight onPress={() => this.returnGame()}><Image source={require('./images/return.png')} style={{ flex: 0, width: 20, height: 20, margin: 20, }} /></TouchableHighlight>

      </View>
      <View style={{ flex: 0, flexDirection: 'row', width: 270, height: 240, flexWrap: 'wrap', textAlign: 'center', alignItems: 'center' }}>

        <Grids returnSelectedIcon={() => this.clickButton(0, 0)} icon={this.returnSelectedIcon(0, 0)} />

        <Grids returnSelectedIcon={() => this.clickButton(0, 1)} icon={this.returnSelectedIcon(0, 1)} />

        <Grids returnSelectedIcon={() => this.clickButton(0, 2)} icon={this.returnSelectedIcon(0, 2)} />

        <Grids returnSelectedIcon={() => this.clickButton(1, 0)} icon={this.returnSelectedIcon(1, 0)} />

        <Grids returnSelectedIcon={() => this.clickButton(1, 1)} icon={this.returnSelectedIcon(1, 1)} />

        <Grids returnSelectedIcon={() => this.clickButton(1, 2)} icon={this.returnSelectedIcon(1, 2)} />

        <Grids returnSelectedIcon={() => this.clickButton(2, 0)} icon={this.returnSelectedIcon(2, 0)} />

        <Grids returnSelectedIcon={() => this.clickButton(2, 1)} icon={this.returnSelectedIcon(2, 1)} />

        <Grids returnSelectedIcon={() => this.clickButton(2, 2)} icon={this.returnSelectedIcon(2, 2)} />

      </View>

    </View>
  }
}

