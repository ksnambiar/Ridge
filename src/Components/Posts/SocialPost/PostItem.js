import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
import {Button,Badge} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {deletePost,likePost,disLikePost} from '../../../actions/postAction';
class PostItem extends Component {
    
  onClickDelete(id){
    const {profile} = this.props.profile
    this.props.deletePost(profile.institution,id)
  }
  onClickLike(id){
    const {profile} = this.props.profile;
    this.props.likePost(profile.institution,id)
  }
  onClickDisLike(id){
    const {profile} = this.props.profile;
    this.props.disLikePost(profile.institution,id)
  }
  findUserLike(likes){
    console.log(likes)
    if(likes!==null){
    let uid = localStorage.getItem("uid");
    let likeArray=Object.keys(likes);
    console.log(likeArray)
    if(likeArray.filter(like=>likes[like].uid===uid).length>0){
      console.log("true")
      return true
    }else{
      console.log("false")
      return false
    }
  }else{
    return false
  }
  }
  render() {
    const {post} = this.props
    let d =new Date(post.timestamp)
    let ud = localStorage.getItem("uid");
    return (
      <div className="mv3 col-md-9 center">
        <Card >
            <Card.Header>
            <img
                  className="rounded-circle bg-light-blue"
                  src={`https://robohash.org/${post.ownerName}`}
                  alt="Profile Photo"
                  style={{width:"50px",height:"50px",float:"left"}}
            />
            <h6>
            {post.ownerName}
            </h6>
            <p>
            {d.toDateString()} at {d.toTimeString().slice(0,8)}
            </p>
            </Card.Header>
            <Card.Body>
            {post.postData}
            </Card.Body>
            <Card.Footer>
            <Button className="like" onClick={this.onClickLike.bind(this,post.key)} disabled={!(this.findUserLike.bind(this,post.likes))?true:false}>
            <div>
            <Octicon icon={getIconByName("thumbsup")} style={{float:"left"}}  />
            <Badge variant="light" className="ml1">{post.likes?Object.keys(post.likes).length:0}</Badge>
            </div>
            
            </Button>
            <Button className="mh2 dislike" onClick={this.onClickDisLike.bind(this,post.key)}>
            <div>
            <Octicon icon={getIconByName("thumbsdown")} style={{float:"left"}}/>
            <Badge variant="light" className="ml1">{post.dislikes?Object.keys(post.dislikes).length:0}</Badge>
            </div>
            </Button>
            <Link to={`/post/${post.key}`}  className="mh2 btn btn-dark" >
            <div style={{float:"left"}}>
            <Octicon icon={getIconByName("comment")}/>
            </div>
            
            <Badge variant="light" className="ml1">{post.comments?Object.keys(post.comments).length:0}</Badge>

            </Link>
            {post.ownerUid===ud?
            <Button variant="dark" style={{justifyContent:"end"}} onClick={this.onClickDelete.bind(this,post.key)}>
            <Octicon icon={getIconByName("trashcan")}/>

            </Button>:null
          }
            </Card.Footer>
        </Card>
      </div>
    )
  }
}
PostItem.propTypes={
    auth:PropTypes.object.isRequired,
    post:PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired,
    deletePost:PropTypes.func.isRequired,
    likePost:PropTypes.func.isRequired,
    disLikePost:PropTypes.func.isRequired
}
const mapStateToProps = state=>({
    auth:state.auth,
    profile:state.profile
})

export default connect(mapStateToProps,{deletePost,likePost,disLikePost})(PostItem)