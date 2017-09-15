import React, {Component} from 'react'
import {
    StyleSheet,
    TabBarIOS,
    View,
    Text
} from 'react-native'

var HomePage = require('.././03_navigator/HomePage')
/**
 * Created by marno on 2017/1/16
 * Desc:
 */

export default class TaberTest extends Component {
    render() {

        return (
            <TabBar
                style={TaberTestStyle.taber_container}
                navFontSize={0}
                onItemSelected={(index)=>console.log(index)}>
                <TabBar.Item
                    icon = {require('../.././imgs/ic_news.png')}
                    selectedIcon = {require('../.././imgs/ic_news_selected.png')}
                >
                    <HomePage/>
                </TabBar.Item>

                <TabBar.Item
                    icon = {require('../.././imgs/ic_news.png')}
                    selectedIcon = {require('../.././imgs/ic_news_selected.png')}
                >
                    <HomePage/>
                </TabBar.Item>

                <TabBar.Item
                    icon = {require('../.././imgs/ic_news.png')}
                    selectedIcon = {require('../.././imgs/ic_news_selected.png')}
                >
                    <HomePage/>
                </TabBar.Item>

                <TabBar.Item
                    icon = {require('../.././imgs/ic_news.png')}
                    selectedIcon = {require('../.././imgs/ic_news_selected.png')}
                >
                    <HomePage/>
                </TabBar.Item>
            </TabBar>
        )
    }
}

const TaberTestStyle = StyleSheet.create({
    taber_container: {
        flex: 1,
        backgroundColor: "#333333",

    },

    tab_item: {},
})

module.exports = TaberTest