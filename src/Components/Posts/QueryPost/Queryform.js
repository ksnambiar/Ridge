import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addQuery} from '../../../actions/postAction';
import {Nav,Button} from 'react-bootstrap';
import {withRouter} from "react-router-dom";
class QueryForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         query:"",
         errors:{}
      }
      this.onChange=this.onChange.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
    }
    onSubmit(e){
        e.preventDefault();
        const {addQuery} = this.props;
        const {user} = this.props.auth;
        const {profile} = this.props.profile
        let obj={
            fullName:user.fullName,
            data:this.state.post,
            institution:profile.institution
        }
        addQuery(obj,this.props.history)
        this.setState({post:''})
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
        <textarea cols="15" rows="7" placeholder="What is your doubt?" value={this.state.post} name="post" onChange={this.onChange} className="form-control"></textarea>
        <Button variant="dark" className="mt3" type="Submit">Post Query</Button>
        </form>
        </div>
      </div>
      </div>
    )
  }
}
 QueryForm.propTypes = {
    auth:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
    addQuery:PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
    auth:state.auth,
    errors:state.errors,
    profile:state.profile
})

export default connect(mapStateToProps,{addQuery})(withRouter(QueryForm));