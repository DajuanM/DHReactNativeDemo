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

let FlexDiceTest = require("./Component/01_flex/01_flex_test")
let FetchNetData = require("./Component/02_fetch/01_fetchData")
let TabBarTest = require('./Component/04_tab/TabbarTest')
let NavigatorTest = require('./Component/03_navigator/NavigatorTest')
let TabberTest = require('./Component/04_tab/TaberTest')
let ListViewDemo = require('./Component/05_scrollView/ListViewDemo')
//九宫格图片显示
let AImageDemo = require('./Component/06_AImageDemo/AImageDemo')
//TextInput
let TextInputDemo = require('./Component/07_TextInputDemo/TextInputDemo')
//QQ登录界面
let QQLoginView = require('./Component/08_QQLoginDemo/QQLoginView')

export default class HelloWorld extends Component {
  render() {
    return (
        <QQLoginView/>
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
