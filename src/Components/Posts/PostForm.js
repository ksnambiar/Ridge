import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Nav} from 'react-bootstrap'
class PostForm extends Component {
    onSelect(e){
        this.props.changeView(e)
    }
  render() {
    return (
      <div>
      <Nav fill variant="tabs" defaultActiveKey="Post">
  <Nav.Item>
    <Nav.Link eventKey="Post" onSelect={this.onSelect.bind(this,"SocialPost")}>Post</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="Queries" onSelect={this.onSelect.bind(this,"Queries")}>Queries</Nav.Link>
  </Nav.Item>
  {
//       <Nav.Item>
//     <Nav.Link eventKey="link-1"></Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link eventKey="disabled" disabled>
//       Disabled
//     </Nav.Link>
//   </Nav.Item>
}
</Nav>
      </div> 
    )
  }
}

export default PostForm;