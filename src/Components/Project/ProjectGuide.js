import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
class ProjectGuide extends Component {
  render() {
    const {project} = this.props
    let tview;
    if(project.guide){
        let guide=project.guide
    tview=guide.map(obj=>{
      return <Card className="ml2 lightbutton" style={{ width: '15rem',height: '16rem',float:"left"}}>
      <Card.Body className="center">
      <div className="row">
      <Link to={`/profile/${obj.uid}`} className="center projecttext">{obj.fullName}</Link>
      </div>
      </Card.Body>
      </Card>
    })
    }else{
        tview=<Card className="center lightbutton projecttext">
        <Card.Body>
        <h6>No Guides yet</h6>
        </Card.Body>
        </Card>
    }
    return (
     <div className="row mh2">
     <div className="col-xs-12 project head">
     {tview}
     </div>
     </div>
    )
  }
}
export default ProjectGuide;