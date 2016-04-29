/**
 * Created by ponty on 29/04/2016.
 */
import React, { Component, StyleSheet, Dimensions} from 'react-native';

import {Actions, Scene, Router, TabBar,  Modal} from 'react-native-router-flux';
import SplashScreen from './screens/splash-screen'
import ConversationsScreen from './screens/conversations'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    tabBarStyle: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#95a5a6",
        padding: 0,
        height: 45
    },
    sceneStyle: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column"
    }
})


export default class PusherChatApp extends Component {
    render() {
        return (
            <Router style={styles.container} sceneStyle={styles.sceneStyle}>
                <Scene key="root">
                    <Scene key="splash_screen" component={SplashScreen} hideNavBar={true}/>
                    <Scene key="conversations_screen" component={ConversationsScreen} hideNavBar={true}/>
                </Scene>
            </Router>
        )

    }
}
