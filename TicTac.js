import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import LottieView from 'lottie-react-native';

const TicTac = () => {
  const [boxes, setBoxes] = useState(["", "", "", "", "", "", "", "", ""]);
  const [lastClick, setLastClick] = useState("");
  const [winner, setWinner] = useState("");

  const checkWinner = (boxes) => {
    console.log("boxes:", boxes);
    // 1. Хэвтээ шалгалт
    if (boxes[0] !== "" && boxes[0] === boxes[1] && boxes[0] === boxes[2]) {
      setWinner(boxes[0]);
    } else if (
      boxes[3] !== "" &&
      boxes[3] === boxes[4] &&
      boxes[3] === boxes[5]
    ) {
      setWinner(boxes[3]);
    } else if (
      boxes[6] !== "" &&
      boxes[6] === boxes[7] &&
      boxes[6] === boxes[8]
    ) {
      setWinner(boxes[6]);
    }
    // 2. Босоо шалгалт
    if (boxes[0] !== "" && boxes[0] === boxes[3] && boxes[0] === boxes[6]) {
      setWinner(boxes[0]);
    } else if (
      boxes[1] !== "" &&
      boxes[1] === boxes[4] &&
      boxes[1] === boxes[7]
    ) {
      setWinner(boxes[1]);
    } else if (boxes[2] === boxes[5] && boxes[2] === boxes[8]) {
      setWinner(boxes[2]);
    }
    // 3. Ташуу шалгалт
    if (boxes[0] !== "" && boxes[0] === boxes[4] && boxes[0] === boxes[8]) {
      setWinner(boxes[0]);
    } else if (
      boxes[2] !== "" &&
      boxes[2] === boxes[4] &&
      boxes[2] === boxes[6]
    ) {
      setWinner(boxes[2]);
    }
  };

  const handleClick = (i) => {
    if (boxes[i] === "" && !winner) {
      let value = lastClick === "X" ? "O" : "X";
      boxes[i] = value;
      setBoxes([...boxes]);
      setLastClick(value);
      checkWinner(boxes);
    }
  };

  // const WinnerPattern = [
  //     [0,1,2],
  //     [3,4,5],
  //     [6,7,8],
  //     [0,3,7],
  //     [1,4,7],
  //     [2,5,8],
  //     [0,4,8],
  //     [2,4,6],
  // ]

  // for (let i = 0; i < WinnerPattern.length; i++) {

  //     const [a,b,c] = WinnerPattern[i]
  //     console.log([a,b,c]);

  //     if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
  //         return setGameWinner(boxes[a])
  // }
  // }

  const Restart = () => {
    setBoxes(["", "", "", "", "", "", "", "", ""]);
    setWinner("")
  };

  return (
    <View style={styles.container}>
      <View style={styles.square}>
        {boxes.map((box, i) => (
          <TouchableOpacity key={i} style={styles.box} onPress={() => handleClick(i)}>
           <Text style={styles.boxtext}>{box}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        <Text style={styles.winner}>Winner:{winner}</Text>
      </View>
      <TouchableOpacity onPress={Restart}>
        <Text style={styles.restart}>Restart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TicTac;

const styles = StyleSheet.create({

  container: {
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
  }, 

  square: {
    width: 400,
    height: 400,
    backgroundColor: "gray",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    flexWrap: "wrap",
    // padding: 5,
  },

  box: {
    width: "30%",
    height: "30%",
    backgroundColor: "yellow",
    borderRadius: 20,
    fontSize: 500,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    marginLeft: 14,
  },

  restart: {
    color: 'orange',
    fontSize: 50.
  },

  boxtext: {
    fontSize: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },

  winner: {
    fontSize: 30,
  }
  
});
