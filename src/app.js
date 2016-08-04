import React, { Component, StyleSheet, Dimensions} from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore();

import ConversationScreen from './screens/conversation-screen';

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
        flexDirection: "column",
        paddingTop:20
    }
})


export default class PusherChatApp extends Component {
    render() {
        return (
            <Provider store={store}>
            <ConversationScreen />
                </Provider>
        )

    }
}
