import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Link,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {addGuideExperience} from '../../actions/profileAction';
class AddGuideExperience extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         company:'',
         designation:'',
         location: '',
         from:'',
         to: '',
         current: false,
         description: '',
         errors:{},
         disabled:false
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
        const expData={
            company:this.state.company,
            designation:this.state.designation,
            location: this.state.location,
            from:this.state.from,
            to:this.state.to,
            current: this.state.current,
            description:this.state.description,
        }
        this.props.addGuideExperience(expData,this.props.history);
    }
    
  render() {
    return (
      <div className="add-experience">
      <div className="container ">
      <div className="mv4 pd5">
      <div className="col-md-8 m-auto">
      <Link to="/guide/dashboard" className="btn btn-light">
      Go Back 
      </Link>
      <h1 className="display-4 text-center">Add Experience</h1>
      <p className="lead text-center">
      Add any work experience that you have had in the past or present
      </p>
      <small className="d-block pb-3">* = required Fields</small>
      <div className="row">
      <div className="center panel col-lg-8 col-md-9 col-sm-12">
      <form onSubmit={this.onSubmit} className='left w-90'>
      
      <div className="form-group">
        <label htmlFor="company">Name of the Company/Institution</label>
      <input type="text" name="company" placeholder="Company" className="form-control" value={this.state.company} onChange={this.onChange} />
      </div>
      <div className="form-group">
      <label htmlFor="designation">Designation!</label>
      <input type="text" name="designation" placeholder="designation" className="form-control" value={this.state.designation} onChange={this.onChange} />
      </div>
      <div className="form-group">
      <label htmlFor="location">Location of the Company/Institution</label>
      <input type="text" name="location" placeholder="Location" className="form-control" value={this.state.location} onChange={this.onChange} />
      </div>
      <h6>From Date</h6>
      <div className="form-group">
      <label htmlFor="from">From</label>
      <input type="date" name="from" placeholder="From" className="form-control" value={this.state.from} onChange={this.onChange} />
      </div>
      <h6>To Date</h6>
      <div className="form-group">
      <label htmlFor="to">To</label>
      <input type="date" name="to" placeholder="To" className="form-control" value={this.state.to} onChange={this.onChange} disabled={this.state.disabled}/>
      </div>
      <div className="form-check mb-4">
      <label htmlFor="current">****</label>
      <input 
      type="checkbox" 
      name="current" 
      className="form-control" 
      value={this.state.current} 
      checked={this.state.current}
      onChange={this.onCheck}
      id="current"
      />
      <label htmlFor="current" className="form-check-label">
      Current Job
      </label>
      </div>
      <div className="form-group">
      <label htmlFor="description">Description about the Job</label>
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
AddGuideExperience.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    addGuideExperience:PropTypes.func.isRequired
}
const mapStateToProps = (state)=>({
    profile:state.profile,
    errors:state.errors
})
export default connect(mapStateToProps,{addGuideExperience})(withRouter(AddGuideExperience));