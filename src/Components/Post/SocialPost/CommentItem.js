import React, { Component } from 'react'

export default class CommentItem extends Component {
    
  render() {
    const {comment,post_id,commentId}=this.props;
    const d = new Date(comment.timestamp);
    console.log(d.toDateString())
    console.log(d.toTimeString())
    return (
      <div className="center">
        <div className="row pa2 mv2 bb b--light-silver">
        <div className="col-md-2">
        <img  className="rounded-circle bg-light-blue"
        src={`https://robohash.org/${comment.fullName}`}
        alt="Profile Photo"
        style={{width:"70px",height:"60px",float:"left"}}
        />
        </div>
        <div className="col-md-10">
        <h5>{comment.fullName}</h5>
        <h6>Posted on {d.toDateString()} at {d.toTimeString().slice(0,8)}</h6>
        <p>{comment.description}</p>
        </div>
        </div>
      </div>
    )
  }
}
