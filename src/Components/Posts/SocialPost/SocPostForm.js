import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addPost} from '../../../actions/postAction';
import {Nav,Button} from 'react-bootstrap';
class SocPostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:""
      }
      this.onChange=this.onChange.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state.post);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
  render() {
    return (
      <div className="col-md-7 col-sm-12 center ">
      <div className="panel ba  b--light-gray jumbotron bg-white pa2 panel-primary">
        <div className="panel-header">
        <Nav variant="tabs" defaultActiveKey="Post now">
  <Nav.Item>
    <Nav.Link eventKey="Post now">Post now</Nav.Link>
  </Nav.Item>
</Nav>
        </div>
        <div className="panel-body">
        <form onSubmit={this.onSubmit}>
        <textarea cols="10" rows="3" placeholder="Whats on your mind today?" value={this.state.post} name="post" onChange={this.onChange} className="form-control"></textarea>
        <Button variant="dark" className="mt2" type="Submit">Post</Button>
        </form>
        </div>
      </div>
      </div>
    )
  }
}
const propTypes = {
    auth:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
    addPost:PropTypes.func.isRequired
}

const mapStateToProps = (state)=>({
    auth:state.auth,
    errors:state.errors
})

export default connect(mapStateToProps,{addPost})(SocPostForm);