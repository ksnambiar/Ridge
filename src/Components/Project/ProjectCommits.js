import React, { Component } from 'react';
import Spinner  from "../Common/Spinner";
import axios from "axios";
class ProjectCommits extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        data:null,
        isLoading:false,
        clientId:'5d8243ed93467bbc02c7',
        clientSecret: '1df9aad9b3bf785cb2ba29cbf9d34de3229ec651',
      };
    };
    
    componentWillMount(){
        this.setState({isLoading:true});
        const {clientId,clientSecret} = this.state;
        let arr = this.props.project.githublink.split('/');
        axios.get(`https://api.github.com/repos/${arr[arr.length-2]}/${arr[arr.length-1]}/commits?client_id=${clientId}&client_secret=${clientSecret}
        `).then(obj=>{
            console.log(obj.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }
  render() {
    return (
      <div> textInComponent </div>
    );
  }
}

export default ProjectCommits;
