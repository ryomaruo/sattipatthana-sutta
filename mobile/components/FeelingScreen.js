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

export default class FeelingScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ホーム</Text>
        <Button
          title="詳細ページへ"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
      </View>
    );
  }
}
