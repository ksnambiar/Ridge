import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Link,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {addProject,addGuideProject} from '../../actions/profileAction';
class AddProject extends Component {
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
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        const {utype,user} = this.props.auth
        const uid = localStorage.getItem("uid")
        const projData={
         name:this.state.name,
         domains:this.state.domains,
         team:[{fullName:user.fullName,uid:uid}],
         githublink:this.state.githublink,
         description: this.state.description
        }
        if(utype==="dev"){
            this.props.addProject(projData,this.props.history);
        }else{
            this.props.addGuideProject(projData,this.props.history);

        }
    }
    
  render() {
      const {utype} = this.props.auth
    return (
      <div className="add-experience">
      <div className="container ">
      <div className="mv4 pd5">
      <div className="m-auto">
      <Link to={`/${utype}/dashboard`} className="btn btn-light">
      Go Back 
      </Link>
      <h1 className="display-4 text-center">New Project</h1>
      <p className="lead text-center">
      A new project is always a whole new experience
      </p>
      <small className="d-block pb-3">* = required Fields</small>
      <div className="row">
      <div className="center panel col-lg-8 col-md-9 col-sm-12">
      <form onSubmit={this.onSubmit} className='left w-90'>
      
      <div className="form-group">
        <label htmlFor="name">Title of the Project</label>
      <input type="text" name="name" placeholder="Title" className="form-control" value={this.state.name} onChange={this.onChange} />
      </div>
      <div className="form-group">
      <label htmlFor="domains">Domains to be used</label>
      <input type="text" name="domains" placeholder="Eg. NLP,DeepLearning,WebDevelopment etc" className="form-control" value={this.state.domains} onChange={this.onChange} />
      </div>
      <div className="form-group">
      <label htmlFor="githublink">Github Link</label>
      <input type="url" name="githublink" placeholder="Github Link for the project" className="form-control" value={this.state.githublink} onChange={this.onChange} />
      </div>
      {
    //   <div className="form-group">
    //   <label htmlFor="guide">Project Guide/Mentor</label>
    //   <input type="text" name="guide" placeholder="Mentor" className="form-control" value={this.state.guide} onChange={this.onChange} />
    //   </div>
      }
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
      </div>  
      </div>
    )
  }
}
AddProject.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    addProject:PropTypes.func.isRequired,
    addGuideProject:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
}
const mapStateToProps = (state)=>({
    profile:state.profile,
    errors:state.errors,
    auth:state.auth
})
export default connect(mapStateToProps,{addProject,addGuideProject})(withRouter(AddProject));