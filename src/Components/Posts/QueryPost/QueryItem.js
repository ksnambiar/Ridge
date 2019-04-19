import React, { Component } from 'react'
import {Card,Button,Badge} from 'react-bootstrap'
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {deleteQuery,likeQuery,disLikeQuery} from "../../../actions/postAction"
class QueryItem extends Component {
    onClickDelete(id){
        const {profile} = this.props.profile
        this.props.deleteQuery(profile.institution,id)
      }
      onClickLike(id){
        const {profile} = this.props.profile;
        this.props.likeQuery(profile.institution,id)
      }
      onClickDisLike(id){
        const {profile} = this.props.profile;
        this.props.disLikeQuery(profile.institution,id)
      }
    render(){
    const {query} = this.props
    let d =new Date(query.timestamp)
    let ud = localStorage.getItem("uid");
    return (
      <div className="mv3 col-md-12 center">
        <Card >
            <Card.Header>
            <img
                  className="rounded-circle bg-light-blue"
                  src={`https://robohash.org/${query.ownerName}`}
                  alt="Profile Photo"
                  style={{width:"50px",height:"50px",float:"left"}}
            />
            <h6>
            {query.ownerName}
            </h6>
            <p>
            {d.toDateString()} at {d.toTimeString().slice(0,8)}
            </p>
            </Card.Header>
            <Card.Body>
            {query.postData}
            </Card.Body>
            
                <Card.Footer>
            <Button className="like" onClick={this.onClickLike.bind(this,query.key)}>
            <div>
            <Octicon icon={getIconByName("thumbsup")} style={{float:"left"}}  />
            <Badge variant="light" className="ml1">{query.likes?Object.keys(query.likes).length:0}</Badge>
            </div>
            
            </Button>
            <Button className="mh2 dislike hover-bg-red" onClick={this.onClickDisLike.bind(this,query.key)}>
            <div>
            <Octicon icon={getIconByName("thumbsdown")} style={{float:"left"}}/>
            <Badge variant="light" className="ml1">{query.dislikes?Object.keys(query.dislikes).length:0}</Badge>
            </div>
            </Button>
            
            <Link to={`/query/${query.key}`} title="answers"  className="mh2 btn btn-dark" >
            <div style={{float:"left"}}>
            <Octicon icon={getIconByName("comment-discussion")}/>
            </div>
            
            <Badge variant="light" className="ml1">{query.answers?Object.keys(query.answers).length:0}</Badge>

            </Link>
            
            {query.ownerUid===ud?
            <Button variant="dark" style={{justifyContent:"end"}} onClick={this.onClickDelete.bind(this,query.key)}>
            <Octicon icon={getIconByName("trashcan")}/>

            </Button>:null
          }
            </Card.Footer>
        
        </Card>
      </div>
    )
  }
}
QueryItem.propTypes={
    auth:PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired,
    deleteQuery:PropTypes.func.isRequired,
    likeQuery:PropTypes.func.isRequired,
    disLikeQuery:PropTypes.func.isRequired
}
const mapStateToProps = state=>({
    auth:state.auth,
    profile:state.profile
})
export default connect(mapStateToProps,{deleteQuery,likeQuery,disLikeQuery})(QueryItem);