import React, { Component } from "react";
import { Provider } from "react-redux";
// import {userInfo} from './firebase/Dbs';
import {dataBase} from './firebase/Index';
import store from "./Store";
import { BrowserRouter as Router ,Route} from "react-router-dom";
import Navigation from "./Components/Navbar/Navigation";
import Landing from "./Components/Common/Landing";
import Footer from "./Components/Common/Footer";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register"
import Dashboard from './Components/Dashboard/Dashboard';
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
            <Route path='/register' component={Register}/>
            <Route path='/Login' component={Login}/>
            <Route path='/dashboard' component={Dashboard} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
