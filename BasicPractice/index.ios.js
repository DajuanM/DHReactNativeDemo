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
let MyListViewDemo = require('./Component/05_scrollView/ListViewDemo')
//九宫格图片显示
let AImageDemo = require('./Component/06_AImageDemo/AImageDemo')
//TextInput
let TextInputDemo = require('./Component/07_TextInputDemo/TextInputDemo')
//QQ登录界面
let QQLoginView = require('./Component/08_QQLoginDemo/QQLoginView')
//不透明点击
let TouchableDemo = require('./Component/09_TouchableDemo/TouchableDemo')
//滚动视图demo
let ScrollViewDemo = require('./Component/10_ScrollViewDemo/ScrollViewDemo')
//轮播视图
let DHBannerView = require('./Component/11_DHBannerView/DHBannerView')
//列表
let ListViewDemo = require('./Component/12_ListViewDemo/ListViewDemo')
//九宫格
let ListViewDemo1 = require('./Component/12_ListViewDemo/ListViewDemo1')
//分组列表
let ListViewDemo2 = require('./Component/12_ListViewDemo/ListViewDemo2')

export default class HelloWorld extends Component {
  render() {
    return (
        <ListViewDemo2/>
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
