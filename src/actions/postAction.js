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

