import React, { Component } from 'react'

class ProfileCreds extends Component {
  render() {
    const { experience, projects } = this.props;
    let expValues=Object.values(experience)
    let expKeys=Object.keys(experience);
    const expItems = expValues.map((exp,i) => (
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

    //projects
    let projectValues=Object.values(projects);
    let projectKeys=Object.keys(projects)
    
    const projItems = projectValues.map((proj,i) => {
        let dom=proj.domains.split(',');
    const doms = dom.map((skill, index) => (
        <div key={index} className="p-3">
          <i className="fa fa-check" /> {skill}
        </div>
        
        ))
        let tem = proj.team.split(',');
        const team=tem.map((t,index)=>(
            <div key={index} className="p-3">
          <i className="fa fa-check" /> {t}
        </div>
        ))
        return(
        <li key={projectKeys[i]} className="list-group-item">
          <h4>{proj.name}</h4>
          <p>
            {proj.description === '' ? null : (
              <span>
                <strong>Description: </strong> {proj.description}
              </span>
            )}
          </p>
          <p>
            <strong>Guide:</strong> {proj.guide?proj.guide:<p>no one yet</p>}
          </p>
          <p>
            <strong>Team:</strong> {team}
          </p>
          <p>
            <strong>Domains Used:</strong> {doms}
          </p>
          <p>
            <strong>Github Link:</strong> <a href={proj.githublink}>{proj.githublink}</a>
          </p>
          
        </li>
      )});

    return (
        <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Experience</h3>
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">No Experience Listed</p>
          )}
        </div>

        <div className="col-md-6">
          <h3 className="text-center text-info">Projects</h3>
          {projItems.length > 0 ? (
            <ul className="list-group">{projItems}</ul>
          ) : (
            <p className="text-center">No Projects Listed</p>
          )}
        </div>
      </div>
    )
  }
}

export default ProfileCreds;