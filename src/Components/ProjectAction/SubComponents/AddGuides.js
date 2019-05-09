import React, { Component } from 'react'
import {Card} from "react-bootstrap";
import {connect} from "react-redux";
import PropTypes from "prop-types"
import {getGuideProfiles,addGuide} from "../../../actions/profileAction";
import GuideList from "./GuideList";
import ProjectGuide from "../../Project/ProjectGuide"
import Spinner from "../../Common/Spinner"
export class AddGuides extends Component {
  componentDidMount(){
    const {institution}=this.props
    this.props.getGuideProfiles(institution);
  }
  render() {
    const {guideProfiles,loading} = this.props.profile;
    let view1,view2;
    if(loading){
      view1=<Spinner />
      view2=<Spinner />
    }else{
      view1=<GuideList profiles={guideProfiles} project={this.props.project} pid={this.props.pid}/>
    }
    
    return (
      <div>
      <div className="row">
      <div className="col-md-8">
      <Card className="ma2">
      <Card.Header>
      <h4>Guides around you</h4>
      </Card.Header>
      <Card.Body>
      {view1}
      </Card.Body>
      </Card>
      </div>
      <div className="col-md-4">
      <Card className="ma2">
        <Card.Header>
        <h4>Guides</h4>
        </Card.Header>
        <Card.Body>
        <ProjectGuide project={this.props.project}/>
        </Card.Body>
        </Card>
        </div>
      </div>
        
       
      </div>
    )
  }
}
AddGuides.propTypes={
  profile:PropTypes.object.isRequired,
  getGuideProfiles:PropTypes.func.isRequired
}
const mapStateToProps = state=>({
  profile:state.profile
})

export default connect(mapStateToProps,{getGuideProfiles})(AddGuides);