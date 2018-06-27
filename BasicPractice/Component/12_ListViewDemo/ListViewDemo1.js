/**
 * Created by swartz006 on 2017/9/19.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    ListView,
    Image,
    Text,
    TouchableOpacity,//不透明度触摸
    AlertIOS
} from 'react-native'

let data = require('./data1.json')
let Dimensions = require('Dimensions')
let screenWidth = Dimensions.get('window').width
let cols = 3
let cellWH = 100
let hMargin = (screenWidth - cellWH * cols) / (cols + 1)
let vMargin = 25

class ListViewDemo1 extends Component {
    constructor(props) {
        super(props)
        let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2})
        this.state = {
            dataSource: ds.cloneWithRows(data)
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.listViewStyle}
            />
        )
    }

    renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.cellViewStyle}>
                    <Image source={{uri: rowData.icon}} style={styles.iconStyle}/>
                    <Text>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: 80,
        height: 80,
        backgroundColor: 'red'
    },
    listViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    cellViewStyle: {
        width: cellWH,
        height: cellWH,
        marginTop: vMargin,
        marginLeft: hMargin,
        alignItems: 'center'
    }
})

module.exports = ListViewDemo1