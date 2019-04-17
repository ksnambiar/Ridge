import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap'
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
import Spinner from '../Common/Spinner'
import {Link} from 'react-router-dom'
class AddDeveloper extends Component {
    state={
        loading:false,
        profiles:null
    }
    addDev=(pid,did,name,college)=>{
      console.log("pressed addDev")
      this.props.onAddDev(pid,did,name,college)
    }
  render() {
      const {profiles,profile} = this.props;
      let pending=[]
      if(profile.projects[this.props.pid].join_requests){
      pending=Object.values(profile.projects[this.props.pid].join_requests).map(obj=>(obj.uid))
      }
      let lists
      let uid = localStorage.getItem("uid")
      if(profiles){
        let keys = Object.keys(profiles);
        lists=keys.map((obj,i)=>{
            let temp=profiles[obj]
            temp.uid=obj
          if(temp.uid!=uid){
            return <div key={i} className="row ba b--light-gray mv2 shadow-5">
            <div className="col-md-2">
            <img src={`https://robohash.org/${temp.fullName}`} className="rounded-circle" alt="profile image"/>
            </div>
            <div className="col-md-6 center">
            <h4>
            {temp.fullName}
            </h4>
            </div>
            <div className="col-md-4 center">
            {pending.includes(temp.uid)?<Button className="btn hover-bg-light-red dim rounded-circle bg-red mh2"><Octicon icon={getIconByName("x")}/></Button>            :
            <Button className="btn rounded-circle bg-green mh2" onClick={this.addDev.bind(this,this.props.pid,temp.uid,temp.fullName,temp.institution)}><Octicon icon={getIconByName("plus")}/></Button>
            }
            <Link to={`/profile/${temp.uid}`} className="btn rounded-circle btn-info"><Octicon icon={getIconByName("info")}/></Link>
            </div>
            </div>
          }
        })
      }else{
          lists=<Spinner/>
      }
    return (
      <div>
      <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a Developer to your team
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{maxHeight: 'calc(100vh - 210px)', overflowY: 'auto'}}>
        {lists}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
      </div>
    )
  }
}


export default AddDeveloper;