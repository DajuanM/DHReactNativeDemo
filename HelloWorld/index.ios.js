/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

var FlexDiceTest = require("./Component/01_flex/01_flex_test")
var FetchNetData = require("./Component/02_fetch/01_fetchData")
var TabBarTest = require('./Component/04_tab/TabbarTest')
var NavigatorTest = require('./Component/03_navigator/NavigatorTest')

export default class HelloWorld extends Component {
  render() {
    return (
        <TabBarTest/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
