import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Spinner from '../../Common/Spinner'
import {Card} from 'react-bootstrap'
export default class PostShow extends Component {
  render() {
      const {post} = this.props
      if(post){
    return (
        <div className="mv3 col-md-9 center">
        <Card >
            <Card.Header>
            <img
                  className="rounded-circle bg-light-blue"
                  src={`https://robohash.org/${post.ownerName}`}
                  alt="Profile Photo"
                  style={{width:"40px",height:"40px",float:"left"}}
            />
            <h6>
            {post.ownerName}
            </h6>
            </Card.Header>
            <Card.Body>
            {post.postData}
            </Card.Body>
        </Card>
      </div>
    )
  }else{
    return <Spinner />
  }
}

}
PostShow.propTypes={
    post:PropTypes.object.isRequired
}