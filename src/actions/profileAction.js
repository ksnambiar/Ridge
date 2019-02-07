import {dataBase} from '../firebase/Index';
import {GET_PROFILE,PROFILE_LOADING,GET_ERRORS,CLEAR_CURRENT_PROFILE} from './types';

//get current profile
export const getCurrentProfile = ()=>dispatch=>{
    dispatch(setProfileLoading)
    let uuid = localStorage.getItem('uid');
    let user=dataBase.ref('profiles/'+uuid)
    user.once('value').then(snapshot=>{
        dispatch({type:GET_PROFILE,
        payload:snapshot.val()
        })
    }).catch(err=>{
        dispatch({
            type:GET_ERRORS,
            payload:{}
        })
    })
}
// set profile loading

export const setProfileLoading = ()=>{
    return{
        type:PROFILE_LOADING
    }
}
// clear current profile
export const clearCurrentProfile = ()=>{
    return{
        type:CLEAR_CURRENT_PROFILE
    }
}