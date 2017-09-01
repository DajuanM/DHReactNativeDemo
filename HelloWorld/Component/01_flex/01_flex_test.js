/**
 * Created by swartz006 on 2017/8/23.
 */
import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";

/**
 * Created by marno on 2017/1/13.
 * Desc:模拟骰子进行布局，算是Flex布局各类属性的实战
 */
export default class FlexDiceTest extends Component {
    render() {
        return (
            <View style={FlexDiceTestStyle.container}>
                <Text style={FlexDiceTestStyle.item}>1</Text>
                <Text style={FlexDiceTestStyle.item}>2</Text>
                <Text style={FlexDiceTestStyle.item}>3</Text>
                <Text style={FlexDiceTestStyle.item}>4</Text>
                <Text style={FlexDiceTestStyle.item}>5</Text>
                <Text style={FlexDiceTestStyle.item}>6</Text>
                <Text style={FlexDiceTestStyle.item}>7</Text>
                <Text style={FlexDiceTestStyle.item}>8</Text>
                <Text style={FlexDiceTestStyle.item}>9</Text>
            </View>
        )
    }
}

const FlexDiceTestStyle = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        height: 300,
        justifyContent: "space-between",
        flexWrap: "wrap",
        flexDirection: "row",
    },
    item: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    }
})

module.exports = FlexDiceTest;