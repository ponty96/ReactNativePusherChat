/**
 * Created by ponty on 29/04/2016.
 */
import { combineReducers } from 'redux';
import { SEND_CHAT, GET_ALL_CHATS, IS_FETCHING, IS_LOADING, IS_ERROR, NEW_MESSAGE} from './../actions'

const Chats = (state = {process_status:"", chats:[]}, actions) => {
    switch(actions.type){
        case IS_LOADING:
            return Object.assign({}, state, {
                process_status:"isLoading"
            });

        case IS_FETCHING:
            return Object.assign({}, state, {
                process_status:"isFetching"
            });

        case GET_ALL_CHATS:
            return Object.assign({}, state, {
                process_status:"completed",
                chats:state.chats.concat(actions.payload)
            });

        case SEND_CHAT:
        case NEW_MESSAGE:
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
