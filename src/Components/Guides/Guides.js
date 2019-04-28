import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getGuideProfiles} from "../../actions/profileAction"
import Spinner from "../Common/Spinner";
import GuideItem from "./GuideItem"
export class Guides extends Component {
  componentDidMount(){
      let college = this.props.match.params.college;
      if(college){
          this.props.getGuideProfiles(college)
      }
  }
  render() {
      const {guideProfiles,loading}=this.props.profile;
      let view;  
      if(loading || guideProfiles===null){
        view=<Spinner />
        }else{
            view=Object.keys(guideProfiles).map((key,i)=>{
                let data=guideProfiles[key]
                return <GuideItem profile={data} key={i} gid={key}/>
            })
        }
    return (
      <div >
        {view}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    profile:state.profile
})

export default connect(mapStateToProps,{getGuideProfiles})(Guides)
