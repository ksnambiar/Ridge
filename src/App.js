import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./Store";
import Particles from 'react-particles-js';
import { BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import pconfig from './particlesjs-config.json'
import Navigation from "./Components/Navbar/Navigation";
import Landing from "./Components/Common/Landing";
import Team from "./Components/Common/Team";
import Footer from "./Components/Common/Footer";
import LoginPar from "./Components/Auth/LoginPar";
import PrivateRoute from "./Components/Common/PrivateRoute";
import PrivateGuideRoute from "./Components/Common/PrivateGuideRoute";
import QPost from './Components/Post/Query/QPost';
import Guides from "./Components/Guides/Guides";
import RegPar from "./Components/Auth/RegPar";
import Dashboard from './Components/Dashboard/Dashboard';
import Profiles from './Components/profiles/Profiles';
import Project from './Components/Project/Project';
import Profile from './Components/profile/Profile';
import Guide from "./Components/Guide/Guide";
import CreateProfile from './Components/create-profile/CreateProfile';
import CreateGuideProfile from './Components/create-profile/CreateGuideProfile';
import EditProfile from './Components/edit-profile/EditProfile';
import EditGuideProfile from './Components/edit-profile/EditGuideProfile';
import AddExperience from './Components/add-creds/AddExperience';
import AddEducation from "./Components/add-creds/AddEducation";
import AddGuideExperience from './Components/add-creds/AddGuideExperience';
import AddProjects from './Components/add-creds/AddProjects';
import Projects from './Components/projects/Projects';
import ProjectMoreAction from "./Components/ProjectAction/ProjectMoreAction";
import NotFound from './Components/Not-found/NotFound';
import Posts from './Components/Posts/Posts';
import QueryForm from "./Components/Posts/QueryPost/Queryform"
import SocPost from './Components/Post/SocialPost/SocPost';
import Notification from './Components/Notification/Notification'
import GuideDashboard from './Components/Dashboard/GuideDashboard/GuideDashboard';
import GuideNotification from "./Components/guideNotification/GuideNotification";
import Settings from "./Components/Settings/Settings"
import MprojectAction from "./Components/mprojectAction/MprojectAction";
import "./App.css";
import { setCurrentUser,logoutUser,checkSession} from "./actions/authAction";
if(localStorage.uid){
  let uuid=localStorage.getItem('uid');
  let jwt = localStorage.getItem('jwt');
  let data = {
    uid:uuid,
    jwt:jwt
  }
  store.dispatch(checkSession(data))
}


class App extends Component {
  render() {
    console.log(pconfig)
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navigation />
            <Route exact path='/' component={Landing}/>
            <div className="container">
            {
            <Particles params={pconfig} className="particlefind"/>
            }
            <Route exact path='/team' component={Team}/>
            <Route exact path='/register' component={RegPar}/>
            <Route exact path='/Login' component={LoginPar}/>
            <Route exact path='/developers' component={Profiles}/>
            <Route exact path='/profile/:handle' component={Profile}/>

            <Route exact path='/not-found' component={NotFound}/>
            <Switch>
            <PrivateRoute exact path='/dev/dashboard' component={Dashboard} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/guides/:college' component={Guides} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/guide-profile/:gid' component={Guide} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/dev/create-profile' component={CreateProfile} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/dev/edit-profile' component={EditProfile} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/dev/add-experience' component={AddExperience} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/dev/add-project' component={AddProjects} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/feeds' component={Posts} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/feeds/addQuery' component={QueryForm } />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/dev/projects/:institution' component={Projects} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/post/:id' component={SocPost} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/query/:id' component={QPost} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/projects/:institution/:name' component={Project} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/dev/notifications' component={Notification} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/dev/settings' component={Settings} />
            </Switch>
            {
  ///////guide routes//////////
}
        <Switch>
        <PrivateRoute exact path='/guide/dashboard' component={GuideDashboard} />
        </Switch>
        <Switch>
        <PrivateRoute exact path='/guide/create-profile' component={CreateGuideProfile} />
        </Switch>
        <Switch>
        <PrivateRoute exact path='/guide/edit-profile' component={EditGuideProfile} />
        </Switch>
        <Switch>
        <PrivateRoute exact path='/guide/add-education' component={AddEducation} />
        </Switch>
        <Switch>
        <PrivateRoute exact path='/guide/add-project' component={AddProjects} />
        </Switch>
        <Switch>
        <PrivateRoute exact path='/guide/add-experience' component={AddGuideExperience} />
        </Switch>
        <Switch>
            <PrivateRoute exact path='/guide/projects/:institution' component={Projects} />
        </Switch>
        <Switch>
            <PrivateRoute exact path='/project-action/:institution/:id/:pid' component={ProjectMoreAction} />
        </Switch>
        <Switch>
            <PrivateRoute exact path='/project-status/:institution/:name/:pid' component={MprojectAction} />
        </Switch>
        <Switch>
            <PrivateRoute exact path='/guide/notifications' component={GuideNotification} />
         </Switch>
        
            { 
            // <Switch>
            // <PrivateRoute exact path='/projects/:institution/:name' component={Project} />
            // </Switch>
            }
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
