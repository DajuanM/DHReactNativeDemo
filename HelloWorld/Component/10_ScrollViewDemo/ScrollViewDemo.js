/**
 * Created by swartz006 on 2017/9/16.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native'

class ScrollViewDemo extends Component {
    render() {
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
            >
                {this.renderChildView()}
            </ScrollView>
        )
    }

    renderChildView() {
        var children = []
        let colors = ['red', 'blue', 'purple', 'yellow', 'green']
        for (var i = 0; i < colors.length; i++) {
            children.push(
                <View style={{backgroundColor: colors[i], width: 375, height: 120}}>
                    <Text>{i}</Text>
                </View>
            )
        }
        return children
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd'
    }
})

module.exports = ScrollViewDemo