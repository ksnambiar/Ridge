import React, { Component } from 'react'
import SocPostForm from './SocPostForm';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPosts} from '../../../actions/postAction';
import PostFeed from './PostFeed';
import Spinner from '../../Common/Spinner';
class SocialPost extends Component {
    componentDidMount(){
        if(this.props.auth.utype==="guide"){
          this.props.getPosts(this.props.profile.guideProfile.institution)

        }else{
          this.props.getPosts(this.props.profile.profile.institution)
        }
    }
  render() {
      const {posts,loading} = this.props.post;
      let  postfeed;
      if(posts===null || loading){
        postfeed = <Spinner />
      }
      else{
          postfeed=<PostFeed posts = {posts}/>
      }
    return (
      <div>
      <div className="row mv2">
        <SocPostForm />
        </div>
        <div className="row">
        {postfeed}
        </div>
      </div>
    )
  }
}
SocialPost.propTypes = {
    post:PropTypes.object.isRequired,
    getPosts:PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired
}
const mapStateToProps = state=>({
    post:state.post,
    profile:state.profile,
    auth:state.auth
})
export default connect(mapStateToProps,{getPosts})(SocialPost);