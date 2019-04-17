import React, { Component } from 'react'
import Axios from 'axios';
import Spinner from '../Common/Spinner';
import ProjectDetails from './ProjectDetails';
class ProjectGithub extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:null,
       isLoading:false
    }
  }
  
  componentWillMount(){
    let arr = this.props.projectlink.githublink.split('/');
    this.setState({isLoading:true});
    Axios.get("https://api.github.com/repos/"+arr[arr.length-2]+"/"+arr[arr.length-1])
    .then(obj=>{
      let dat={
        owner:obj.data.owner,
        name:obj.data.name,
        isPrivate:obj.data.private,
        gitUrl:{
          git_url: "git://github.com/NambiarSidharth/Ridge.git",
          ssh_url: "git@github.com:NambiarSidharth/Ridge.git",
          clone_url: "https://github.com/NambiarSidharth/Ridge.git",
          svn_url: "https://github.com/NambiarSidharth/Ridge"
        },
        description:obj.data.description,
        size:obj.data.size,
        watchers_count:obj.data.watchers_count,
        language:obj.data.language
      }

      this.setState({data:dat,isLoading:false});
    })
  }
  render() {
    return (
      <div className="row">
      {this.state.isLoading?<Spinner/>:<ProjectDetails data={this.state.data}/>}
      </div>
    )
  }
}

export default ProjectGithub;