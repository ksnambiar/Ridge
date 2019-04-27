import {GET_POSTS,GET_POST,GET_ERRORS,POST_LOADING,ADD_POST,DELETE_POST} from './types'
import axios from 'axios';
import {local_host,heroku_url} from '../api/Api_ref'

//add post
export const addPost = (data)=>dispatch=>{
    let college=data.institution;
    let uid=localStorage.getItem("uid");
    let obj={
        data:{fullName:data.fullName,
        post:data.data
        },
        timeofsend:Date.now()
    }
    axios.post(heroku_url+'/api/posts/'+uid+"/"+college+'/addPost',obj)
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
    
    axios.get(heroku_url+'/api/posts/'+college+'/allPosts')
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
    axios.get(heroku_url+'/api/posts/'+college+'/getPost/'+id)
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
    axios.delete(heroku_url+'/api/posts/'+college+'/deletePost/'+id)
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
    let uid=localStorage.getItem("uid");
    axios.get(heroku_url+'/api/posts/'+uid+"/"+college+'/post/'+id+'/like')
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
    let uid=localStorage.getItem("uid");
    axios.get(heroku_url+'/api/posts/'+uid+'/'+college+'/post/'+id+'/dislike')
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
//adding comment to a post
export const addComment=(obj,id)=>dispatch=>{
    dispatch(setPostLoading);
    let uid=localStorage.getItem("uid");
let college=obj.institution;
let comment={
    description:obj.data,
    fullName:obj.fullName,
    college:college
}
axios.post(heroku_url+"/api/posts/"+uid+'/'+college+"/post/"+id+"/comment",comment)
    .then(obj=>{
        dispatch(getPost(college,id))
       
    })
    .catch(err=>dispatch({
        type:GET_ERRORS,
        payload:err
    }))
}




//adding query
export const addQuery = (data,history)=>dispatch=>{
    let college=data.institution;
    let uid=localStorage.getItem("uid");

    let obj={
        data:{fullName:data.fullName,
        post:data.data
        },
        type:"query",
        timeofsend:Date.now()
    }
    axios.post(heroku_url+'/api/posts/'+uid+"/"+college+'/addPost',obj)
        .then(obj=>{
            console.log(obj)
            dispatch({
                type:ADD_POST,
                payload:obj.data.response
            })
            history.push("/feeds")
        }).catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

//get query by id
export const getQuery = (college,id)=>dispatch=>{
    dispatch(setPostLoading())
    axios.get(heroku_url+'/api/posts/'+college+'/getQuery/'+id)
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

//getting all the queries
export const getQueries = (college)=>dispatch=>{
dispatch(setPostLoading())

    axios.get(heroku_url+`/api/posts/${college}/allQueries`)
        .then(obj=>{
            let data=obj.data.queries;
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
                type:GET_ERRORS,
                payload:err
            })
        })

}
//delete Query
export const deleteQuery = (college,id)=>dispatch=>{   
    axios.delete(heroku_url+'/api/posts/'+college+'/deleteQuery/'+id)
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
export const likeQuery = (college,id)=>dispatch=>{
    let uid=localStorage.getItem("uid");

    axios.get(heroku_url+'/api/posts/'+uid+"/"+college+'/query/'+id+'/like')
        .then(obj=>{
            dispatch(getQueries(college))
        })
        .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}
//dislike posts
export const disLikeQuery = (college,id)=>dispatch=>{
    let uid=localStorage.getItem("uid");

    axios.get(heroku_url+'/api/posts/'+uid+"/"+college+'/query/'+id+'/dislike')
        .then(obj=>{
            dispatch(getQueries(college))
        })
        .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}
//adding answer to a query
export const addAnswer=(obj,id)=>dispatch=>{
    dispatch(setPostLoading);
    let uid=localStorage.getItem("uid");
let college=obj.institution;
let comment={
    description:obj.data,
    fullName:obj.fullName,
    college:college
}
axios.post(heroku_url+"/api/posts/"+uid+"/"+college+"/query/"+id+"/answer",comment)
    .then(obj=>{
        dispatch(getQuery(college,id))
       
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