import {PROFILE_LOADING,GET_GUIDE_PROFILE,GET_GUIDE_PROFILES,CLEAR_CURRENT_GUIDE_PROFILE,GET_PROFILE,CLEAR_CURRENT_PROFILE, GET_PROFILES} from '../actions/types'; 
const initialState={
    profile:null,
    profiles:null,
    loading:false,
    guideProfile:null,
    guideProfiles:null
}
export default function(state = initialState,action){
    switch(action.type){
        case PROFILE_LOADING:
        return {
            ...state,
            loading:true
        }
        case GET_PROFILE:
        return {
            ...state,
            profile:action.payload,
            loading:false
        }
        case CLEAR_CURRENT_PROFILE:
        return {
            ...state,
            profile:null
        }
        case GET_PROFILES:
        return {
            ...state,
            profiles:action.payload,
            loading:false
        }
        
        case GET_GUIDE_PROFILE:
        return {
            ...state,
            guideProfile:action.payload,
            loading:false
        }
        case CLEAR_CURRENT_GUIDE_PROFILE:
        return {
            ...state,
            guideProfile:null
        }
        case GET_GUIDE_PROFILES:
        return {
            ...state,
            guideProfiles:action.payload,
            loading:false
        }
        default:
        return state
    }
}