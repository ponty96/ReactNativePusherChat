/**
 * Created by ponty on 29/04/2016.
 */
import axios from 'axios'
import { AsyncStorage } from 'react-native'
import moment from 'moment'



export const SEND_CHAT = "SEND_CHAT";
export const GET_ALL_CHATS = "GET_ALL_CHATS";
export const GET_CONVERSATION = "GET_CONVERSATION";
export const IS_FETCHING = "IS_FETCHING";
export const IS_LOADING = "IS_LOADING";
export const IS_ERROR = "IS_ERROR";
export const NEW_MESSAGE = "NEW_MESSAGE";

const add_to_storage = (data) => {
    AsyncStorage.setItem(data.convo_id, JSON.stringify(data), () => {})
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

function isLoading(){
    return {
        type:IS_LOADING
    };
};

function isFetching(){
    return {
        type:IS_FETCHING
    };
};

function isError(){
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

export function newMesage(API_KEY, dispatch){
    var socket = new Pusher(API_KEY);
    var chat_channel = socket.subscribe('chat-channel');
    socket.bind('new-message',
        function(data) {
            // add comment into page
            add_to_storage(data);
            dispatch(newChat(data))
        }
    );
}

export function startConvo(receiver,message){
    const sent_at = JSON.stringify(moment().format());
    const sender = "ponty96";
    const convo_id = genConvoId(sender,receiver);
    const chat = {sender:sender, receiver:receiver, message:message, convo_id:convo_id,sent_at:sent_at};
    return dispatch => {
        dispatch(isLoading());
        return  axios.get(`http://localhost:5000/chat/${JSON.stringify(chat)}`).then(response =>{
            console.log('no error', response)
            add_to_storage(chat)
            dispatch(sendChat(chat))
        }).catch(response =>{
            console.log('error', response)
            dispatch(isError())
        });
    };
}
export function apiSendChat(receiver,message){
    const sent_at = JSON.stringify(moment().format());
    const sender = "ponty96";
    const convo_id = genConvoId(sender,receiver);
    const chat = {sender:sender, receiver:receiver, message:message, convo_id:convo_id,sent_at:sent_at};
    return dispatch => {
        dispatch(isLoading());
        return  axios.get(`http://localhost:5000/chat/${JSON.stringify(chat)}`,{sender:sender, receiver:receiver, message:message, convo_id:convo_id,sent_at:sent_at}).then(response =>{
            add_to_storage(chat)
            dispatch(sendChat(chat))
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



