import React, { Component } from 'react';
import { AppRegistry, View, Text, Button } from "react-native";
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

export default class TrendScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>TrendScreen</Text>
        <Button
          title="Go to FeelingScreen"
          onPress={() => this.props.navigation.navigate('FeelingScreen')}
        />
      </View>
    );
  }
}
