import {GET_ERRORS,SET_CURRENT_USER} from './types';
import axios from 'axios'

//Register User
export const registerUser = (userData,history)=>(dispatch)=>{
    //axios implementation

    axios.post("https://blooming-gorge-84662.herokuapp.com/api/auth/register",userData)
        .then(obj=>{
            console.log(obj)
            history.push('/login')
        })
        .catch(err=>{
            dispatch({
                            type:GET_ERRORS,
                            payload:err
                    })
        })

}
//Login User
export const loginUser = (userData,history)=>(dispatch)=>{
   //axios implementation
   axios.post("https://blooming-gorge-84662.herokuapp.com/api/auth/login",userData) 
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
        dispatch({
                        type:GET_ERRORS,
                        payload:err
                })
    })
}

export const checkSession=(data)=>dispatch=>{
    axios.get("https://blooming-gorge-84662.herokuapp.com/api/auth/current")
        .then(obj=>{
            console.log(obj)
            let indat=obj.data;
            console.log(indat)
            if(Object.keys(indat.data)>0)
            {   if(data.uid===indat.jwt.uid){
                dispatch(setCurrentUser(indat.data))
            }
            }
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