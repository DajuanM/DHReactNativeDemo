/**
 * Created by swartz006 on 2017/8/24.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    TabBarIOS,
    View,
    Text
} from 'react-native'

var NavigatorTest = require('.././03_navigator/NavigatorTest')
var HomePage = require('.././03_navigator/HomePage')

export default class TabBarTest extends Component {
    constructor (props) {
        super(props)
        this.state = {
            selectedTabBarItem: 'home'
        }
    }

    render () {
        return (
            <TabBarIOS
                unselectedTintColor="yellow"
                tintColor="white"
                barTintColor="darkslateblue"
            >
                <TabBarIOS.Item
                    // title = '首页'
                    // systemIcon="bookmarks"  // 系统图标(bookmarks)
                    icon = {require('../.././imgs/ic_news.png')}
                    selectedIcon = {require('../.././imgs/ic_news_selected.png')}
                    selected={this.state.selectedTabBarItem === 'home'}
                    onPress={() => {
                        this.setState({
                            selectedTabBarItem: 'home'
                        })
                    }}
                >
                    <NavigatorTest/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    icon={require('../.././imgs/ic_video.png')}
                    selectedIcon={require('../.././imgs/ic_video_selected.png')}

                    // title = '联系人'
                    // systemIcon="contacts"  // 系统图标(contacts)
                    selected={this.state.selectedTabBarItem === 'contacts'}
                    onPress={() => {
                        this.setState({
                            selectedTabBarItem: 'contacts'
                        })
                    }}
                >
                    //必须要给tabbarItem设置子视图 不然会报错
                    {/*<HomePage/>*/}
                    <View style={styles.contacts}>
                        <Text>123</Text>
                    </View>
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
}

const styles = StyleSheet.create({
    tabContent: {
        flex:1,
        backgroundColor: 'white',
        marginTop: 20
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
    home: {
        flex: 1,
        backgroundColor: 'red'
    },
    contacts: {
        flex: 1,
        backgroundColor: 'green'
    }
});

module.exports = TabBarTest