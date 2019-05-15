import React, { Component } from 'react'
import {Nav, Card} from "react-bootstrap"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {Link} from "react-router-dom";
import {getProjectByName} from "../../actions/projectAction";
import Spinner from "../Common/Spinner"
import Details from "./SubComponents/Details";
import AddMembers from "./SubComponents/AddMembers";
import AddGuides from "./SubComponents/AddGuides";
import ReportMain from "./SubComponents/ReportMain";
import EditDetails from "./SubComponents/EditDetails";
import Stats from "./SubComponents/Stats";
export class ProjectMoreAction extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       selected:"details"
    }
  }
  componentDidMount(){
    this.props.getProjectByName(this.props.match.params.institution,this.props.match.params.id);            

  }
  onSelect(comp){
    this.setState({selected:comp})
  }
  
  render() {
    const {selected} = this.state
    const {project,loading} = this.props.project
    const {auth} = this.props;
    let view
    if(loading){
      view=<Spinner />
    }else{
    if(selected==="details"){
      view=<Details project={project}/>
    }else if(selected==="add-person"){
      view=<AddMembers project={project} institution={this.props.match.params.institution} pid={this.props.match.params.pid}/>
    }else if(selected==="add-guide"){
      view=<AddGuides project={project} institution={this.props.match.params.institution} pid={this.props.match.params.pid}/>
    }else if(selected==="reports"){
      view=<ReportMain project={project} pid={this.props.match.params.pid} institution={this.props.match.params.institution}/>
    }
    else if(selected==="edit-details"){
      view=<EditDetails project={project} pid={this.props.match.params.pid} institution={this.props.match.params.institution}/>
    }else if (selected==="stats"){
      view=<Stats project={project} pid={this.props.match.params.pid} institution={this.props.match.params.institution}/>
    }
  }
    return (
      <div>
      <div className="row mt3">
      <Link to={`/${auth.utype}/dashboard`} className="btn btn-light">Back to Dashboard</Link>

      </div>
      <div className="row mt1">
      <div className="col-md-2">
      <Card>
      <Card.Body>
      <Nav variant="pills" defaultActiveKey={this.state.selected} className="flex-column">
      <Nav.Item>
      <Nav.Link eventKey="details" onSelect={this.onSelect.bind(this,"details")}><h6>Details</h6></Nav.Link>
    </Nav.Item>
    {
    project?project.githublink!==""?<Nav.Item>
      <Nav.Link eventKey="stats" onSelect={this.onSelect.bind(this,"stats")}><h6>Stats</h6></Nav.Link>
    </Nav.Item>:null:null
    }
    <Nav.Item>
      <Nav.Link eventKey="edit-details" onSelect={this.onSelect.bind(this,"edit-details")}><h6>edit-details</h6></Nav.Link>
    </Nav.Item>
      <Nav.Item>
    <Nav.Link eventKey="add-person" onSelect={this.onSelect.bind(this,"add-person")}><h6>Add Members</h6></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="add-guide" onSelect={this.onSelect.bind(this,"add-guide")}><h6>Add Guide</h6></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="reports" onSelect={this.onSelect.bind(this,"reports")}>
      <h6>Reports</h6>
    </Nav.Link>
  </Nav.Item>
    </Nav>
    </Card.Body>
    </Card>
      </div>
      <div className="col-md-10">
      {view}
      </div>
      </div>
      </div>
    )
  }
}
ProjectMoreAction.propTypes={
  project:PropTypes.object.isRequired,
  getProjectByName:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
}

const mapStateToProps = state=>({
  project:state.project,
  auth:state.auth
})
export default connect(mapStateToProps,{getProjectByName})(ProjectMoreAction)
