import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addComment} from '../../../actions/postAction';
import {Nav,Button} from 'react-bootstrap';
class CommentForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         comment:"",
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
        const {addComment} = this.props;
        const {user,utype} = this.props.auth;
        const {profile,guideProfile} = this.props.profile

        let obj={
            fullName:user.fullName,
            data:this.state.comment,
            
        }
        if(utype==="guide"){
            obj.institution=guideProfile.institution
        }else{
            obj.institution=profile.institution
        }
        addComment(obj,this.props.post_id)
        this.setState({comment:''})
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
  render() {
    return (
      <div className="col-md-9 col-sm-12 center ">
      <div className="panel ba  b--light-gray jumbotron bg-white pa2">
        <div className="panel-header">
        {
//             <Nav variant="tabs" defaultActiveKey="Comment now">
//   <Nav.Item>
//     <Nav.Link eventKey="Comment now">comment now</Nav.Link>
//   </Nav.Item>
// </Nav>
}
        </div>
        <div className="panel-body">
        <form onSubmit={this.onSubmit}>
        <textarea cols="10" rows="3" placeholder="Whats on your mind today?" value={this.state.comment} name="comment" onChange={this.onChange} className="form-control"></textarea>
        <Button variant="dark" className="mt2" type="Submit">Post comment</Button>
        </form>
        </div>
      </div>
      </div>
    )
  }
}
 CommentForm.propTypes = {
    auth:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
    addComment:PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired,
    post:PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
    auth:state.auth,
    errors:state.errors,
    profile:state.profile,
    post:state.post
})

export default connect(mapStateToProps,{addComment})(CommentForm);