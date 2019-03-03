import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';
class PostItem extends Component {
    
  render() {
    const {post} = this.props
    return (
      <div className="mv1 col-md-9 center">
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
            <Card.Footer>
            footer
            </Card.Footer>
        </Card>
      </div>
    )
  }
}
PostItem.propTypes={
    auth:PropTypes.object.isRequired,
    post:PropTypes.object.isRequired
}
const mapStateToProps = state=>({
    auth:state.auth
})

export default connect(mapStateToProps)(PostItem)