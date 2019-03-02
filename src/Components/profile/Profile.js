import React, { Component } from 'react'
import ProfileHeader from './ProfileHeader';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';
import ProfileAbout from './ProfileAbout';
import Spinner from '../Common/Spinner';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProfileByHandle } from '../../actions/profileAction';
class Profile extends Component {
    componentWillMount(){
        if(this.props.match.params.handle){
            this.props.getProfileByHandle(this.props.match.params.handle);            
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.profile.profile===null ){
            this.props.history.push('/not-found')
        }
    }
  render() {
        const {loading,profile} = this.props.profile;
    let profileContent;
    if(profile===null || loading){
            profileContent=<Spinner />
    }else{
     
       profileContent=(<div>
       <div className="row">
       <div className="col-md-6">
       <Link to="/developers" className="btn btn-light mb-3 float-left">
       Back to Profiles
        </Link>
       </div>
       <div className="col-md-6">
    
        </div>
       </div>
       <ProfileHeader profile={profile}/>
        <ProfileAbout profile={profile}/>
        <ProfileCreds projects={profile.projects} experience={profile.experience}/>
        {profile.githubusername?(<ProfileGithub username={profile.githubusername}/>):null}
        </div>)
    }
    return (
     <div>
     <div className="container">
     <div className="row">
     <div className="col-md-12">
        {profileContent
        }
        </div>
        </div></div>
      </div>
    )
  }
}
Profile.propTypes={
    profile:PropTypes.object.isRequired,
    getProfileByHandle:PropTypes.func.isRequired
}

const mapStateToProps = (state)=>({
    auth:state.auth,
    profile:state.profile

})
export default connect(mapStateToProps,{getProfileByHandle})(Profile);