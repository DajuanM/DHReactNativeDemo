/**
 * Created by swartz006 on 2017/9/16.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    AlertIOS,
    TouchableOpacity
} from 'react-native'

//ES5 创建类
var TouchableDemo = React.createClass({
    //不可改变的值
    getDefaultProps() {
        return {
            age: 18
        }
    },
    //可以改变的值
    getInitialState() {
        return {
            title: '测试文字'
        }
    }, //ES5 函数之间需要分要分割
    render() {
        return (
            <View ref="topView" style={styles.container}>
                {/*activeOpacity：设置点击状态的透明度*/}
                <TouchableOpacity
                    activeOpacity={0.2}
                    onPress={() => this.renderPress('点击')}
                    onPressIn={() => this.renderPress('点中状态')}
                    onPressOut={() => this.renderPress('取消点击')}
                    onLongPress={() => {this.setState({
                        title: '长按'
                    })}}
                >
                    <View>
                        <Text>我是文字但可点击</Text>
                    </View>
                </TouchableOpacity>
                <Text>{this.state.title}</Text>
                <Text>{this.props.age}</Text>
            </View>
        )
    },
    //点击触发事件
    renderPress(event) {
        this.setState({
            title: event
        })
        // this.refs.topView.style = {backgroundColor: 'red'}
    }
})

//ES6 创建类
// class TouchableDemo extends Component {
//     render() {
//         return (
//             <View style={styles.container} onPress={this.renderPress()}>
//                 {/*activeOpacity：设置点击状态的透明度*/}
//                 <TouchableOpacity activeOpacity={0.2}>
//                     <View>
//                         <Text>我是文字但可点击</Text>
//                     </View>
//                 </TouchableOpacity>
//
//             </View>
//         )
//     }
//     //点击触发事件
//     renderPress() {
//         AlertIOS.alert('点击响应事件')
//     }
// }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

module.exports = TouchableDemo