import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getGuideProfiles} from "../../actions/profileAction"
import Spinner from "../Common/Spinner";
import GuideItem from "./GuideItem"
import SearchGuide from './SearchGuide';
export class Guides extends Component {
  state={
    query:''
  }
  componentDidMount(){
      let college = this.props.match.params.college;
      if(college){
          this.props.getGuideProfiles(college)
      }
  }
  search(data){
    this.setState({query:data})
  }
  render() {
      const {guideProfiles,loading}=this.props.profile;
      const {query}=this.state;
      let view;  
      if(loading || guideProfiles===null){
        view=<Spinner />
        }else{
          if(query===''){
            view=Object.keys(guideProfiles).map((key,i)=>{
                let data=guideProfiles[key]
                return <GuideItem profile={data} key={i} gid={key}/>
            })
          }else{
            view=Object.keys(guideProfiles).map((key,i)=>{
              let data=guideProfiles[key]
              return data.fullName.toLowerCase().includes(query.toLowerCase())?<GuideItem profile={data} key={i} gid={key}/>:null
          })
          }
        }
    return (
      <div >
      <div className="display-4 text-center">
      Guide Profiles
      </div>
      <p className="lead text-center">
      Browse Guide developers    
      </p>
      <SearchGuide search={this.search.bind(this)}/>
        {view}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    profile:state.profile
})

export default connect(mapStateToProps,{getGuideProfiles})(Guides)
