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
            let data=obj.data.posts.post;
            let datakeys = Object.keys(data);
            let mapped = datakeys.map(obj=>{
                let parse=data[obj]
                parse.key=obj
                return parse
            })
            dispatch({
                type:GET_POSTS,
                payload:mapped
            })
        }).catch(err=>{
            dispatch({
                type:GET_POSTS,
                payload:null
            })
        })
}

//set post loading
export const setPostLoading=()=>{
    return{
        type:POST_LOADING
    }
}