/**
 * Created by aiden on 2017/9/18.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    ListView,
    Image,
    Text,
    TouchableOpacity,
    AlertIOS
} from 'react-native'

let data = require('./data.json')
let Dimensions = require('Dimensions')
let {width, height} = Dimensions.get('window')

class ListViewDemo extends Component {
    // 构造
    constructor(props) {
        super(props)
        let ds =  new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows(data)
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            >
            </ListView>
        )
    }

    renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {AlertIOS.alert('点击了第' + rowID + '行')}}
        >
            <View style={styles.cellViewStyle}>
                <Image
                    style={styles.imgStyle}
                    source={{uri: rowData.img}}
                />
                <View style={styles.rightViewStyle}>
                    <Text style={styles.titleStyle}>{rowData.title}</Text>
                    <Text style={styles.contentStyle}>{rowData.content}</Text>
                </View>
            </View>
        </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    cellViewStyle: {
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderBottomColor: 'gray',
        padding: 10
    },
    imgStyle: {
        width: 60,
        height: 60
    },
    rightViewStyle: {

    },
    titleStyle: {
        marginLeft: 10,
        justifyContent: 'center',
        width: width * 0.7,
        fontSize: 15
    },
    contentStyle: {
        color: 'red',
        marginLeft: 10,
        marginTop: 10
    }
})

module.exports = ListViewDemo