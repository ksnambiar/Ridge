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
      return <Card className="ml2" style={{ width: '15rem',height: '16rem',float:"left"}}>
      <Card.Body className="center">
      <div className="row">
      <img src={`https://robohash.org/${obj.fullName}`} className="btn_col center" style={{ width: '11rem',height: '11rem' }} alt="profile pic" className="rounded-circle"/>
      </div>
      <div className="row">
      <Link to={`/profile/${obj.uid}`} className="center">{obj.fullName}</Link>
      </div>
      </Card.Body>
      </Card>
    })
    }else{
        tview=<Card className="center">
        <Card.Body>
        <h6>No Guides yet</h6>
        </Card.Body>
        </Card>
    }
    return (
     <div className="row">
     <div className="col-xs-12">
     {tview}
     </div>
     </div>
    )
  }
}
export default ProjectGuide;