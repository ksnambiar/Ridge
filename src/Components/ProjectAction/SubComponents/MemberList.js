import React, { Component } from 'react'
import {Card,Badge, Button} from "react-bootstrap"
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
import {connect} from "react-redux";
import {Link} from "react-router-dom"
import PropTypes from "prop-types";
import {addDeveloperToTeam} from "../../../actions/projectAction";


export class MemberList extends Component {
    addDev(pid,did,name,college){
        const {project}=this.props;
        this.props.addDeveloperToTeam(pid,did,name,college,project.name)
    }
  render() {
      const {profiles,project} = this.props
      const uid = localStorage.getItem("uid");
      let join_req=project.join_requests
      console.log(join_req)
      let pend=[],acc=[];
      if(join_req){

      pend=Object.keys(join_req).map((key,i)=>{
        if(join_req[key].status==="pending"){
        return join_req[key].uid
        }
      })
      acc=Object.keys(join_req).map((key,i)=>{
        if(join_req[key].status==="resolved"){
        return join_req[key].uid
        }
      })
    }
      acc.push(uid)
      console.log(pend)
      let view
      if(profiles){
          view=Object.keys(profiles).map((obj,i)=>{
              const data=profiles[obj]
              const domains=data.skills.split(",").map((obj,i)=>{
                return <Badge key={i} variant="primary" className="mh1">{obj}</Badge>
              })
              let act_view
              if(pend.includes(obj)){
                act_view=<div className="row center">
                <Badge variant="warning">
                Yet to Respond
                </Badge>
                </div>
              }else if(acc.includes(obj)){
                act_view=<div className="row center">
                <Badge variant="success">
                Already Part of the team
                </Badge>
                </div>
              }
              else {
                act_view=<div className="row center">
                <Button variant="success" className="mh2" onClick={this.addDev.bind(this,this.props.pid,obj,data.fullName,data.institution)}><Octicon icon={getIconByName("plus")}/></Button>
                <Link to={`/profile/${obj}`} className="btn btn-primary" className="mh2"><Octicon icon={getIconByName("file")}/></Link>
                </div>
              }
              return acc.includes(obj)?null:<Card key={i} className="mv2">
              <Card.Body>
              <div className="row">
              <div className="col-md-3">
              <img
                  className="rounded-circle center"
                  src={`https://robohash.org/${data.fullName}`}
                  alt="Profile Photo"
                  style={{height:"5rem",width:"5rem"}}
                />
              </div>
              <div className="col-md-9">
              <div className="center">  
              <h5 className="mv1">{data.fullName}</h5>
                {domains}
              </div>
              {act_view}
              </div>
              </div>
              </Card.Body>
              </Card>
          })
      }else{
          view=null
      }
    return (
      <div>
        {view}
      </div>
    )
  }
}

export default connect(null,{addDeveloperToTeam})(MemberList)
