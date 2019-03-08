import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentItem from './CommentItem'
import Spinner from '../../Common/Spinner';
import {Card} from 'react-bootstrap'
export default class CommentFeed extends Component {
  render() {
    const {post,post_id} = this.props;
    // console.log(post)
    // let post=post.comments
    if(post){
      if(post.comments){
        let comments=post.comments
        let keys = Object.keys(comments);
    return <Card className="col-md-11 col-sm-12 center">
      <Card.Header>
      <h6>{keys.length} comments</h6> 
      </Card.Header>
      <Card.Body>
    {keys.reverse().map((key,i)=>{
        return <CommentItem key={i} comment={comments[key]} post_id={post_id} commentId={key}  />
    })}
    </Card.Body>
    </Card>}else{
      return null
    }
  }else{
    return <Spinner />
  }
  }
}
CommentFeed.propTypes = {
  // comments: PropTypes.object.isRequired,
  post_id:PropTypes.string.isRequired
}
