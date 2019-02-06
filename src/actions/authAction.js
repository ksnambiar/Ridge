import {GET_ERRORS} from './types';
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
                history.push('/login')
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
            let uid = obj.user.uid;
            localStorage.setItem('uid',uid);
            history.push('/dashboard')
        })
        .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}