import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap"
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
import Modal from 'react-responsive-modal';

export class GuideEducation extends Component {
    state={
        open:false,
        selectedState:{
        }
    }
    onOpenModal = (val,key) => {
        this.setState({  open: true,selectedState:{
            location:val.location,
            degree:val.degree,
            from:val.from,
            to:val.to,
            institution:val.institution,
            key:key
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
        if(profile.education){
          view = Object.keys(profile.education).map((obj,i)=>{
            const data=profile.education[obj]
            return <Card key={i} className="ma2" style={{ width: '15rem' }}>
            <Card.Body className="center">
            <h5 className="center">{data.degree}</h5>
            <div className="row center">
            <Button className="rounded-circle mh1" onClick={this.onOpenModal.bind(this,data,obj)} title="info"><Octicon icon={getIconByName("info")}/></Button>            </div>
            <Modal open={open} onClose={this.onCloseModal} center>
            <div>
            <h3>{this.state.selectedState.degree}</h3>
            <h6>Institution:</h6><p>{this.state.selectedState.institution}</p>
            <h6>Duration:</h6><p>{this.state.selectedState.from} - {this.state.selectedState.to=== ''?'Now':this.state.selectedState.to}</p>
            <h6>Location:</h6><p>{this.state.selectedState.location}</p>
            <button className="btn btn-danger" onClick={this.onClickDelete.bind(this,this.state.selectedState.key)}><Octicon icon={getIconByName("trashcan")}/></button>
            </div>
            </Modal>
            </Card.Body>
            </Card>
          })
        }else{
            view=<h5 className="center ma3">No Education Information yet</h5>
        }
      return (
        <div>
         <h3>Guide Education</h3>
          <Card className="mv1">
          {view}
          </Card>
        </div>
      )
    }
}

export default GuideEducation
