import {GET_PROJECT,GET_PROJECTS,PROJECT_LOADING} from '../actions/types';

const initialState = {
    loading:false,
    project:null,
    projects:null
}

export default function (state=initialState,action){
    switch(action.type){
        case GET_PROJECT:
            return{
                ...state,
                project:action.payload,
                loading:false
            }
        case GET_PROJECTS:
            return{
                ...state,
                projects:action.payload,
                loading:false
            }
        case PROJECT_LOADING:
            return{
                ...state,
                loading:true
            }
        default:
            return state 
    }
}