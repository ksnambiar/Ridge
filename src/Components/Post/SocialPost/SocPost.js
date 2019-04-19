import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm';
import {Link} from 'react-router-dom'
import Spinner from '../../Common/Spinner';
import {getPost} from "../../../actions/postAction";
import PostShow from './PostShow'
import CommentFeed from './CommentFeed'
class SocPost extends Component {
    componentDidMount(){
        const {profile,guideProfile} = this.props.profile
        let id=this.props.match.params.id;
        if(this.props.auth.utype==="guide"){
            this.props.getPost(guideProfile.institution,id);

        }else{
            this.props.getPost(profile.institution,id);

        }
    }
  render() {
      const {post,loading} = this.props;
      let key = this.props.match.params.id;
      let postContent;
      if(post === null || loading || Object.keys(post).length ===0){
          postContent = <Spinner />
      }else{
          postContent=(
              <div>
              <PostShow post={post.post}/>
              <div>
            <CommentForm post_id={key}/>
            <CommentFeed post_id={key} post={post.post}/>
             </div>
              </div>
          )
      }
    return (
      <div>
         <div className="container">
         <div className="row">
          <div className="col-md-12">
          <Link to="/feeds" className="btn btn-light mb-3">
            Go Back
          </Link>
          {postContent}
          </div>
         </div>
         </div>
      </div>
    )
  }
}
SocPost.propTypes = {
    profile:PropTypes.object.isRequired,
    post:PropTypes.object.isRequired,
    getPost:PropTypes.func.isRequired
}

const mapStateToProps = state=>({
    profile:state.profile,
    post:state.post,
    auth:state.auth
})

export default connect(mapStateToProps,{getPost})(SocPost)