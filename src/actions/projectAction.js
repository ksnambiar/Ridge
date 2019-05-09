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
//editing project details
export const editProject = (projData,pid,college,pname)=>dispatch=>{
    let uid=localStorage.getItem("uid");
    axios.post(heroku_url+`/api/devs/project/${uid}/editProject/${pid}`,projData)
        .then(obj=>{
            dispatch(getProjectByName(college,projData.name))
        })
        .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}
//send join request from admin to developer
export const addDeveloperToTeam= (pid,did,name,college,projName)=>dispatch=>{
    const uid = localStorage.getItem("uid")
    const data = {
        pid:pid,
        did:did,
        developerName:name,
        college:college,
        projectName:projName
    }
    axios.post(`${heroku_url}/api/devs/request/${uid}/projects/adddeveloper/request`,data)
        .then(obj=>{
            console.log(obj)
            dispatch(getProjectByName(college,projName))
            
        }).catch(err=>{
            console.log(err)
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
//function to add guides to project
export const  addGuide = (college,pid,gid,name,projectName,guideName)=>dispatch=>{
    let uid = localStorage.getItem("uid")
    let data={
        gid:gid,
        pid:pid,
        projectName:projectName,
        name:name,
        college:college,
        guideName:guideName
    }
    axios.post(heroku_url+`/api/devs/request/${uid}/projects/addguide/request`,data)
    .then(obj=>{
        console.log(obj)
        dispatch(getProjectByName(college,projectName))
    }).catch(err=>{
        dispatch({
            type:GET_ERRORS,
            payload:err
        })
    })
}

//function to respond to the developer to guide request
export const guideResponse = (college,pid,aid,rid,dec)=>dispatch=>{
    let uid = localStorage.getItem("uid")
    let data={
        pid:pid,
        aid:aid,
        rid:rid,
        college:college
    }
    axios.post(heroku_url+`/api/devs/request/${uid}/projects/guide/request/${dec}`,data)
        .then(obj=>{
            console.log(obj)
        })
        .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

export const uploadReport = (pid,college,name,data)=>dispatch=>{
    let uid = localStorage.getItem("uid")
    axios.post(heroku_url+"/api/devs/project/"+uid+"/projects/"+pid+"/addReport",data)
    .then(obj=>{
        dispatch(getProjectByName(college,name))
    }).catch(err=>{
        console.log("some error")
    })
}
export const setProjectLoading = ()=>{
    return {
        type:PROJECT_LOADING
    }
}