import React, { Component } from 'react'
import {Nav, Card} from "react-bootstrap"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {Link} from "react-router-dom";
import {getProjectByName} from "../../actions/projectAction";
import Details from "../ProjectAction/SubComponents/Details";
import Stats from "../ProjectAction/SubComponents/Stats";
import Spinner from "../Common/Spinner"
import ReportView from "./ReportView";
export class MprojectAction extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           selected:"details"
        }
      }
      componentDidMount(){
        this.props.getProjectByName(this.props.match.params.institution,this.props.match.params.name);            
    
      }
  onSelect(comp){
        this.setState({selected:comp})
  }
  render() {
    let view
    const {selected} = this.state
    const {project,loading} = this.props.project
    const {auth} = this.props;
    if(loading){
      view=<Spinner />
    }else{
    if(selected==="details"){
      view=<Details project={project}/>
    }
    else if(selected==="reports"){
      view=<ReportView project={project} pid={this.props.match.params.pid} institution={this.props.match.params.institution}/>
    }
    else if (selected==="stats"){
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
        <Nav variant="pills"  defaultActiveKey={this.state.selected} className="flex-column">
        <Nav.Item>
        <Nav.Link eventKey="details" onSelect={this.onSelect.bind(this,"details")}><h6>Details</h6></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="stats" onSelect={this.onSelect.bind(this,"stats")}><h6>Stats</h6></Nav.Link>
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
MprojectAction.propTypes={
  project:PropTypes.object.isRequired,
  auth:PropTypes.object.isRequired,
  getProjectByName:PropTypes.func.isRequired
}

const mapStateToProps = state=>({
  project:state.project,
  auth:state.auth
})

export default connect(mapStateToProps,{getProjectByName})(MprojectAction)
