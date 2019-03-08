import {GET_POSTS,GET_POST,GET_ERRORS,POST_LOADING,ADD_POST,DELETE_POST} from './types'
import axios from 'axios';
import {local_host,heroku_url} from '../api/Api_ref'

//add post
export const addPost = (data)=>dispatch=>{
    let college=data.institution;
    let obj={
        data:{fullName:data.fullName,
        post:data.data
        },
        timeofsend:Date.now()
    }
    axios.post(local_host+'/api/posts/'+college+'/addPost',obj)
        .then(obj=>{
            console.log(obj)
            dispatch({
                type:ADD_POST,
                payload:obj.data.response
            })
        }).catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

//get posts
export const getPosts = (college)=>dispatch=>{
    dispatch(setPostLoading())
    
    axios.get(local_host+'/api/posts/'+college+'/allPosts')
        .then(obj=>{
            console.log(obj)
            let data=obj.data.posts;
            let datakeys = Object.keys(data);
            let mapped = datakeys.map(obj=>{
                let parse=data[obj]
                parse.key=obj
                return parse
            })
            dispatch({
                type:GET_POSTS,
                payload:mapped.reverse()
            })
        
        }).catch(err=>{
            dispatch({
                type:GET_POSTS,
                payload:[]
            })
        })
}
//get post by id
export const getPost = (college,id)=>dispatch=>{
    dispatch(setPostLoading())
    axios.get(local_host+'/api/posts/'+college+'/getPost/'+id)
        .then(obj=>{
            console.log(obj)
            let data=obj.data;
            dispatch({
                type:GET_POST,
                payload:data.data
            })
        
        }).catch(err=>{
            dispatch({
                type:GET_POST,
                payload:null
            })
        })
}
//delete post
export const deletePost = (college,id)=>dispatch=>{   
    axios.delete(local_host+'/api/posts/'+college+'/deletePost/'+id)
        .then(obj=>{
            dispatch({
                type:DELETE_POST,
                payload:id
            })
        
        }).catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

//like post
export const likePost = (college,id)=>dispatch=>{
    axios.get(local_host+'/api/posts/'+college+'/post/'+id+'/like')
        .then(obj=>{
            dispatch(getPosts(college))
        })
        .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}
//dislike posts
export const disLikePost = (college,id)=>dispatch=>{
    axios.get(local_host+'/api/posts/'+college+'/post/'+id+'/dislike')
        .then(obj=>{
            dispatch(getPosts(college))
        })
        .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

export const addComment=(obj,id)=>dispatch=>{
    dispatch(setPostLoading);
let college=obj.institution;
let comment={
    description:obj.data,
    fullName:obj.fullName,
    college:college
}
axios.post(local_host+"/api/posts/"+college+"/post/"+id+"/comment",comment)
    .then(obj=>{
        dispatch(getPost(college,id))
       
    })
    .catch(err=>dispatch({
        type:GET_ERRORS,
        payload:err
    }))
}
//set post loading
export const setPostLoading=()=>{
    return{
        type:POST_LOADING
    }
}