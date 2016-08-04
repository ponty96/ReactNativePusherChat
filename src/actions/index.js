/**
 * Created by ponty on 29/04/2016.
 */
import axios from 'axios'
import { AsyncStorage } from 'react-native'
import moment from 'moment'
import Pusher from 'pusher-js/react-native';


export const SEND_CHAT = "SEND_CHAT";
export const GET_ALL_CHATS = "GET_ALL_CHATS";
export const IS_FETCHING = "IS_FETCHING";
export const IS_LOADING = "IS_LOADING";
export const IS_ERROR = "IS_ERROR";
export const NEW_MESSAGE = "NEW_MESSAGE";

const add_to_storage = (data) => {
    AsyncStorage.setItem(data.convo_id+data.sent_at, JSON.stringify(data), () => {})
}

const sendChat = (payload) => {
    return {
        type:SEND_CHAT,
        payload:payload
    };
};

const getChats = (payload) => {
    return {
        type:GET_ALL_CHATS,
        payload:payload
    };
};

const newChat = (payload) => {
    return {
        type:NEW_MESSAGE,
        payload:payload
    };
};

const getConv = (payload) => {
    return {
        type:GET_CONVERSATION,
        payload:payload
    };
};

const isLoading = () => {
    return {
        type:IS_LOADING
    };
};

const isFetching = () => {
    return {
        type:IS_FETCHING
    };
};

const isError = () =>{
    return {
        type:IS_ERROR
    };
};

const genConvoId = (sender,receiver) =>{
    if(sender < receiver){
        return sender+receiver
    }
    return receiver+sender
}

export function newMesage(dispatch){
    var socket = new Pusher("3c01f41582a45afcd689");
    const channel = socket.subscribe('chat_channel');
    channel.bind('new-message',
        (data) => {
            add_to_storage(data.chat);
            dispatch(newChat(data.chat))
        }
    );
}

export function startConvo(receiver,message){
    const sent_at = moment().format();
    const sender = "ponty96";
    const convo_id = genConvoId(sender,receiver);
    const chat = {sender:sender, receiver:receiver, message:message, convo_id:convo_id,sent_at:sent_at};
    return dispatch => {
        dispatch(isLoading());
        return  axios.get(`http://localhost:5000/chat/${JSON.stringify(chat)}`).then(response =>{
        }).catch(response =>{
            dispatch(isError())
        });
    };
}
export function apiSendChat(receiver,message){
    const sent_at = moment().format();
    const sender = "ponty96";
    const convo_id = genConvoId(sender,receiver);
    const chat = {sender:sender, receiver:receiver, message:message, convo_id:convo_id,sent_at:sent_at};
    return dispatch => {
        dispatch(isLoading());
        return  axios.get(`http://localhost:5000/chat/${JSON.stringify(chat)}`).then(response =>{
        }).catch(response =>{
            dispatch(isError())
        });
    };
};


export function apiGetChats(){
    //get from async storage and not api

    return dispatch => {
        dispatch(isFetching());
        return AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, stores) => {
                let chats = [];
                stores.map((result, i, store) => {
                    // get at each store's key/value so you can work with it
                    chats.push(JSON.parse(store[i][1]))
                });
                dispatch(getChats(chats))
            });
        });
    };
}



