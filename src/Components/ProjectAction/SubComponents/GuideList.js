import React, { Component } from 'react'
import {Card,Button,Badge} from "react-bootstrap"
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
import {addGuide} from "../../../actions/projectAction";
import {connect} from "react-redux";
import PropTypes from "prop-types"
export class GuideList extends Component {
  choseGuide(college,pid,gid,name,guideName){
    const {project} = this.props
    this.props.addGuide(college,pid,gid,name,project.name,guideName)
  }
    render() {
        const {profiles,pid,project} = this.props
        const uid = localStorage.getItem("uid");
        
        let join_req=project.guide_requests
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


        let view
        if(profiles){
            view=Object.keys(profiles).map((obj,i)=>{
                const data=profiles[obj]
                const domains=data.aoi.split(",").map((obj1,i)=>{
                  return <Badge key={i} variant="success" className="mh1">{obj1}</Badge>
                })
                let act_view
              if(pend.includes(obj)){
                act_view=<div className="row center">
                <Badge variant="warning">
                Yet to Respond
                </Badge>
                </div>
              }
              else {
                act_view=<div className="row center">
                <Button variant="success" className="mh2" onClick={this.choseGuide.bind(this,data.institution,pid,obj,data.fullName,data.fullName)}><Octicon icon={getIconByName("plus")}/></Button>
                <Button variant="info" className="mh2"><Octicon icon={getIconByName("file")}/></Button>
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
GuideList.propTypes = {
  addGuide:PropTypes.func.isRequired
}

export default connect(null,{addGuide})(GuideList)
