import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Link,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {addEducation} from '../../actions/profileAction';
class AddEducation extends Component {
    constructor(props) {
      super(props)
      this.state = {
         institution:'',
         degree:'',
         location: '',
         from:'',
         to: '',
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
        const expData={
            institution:this.state.institution,
            degree:this.state.degree,
            location: this.state.location,
            from:this.state.from,
            to:this.state.to,
            current: this.state.current,
        }
        this.props.addEducation(expData,this.props.history);
    }
    
  render() {
      const {utype}=this.props.auth
    return (
      <div className="add-experience">
      <div className="container ">
      <div className="mv4 pd5">
      <div className="col-md-8 m-auto">
      <Link to={`/${utype}/dashboard`} className="btn btn-light">
      Go Back 
      </Link>
      <h1 className="display-4 text-center">Add Education</h1>
      <p className="lead text-center">
        Degrees that you hold!
      </p>
      <small className="d-block pb-3">* = required Fields</small>
      <div className="row">
      <div className="center panel col-lg-8 col-md-9 col-sm-12">
      <form onSubmit={this.onSubmit} className='left w-90'>
      
      <div className="form-group">
        <label htmlFor="institution">Name of the Institution</label>
      <input type="text" name="institution" placeholder="institution" className="form-control" value={this.state.institution} onChange={this.onChange} />
      </div>
      <div className="form-group">
      <label htmlFor="degree">Degree</label>
      <input type="text" name="degree" placeholder="degree" className="form-control" value={this.state.degree} onChange={this.onChange} />
      </div>
      <div className="form-group">
      <label htmlFor="location">Location of the Institution</label>
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
      <input type="date" name="to" placeholder="To" className="form-control" value={this.state.to} onChange={this.onChange}/>
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
AddEducation.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    addEducation:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
}
const mapStateToProps = (state)=>({
    profile:state.profile,
    errors:state.errors,
    auth:state.auth
})
export default connect(mapStateToProps,{addEducation})(withRouter(AddEducation));