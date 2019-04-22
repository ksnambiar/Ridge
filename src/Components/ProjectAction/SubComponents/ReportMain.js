import React, { Component } from 'react'
import {Card,Button,Modal} from "react-bootstrap"
import ReportList from "./ReportList";
export class ReportMain extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         upload:false
      }
    }
    closeModal(){
        this.setState({upload:false})
    }
    openModal(){
        this.setState({upload:true})
    }
    uploadSubmit(e){
        e.preventDefault()
        console.log("submitted")
    }
    onChangeHandler(e){
        console.log(e.target.files[0])
    }
  render() {
    const {project} =this.props 
    let tview
    if(project){
        tview=<Card>
        <Card.Header>
        <Button onClick={this.openModal.bind(this)}>Add Report</Button>
        </Card.Header>
        <Card.Body>
        <ReportList project={project}/>
        </Card.Body>
        </Card>
    }else{
        tview=<p>not existing</p>
    }
    return (
      <div>
      <div>
      <Modal show={this.state.upload} onHide={this.closeModal.bind(this)} centered>
      <Modal.Body>
        <Card>
        <Card.Header>
        Upload Report
        </Card.Header>
        <Card.Body>
        <form onSubmit={this.uploadSubmit.bind(this)}>
        <div className="form-control">
        <input type="file" name="rep" onChange={this.onChangeHandler}/>
        </div>
        <Button type="submit">Upload</Button>
        </form>
        </Card.Body>
        </Card>
        </Modal.Body>
        </Modal>
        </div>
        <div>
       {tview}
       </div>
      </div>
    )
  }
}

export default ReportMain
