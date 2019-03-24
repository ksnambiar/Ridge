import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./Store";
import Particles from 'react-particles-js';
import { BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import pconfig from './particlesjs-config.json'
import Navigation from "./Components/Navbar/Navigation";
import Landing from "./Components/Common/Landing";
import Footer from "./Components/Common/Footer";
import LoginPar from "./Components/Auth/LoginPar";
import PrivateRoute from "./Components/Common/PrivateRoute";
import PrivateGuideRoute from "./Components/Common/PrivateGuideRoute";
import RegPar from "./Components/Auth/RegPar";
import Dashboard from './Components/Dashboard/Dashboard';
import Profiles from './Components/profiles/Profiles';
import Project from './Components/Project/Project';
import Profile from './Components/profile/Profile';
import CreateProfile from './Components/create-profile/CreateProfile';
import EditProfile from './Components/edit-profile/EditProfile'
import AddExperience from './Components/add-creds/AddExperience';
import AddEducation from "./Components/add-creds/AddEducation";
import Team from './Components/Team/Team';
import AddProjects from './Components/add-creds/AddProjects';
import Projects from './Components/projects/Projects';
import NotFound from './Components/Not-found/NotFound';
import Posts from './Components/Posts/Posts';
import SocPost from './Components/Post/SocialPost/SocPost';
import GuideDashboard from './Components/Dashboard/GuideDashboard/GuideDashboard';
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
            <PrivateRoute exact path='/dev/feeds' component={Posts} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/dev/projects/:institution' component={Projects} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/post/:id' component={SocPost} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/projects/:institution/:name' component={Project} />
            </Switch>
{
  ///////guide routes//////////
}
        <Switch>
        <PrivateRoute exact path='/guide/dashboard' component={GuideDashboard} />
        </Switch>
        <Switch>
        <PrivateRoute exact path='/guide/add-education' component={AddEducation} />

        </Switch>
        <Switch>
        <PrivateRoute exact path='/guide/add-project' component={AddProjects} />

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
