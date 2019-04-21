import React, { Component } from 'react'
import {Nav} from "react-bootstrap"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {getProjectByName} from "../../actions/projectAction";
import Spinner from "../Common/Spinner"
import Details from "./SubComponents/Details";
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
    let view
    if(loading){
      view=<Spinner />
    }else{
    if(selected==="details"){
      view=<Details project={project}/>
    }else if(selected==="add-person"){
      view=<p>Add To Team</p>
    }else if(selected==="add-guide"){
      view=<p>Add Guide</p>
    }else if(selected==="reports"){
      view=<p>Reports</p>
    }
  }
    return (
      <div className="row ">
      <div className="col-md-2 jumbotron">
      <Nav variant="pills" defaultActiveKey={this.state.selected} className="flex-column">
      <Nav.Item>
      <Nav.Link eventKey="details" onSelect={this.onSelect.bind(this,"details")}><h6>Details</h6></Nav.Link>
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
      </div>
      <div className="col-md-10 jumbotron">
      {view}
      </div>
      </div>
    )
  }
}
ProjectMoreAction.propTypes={
  project:PropTypes.object.isRequired,
  getProjectByName:PropTypes.func.isRequired
}

const mapStateToProps = state=>({
  project:state.project
})
export default connect(mapStateToProps,{getProjectByName})(ProjectMoreAction)
