import {GET_ERRORS,SET_CURRENT_USER} from './types';
import {auth,dataBase} from '../firebase/Index';

//Register User
export const registerUser = (userData,history)=>(dispatch)=>{
    auth.createUserWithEmailAndPassword(userData.email,userData.password)
        .then(obj=>{
            let uid =obj.user.uid 
            dataBase.ref('users/'+uid).set({
                fullName:userData.fullName,
                email:userData.email,
                password:userData.password,
                usn:userData.usn,
                contact:userData.contact
            }).then(
                dataBase.ref('profiles/'+uid).set({
                    test:'test'
                }).then( history.push('/login'))
                .catch(err=>{
                    console.log(err)
                })
               
            ).catch(err=>{
                console.log("error in commiting \n"+err);
            })
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
    auth.signInWithEmailAndPassword(userData.email,userData.password)
        .then(obj=>{
            console.log(obj)
            let uid = obj.user.uid;
            localStorage.setItem('uid',uid);
            let user=dataBase.ref('users/'+uid);
            user.once('value').then(snapshot=>{
                dispatch(setCurrentUser(snapshot.val()))    
              })
            
            history.push('/dashboard')
        })
        .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
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