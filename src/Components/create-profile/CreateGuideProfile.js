import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createGuideProfile} from '../../actions/profileAction';
import {withRouter} from 'react-router-dom'
class CreateGuideProfile extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         displaySocialInputs: false,
         handle: '',
         institution: '',
         location:'',
         status:'',
         aoi:'',
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
      this.onClick=this.onClick.bind(this)
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
        aoi:this.state.aoi,
        githubusername: this.state.githubusername,
        bio:this.state.bio,
        twitter: this.state.twitter,
        facebook: this.state.facebook,
        linkedin: this.state.linkedin,
        instagram: this.state.instagram,
        fullName:this.props.auth.user.fullName,
        contact:this.props.auth.user.contact,
        email:this.props.auth.user.email,
        handle:this.state.handle
      }
      this.props.createGuideProfile(data,this.props.history)
    }
    onClick(e){
      e.preventDefault();
      let dsi=this.state.displaySocialInputs;
      this.setState({displaySocialInputs:!dsi})
    }
  render() {
    const {displaySocialInputs}=this.state;
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
      <div className="center panel col-lg-8 col-md-9 col-sm-12">
      <form className="pa4 w-90 center" onSubmit={this.onSubmit}>
      <div className="form-group">
      <label htmlFor="handle">Your profile handle:</label>
        <input type="text" name="handle" className="form-control" placeholder="Profile Handle" value={this.state.handle} onChange={this.onChange}/>
      </div>
      <div className="form-group">
      <label htmlFor="institution">Name of your College/Institution *</label>
      <select name="institution" className="form-control" placeholder="Institution" onChange={this.onChange} value={this.state.institution} defaultValue={this.state.institution}>
      <option value="">----</option>
      <option value="Ramaiah Institute of Technology">Ramaiah Institute of Technology</option>
      <option value="Sahyadri College of Engineering">Sahyadri College of Engineering</option>
      <option value="Ambedkar Institute of Technology">Ambedkar Institute of Technology</option>
      <option value="Vivekananda College of Engineering">Vivekananda College of Engineering</option>
      <option value="National Institute Of Engineering">National Institute Of Engineering(NIE)</option>
      </select>
      </div>
      <div className="form-group">
      <label htmlFor="location">Location of your College/Institution *</label>
      <select name="location" className="form-control" placeholder="Location" onChange={this.onChange} value={this.state.location} defaultValue={this.state.location}>
      <option value="">----</option>
      <option value="Bangalore">Bangalore</option>
      <option value="Mangalore">Mangalore</option>
      <option value="Puttur">Puttur</option>
      <option value="Mysore">Mysore</option>
      </select>
      </div>
      <div className="form-group">
      <label htmlFor="aoi">What are your Area of interests? (enter interests separated with a ',')</label>
      <input type="text" name="aoi" className="form-control" placeholder="Area of Interests" onChange={this.onChange} value={this.state.aoi}/>
      </div>
      <div className="form-group">
      <label htmlFor="location">Your Github Username</label>
      <input type="text" name="githubusername" className="form-control" placeholder="github username" onChange={this.onChange} value={this.state.githubusername}/>
      </div>
      <div className="form-group">
      <label htmlFor="location">A Short intro about yourself:</label>
      <textarea rows="4" cols="50" name="bio" className="form-control" placeholder="a short bio about yourself"  onChange={this.onChange} value={this.state.bio}/>
      </div>
      <p>add Social Network links(optional) </p>
      <button type="button" className="btn btn-warning mv3" onClick={this.onClick}>add Links</button>
      {displaySocialInputs?<div>
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
      
      </div>:null}

      <div className="form-group">
      <input type="submit" value="Submit" className="btn btn-block btn-primary"/>
      </div>
      </form>
        
      </div>    
      </div>
    )
  }
}
CreateGuideProfile.propTypes = {
    auth:PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
    createGuideProfile:PropTypes.func.isRequired
}

const mapStateToProps = state=>({
    auth:state.auth,
    profile: state.profile,
    errors: state.errors
})
export default connect(mapStateToProps,{createGuideProfile})(withRouter(CreateGuideProfile))