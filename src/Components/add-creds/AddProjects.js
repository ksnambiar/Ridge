import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Link,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {addProject} from '../../actions/profileAction';
class AddProject extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         domains:'',
         team:'',
         githublink:'',
         description: '',
         guide:'',
         errors:{}
      }
      this.onChange = this.onChange.bind(this);
      this.onCheck=this.onCheck.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onCheck(e){
        this.setState({
            disabled:!this.state.disabled,
            current:!this.state.current
        })
    }
    onSubmit(e){
        e.preventDefault();
        const projData={
         name:this.state.name,
         domains:this.state.domains,
         team:this.state.team,
         githublink:this.state.githublink,
         description: this.state.description,
         guide:this.state.guide
        }
        this.props.addProject(projData,this.props.history);
    }
    
  render() {
    return (
      <div className="add-experience">
      <div className="container ">
      <div className="ma5 pd5">
      <div className="col-md-8 m-auto">
      <Link to="/dashboard" className="btn btn-light">
      Go Back 
      </Link>
      <h1 className="display-4 text-center">New Project</h1>
      <p className="lead text-center">
      A new project is always a whole new experience
      </p>
      <small className="d-block pb-3">* = required Fields</small>
      <form onSubmit={this.onSubmit} className='left'>
      
      <div className="form-group">
        <label htmlFor="name">Title of the Project</label>
      <input type="text" name="name" placeholder="Title" className="form-control" value={this.state.name} onChange={this.onChange} />
      </div>
      <div className="form-group">
      <label htmlFor="domains">Domains to be used</label>
      <input type="text" name="domains" placeholder="Eg. NLP,DeepLearning,WebDevelopment etc" className="form-control" value={this.state.domains} onChange={this.onChange} />
      </div>
      <div className="form-group">
      <label htmlFor="team">Team Members</label>
      <input type="text" name="team" placeholder="Name of the team member separated with ," className="form-control" value={this.state.team} onChange={this.onChange} />
      </div>
      <div className="form-group">
      <label htmlFor="githublink">Github Link</label>
      <input type="url" name="githublink" placeholder="Github Link for the project" className="form-control" value={this.state.githublink} onChange={this.onChange} />
      </div>
      <div className="form-group">
      <label htmlFor="guide">Project Guide/Mentor</label>
      <input type="text" name="guide" placeholder="Mentor" className="form-control" value={this.state.guide} onChange={this.onChange} />
      </div>
      <div className="form-group">
      <label htmlFor="description">Description about your Project</label>
      <input type="text" name="description" placeholder="Tell us about your experience in it" className="form-control" value={this.state.description} onChange={this.onChange} />
      </div>
        <div>
        <input type='submit' value="Submit" className="btn btn-info btn-block mt-4"/>
        </div>

      </form> 
      </div>
      </div>
      </div>  
      </div>
    )
  }
}
AddProject.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    addProject:PropTypes.func.isRequired
}
const mapStateToProps = (state)=>({
    profile:state.profile,
    errors:state.errors
})
export default connect(mapStateToProps,{addProject})(withRouter(AddProject));