import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCurrentProfile} from '../../actions/profileAction';
import Spinner from '../Common/Spinner';

class Dashboard extends Component {
    componentDidMount(){
        this.props.getCurrentProfile()
    }
  render() {
      const {profile,loading} = this.props.profile;
      let dashboardContent;
      if(profile===null || loading){
        dashboardContent =<Spinner/>
      }else{
          //check to see if logged in user has profile data
        if(Object.keys(profile).length>1){
            dashboardContent=<div>you dashboard stuffs</div>
        }else{
            dashboardContent=<h4>Please complete your profile</h4>
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
    profile:PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
    auth:state.auth,
    profile:state.profile
})
export default connect(mapStateToProps,{getCurrentProfile})(Dashboard);