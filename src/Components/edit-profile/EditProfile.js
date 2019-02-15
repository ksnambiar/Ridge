import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createProfile,getCurrentProfile} from '../../actions/profileAction';
import {withRouter} from 'react-router-dom'
class EditProfile extends Component {
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
         errors:{},
         fullName:'',
         contact:'',
         email:'',
         projects:null,
         experience:null
      }
      this.onSubmit=this.onSubmit.bind(this)
      this.onChange=this.onChange.bind(this)
    }
    componentDidMount(){
      this.props.getCurrentProfile()
    }
    componentWillReceiveProps(nextProps){
      if(nextProps.errors){
        this.setState({errors:nextProps.errors})

      }
      if(this.props.profile.profile){
          const profile=this.props.profile.profile;
          profile.year=profile.year?profile.year:'';
          profile.institution=profile.institution?profile.institution:''
          profile.location=profile.location?profile.location:''
          profile.skills=profile.skills?profile.skills:''
          profile.githubusername=profile.githubusername?profile.githubusername:''
          profile.bio=profile.bio?profile.bio:''
          profile.twitter=profile.twitter?profile.twitter:''
          profile.facebook=profile.facebook?profile.facebook:''
          profile.linkedin=profile.linkedin?profile.linkedin:''
          profile.instagram=profile.instagram?profile.instagram:''
          profile.fullName=profile.fullName?profile.fullName:''
          profile.contact=profile.contact?profile.contact:''
          profile.email=profile.email?profile.email:''
          profile.projects = profile.projects?profile.projects:null;
          profile.experience = profile.experience?profile.experience:null;
          this.setState({
              year:profile.year,
              institution:profile.institution,
              location:profile.location,
              skills:profile.skills,
              githubusername:profile.githubusername,
              bio: profile.bio,
              twitter: profile.twitter,
              facebook: profile.facebook,
              linkedin: profile.linkedin,
              instagram: profile.instagram,
              fullName:profile.fullName,
              contact:profile.contact,
              email:profile.email,
              projects:profile.projects,
              experience:profile.experience

          })
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
        fullName:this.state.fullName,
        contact:this.state.contact,
        email:this.state.email,
        projects:this.state.projects,
        experience:this.state.experience
        
      }
      this.props.createProfile(data,this.props.history)
    }
  render() {
    return (
      <div className="center br2 ba dark-gray b--black-10">
      <div className="container">
      <div className="row">
          <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Edit your Profile</h1>
        <p className="lead text-center">
        Happy to be updated about your whereabouts
        </p>
        <small className="d-block pb-3">*=required fields</small>
          </div>
        
      </div>
      </div>
      <div className="center panel shadow-5 col-lg-7 col-md-8 ">
      <form className="pa4 w-80 center" onSubmit={this.onSubmit}>
      <div className="form-group">
      <select class="form-control" name="institution" placeholder="college" onChange={this.onChange}>
      <option value="Ramaiah Institute of Technology">Ramaiah Institute of Technology</option>
      <option>P E S Institute of Technology</option>
      <option>B M S Institute of Technology</option>
      <option>R V College of Engineering</option>
      <option>University Vishwesharaiah College of Engineering</option>
    </select>
      {
      //  <input type="text" name="institution" className="form-control" placeholder="Institution" onChange={this.onChange} value={this.state.institution}/>
      }
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
EditProfile.propTypes = {
    profile:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
    createProfile:PropTypes.func.isRequired,
    getCurrentProfile:PropTypes.func.isRequired
}

const mapStateToProps = state=>({
    profile: state.profile,
    errors: state.errors
})
export default connect(mapStateToProps,{createProfile,getCurrentProfile})(withRouter(EditProfile))