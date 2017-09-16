/**
 * Created by swartz006 on 2017/9/16.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image
} from 'react-native'

let imgData = require('./imgData.json')
var timerMixin = require('react-timer-mixin')
let Dimensions = require('Dimensions')
let {width, height} = Dimensions.get('window')

class DHBannerView extends Component {
    constructor(props) {
        super(props)
        //注册定时器
        mixins: [timerMixin]
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.scrollViewStyle}
                    horizontal={true}
                    pagingEnabled={true}
                >
                    {this.renderAllImages()}
                </ScrollView>
            </View>
        )
    }

    renderAllImages() {
        var imgs = []
        for (let i = 0; i < imgData.data.length; i++) {
            let imgItem = imgData.data[i]
            imgs.push(
                <Image
                    key={i}
                    source={{uri: imgItem.img}}
                    style={{width: width, height: 120}}
                >
                </Image>
            )
        }
        return imgs
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd'
    },
    scrollViewStyle: {

    }
})

module.exports = DHBannerView