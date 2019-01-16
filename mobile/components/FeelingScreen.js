import React, { Component } from 'react';
import { View, Text } from "react-native";
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
      <View style={styles.container}>
        <View style={styles.circle_container}>
          <Button
            title="Tr"
            titleStyle={{ fontSize: 4 }}
            buttonStyle={Object.assign({}, styles.button, posi[0], { backgroundColor: "#123456" })}
          />
          <Button
            title="St"
            titleStyle={{ fontSize: 4 }}
            buttonStyle={Object.assign({}, styles.button, posi[1], { backgroundColor: "#123456" })}
          />
          <Button
            title="Co"
            titleStyle={{ fontSize: 4 }}
            buttonStyle={Object.assign({}, styles.button, posi[2], { backgroundColor: "#123456" })}
          />
          <Button
            title="An"
            titleStyle={{ fontSize: 4 }}
            buttonStyle={Object.assign({}, styles.button, posi[3], { backgroundColor: "#123456" })}
          />
          <Button
            title="Di"
            titleStyle={{ fontSize: 4 }}
            buttonStyle={Object.assign({}, styles.button, posi[4], { backgroundColor: "#123456" })}
          />
          <Button
            title="Sad"
            titleStyle={{ fontSize: 4 }}
            buttonStyle={Object.assign({}, styles.button, posi[5], { backgroundColor: "#123456" })}
          />
          <Button
            title="Wa"
            titleStyle={{ fontSize: 4 }}
            buttonStyle={Object.assign({}, styles.button, posi[6], { backgroundColor: "#123456" })}
          />
          <Button
            title="Wa"
            titleStyle={{ fontSize: 4 }}
            buttonStyle={Object.assign({}, styles.button, posi[7], { backgroundColor: "#123456" })}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle_container: {
    width: 200,
    height: 200,
    position: 'relative'
  },
  button: {
    width: 50,
    height: 50,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 50,
    position: 'absolute'
  }
}

const btnCnt = 8,
      r = 100;
let deg,rad;
let posi = [];
for (let i = 0; i < btnCnt; i++) {
  deg = 360 / btnCnt * i;
  rad = deg * Math.PI / 180;
  top = Math.sin(rad) * r + r - 25;  
  left = Math.cos(rad) * r + r - 40;
  posi.push({
    top: top,
    left: left
  });
}


