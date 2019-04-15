import {GET_PROJECT,GET_PROJECTS,PROJECT_LOADING,GET_ERRORS} from './types';
import axios from 'axios';
import {getCurrentProfile} from './profileAction'
import {local_host, heroku_url} from '../api/Api_ref'
export const getProjectsByCollege=(college) =>dispatch=>{
    dispatch(setProjectLoading)
    axios.get(heroku_url+"/api/devs/project/allProjects/"+college)
        .then(obj=>{
            let indat=obj.data;
            dispatch({
                type:GET_PROJECTS,
                payload:indat.data
            })
        }).catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
} 

export const getProjectByName = (college,name)=>dispatch=>{
    dispatch(setProjectLoading())
    axios.get(heroku_url+"/api/devs/project/projects/"+college+"/"+name)
        .then(obj=>{
            let indat=obj.data.data;
            dispatch({
                type:GET_PROJECT,
                payload:indat
            })
        })
        .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}
//function to respond to a project request
export const devResponse = (college,pid,aid,rid,decision)=>dispatch=>{
    let uid=localStorage.getItem("uid");
    axios.get(heroku_url+`/api/devs/request/${uid}/projects/${college}/${pid}/developer/${aid}/request/${rid}/${decision}`)
        .then(obj=>{
            dispatch(getCurrentProfile())
        })
        .catch(err=>{
            console.log("error",err)
        })
}


export const setProjectLoading = ()=>{
    return {
        type:PROJECT_LOADING
    }
}