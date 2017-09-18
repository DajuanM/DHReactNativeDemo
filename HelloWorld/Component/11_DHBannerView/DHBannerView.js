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
let TimerMixin = require('react-timer-mixin')
let Dimensions = require('Dimensions')
let {width, height} = Dimensions.get('window')

class DHBannerView extends Component {

    componentDidMount() {
        console.log('组件启动完毕')
        this.startTimer()
    }

    constructor(props) {
        super(props)
        mixins: [TimerMixin]
        this.state = {
            //当前的page
            currentPage: 0,
            duration: 1000,
            timer: null
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    horizontal={true}//水平布局
                    pagingEnabled={true}//分页
                    showsHorizontalScrollIndicator={false}//隐藏横线滚动条
                    //当一帧滚动结束
                    onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
                    onScrollBeginDrag={this.onScrollBeginDrag}
                    onScrollEndDrag={this.onScrollEndDrag}
                >
                    {this.renderAllImages()}

                </ScrollView>
                {/*返回指示器*/}
                <View style={styles.pageViewStyle}>
                    {this.renderPageCircle()}
                </View>
            </View>
        )
    }

    renderAllImages() {
        let imgs = []
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

    renderPageCircle() {
        let indicatorArr = []
        let imgArr = imgData.data
        let style
        for (let i = 0; i<imgArr.length; i++) {
            style = (i === this.state.currentPage) ? {color: 'orange'} : {color: 'white'}
            indicatorArr.push(
                <Text key={i} style={[{fontSize: 25},style]}>&bull;</Text>
            )
        }
        return indicatorArr
    }
    //当一帧滚动结束
    onAnimationEnd(e) {
        // 1. 求出水平方向的偏移量
        let offset = e.nativeEvent.contentOffset
        // 2. 求出当前的页数
        let currentPage = Math.floor(offset.x / width)
        // 3. 更新状态机，重新刷新UI
        this.setState({
            currentPage: currentPage
        })
    }
    //开始拖拽
    onScrollBeginDrag() {
        console.log('开始拖拽')
        // clearTimeout(this.timer)
        clearInterval(this.state.timer)
    }
    //停止拖拽
    onScrollEndDrag() {
        console.log('停止拖拽')
        let self = this
        self.startTimer()
    }

    startTimer() {
        // 1. 拿到我们的scrollView
        let scrollView = this.refs.scrollView

        let self = this
        // 2. 添加定时器
        // this.timer = setTimeout(function () {
        //     console.log('执行了定时器的方法')
        //     let activePage
        //     if ((self.state.currentPage + 1) >= imgData.data.length) {
        //         activePage = 0
        //     }else {
        //         activePage = self.state.currentPage + 1
        //     }
        //     self.setState({
        //         currentPage: activePage
        //     })
        //     let offsetX = activePage * width
        //     // scrollView.scrollResponderScrollTo({x: offsetX, y: 0, animated: true})
        // }, 1000)
        this.state.timer = setInterval(function () {
            let activePage
            if ((self.state.currentPage + 1) >= imgData.data.length) {
                activePage = 0
            }else {
                activePage = self.state.currentPage + 1
            }
            self.setState({
                currentPage: activePage
            })
            let offsetX = activePage * width
            scrollView.scrollResponderScrollTo({x: offsetX, y: 0, animated: true})
        }, 1000)
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dddddd',
        marginTop: 20
    },
    scrollViewStyle: {
        height: 120
    },
    pageViewStyle: {
        width: width,
        height: 25,
        backgroundColor: 'rgba(241,241,241,0.8)',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

module.exports = DHBannerView