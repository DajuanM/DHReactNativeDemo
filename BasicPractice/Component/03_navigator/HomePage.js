/**
 * Created by swartz006 on 2017/8/24.
 */
import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
    Button
} from 'react-native'

class HomePage extends Component {
    constructor (props) {
        super(props)
        this.pushToNext = this.pushToNext.bind(this)
    }

    pushToNext () {
        this.props.navigator.push({
            component: HomePage,
            title: 'asd',
            name: '123'
        })
    }

    render () {
        return (
            <View style={styles.container}>
                <Text style={{marginTop: 64}}>this is my scene</Text>
                <TouchableHighlight onPress={this.pushToNext}>
                    <Text>tap me to jump to next scene</Text>
                </TouchableHighlight>
                <Text>{this.props.name}</Text>
                <Button title="返回" onPress={this.props.navigator.pop}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
})

module.exports = HomePage