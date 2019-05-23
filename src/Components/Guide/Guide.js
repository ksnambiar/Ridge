import React, { Component } from 'react'
import ProfileHeader from "../profile/ProfileHeader";
import {getGuideProfileByGid} from "../../actions/profileAction";
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import GuideCreds from "./GuideCreds";
import GuideGithub from "./GuideGithub";
import Spinner from '../Common/Spinner';
import GuideAbout from "./GuideAbout";
export class Guide extends Component {
    componentWillMount(){
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
          <div className="row mv2">
          <Link to={`/guides/${guideProfile.institution}`} className="btn btn-light mb-3 float-left">
       Back to Profiles
         </Link>
         </div>
          <div>
          <ProfileHeader profile={guideProfile}/>
          </div>
          <hr />
          <div>
          <GuideAbout profile={guideProfile} />
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
