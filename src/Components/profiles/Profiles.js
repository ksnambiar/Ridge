import React, { Component } from 'react'
import Spinner from '../Common/Spinner';
import {connect} from 'react-redux';
import {getProfiles} from '../../actions/profileAction';
import ProfileItem from './ProfileItem';
import PropTypes from 'prop-types'
class Profiles extends Component {
    componentDidMount(){
        this.props.getProfiles();        
    }
  render() {
      let {profiles,loading} = this.props.profile;
      let profileKey;
      let profileVal;
      let profileItems,length;
      if(profiles===null || loading){
          profileItems=<Spinner />
      }else{
        length=Object.keys(profiles).length;
          if(length>0){
            profileKey=Object.keys(profiles);
            profileVal=Object.values(profiles);
              profileItems=profileVal.map((profile,i)=>

                (<ProfileItem key={profileKey[i]} profile={profile}/>)
              )
          }else{
              profileItems=<h4>No Profiles Found</h4>
          }
      }

    return (
      <div className="container">
      <div className="row">
      <div className="col-md-12">
      <div className="display-4 text-center">
      Developers Profiles
      </div>
      <p className="lead text-center">
      Browse and Connect with Developers      
      </p>
      {profileItems}
      </div>
      </div>
      </div>
    )
  }
}
Profiles.propTypes={
    getProfiles:PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired
}
const mapStateToProps = (state)=>({
    profile:state.profile
})
export default connect(mapStateToProps,{getProfiles})(Profiles);