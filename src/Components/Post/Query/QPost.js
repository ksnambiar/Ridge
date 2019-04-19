import React, { Component } from 'react'
import {connect} from "react-redux";
import QueryShow from "./QueryShow";
import AnswerFeed from "./AnswerFeed";
import AnswerForm from "./AnswerForm";
import {getQuery} from "../../../actions/postAction";
import Spinner from "../../Common/Spinner";
class QPost extends Component {
  state={
    visible:false
  }
    componentDidMount(){
        const {profile,guideProfile} = this.props.profile
        let id=this.props.match.params.id;
        if(this.props.auth.utype==="guide"){
          this.props.getQuery(guideProfile.institution,id);

        }else{
          this.props.getQuery(profile.institution,id);

        }
    }
    showForm(){
      const {visible} = this.state
      this.setState({visible:!visible})
    }
  render() {
    const {post,loading} = this.props.post
    const {visible} = this.state;
    let view
    if(loading){
      view = <Spinner />
    }else{
      view = <div>
      <QueryShow query={post}/>
      {
        visible?<AnswerForm id={this.props.match.params.id} />
        :null
      }
      <AnswerFeed  query={post} id={this.props.match.params.id} showForm={this.showForm.bind(this)}/>
      </div>
    }
    return (
      <div>
       {view}
      </div>
    )
  }
}
const mapStateToProps = state=>({
    profile:state.profile,
    post:state.post,
    auth:state.auth
})
export default connect(mapStateToProps,{getQuery})(QPost)