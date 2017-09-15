/**
 * Created by swartz006 on 2017/9/7.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    TabBarIOS,
    View,
    Text,
    ListView,
    Dimensions,
    VedioListItem
} from 'react-native'
import VideoListItem from "./VideoListItem"

//视频地址，下一页链接会在json中一起返回
const videoUrl = 'http://baobab.wandoujia.com/api/v1/feed?num=1';

export default class ListViewDemo extends Component {

    constructor (props) {
        super(props)
        /**
         * 使用DataSource作为ListView的数据源
         * 该构造函数接收四个参数
         * getRowData(dataBlob, sectionID, rowID)
         * getSectionHeaderData(dataBlob, sectionID)
         * rowHasChanged(prevRowData, nextRowData)
         * sectionHeaderHasChanged(prevSectionData, nextSectionData)
         */
        let defaultDS = new ListView.DataSource ({
            rowHasChanged: (prevRowData, nextRowData) => prevRowData !== nextRowData
        })
        this.state = {
            dataSource: defaultDS,
            data: [],
            nextPageUrl: '',
            isRefreshing: false
        }
    }

    componentDidMount () {
        fetchVideoList()
    }

    fetchVideoList () {
        fetch(videoUrl)
            .then((response) => response.json)
            .then(
                (responseJson) => {
                    let videos = responseJson.dailyList[0].videoList
                    let nextPage = responseJson.nextPageUrl
                    this.setState({
                        data: videos,
                        nextPageUrl: nextPage,
                        isRefreshing: false,

                    })
                }
        )
            .catch((error) => {
                this.setState({
                    isRefreshing: false
                })
            })
    }

    render () {
            if (this.state.data) {
                return (
                    <ListView
                        dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
                        renderRow = {(rowData, sectionId, rowId) => this.renderRow(rowData, rowId)}
                        enableEmptySections = {true}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.isRefreshing}
                                onRefresh={()=>this._fetchVideoList()}
                            />}
                        renderScrollComponent={props=>(
                            <ParallaxScrollView
                                onScroll={onScroll}
                                parallaxHeaderHeight={210}
                                backgroundSpeed={0}
                                fadeOutForeground={faslse}
                                renderBackground={()=>(
                                    <View key="background">
                                        <Image
                                            style={styles.img_header_background}
                                            source={require('../.././imgs/home_page_header_cover.jpg')}>
                                            <View key="parallax-header" style={ styles.parallaxHeader }>
                                                <Image style={ styles.avatar }
                                                       source={require('../.././imgs/home_page_header_icon.png')}/>
                                                <Text style={ styles.sectionSpeakerText }>
                                                    {new Date().getFullYear()}
                                                </Text>
                                            </View>

                                        </Image>
                                    </View>
                                )}
                            />
                        )}
                    />
                )
            } else {
                return (
                    <Text style={{flex: 1, textAlignVertical: 'center', textAlign: 'center'}}>加载中...</Text>
                )
            }
    }

    renderRow (rowData, rowId) {
        return <VideoListItem
            onItemClick={()=>this._onItemClick(rowData, rowId)}
            imgUrl={rowData.coverForFeed}
            title={rowData.title}/>
    }
}

const styles = StyleSheet.create({
    parallaxHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    sectionSpeakerText: {
        color: 'white',
        fontSize: 15,
    },
    avatar: {
        height: 150,
        width: 150,
    },
    img_header_background: {
        width: Dimensions.get('window').width,
        height: 210,
        resizeMode: 'cover'
    }
})

module.exports = ListViewDemo