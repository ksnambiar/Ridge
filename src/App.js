import React, { Component } from "react";
import { Provider } from "react-redux";
// import {userInfo} from './firebase/Dbs';
import {dataBase} from './firebase/Index';
import store from "./Store";
import { BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import Navigation from "./Components/Navbar/Navigation";
import Landing from "./Components/Common/Landing";
import Footer from "./Components/Common/Footer";
import Login from "./Components/Auth/Login";
import PrivateRoute from "./Components/Common/PrivateRoute";
import Register from "./Components/Auth/Register"
import Dashboard from './Components/Dashboard/Dashboard';
import Developers from './Components/testing/Developers';
import Profiles from './Components/profiles/Profiles';
import Profile from './Components/profile/Profile';
import CreateProfile from './Components/create-profile/CreateProfile';
import EditProfile from './Components/edit-profile/EditProfile'
import AddExperience from './Components/add-creds/AddExperience';
import AddProjects from './Components/add-creds/AddProjects';
import "./App.css";
import { setCurrentUser,logoutUser } from "./actions/authAction";

if(localStorage.uid){
  let uuid=localStorage.getItem('uid');

  let user=dataBase.ref('users/'+uuid);
    user.once('value').then(snapshot=>{
      store.dispatch(setCurrentUser(snapshot.val()))    
    })

}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navigation />
            <Route exact path='/' component={Landing}/>
            <div className="container">
            <Route exact path='/register' component={Register}/>
            <Route exact path='/Login' component={Login}/>
            <Route exact path='/developers' component={Profiles}/>
            <Route exact path='/profile/:handle' component={Profile}/>
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
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
