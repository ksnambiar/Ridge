import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap"
export class ReportList extends Component {
  render() {
      const {project} = this.props;
      let view
      if(project.reports){
            view=Object.keys(project.reports).map((obj,i)=>{
                const data=project.reports[obj]
                return <Card key={i} className="mv2">
                <Card.Body>
                <div className="mr2 float-left">
                {i+1}
                </div>
                {data.fileName}
               <a href={data.url} target="_blank" className="btn btn-info ml3">View</a>
                </Card.Body>
                </Card>
            })
      }else{
          view=<Card>
          <Card.Body>
          <h6>No reports added yet </h6>
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
