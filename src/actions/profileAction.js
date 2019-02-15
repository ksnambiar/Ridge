import {dataBase,auth} from '../firebase/Index';
import {GET_PROFILE,PROFILE_LOADING,GET_ERRORS,CLEAR_CURRENT_PROFILE, GET_PROFILES, SET_CURRENT_USER} from './types';

//get profiles
export const getProfiles = ()=>dispatch=>{
dispatch(setProfileLoading());
let profiles=dataBase.ref('profiles/');
profiles.once('value').then(snapshot=>{
    dispatch({type:GET_PROFILES,
    payload:snapshot.val()
    })
}).catch(err=>{
    dispatch({
        type:GET_PROFILES,
        payload:null
    })
})
}
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

//get profile by handle
export const getProfileByHandle = (handle)=>dispatch=>{
    dispatch(setProfileLoading)
    let uuid = handle;
    let user=dataBase.ref('profiles/')
    user.orderByChild('fullName').equalTo(uuid).on("child_added",snapshot=>{
        dispatch({type:GET_PROFILE,
        payload:snapshot.val()
        })
    })
}
//get Projects by college
export const getProjectsByCollege = (college)=>dispatch =>{
    dispatch(setProfileLoading);
    let profiles = dataBase.ref('profiles/')
    profiles.orderByChild('institution').equalTo(college).on("child_added",snapshot=>{
        dispatch({
            type:GET_PROFILES,
            payload:snapshot.val()
        })
    })
}

//create a profile
export const createProfile = (userData,history)=>dispatch=>{
    let uuid= localStorage.getItem('uid');
    let currProfile = dataBase.ref('profiles/'+uuid)
    currProfile.set(userData)  
        .then(obj=>{
            history.push('/dashboard');
        })
        .catch(err=>dispatch({
            type:GET_ERRORS,
            payload:err
        }))
}
//Add Experience
export const addExperience = (expData,history)=>dispatch=>{
    let uid = localStorage.getItem('uid');
    let newKey = dataBase.ref('profiles/'+uid+'/experience').push().key;
    var updates = {};
    updates['profiles/'+uid+'/experience/' + newKey] = expData;
    dataBase.ref().update(updates)
    .then(obj=>
        {console.log(obj)
        history.push('/dashboard')})
    .catch(err=>dispatch({
        type:GET_ERRORS,
        payload:err
    }))
}
//delete experience
export const deleteExperience = (id,history)=>dispatch=>{
    console.log(id)
    let uid = localStorage.getItem('uid');
    let exp = dataBase.ref('profiles/'+uid+'/experience/'+id);
    exp.remove()
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

//Add Project
export const addProject = (projData,history)=>dispatch=>{
    let uid = localStorage.getItem('uid');
    let newKey = dataBase.ref('profiles/'+uid).child('projects').push().key;
    var updates = {};
    updates['profiles/'+uid+'/projects/' + newKey] = projData;
    dataBase.ref().update(updates)
        .then(obj=>{
            projData.uid=uid;
            dataBase.ref('projects/'+newKey).set(projData)
                .then(obj=>{
                    history.push("/dashboard");
                })
                .catch(err=>{
                    dispatch({
                        type:GET_ERRORS,
                        payload:err
                    })
                })
        })
        .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

//delete projects
export const deleteProject = (id)=>dispatch=>{
    let uid = localStorage.getItem('uid');
    let exp = dataBase.ref('profiles/'+uid+'/projects/'+id);
    exp.remove()
        .then(obj=>{
            dataBase.ref('projects/'+id).remove().then(obj=>
            dispatch(getCurrentProfile())
            ).catch(err=>{
                dispatch({
                    type:GET_ERRORS,
                    payload:err
                })
            })
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
    let user = auth.currentUser;
    let uid=localStorage.getItem('uid');
    let profile = dataBase.ref('profiles/');
    let userData=dataBase.ref('users');
    profile.child(uid).remove().then(obj=>{
        userData.child(uid).remove().then(res=>{
            user.delete().then(() =>{
                dispatch({
                    type:SET_CURRENT_USER,
                    payload:{}
                })
              }).catch((error)=> {
                dispatch({
                    type:GET_ERRORS,
                    payload:error
                })
              });
        }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))

    
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