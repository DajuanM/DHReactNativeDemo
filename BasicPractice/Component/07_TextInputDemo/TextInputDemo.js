/**
 * Created by swartz006 on 2017/9/15.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput
} from 'react-native'

export default class TextInputDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputStyle}
                    // value={"我是默认文字"}
                    //键盘类型
                    // keyboardType={'number-pad'}
                    //多行显示
                    // multiline={true}
                    // password={true}
                    placeholder={"我是占位文字"}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputStyle: {
        width: 300,
        height: 60,
        borderWidth: 1,
        borderColor: '#e8e8e8'
    }
})

module.exports = TextInputDemo