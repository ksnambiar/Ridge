import React, { Component } from 'react'
import Queryform from './Queryform';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import QuerySearch from "./QuerySearch";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import QueryFeed from "./QueryFeed";
import Spinner from '../../Common/Spinner';
import {getQueries} from "../../../actions/postAction";
class QueryPost extends Component {
  componentDidMount(){
    this.props.getQueries(this.props.profile.profile.institution)
  }
  render() {
    const {posts,loading} = this.props.post
    let qview
    if(loading){
      qview=<Spinner />
    }else{
      qview=<QueryFeed queries={posts}/>
    }
    return (
      <div>
        <div className="row mv3 pa2">
        <div className="col-md-9">
        <QuerySearch style={{float:"left"}}/>
        </div>
        <div className="col-md-3">
        <Link to="/feeds/addQuery" className="btn btn-info">
        Add Query
        </Link>
        </div>
        </div>
        <div className="row">
         <div className="col-md-3">
         filters
         </div>
         <div className="col-md-7">
         {qview}
         </div>
         <div className="col-md-2">
         recommended queries
         </div>
        </div>
      </div>
    )
  }
}
QueryPost.propTypes = {
  post:PropTypes.object.isRequired,
  profile:PropTypes.object.isRequired,
  getQueries:PropTypes.func.isRequired
}
const mapStateToProps = (state)=>({
  post:state.post,
  profile:state.profile
})
export default connect(mapStateToProps,{getQueries})(QueryPost);