import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap"
export class ReportList extends Component {
  render() {
      const {project} = this.props;
      let view
      if(project.reports){
            view=Object.keys(project.reports).map((obj,i)=>{
                const data=project.reports[obj]
                return <Card key={i}>
                <Card.Body>
                Report no-{i+1}
                </Card.Body>
                </Card>
            })
      }else{
          view=<Card>
          <Card.Body>
          <h6>No reports yet</h6>
          <Button>Add one now</Button>
          </Card.Body>
          </Card>
      }
    return (
     <div>
     {view}
     </div>
    )
  }
}

export default ReportList
