import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap"
import ReportList from "./ReportList";
export class ReportMain extends Component {
  render() {
    const {project} =this.props 
    let tview
    if(project){
        tview=<Card>
        <Card.Header>
        <Button>Add Report</Button>
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
       {tview}
      </div>
    )
  }
}

export default ReportMain
