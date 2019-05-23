import React, { Component } from 'react'
import Spinner from '../Common/Spinner';
import {connect} from 'react-redux';
import {getProfiles} from '../../actions/profileAction';
import ProfileItem from './ProfileItem';
import PropTypes from 'prop-types';
import SearchDev from './SearchDev';
class Profiles extends Component {
  state={
    query:''
  }
    componentDidMount(){
        this.props.getProfiles();        
    }
    search(data){
      this.setState({query:data})
    }
  render() {
      let {profiles,loading} = this.props.profile;
      const {query}=this.state;
      let profileKey;
      let profileVal;
      let profileItems,length;
      if(profiles===null || loading){
          profileItems=<Spinner />
      }else{
        length=Object.keys(profiles).length;
          if(length>0){
            if(query===''){
              profileKey=Object.keys(profiles);
              console.log(profileKey)
              profileVal=Object.values(profiles);
              profileItems=profileVal.map((profile,i)=>

                (Object.keys(profile).length>1?
                <ProfileItem key={i} uid={profileKey[i]} profile={profile}/>
                :
                null)
              )
            }else{
              //edit here for search results
              profileKey=Object.keys(profiles);
              console.log(profileKey)
              profileVal=Object.values(profiles);
              profileItems=profileVal.map((profile,i)=>

                (Object.keys(profile).length>1?profile.fullName.toLowerCase().includes(query.toLowerCase())?
                <ProfileItem key={i} uid={profileKey[i]} profile={profile}/>:null
                :
                null)
              )
            }
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
      <SearchDev search={this.search.bind(this)}/>
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