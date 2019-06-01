import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCurrentGuideProfile,deleteAccount} from '../../../actions/profileAction';
import Spinner from '../../Common/Spinner';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import  GuideProfileActions from './GuideProfileActions'
import GuideProjects from "./GuideProjects";
import MentoringProjects from "./MentoringProjects"
import GuideEducation from "./GuideEducation";
import GuideExperience from "./GuideExperience";
class GuideDashboard extends Component {
    componentDidMount(){
        this.props.getCurrentGuideProfile()
    }
    onClickDelete(e){
        this.props.deleteAccount();
    }
  render() {
      const uid = localStorage.getItem('uid');
      const {user} = this.props.auth;
      const {guideProfile,loading} = this.props.profile;
      let dashboardContent;
      if(guideProfile===null || loading){
        dashboardContent =<Spinner/>
      }else{
          //check to see if logged in user has profile data
        if(Object.keys(guideProfile).length>1){
            dashboardContent=<div>
            
            <div>
            <p className="lead text-muted">
            Welcome, <Link to={`/guide-profile/${uid}`}>{user.fullName}</Link>
            </p>
            {
            // <GuideProfileActions institution={guideProfile.institution}/>
            }
            <div style={{marginBottom: '60px'}}>
            </div>
            </div>
            <div className="mv2">
            <GuideProjects profile={guideProfile}/>
            </div>
            <div className="mv2">
            <MentoringProjects profile={guideProfile} />
            </div>
            <div className="mv2">
            <GuideEducation profile={guideProfile} />
            </div>
            <div className="mv2">
            <GuideExperience profile={guideProfile} />
            </div>
            <div className="mv2">
            {
                // <button className="btn btn-danger" onClick={this.onClickDelete.bind(this)}>Delete Account</button>

            }
            </div>
            </div>
        }else{
            dashboardContent=(<div>
                <h4>Welcome, {user.fullName}</h4>
                <p>You have not created a profile yet</p>
                <Link to='/guide/create-profile' className='btn btn-large btn-info'>Create Profile</Link>
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
GuideDashboard.propTypes = {
    getCurrentGuideProfile: PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired,
    deleteAccount:PropTypes.func.isRequired
}

const mapStateToProps = (state)=>({
    auth:state.auth,
    profile:state.profile
})
export default connect(mapStateToProps,{getCurrentGuideProfile,deleteAccount})(GuideDashboard);