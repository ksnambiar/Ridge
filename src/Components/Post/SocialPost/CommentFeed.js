import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentItem from './CommentItem'
import Spinner from '../../Common/Spinner';
import {Card} from 'react-bootstrap'
export default class CommentFeed extends Component {
  render() {
    const {comments,post_id} = this.props;
    // console.log(post)
    // let comments=post.comments
    if(comments){
    let keys = Object.keys(comments);
    return <Card className="col-md-10 col-sm-12 center">
      <Card.Header>
      <h6>{keys.length} comments</h6> 
      </Card.Header>
      <Card.Body>
    {keys.map((key,i)=>{
        return <CommentItem key={i} comment={comments[key]} post_id={post_id} commentId={key}  />
    })}
    </Card.Body>
    </Card>
  }else{
    return <Spinner />
  }
  }
}
CommentFeed.propTypes = {
  // comments: PropTypes.object.isRequired,
  post_id:PropTypes.string.isRequired
}
