import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
class ProjectGuide extends Component {
  render() {
    const {project} = this.props
    let tview;
    if(project.guide){
        let guide=project.guide
    tview=guide.map((obj,i)=>{
      return <Link to={`/guide-profile/${obj.uid}`} key={i} className="center"><li className="list-group-item dim">
      <h6  className="center">{obj.fullName}</h6>
       </li></Link>
      
     
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