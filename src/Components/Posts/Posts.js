import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PostForm from './PostForm';
import SocialPost from './SocialPost/SocialPost';
import QueryPost from './QueryPost/QueryPost';
export default class Posts extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         show:"SocialPost"
      };
      this.changeView = this.changeView.bind(this);
    };
    changeView(view){
        this.setState({show:view})
    }
    
  render() {
      const {show} = this.state;
      let postkind;
      if(show==="SocialPost"){
          postkind=<SocialPost/>
      }else if (show==="Queries"){
          postkind=<QueryPost />
      }
    return (
      <div className="feed">
      <div className="container">
        <div className="row">
            <div className="center col-sm-12">
            <PostForm changeView={this.changeView} />
            {
                postkind
            }
            </div>
        </div>
      </div>
      </div>
    )
  }
}
