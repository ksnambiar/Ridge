import {GET_ERRORS,SET_CURRENT_USER} from './types';
import axios from 'axios'
import {local_host,heroku_url} from '../api/Api_ref'
//Register User
export const registerUser = (userData,history)=>(dispatch)=>{
    //axios implementation

    axios.post(local_host+"/api/devs/auth/register",userData)
        .then(obj=>{
            console.log(obj)
            history.push('/login')
        })
        .catch(err=>{
            dispatch({
                            type:GET_ERRORS,
                            payload:err.response.data
                    })
        })

}
//Login User
export const loginUser = (userData,history)=>(dispatch)=>{
   //axios implementation
   axios.post(local_host+"/api/devs/auth/login",userData) 
   .then(dat=>{
        let obj=dat.data;
        let uid = obj.jwt.uid;
        let et = obj.jwt.stsTokenManager.expirationTime
        localStorage.setItem("uid",uid);
        localStorage.setItem("et",et);
        let user = obj.data;
        dispatch(setCurrentUser(user))

        history.push('/dashboard');
    }).catch(err=>{
        console.log(err)
        dispatch({
                        type:GET_ERRORS,
                        payload:err.response.data
                })
    })
}

export const checkSession=(data)=>dispatch=>{
    axios.get(local_host+"/api/devs/auth/current")
        .then(obj=>{
            console.log(obj)
            let indat=obj.data;
            console.log(indat)
            if(Object.keys(indat.data).length>0)
            {   if(data.uid===indat.jwt.uid){
                dispatch(setCurrentUser(indat.data))
            }
            }
        }).catch(err=>{
            console.log(err)
        })
}

//set current user
export const setCurrentUser = (data)=>{
    return {
        type:SET_CURRENT_USER,
        payload:data
    }
}

//Log user Out
export const logoutUser = ()=>dispatch=>{
    localStorage.removeItem('uid');
    dispatch(setCurrentUser({}))
}