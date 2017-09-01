/**
 * Created by swartz006 on 2017/8/24.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    NavigatorIOS
} from 'react-native'

var HomePage = require('./HomePage')

class NavigatorTest extends Component {
    render () {
        return (
           <NavigatorIOS
               initialRoute={{
                   component: HomePage,
                   title: '首页'
               }}
               style={{flex: 1}}
           />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

module.exports = NavigatorTest