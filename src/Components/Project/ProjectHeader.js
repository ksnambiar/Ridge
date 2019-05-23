import React, { Component } from 'react'
import { Button,Badge } from 'react-bootstrap';
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
class ProjectHeader extends Component {
  render() {
      const {project} = this.props;
      console.log(project)
      
      let domains
      if(typeof project.domains ==="string"){
        domains=project.domains.split(",")
      }else{
        domains=project.domains
      }
      let vars=["light","dark","primary","danger","success","secondary"];
      let rdom=domains.map((obj,i)=>{
        return <Badge className="center mh1" key={i} variant={vars[i%vars.length]}>{obj}</Badge>
      })
    return (
      <div className="row">
        <div className="center col-md-12">
          <div className="panel br2 bg-info center ma3 pv3" style={{textAlign:"center",color:"white"}}>
          <h2 style={{fontFamily:"Oswald"}}> {project.name}</h2>
          <button
          type="button"
          className="btn btn-primary rounded-circle mh2"
          title="get in touch"
          >
          <Octicon icon={getIconByName("comment-discussion")}/>
          </button>
          <button
          type="button"
          className='btn btn-info rounded-circle mh2'
          title="request to join"
          >
          <Octicon icon={getIconByName("request-changes")}/>
          </button>
          <div className="row center mv2">
          <div className="col-sm-12">
          {rdom}
          </div>
          </div>
         </div>
        </div>
      </div>
    )
  }
}
export default ProjectHeader;