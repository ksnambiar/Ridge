import React, { Component } from 'react'
import isEmpty from '../../validation/is-empty'
class ProfileHeader extends Component {
    
  render() {
    let {profile} = this.props;
    return (
        <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img
                  className="rounded-circle"
                  src={`https://robohash.org/${profile.fullName}`}
                  alt="Profile Photo"
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{profile.fullName}</h1>

              {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
              <p>
                {isEmpty(profile.twitter) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.twitter}
                    target="_blank"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                )}

                {isEmpty(profile.facebook) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.facebook}
                    target="_blank"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                )}

                {isEmpty(profile.linkedin) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.linkedin}
                    target="_blank"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                )}

                {isEmpty(profile.youtube) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.youtube}
                    target="_blank"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                )}

                {isEmpty(profile.instagram) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.instagram}
                    target="_blank"
                  >
                    <i className="fab fa-instagram fa-2x" />
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ProfileHeader