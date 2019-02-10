import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createProfile} from '../../actions/profileAction';
import {withRouter} from 'react-router-dom'
class CreateProfile extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         displaySocialInputs: false,
         year:'',
         handle: '',
         institution: '',
         location:'',
         status:'',
         skills:'',
         githubusername: '',
         bio: '',
         twitter: '',
         facebook: '',
         linkedin: '',
         youtube: '',
         instagram: '',
         errors:{}
      }
      this.onSubmit=this.onSubmit.bind(this)
      this.onChange=this.onChange.bind(this)
    }
    componentWillReceiveProps(nextProps){
      if(nextProps.errors){
        this.setState({errors:nextProps.errors})
      }
    }
    onChange(e){
      this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
      e.preventDefault();
      console.log(this.state)
      let data={
        institution:this.state.institution,
        location:this.state.location,
        skills:this.state.skills,
        githubusername: this.state.githubusername,
        bio:this.state.bio,
        twitter: this.state.twitter,
        facebook: this.state.facebook,
        linkedin: this.state.linkedin,
        instagram: this.state.instagram,
        fullName:this.props.auth.user.fullName,
        contact:this.props.auth.user.contact,
        email:this.props.auth.user.email
      }
      this.props.createProfile(data,this.props.history)
    }
  render() {
    return (
      <div className="center">
      <div className="container">
      <div className="row">
          <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Create your Profile</h1>
        <p className="lead text-center">
        Let's get some information to make your profile stand out
        </p>
        <small className="d-block pb-3">*=required fields</small>
          </div>
        
      </div>
      </div>
      <div className="center panel shadow-5">
      <form className="pa4 w-50 center" onSubmit={this.onSubmit}>
      <div className="form-group">
      <input type="text" name="institution" className="form-control" placeholder="Institution" onChange={this.onChange} value={this.state.institution}/>
      </div>
      <div className="form-group">
      <input type="text" name="location" className="form-control" placeholder="Location" onChange={this.onChange} value={this.state.location}/>

      </div>
      <div className="form-group">
      <input type="text" name="year" className="form-control" placeholder="Year" onChange={this.onChange} value={this.state.year}/>
      </div>
      <div className="form-group">
      <input type="text" name="skills" className="form-control" placeholder="skills" onChange={this.onChange} value={this.state.skills}/>
      </div>
      <div className="form-group">
      <input type="text" name="githubusername" className="form-control" placeholder="github username"  onChange={this.onChange} value={this.state.githubusername}/>
      </div>
      <div className="form-group">
      <input type="text" name="bio" className="form-control-lg w-100 h4" placeholder="a short bio about yourself"  onChange={this.onChange} value={this.state.bio}/>
      </div>
      <p>add Social Network links(optional) </p>
      <div className="form-group">
      <input type="url" name="twitter" className="form-control" placeholder="twitter"  onChange={this.onChange} value={this.state.twitter}/>
      </div>
      <div className="form-group">
      <input type="url" name="facebook" className="form-control" placeholder="facebook" onChange={this.onChange} value={this.state.facebook}/>
      </div>
      <div className="form-group">
      <input type="url" name="linkedin" className="form-control" placeholder="linkedin" onChange={this.onChange} value={this.state.linkedin}/>
      </div>
      <div className="form-group">
      <input type="url" name="instagram" className="form-control" placeholder="instagram" onChange={this.onChange} value={this.state.instagram}/>
      </div>
      <div className="form-group">
      <input type="submit" value="Submit" className="btn btn-block btn-primary"/>
      </div>
      </form>
        
      </div>    
      </div>
    )
  }
}
CreateProfile.propTypes = {
    auth:PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
    createProfile:PropTypes.func.isRequired
}

const mapStateToProps = state=>({
    auth:state.auth,
    profile: state.profile,
    errors: state.errors
})
export default connect(mapStateToProps,{createProfile})(withRouter(CreateProfile))