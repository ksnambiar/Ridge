import React, { Component } from 'react'
import ReportList from "../ProjectAction/SubComponents/ReportList";
import {Card} from "react-bootstrap"
export class ReportView extends Component {
  render() {
    const {project} =this.props 
    let tview
    if(project){
        tview=<Card>
        <Card.Body>
        <ReportList project={project}/>
        </Card.Body>
        </Card>
    }else{
        tview=<p>loading....</p>
    }
    return (
      <div>
        {tview}
      </div>
    )
  }
}

export default ReportView
