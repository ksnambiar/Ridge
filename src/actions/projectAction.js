import {GET_PROJECT,GET_PROJECTS,PROJECT_LOADING,GET_ERRORS} from './types';
import axios from 'axios';
import {local_host, heroku_url} from '../api/Api_ref'
export const getProjectsByCollege=(college) =>dispatch=>{
    dispatch(setProjectLoading)
    axios.get(local_host+"/api/devs/project/allProjects/"+college)
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
    axios.get(local_host+"/api/devs/project/projects/"+college+"/"+name)
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

export const setProjectLoading = ()=>{
    return {
        type:PROJECT_LOADING
    }
}