/**
 * Created by swartz006 on 2017/9/20.
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

let Data = require('./data2.json')

class ListViewDemo2 extends Component {

    constructor(props) {
        super(props)
        let getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID]
        }

        let getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID]
        }
        let ds = new ListView.DataSource({
            getSectionHeaderData: getSectionData,
            getRowData: getRowData,
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        })

        this.state = {
            dataSource: ds
        }

        this.loadDataFromJson()
    }

    loadDataFromJson() {
        let jsonData = Data.data
        let dataBlob = {}
        let sectionIDs = []
        let rowIDs = []
        let cars = []
        for (let i = 0; i < jsonData.length; i++) {
            sectionIDs.push(i)
            dataBlob[i] = jsonData[i].title
            cars = jsonData[i].cars
            rowIDs[i] = []
            for (let j = 0; j < cars.length; j++) {
                rowIDs[i].push(j)
                dataBlob[i + ':' + j] = cars[j]
            }
        }
        //跟新状态
        this.setState = {
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        }
    }

    render() {
        return (
            <View style={styles.outerViewStyle}>
                <View style={styles.headerViewStyle}>
                    <Text>SeeMyGo品牌</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSectionHeader={this.renderSectionHeader}
                />
            </View>
        )
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity>
                <View style={styles.rowStyle}>
                    <Image source={{uri: rowData.icon}} style={styles.imgStyle}/>
                    <Text>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    renderSectionHeader(sectionData, sectionID) {
        return (
            <View>
                <Text>{sectionData}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    outerViewStyle: {
        flex: 1
    },
    headerViewStyle: {

    },
    rowStyle: {

    },

    imgStyle: {
        width: 70,
        height: 70
    },

})

module.exports = ListViewDemo2