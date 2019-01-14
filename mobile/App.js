import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import MyBottomNavigation from './components/MyBottomNavigation';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyBottomNavigation style={styles.bottomNav}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bottomNav: {
    position: 'absolute',
    bottom:0
  }
});
// skip this line if using Create React Native App
AppRegistry.registerComponent('App', () => App);
