import {GET_PROFILE,PROFILE_LOADING,GET_ERRORS,CLEAR_CURRENT_PROFILE, GET_PROFILES, SET_CURRENT_USER} from './types';
import axios from 'axios';
import {local_host,heroku_url} from '../api/Api_ref';
//get profiles
export const getProfiles = ()=>dispatch=>{
dispatch(setProfileLoading());
axios.get(heroku_url+"/api/profile/allProfiles")
    .then(obj=>{
        let dat=obj.data
        console.log(dat)
        dispatch({
            type:GET_PROFILES,
            payload:dat.data
        })
    }).catch(err=>
        dispatch({
            type:GET_ERRORS,
            payload:err
        })
    )
}
//get current profile
export const getCurrentProfile = ()=>dispatch=>{
    dispatch(setProfileLoading)
    axios.get(heroku_url+"/api/profile/current")
        .then(obj=>{
            dispatch({type:GET_PROFILE,
                    payload:obj.data.data
                    })
        }).catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

//get profile by handle
export const getProfileByHandle = (handle)=>dispatch=>{
    dispatch(setProfileLoading)
    let uuid = handle;
    
    axios.get(heroku_url+"/api/profile/getProfile/"+uuid)
    .then(obj=>{
        console.log(obj)
        let dat=obj.data.data;
        dispatch({
            type:GET_PROFILE,
            payload:dat
        })
    })
    .catch(err=>{
        dispatch({
            type:GET_ERRORS,
            payload:err
        })
    })
}
//create a profile
export const createProfile = (userData,history)=>dispatch=>{
    let uuid= localStorage.getItem('uid');
    
    axios.post(heroku_url+"/api/profile/createProfile",userData)
        .then(obj=>{
            console.log("profile response")
            console.log(obj)
            history.push('/dashboard')
        })
        .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}
//Add Experience
export const addExperience = (expData,history)=>dispatch=>{
    axios.post(heroku_url+"/api/profile/addExperience",expData)
    .then(obj=>{
        let handle=obj.data;
        console.log(handle)
        history.push('/dashboard');
    })
    .catch(err=>{
        dispatch({
            type:GET_ERRORS,
            payload:err
        })
    })
}
//delete experience
export const deleteExperience = (id,history)=>dispatch=>{
    console.log(id)
    axios.delete(heroku_url+`/api/profile/removeExperience/${id}`)
        .then(obj=>{
            console.log(obj)
            dispatch(getCurrentProfile())
        })
        .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

//Add Project
export const addProject = (projData,history)=>dispatch=>{
     

    axios.post(heroku_url+"/api/project/addProject",projData)
        .then(obj=>{
            console.log(obj)
            history.push('/dashboard');
        }).catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

//delete projects
export const deleteProject = (id)=>dispatch=>{
   
    axios.delete(heroku_url+`/api/project/removeProject/${id}`)
        .then(obj=>{
            dispatch(getCurrentProfile())
        })
        .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

//delete profile and account
export const deleteAccount = ()=>dispatch=>{
    if(window.confirm("are you sure? this is permenant!!")){
   
        axios.get(heroku_url+"/api/profile/deleteAccount")
            .then(obj=>{
                console.log(obj.data.data)
                dispatch({
                    type:SET_CURRENT_USER,
                    payload:{}
                })
            })
            .catch(err=>{
                dispatch({
                    type:GET_ERRORS,
                    payload:err
                })
            })
}
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


//test
export const getDevProfiles = () =>{
}