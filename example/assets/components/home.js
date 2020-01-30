import React, { Component } from 'react'
import { View, Image, Text, TouchableHighlight } from 'react-native'
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


            let winner = true;
            let prueba = grids[j][0];
            let prueba2 = grids[0][j];
            //  console.log("prueba de variable prueba " + prueba);

            for (let i = 0; i < grids[j].length; i++) {
                // console.log("Segundo conjunto de arrays :( " + grids[i]);

                if (prueba !== grids[j][i] || grids[j][i] === 0) {
                    console.log("nadaaa");
                    winner = false;
                }
            }
            if (winner) {
                alert("Ganaste");
                break;
            }

            for (let i = 0; i < grids[j].length; i++) {
                // console.log("Segundo conjunto de arrays :( " + grids[i]);

                if (prueba2 !== grids[i][j] || grids[i][j] === 0) {
                    console.log("nadaaa");
                    winner = false;
                }
            }
            if (winner) {
                alert("Ganaste");
                break;
            }
        }

        

    }
    // for(let i = 0; i < grids[row].length; i++) {
    //     for(let j= 0 ;j < grids[i][0]; j++){
    //         console.log([row])
    //     }
    // }



    // let winner =this.playerWinner()
    // if(winner == 1){
    //     alert("Ganador jugador : " + this.state.currentPlayer);
    //     this.setState({
    //         gameState:[
    //             [0,0,0],
    //             [0,0,0],
    //             [0,0,0]
    //         ],
    //     })
    // }
    //     else if(winner == -1){
    //       alert("Ganador jugador :" + this.state.currentPlayer)
    //       this.setState({
    //         gameState:[
    //             [0,0,0],
    //             [0,0,0],
    //             [0,0,0]
    //         ],
    //     })
    //     }

//  playerWinner=()=>{

//      const num = 3
//      const grids =[...this.state.gameState]

//      let sum 

//      for(let i = 0  ; i < num ;i++  ){
//          sum = grids[i][0] + grids[i][1] +grids[i][2]
//          if(sum == 3){
//              return 1

//          }  

//          else if (sum == -3){
//              return -1
//          }

//         }
//        for(let j = 0 ; j <num ; j++){
//         sum =grids[0][j] + grids[1][j] +grids[2][j]
//         if(sum == 3){
//             return 1 
//         }

//         else if (sum == -3 ){
//             return -1
//         }

//        }

//        sum =grids[0][0] + grids[1][1] + grids[2][2]
//        if(sum == 3){
//            return 1
//        }
//        else if (sum == -3){
//            return -1
//        }

//        sum = grids[0][2] + grids[1][1] + grids[2][0]
//        if(sum == 3 ){
//            return 1
//        }

//        else if(sum == -3){
//            return -1
//        }

//    sum = grids[0][0] + grids[0][1] + grids[0][2] + grids[1][0] + grids[1][1] + grids[1][2] + grids[2][0] + grids[2][1] + grids[2][2] 
//    if (sum == 0){
//        return 2
//    }


// return 0






//  for(let j = 0  ; j < num ;j++  ){
//     sum = grids[0][j] + grids[1][j] +grids[2][j]
//     if(sum == 3){
//         return 1
//     }  

//     else if (sum == 6){
//         return 2
//     }

// }
//  }

returnSelectedIcon(row, col) {

    let x = [...this.state.gameState]
    let prueba = x[row][col]

    if (prueba == 1) {
        return <Image source={require('./images/clear.png')} style={{ flex: 0, width: 50, height: 50, alignSelf: 'center', justifyContent: 'center' }} />
    }

    else if (prueba == -1) {
        return <Image source={require('./images/circle.png')} style={{ flex: 0, width: 50, height: 50, alignSelf: 'center', justifyContent: 'center' }} />
    }


}

playerChange = () => {
    if (this.state.currentPlayer == 1) {
        return <Image source={require('./images/clear.png')} style={{ flex: 0, width: 10, height: 10, alignSelf: 'center', justifyContent: 'center' }} />
    }
    else return <Image source={require('./images/circle.png')} style={{ flex: 0, width: 10, height: 10, alignSelf: 'center', justifyContent: 'center' }} />
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


render(){
    return <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>

        <Text style={{ flex: 0, margin: 30 }}> Turno  {this.playerChange()} </Text>

        <TouchableHighlight onPress={() => this.returnGame()}><Image source={require('./images/return.png')} style={{ flex: 0, width: 20, height: 20 }} /></TouchableHighlight>

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