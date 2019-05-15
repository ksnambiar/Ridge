import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import {Card,Button,Badge} from "react-bootstrap"
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
import Modal from 'react-responsive-modal'

export class GuideProjects extends Component {
    state={
        open:false,
        selectedState:{
        }
    }
    onOpenModal = (val,key) => {
        console.log(val)
          this.setState({ open: true,selectedState:{
              name:val.name,
              domains:val.domains.map(obj=>{
                  return <Badge className="mh1 row" variant="success">{obj}</Badge>
              }),
              team:val.team.map(obj=>obj.fullName),
              description:val.description,
              key:key,
              guide:val.guide?val.guide.map(obj=>obj.fullName):"None",
              githublink:val.githublink
          } });
  
        };
      onClickDelete(id){
        this.setState({open:false,selectedState:{}})
        // this.props.deleteExperience(id);
        alert("delete this "+id)
    
    }
    onCloseModal = () => {
        this.setState({ open: false,selectedState:{} });
      };

  render() {
      const {profile} = this.props;
      const {open} = this.state
      let view
      if(profile.projects){
        view = Object.keys(profile.projects).map((obj,i)=>{
            const data=profile.projects[obj]
            return <Card key={i} className="ma2" style={{ width: '15rem' }}>
            <Card.Body className="center">
            <h5 className="center">{data.name}</h5>
            <div className="row center">
            {
            // <Button className="rounded-circle mh1" title="info" onClick={this.onOpenModal.bind(this,data,obj)}><Octicon icon={getIconByName("info")}/></Button>
            }
            <Link to={`/project-action/${profile.institution}/${data.name}/${obj}`}  className=" btn btn-info rounded-circle mh1"><Octicon icon={getIconByName("gear")}/></Link>
            </div>
            <Modal open={open} onClose={this.onCloseModal} center>
          <div className="panel">
          <h3>{this.state.selectedState.name}</h3>
          <h6>Domains Covered:</h6><p>{this.state.selectedState.domains}</p>
          <h6>Team Members:</h6><p>{this.state.selectedState.team}</p>
          <h6>Guided By:</h6><p>{this.state.selectedState.guide}</p>
          <a href={this.state.selectedState.githublink} target="_blank">Github Link</a>
          <br/>
          <button className="btn btn-danger" onClick={this.onClickDelete.bind(this,this.state.selectedState.key)}><Octicon icon={getIconByName("trashcan")}/></button>
          </div>
        </Modal>
            </Card.Body>
            </Card>
        })
      }else{
          view=<h5 className="center ma3">No Projects Yet</h5>
      }
    return (
      <div>
       <h3>Guide Projects</h3>
        <Card className="mv1">
        {view}
        </Card>
      </div>
    )
  }
}

export default GuideProjects
