import React, { Component } from 'react'
import {Card} from "react-bootstrap";
import {editProject} from "../../../actions/projectAction";
import {connect} from "react-redux";
export class EditDetails extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name:'',
           domains:'',
           githublink:'',
           description: '',
          //  guide:'',
           errors:{}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
      }
      componentDidMount(){
          const {project} = this.props;
          this.setState({
              name:project.name,
              domains:project.domains.toString(),
              githublink:project.githublink,
              description:project.description
          })
      }
      onChange(e){
          this.setState({[e.target.name]:e.target.value})
      }
      onSubmit(e){
          e.preventDefault();
        //   const {utype,user} = this.props.auth
          const uid = localStorage.getItem("uid")
          const {pid,institution,project}=this.props;
          const projData={
           name:this.state.name,
           domains:this.state.domains.split(","),
           githublink:this.state.githublink,
           description: this.state.description
          }
          this.props.editProject(projData,pid,institution,project.name)
      }
      
    
  render() {
    return (
      <div>
        <Card>
        <Card.Body>
        <form onSubmit={this.onSubmit} className='left w-90'>
      
        <div className="form-group">
          <label htmlFor="name">Title of the Project</label>
        <input type="text" name="name" placeholder="Title" className="form-control" value={this.state.name} onChange={this.onChange} />
        </div>
        <div className="form-group">
        <label htmlFor="domains">Domains in use</label>
        <input type="text" name="domains" placeholder="Eg. NLP,DeepLearning,WebDevelopment etc" className="form-control" value={this.state.domains} onChange={this.onChange} />
        </div>
        <div className="form-group">
        <label htmlFor="githublink">Github Link</label>
        <input type="url" name="githublink" placeholder="Github Link for the project" className="form-control" value={this.state.githublink} onChange={this.onChange} />
        </div>
        <div className="form-group">
        <label htmlFor="description">Description about your Project</label>
        <input type="text" name="description" placeholder="Tell us about your experience in it" className="form-control" value={this.state.description} onChange={this.onChange} />
        </div>
          <div>
          <input type='submit' value="Submit" className="btn btn-info btn-block mt-4"/>
          </div>
  
        </form> 
        </Card.Body>
        </Card>
      </div>
    )
  }
}

export default connect(null,{editProject})(EditDetails)
