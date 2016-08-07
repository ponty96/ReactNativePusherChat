import React, { Component} from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import ConversationScreen from './screens/conversation-screen';

const store = configureStore();

export default class PusherChatApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConversationScreen />
      </Provider>
    )
  }
}
