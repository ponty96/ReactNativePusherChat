/**
* Created by ponty on 29/04/2016.
*/
import axios from 'axios'
import { AsyncStorage } from 'react-native'
import moment from 'moment'
import Pusher from 'pusher-js/react-native'


export const SEND_CHAT = 'SEND_CHAT'
export const GET_ALL_CHATS = 'GET_ALL_CHATS'
export const RECEIVE_MESSAGE = ' RECEIVE_MESSAGE'

const getChats = (payload) => {
  return { type: GET_ALL_CHATS,
    payload,
  }
}

const newMessage = (payload) => {
  return {
    type: RECEIVE_MESSAGE,
    payload,
  }
}

// function for adding messages to AsyncStorage
const addToStorage = (data) => {
  AsyncStorage.setItem(data.convo_id + data.sentAt, JSON.stringify(data), () => {})
}


// function that listens to pusher for new messages and dispatches a new
// message action
export function receiveMessage(dispatch) {
  const socket = new Pusher('3c01f41582a45afcd689')
  const channel = socket.subscribe('chat_channel')
  channel.bind('new-message',
  (data) => {
    addToStorage(data.chat)
    dispatch(newMessage(data.chat))
  }
)
}

export function apiSendChat(sender, message) {
  const sentAt = moment().format()
  const chat = { sender, message, sentAt }
  axios.get(`http://localhost:5000/chat/${JSON.stringify(chat)}`)
}

export function apiGetChats() {
  // get from device async storage and not api

  return dispatch => {
    return AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (error, stores) => {
        const chats = []
        stores.map((result, i, store) => {
          // get at each store's key/value so you can work with it
          chats.push(JSON.parse(store[i][1]))
        })
        dispatch(getChats(chats))
      })
    })
  }
}
