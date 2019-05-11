import {GET_PROFILE,PROFILE_LOADING,GET_ERRORS,CLEAR_CURRENT_PROFILE, GET_PROFILES, SET_CURRENT_USER} from './types';
import {GET_GUIDE_PROFILE,GET_GUIDE_PROFILES,CLEAR_CURRENT_GUIDE_PROFILE} from './types';
import axios from 'axios';
import {local_host,heroku_url} from '../api/Api_ref';
//get profiles
export const getProfiles = ()=>dispatch=>{
dispatch(setProfileLoading());
axios.get(heroku_url+"/api/devs/profile/allProfiles")
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
//get profile by college
export const getprofilesbycollege = (college)=>dispatch=>{
    axios.get(heroku_url+"/api/devs/profile/allProfiles/"+college)
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
    let uid = localStorage.getItem("uid")
    axios.get(heroku_url+"/api/devs/profile/"+uid+"/current")
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
    
    axios.get(heroku_url+"/api/devs/profile/getProfile/"+uuid)
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
    
    axios.post(heroku_url+"/api/devs/profile/"+uuid+"/createProfile",userData)
        .then(obj=>{
            console.log("profile response")
            console.log(obj)
            history.push('/dev/dashboard')
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
    let uid=localStorage.getItem("uid")
    axios.post(heroku_url+"/api/devs/profile/"+uid+"/addExperience",expData)
    .then(obj=>{
        let handle=obj.data;
        console.log(handle)
        history.push('/dev/dashboard');
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
    let uid=localStorage.getItem("uid")
    axios.delete(heroku_url+`/api/devs/profile/${uid}/removeExperience/${id}`)
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
     
    let uid=localStorage.getItem("uid")
    axios.post(heroku_url+"/api/devs/project/"+uid+"/addProject",projData)
        .then(obj=>{
            console.log(obj)
            history.push('/dev/dashboard');
        }).catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}


//delete projects
export const deleteProject = (id)=>dispatch=>{
    let uid=localStorage.getItem("uid")
    axios.delete(heroku_url+`/api/devs/project/${uid}/removeProject/${id}`)
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
        let uid=localStorage.getItem("uid")

        axios.get(heroku_url+"/api/devs/profile/"+uid+"/deleteAccount")
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




























































/////guide profile area///////////


//get profiles
export const getGuideProfiles = (institution)=>dispatch=>{
    dispatch(setProfileLoading());
    axios.get(heroku_url+"/api/guides/profile/"+institution+"/allProfiles")
        .then(obj=>{
            let dat=obj.data
            dispatch({
                type:GET_GUIDE_PROFILES,
                payload:dat.data
            })
        }).catch(err=>
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        )
    }

//get profile by college
export const getGuideProfileByGid=(gid)=>dispatch=>{
    axios.get(heroku_url+"/api/guides/profile/"+gid+"/getProfile")
        .then(obj=>{
            let dat=obj.data
            console.log(dat)
            dispatch({
                type:GET_GUIDE_PROFILE,
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
export const getCurrentGuideProfile = ()=>dispatch=>{
    dispatch(setProfileLoading)
    let uid = localStorage.getItem("uid")
    axios.get(heroku_url+"/api/guides/profile/"+uid+"/current")
            .then(obj=>{
                console.log(obj)
                dispatch({type:GET_GUIDE_PROFILE,
                        payload:obj.data.data
                        })
            }).catch(err=>{
                dispatch({
                    type:GET_ERRORS,
                    payload:err
                })
            })
    }
    
//create a profile
export const createGuideProfile = (userData,history)=>dispatch=>{
    let uuid= localStorage.getItem('uid');
    
    axios.post(heroku_url+"/api/guides/profile/"+uuid+"/createProfile",userData)
        .then(obj=>{
            console.log("profile response")
            history.push('/guide/dashboard')
        })
        .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

export const addGuideProject = (projData,history)=>dispatch=>{
     const uuid = localStorage.getItem("uid")
    axios.post(heroku_url+"/api/guides/project/"+uuid+"/addProject",projData)
        .then(obj=>{
            console.log(obj)
            history.push('/guide/dashboard');
        }).catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

//Add Experience
export const addGuideExperience = (expData,history)=>dispatch=>{
    const uid = localStorage.getItem("uid");
    axios.post(heroku_url+"/api/guides/profile/"+uid+"/addExperience",expData)
    .then(obj=>{
        let handle=obj.data;
        console.log(handle)
        history.push('/guide/dashboard');
    })
    .catch(err=>{
        dispatch({
            type:GET_ERRORS,
            payload:err
        })
    })
}
export const addEducation = (userData,history)=>dispatch=>{
    let uuid=localStorage.getItem("uid")
    axios.post(heroku_url+"/api/guides/profile/"+uuid+"/addEducation",userData)
        .then(obj=>{
            history.push('/guide/dashboard')
        })
        .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
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


//test
export const getDevProfiles = () =>{
}