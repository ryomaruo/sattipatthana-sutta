import React, { Component } from 'react';
import { ImageBackground, View, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import {
  Container,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Item,
  Label
} from "native-base";

export default class FeelingScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require('../assets/nazuna.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.circle_container}>
            <Button
              title="Relux"
              titleStyle={{ fontSize: 4 }}
              buttonStyle={Object.assign({}, styles.button, posi[0], { backgroundColor: "green" })}
            />
            <Button
              title="Cool"
              titleStyle={{ fontSize: 4 }}
              buttonStyle={Object.assign({}, styles.button, posi[1], { backgroundColor: "skyblue" })}
            />
            <Button
              title="Sad"
              titleStyle={{ fontSize: 4 }}
              buttonStyle={Object.assign({}, styles.button, posi[2], { backgroundColor: "blue" })}
            />
            <Button
              title="Bored"
              titleStyle={{ fontSize: 4 }}
              buttonStyle={Object.assign({}, styles.button, posi[3], { backgroundColor: "purple" })}
            />
            <Button
              title="Angry"
              titleStyle={{ fontSize: 4 }}
              buttonStyle={Object.assign({}, styles.button, posi[4], { backgroundColor: "#f66" })}
            />
            <Button
              title="Want"
              titleStyle={{ fontSize: 4 }}
              buttonStyle={Object.assign({}, styles.button, posi[5], { backgroundColor: "orange" })}
            />
            <Button
              title="Happy"
              titleStyle={{ fontSize: 4 }}
              buttonStyle={Object.assign({}, styles.button, posi[6], { backgroundColor: "yellow" })}
            />
            <Button
              title="Trust"
              titleStyle={{ fontSize: 4 }}
              buttonStyle={Object.assign({}, styles.button, posi[7], { backgroundColor: "lightgreen" })}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black', 
    opacity: 0.6, 
  },
  circle_container: {
    width: 200,
    height: 200,
    position: 'relative'
  },
  button: {
    width: 80,
    height: 40,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 40
  }
}

const btnCnt = 8,
      r = 100;
let deg,rad,rotate;
let posi = [];
for (let i = 0; i < btnCnt; i++) {
  deg = 360 / btnCnt * i;
  rad = deg * Math.PI / 180;
  top = Math.sin(rad) * r + r - 20;  
  left = Math.cos(rad) * r + r - 55;
  rotate = i*45 + 'deg';
  posi.push({
    top: top,
    left: left,
    position: 'absolute',
    transform: [
      { rotate: rotate }
    ]
  });
}


