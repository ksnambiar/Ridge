import React, { Component } from 'react'
import {connect} from "react-redux";
import {getQuery} from "../../../actions/postAction";
class QPost extends Component {
    componentDidMount(){
        const {profile} = this.props.profile
        let id=this.props.match.params.id;
        this.props.getQuery(profile.institution,id);
    }
  render() {
    return (
      <div>
        query post
      </div>
    )
  }
}
const mapStateToProps = state=>({
    profile:state.profile
})
export default connect(mapStateToProps,{getQuery})(QPost)