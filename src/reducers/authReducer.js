import {SET_CURRENT_USER} from '../actions/types';
import isEmpty from '../validation/is-empty';
const initialState={
    isAuthenticated:false,
    type:"",
    user:{}
}
export default function(state=initialState,action){
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated:!isEmpty(action.payload),
                type:action.type,
                user:action.payload
            }
        default:
            return state;
    }
}