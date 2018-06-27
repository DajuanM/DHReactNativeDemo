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

let Dimensions = require('Dimensions')
let {width, height} = Dimensions.get('window')

class QQLoginView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image source={require('./img/icon.png')} style={styles.iconStyle}/>
                {/*账号密码*/}
                <TextInput style={styles.textInputStyle} placeholder={'请输入用户名'}/>
                <TextInput style={styles.textInputStyle} placeholder={'请输入密码'} secureTextEntry={true}/>
                {/*登录*/}
                <View style={styles.loginBtnStyle}>
                    <Text style={{color: 'white'}}>登录</Text>
                </View>
                {/*设置*/}
                <View style={styles.settingStyle}>
                    <Text>无法登陆</Text>
                    <Text>新用户</Text>
                </View>
                {/*其他登录方式*/}
                <View style={styles.otherLoginStyle}>
                    <Text>其他登录方式</Text>
                    <Image source={require('./img/icon3.png')} style={styles.otherImgStyle}/>
                    <Image source={require('./img/icon7.png')} style={styles.otherImgStyle}/>
                    <Image source={require('./img/icon8.png')} style={styles.otherImgStyle}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
        alignItems: 'center'

    },
    iconStyle: {
        marginTop: 50,
        marginBottom: 30,
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white'
    },
    textInputStyle: {
        marginBottom: 1,
        width: width,
        height: 38,
        backgroundColor: 'white',
        textAlign: 'center'
    },
    loginBtnStyle: {
        marginTop: 30,
        marginBottom: 30,
        height: 35,
        width: width-30,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    settingStyle: {
        flexDirection: 'row',
        //设置对其方式 要设置宽度
        justifyContent: 'space-between',
        width: width-30
    },
    otherLoginStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        left: 20
    },
    otherImgStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 8
    }
})

module.exports = QQLoginView