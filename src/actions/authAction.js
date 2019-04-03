import {GET_ERRORS,SET_CURRENT_USER} from './types';
import axios from 'axios'
import {local_host,heroku_url} from '../api/Api_ref'
//Register User
export const registerUser = (userData,history)=>(dispatch)=>{
    //axios implementation

    axios.post(heroku_url+"/api/devs/auth/register",userData)
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
//register guides
export const registerGuide = (userData,history)=>(dispatch)=>{
    axios.post(heroku_url+"/api/guides/auth/register",userData)
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
   axios.post(heroku_url+"/api/devs/auth/login",userData) 
   .then(dat=>{
        let obj=dat.data;
        let uid = obj.jwt.uid;
        let jwt = obj.jwt.stsTokenManager.accessToken;
        localStorage.setItem("uid",uid);
        localStorage.setItem("jwt",jwt);
        let user = obj.data;
        user.utype="dev"
        dispatch(setCurrentUser(user))

        history.push('/'+user.utype+'/dashboard');
    }).catch(err=>{
        console.log(err)
        if(err.response){
        dispatch({
                        type:GET_ERRORS,
                        payload:err.response.data
                })
            }else{
                dispatch({
                    type:GET_ERRORS,
                    payload:err
            })
            }
    })
}
//login guide
export const loginGuide = (userData,history)=>(dispatch)=>{
    //axios implementation
    axios.post(heroku_url+"/api/guides/auth/login",userData) 
    .then(dat=>{
         let obj=dat.data;
         let uid = obj.jwt.uid;
         let jwt = obj.jwt.stsTokenManager.accessToken
         localStorage.setItem("uid",uid);
         localStorage.setItem("jwt",jwt);
         console.log(obj,user)

         let user = obj.data;
         user.utype='guide'
         dispatch(setCurrentUser(user)) 
         history.push(`/${user.utype}/dashboard`);
     }).catch(err=>{
         console.log(err)
         if(err.response){
            dispatch({
                            type:GET_ERRORS,
                            payload:err.response.data
                    })
                }else{
                    dispatch({
                        type:GET_ERRORS,
                        payload:err
                })
                }
     })
 }

export const checkSession=(data)=>dispatch=>{
    axios.get(heroku_url+"/api/session/current/"+data.jwt)
        .then(obj=>{
            console.log(obj)
            let indat=obj.data.data;
            console.log(indat)
            if(Object.keys(indat).length>0)
            {   
                dispatch(setCurrentUser(indat))
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