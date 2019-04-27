import React, { Component } from 'react'
import {Card,Button,Modal} from "react-bootstrap"
import ReportList from "./ReportList";
import {uploadReport} from "../../../actions/projectAction";
import {connect} from "react-redux";

export class ReportMain extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         upload:false,
         selectedFile:null
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
        const {institution,project} = this.props
        console.log(this.state.selectedFile)
        const {pid} = this.props
        const data = new FormData()
        data.append('file',this.state.selectedFile)
        this.props.uploadReport(pid,institution,project.name,data)
        this.setState({upload:false})
    }
    onChangeHandler(e){
        this.setState({selectedFile:e.target.files[0]})
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
        <input type="file" name="rep" onChange={this.onChangeHandler.bind(this)}/>
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

export default connect(null,{uploadReport})(ReportMain)
