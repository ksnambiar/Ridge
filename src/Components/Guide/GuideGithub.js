import React, { Component } from 'react'
import ProfileGithub from "../profile/ProfileGithub";
import axios from "axios";
import {Card,Badge} from "react-bootstrap"
export class GuideGithub extends Component {
    state={
        clientId:'5d8243ed93467bbc02c7',
        clientSecret: '1df9aad9b3bf785cb2ba29cbf9d34de3229ec651',
        sort:'created: asc',
        isLoading:false,
        user:null
    }
    componentDidMount(){
        const {profile} = this.props
        const {clientId,clientSecret} = this.state;
        this.setState({isLoading:true,user:null})
        axios.get(`
        https://api.github.com/users/${profile.githubusername}?client_id=${clientId}&client_secret=${clientSecret}
        `).then(obj=>{
            this.setState({user:obj.data,isLoading:false})
            console.log(obj.data)
        }).catch(err=>{
            console.log(err)
        })
    }
  render() {
      const {profile} = this.props;
        const {isLoading,user}=this.state
        let uview;
        if(isLoading || user===null){
            uview=<p>Loading ...</p>
        }else{
           let details=user
            uview=<Card className="mv2">
            <Card.Body>
            <div className="row">
            <div className="col-md-4">
            <img src={details.avatar_url} alt="profile image" className="mv1 ml2 w4 h4 center ba b--light-gray pa1"/>
            </div>
            <div className="col-md-8">
            <a href={details.html_url} target="_blank" className="no-underline center dim "><h5>{details.login}</h5></a>
            <div>
            <Badge variant="success" className="mv1">Name: {details.name}</Badge>
            </div>
            <div>
            <Badge variant="info" className="mv1">Repos: {details.public_repos}</Badge>
            </div>
            <div>
            <Badge variant="warning" className="mv1">Gists: {details.public_gists}</Badge>
            </div>
            <div>
            <Badge variant="secondary" className="mv1">Followers: {details.followers}</Badge>
            </div>
            </div>
            </div>
            </Card.Body>
            </Card>
        }

    return (
      <div>
        <div className="row">
        <div className="col-md-6">
        <ProfileGithub username={profile.githubusername}/>
        </div>
        <div className="col-md-6">
        <hr />
        <h3>Github Details</h3>
        {uview}
        </div>
        </div>
      </div>
    )
  }
}

export default GuideGithub
