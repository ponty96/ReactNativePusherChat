/**
 * Created by ponty on 29/04/2016.
 */
import axios from 'axios'
import Pusher from 'pusher-client'



export const SEND_CHAT = "SEND_CHAT";
export const GET_ALL_CHATS = "GET_ALL_CHATS";
export const GET_CONVERSATION = "GET_CONVERSATION";
export const IS_FETCHING = "IS_FETCHING";
export const IS_LOADING = "IS_LOADING";
export const IS_ERROR = "IS_ERROR";
export const NEW_MESSAGE = "NEW_MESSAGE";


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

export function newMesage(API_KEY, dispatch){
    const socket = new Pusher(API_KEY);
    var my_channel = socket.subscribe('my-channel');
    socket.bind('new-message',
        function(data) {
            // add comment into page
            dispatch(newChat(data))
        }
    );
}
export function apiSendChat(chat){
    return dispatch => {
        dispatch(isLoading());
        return axios.post('https://nameless-castle-85902.herokuapp.com/chat/', {
            sender:chat.sender,
            receiver:chat.receiver,
            message:chat.message,
            sent_at:chat.sent_at,
            convo_id:chat.convo_id,
        }).then(res => dispatch(sendChat(res.data))).catch(res => dispatch(isError()));
    };
};

export function apiGetALLChats(username){
    return dispatch => {
        dispatch(isFetching());
        return axios.post('https://nameless-castle-85902.herokuapp.com/chats/'+username+'').then(res =>     dispatch(getChats(res.data))).catch(res => dispatch(isError()));
    };
};

export function apiGetConversation(convo_id){
    return dispatch => {
        dispatch(isFetching());
        return axios.post('https://nameless-castle-85902.herokuapp.com/conversation/'+convo_id+'').then(res =>     dispatch(getConvo(res.data))).catch(res => dispatch(isError()));
    };
};



