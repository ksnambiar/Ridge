import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import pconfig from './particlesjs-config.json'
import Navigation from "./Components/Navbar/Navigation";
import Landing from "./Components/Common/Landing";
import Footer from "./Components/Common/Footer";
import Login from "./Components/Auth/Login";
import PrivateRoute from "./Components/Common/PrivateRoute";
import Register from "./Components/Auth/Register"
import Dashboard from './Components/Dashboard/Dashboard';
import Profiles from './Components/profiles/Profiles';
import Project from './Components/Project/Project';
import Profile from './Components/profile/Profile';
import CreateProfile from './Components/create-profile/CreateProfile';
import EditProfile from './Components/edit-profile/EditProfile'
import AddExperience from './Components/add-creds/AddExperience';
import Team from './Components/Team/Team';
import AddProjects from './Components/add-creds/AddProjects';
import Projects from './Components/projects/Projects';
import NotFound from './Components/Not-found/NotFound';
import "./App.css";
import { setCurrentUser,logoutUser,checkSession} from "./actions/authAction";
import Particles from 'react-particles-js';
if(localStorage.uid){
  let uuid=localStorage.getItem('uid');
  let te = localStorage.getItem('et');
  let data = {
    uid:uuid,
    time:te
  }
  store.dispatch(checkSession(data))
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="styling">
            <Navigation />
            <Route exact path='/' component={Landing}/>
            <div className="container">
            <Route exact path='/team' component={Team}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/Login' component={Login}/>
            <Route exact path='/developers' component={Profiles}/>
            <Route exact path='/profile/:handle' component={Profile}/>
            <Route exact path='/not-found' component={NotFound}/>
            <Switch>
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/create-profile' component={CreateProfile} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/add-experience' component={AddExperience} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/add-project' component={AddProjects} />
            </Switch>
            <Switch>
            <PrivateRoute exact path='/projects/:institution' component={Projects} />
            </Switch>
            <Route exact path='/projects/:institution/:name' component={Project} />
            {
            //   <Switch>
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
