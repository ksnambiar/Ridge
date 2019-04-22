import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap"
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
import Modal from 'react-responsive-modal';

export class GuideExperience extends Component {
    state={
        open:false,
        selectedState:{
        }
    }
    onOpenModal = (val,key) => {
        this.setState({ open: true,selectedState:{
            location:val.location,
            company:val.company,
            from:val.from,
            to:val.to,
            designation:val.designation,
            key:key,
            description:val.description
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
        const {open}=this.state
        let view
        if(profile.experience){
          view = Object.keys(profile.experience).map((obj,i)=>{
            const data=profile.experience[obj]
            return <Card key={i} className="ma2" style={{ width: '15rem' }}>
            <Card.Body className="center">
            <h5 className="center">{data.company}</h5>
            <div className="row center">
            <Button className="rounded-circle mh1" title="info" onClick={this.onOpenModal.bind(this,data,obj)}><Octicon icon={getIconByName("info")}/></Button>
           </div>
           <Modal open={open} onClose={this.onCloseModal} center>
           <div className="panel">
           <h3>{this.state.selectedState.company}</h3>
           <h6>Designation:</h6><p>{this.state.selectedState.designation}</p>
           <h6>Duration:</h6><p>{this.state.selectedState.from} - {this.state.selectedState.to=== ''?'Now':this.state.selectedState.to}</p>
           <h6>Description:</h6><p>{this.state.selectedState.description}</p>
           <button className="btn btn-danger" onClick={this.onClickDelete.bind(this,this.state.selectedState.key)}><Octicon icon={getIconByName("trashcan")}/></button>
           </div>
            </Modal>
            </Card.Body>
            </Card>
          })
        }else{
            view=<h5 className="center ma3">No experience Information yet</h5>
        }
      return (
        <div>
         <h3>Guide experience</h3>
          <Card className="mv1">
          {view}
          </Card>
        </div>
      )
    }
}

export default GuideExperience
