import { combineReducers } from 'redux';
import { SEND_CHAT, GET_ALL_CHATS, RECEIVE_MESSAGE} from './../actions'

// THE REDUCER

const Chats = (state = {chats:[]}, actions) => {
    switch(actions.type){
       case GET_ALL_CHATS:
            return Object.assign({}, state, {
                process_status:"completed",
                chats:state.chats.concat(actions.payload)
            });

        case SEND_CHAT:
        case RECEIVE_MESSAGE:
            return Object.assign({}, state, {
                process_status:"completed",
                chats:[...state.chats,actions.payload]
            });

        default:
            return state;
    }
};

const rootReducer = combineReducers({
    Chats
})

export default rootReducer;
