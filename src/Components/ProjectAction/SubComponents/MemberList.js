import React, { Component } from 'react'
import {Card,Badge, Button} from "react-bootstrap"
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addDeveloperToTeam} from "../../../actions/profileAction";


export class MemberList extends Component {
    addDev(pid,did,name,college){
        const {project}=this.props;
        this.props.addDeveloperToTeam(pid,did,name,college,project.name)
    }
  render() {
      const {profiles} = this.props
      const uid = localStorage.getItem("uid");
      let view
      if(profiles){
          view=Object.keys(profiles).map((obj,i)=>{
              const data=profiles[obj]
              const domains=data.skills.split(",").map((obj,i)=>{
                return <Badge key={i} variant="success" className="mh1">{obj}</Badge>
              })
              
              return <Card key={i} className="mv2">
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
              <div className="row center">
              {
              <Button variant="success" className="mh2" onClick={this.addDev.bind(this,this.props.pid,obj,data.fullName,data.institution)}><Octicon icon={getIconByName("plus")}/></Button>
              }<Button variant="info" className="mh2"><Octicon icon={getIconByName("file")}/></Button>
              </div>
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
