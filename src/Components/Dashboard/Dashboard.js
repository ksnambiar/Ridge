import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCurrentProfile,deleteAccount} from '../../actions/profileAction';
import Spinner from '../Common/Spinner';
import {Link} from 'react-router-dom'
// import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Projects from './Projects';
import WorkingProjects from "./WorkingProjects";
class Dashboard extends Component {
    componentDidMount(){
        this.props.getCurrentProfile()
    }
    onClickDelete(e){
        this.props.deleteAccount();
    }
  render() {
      const uid = localStorage.getItem('uid');
      const {user} = this.props.auth;
      const {profile,loading} = this.props.profile;
      let dashboardContent;
      if(profile===null || loading){
        dashboardContent =<Spinner/>
      }else{
          //check to see if logged in user has profile data
        if(Object.keys(profile).length>1){
            dashboardContent=<div>
            <p className="lead text-muted">
            Welcome, <Link to={`/profile/${uid}`}>{user.fullName}</Link>
            </p>           
             <Experience experience={profile.experience}/>
           <Projects projects={profile.projects}/>
            <WorkingProjects projects = {profile.wprojects} />
            <div style={{marginBottom: '60px'}}>
            {
            // <button className="btn btn-danger" onClick={this.onClickDelete.bind(this)}>Delete Account</button>
            }
            </div>
            </div>
        }else{
            dashboardContent=(<div><h4>
                Welcome, {user.fullName}</h4>
                <p>You have not created a profile yet</p>
                <Link to='/dev/create-profile' className='btn btn-large btn-info'>Create Profile</Link>
                </div>)
        }
      }
    return (
      <div className="dashboard">
        <div className="container">
        <div className="row">
        <div className="col-md-12">
        <h1 className="display-4">
            Dashboard
        </h1>
        {dashboardContent}
        </div>
        </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired,
    deleteAccount:PropTypes.func.isRequired
}

const mapStateToProps = (state)=>({
    auth:state.auth,
    profile:state.profile
})
export default connect(mapStateToProps,{getCurrentProfile,deleteAccount})(Dashboard);