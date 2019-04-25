import React, { Component } from 'react'
import ProfileHeader from "../profile/ProfileHeader";
import {getGuideProfileByGid} from "../../actions/profileAction";
import {connect} from "react-redux"
import PropTypes from "prop-types"
import GuideCreds from "./GuideCreds";
import GuideGithub from "./GuideGithub";
import Spinner from '../Common/Spinner';
export class Guide extends Component {
    componentDidMount(){
        if(this.props.match.params.gid){
            this.props.getGuideProfileByGid(this.props.match.params.gid);            
        }
    }
  render() {
      const {guideProfile,loading} = this.props.profile
      let view
      if(guideProfile===null || loading){
          view=<Spinner />
      }else{
          view=<div>
          <div>
          <ProfileHeader profile={guideProfile}/>
          </div>
          <div>
          aoi and bio
          </div>
          <div>
          <GuideCreds profile={guideProfile} />
          </div>
        <div>
        <GuideGithub profile={guideProfile}/>
          </div>
          
        </div>
      }
    return (
      <div>
      <div>
      <Link to="/guide" className="btn btn-light mb-3 float-left">
       Back to Profiles
        </Link>
      </div>
      {view}
      </div>
    )
  }
}
Guide.propTypes={
    profile:PropTypes.object.isRequired,
    getGuideProfileByGid:PropTypes.func.isRequired
}

const mapStateToProps = state=>({
    profile:state.profile
})
export default connect(mapStateToProps,{getGuideProfileByGid})(Guide)
