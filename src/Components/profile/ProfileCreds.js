import React, { Component } from 'react'

class ProfileCreds extends Component {
  render() {
    const { experience, projects } = this.props;
    let expItems;
    if(experience){
    let expValues=Object.values(experience)
    let expKeys=Object.keys(experience);
    expItems = expValues.map((exp,i) => (
      <li key={expKeys[i]} className="list-group-item">
        <h4>{exp.company}</h4>
        <p>
          {exp.from} -
          {exp.to === null ? (
            ' Now'
          ) : (
            exp.to
          )}
        </p>
        <p>
          <strong>Position:</strong> {exp.domain}
        </p>
        <p>
          {exp.location === '' ? null : (
            <span>
              <strong>Location: </strong> {exp.location}
            </span>
          )}
        </p>
        <p>
          {exp.description === '' ? null : (
            <span>
              <strong>Description: </strong> {exp.description}
            </span>
          )}
        </p>
      </li>
    ));
          }
          let projItems;
    //projects
    if(projects){
    let projectValues=Object.values(projects);
    let projectKeys=Object.keys(projects)
    
    projItems = projectValues.map((proj,i) => {
      let dom
      if((typeof proj.domains)==="string"){
        dom=proj.domains.split(',');
      }else{
        dom=proj.domains
      }
        
    const doms = dom.map((skill, index) => (
        <div key={index} className="p-3">
          <i className="fa fa-check" /> {skill}
        </div>
        
        ))
        let tem;
        if((typeof proj.team)==="string"){
          tem=proj.team.split(',');
        }else{
          tem=proj.team
        }
        
        const team=tem.map((t,index)=>(
            <div key={index} className="p-3">
          <i className="fa fa-check" /> {t}
        </div>
        ))
        return(
        <li key={projectKeys[i]} className="list-group-item mv2">
          <h4>{proj.name}</h4>
          <p>
            {proj.description === '' ? null : (
              <span>
                <strong>Description: </strong> {proj.description}
              </span>
            )}
          </p>
          {
          // <p>
          //   <strong>Guide:</strong> {proj.guide?proj.guide:<p>no one yet</p>}
          // </p>
          }
          <p>
            <a href={proj.githublink}>Github Link</a>
          </p>
          
        </li>
      )});
            }
    return (
        <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Experience</h3>
          {experience ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">No Experience Listed</p>
          )}
        </div>

        <div className="col-md-6">
          <h3 className="text-center text-info">Projects</h3>
          {projects? (
            <ul className="list-group ">{projItems}</ul>
          ) : (
            <p className="text-center">No Projects Listed</p>
          )}
        </div>
      </div>
    )
  }
}

export default ProfileCreds;