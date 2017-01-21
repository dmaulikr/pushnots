/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

export default class pushnots extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#902"
          barStyle="light-content" />
        <Text style={styles.welcome}>
          Hello Mr. Lamba!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c03',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFF',
  },
});

AppRegistry.registerComponent('pushnots', () => pushnots);
