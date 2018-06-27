/**
 * Created by swartz006 on 2017/9/15.
 */

import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'

let BagData = require('./bags.json')
let Dimensions = require('Dimensions')
let {width} = Dimensions.get('window')

//定义一个全局的常量
let cols = 3
let boxW = 100
let boxH = 100
let vMargin = (width - cols * boxW) / (cols + 1)
let hMargin = 25

export default class AImageDemo extends Component {
    // constructor (props) {
    //     super(props)
    //     this.renderAllBags = this.renderAllBags.bind(this)
    // }

    render () {
        return (
            <View style={styles.container}>
                {this.renderAllBags()}
            </View>
        )
    }

    renderAllBags () {
        var allbags = []
        for (var i=0; i < BagData.data.length; i++) {
            let bag = BagData.data[i]
            allbags.push(
                <View key={i} style={styles.bagStyle}>
                    <Image source={{url: bag.url}} style={styles.imgStyle}/>
                    <Text style={styles.textStyle}>{bag.name}</Text>
                </View>
            )
        }
        return allbags
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row',
        //换行显示
        flexWrap: 'wrap',
        // justifyContent: 'space-between'

    },
    bagStyle: {
        width: boxW,
        height: boxH,
        alignItems: 'center',
        marginLeft: vMargin,
        marginTop: hMargin,
        backgroundColor: 'red'
    },
    imgStyle: {
        width: 80,
        height: 80,
        backgroundColor: 'purple'
    },
    textStyle: {
        textAlign: 'center'
    }
})

module.exports = AImageDemo