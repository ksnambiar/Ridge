import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter as Router ,Route} from "react-router-dom";
import Navigation from "./Components/Navbar/Navigation";
import Landing from "./Components/Common/Landing";
import Footer from "./Components/Common/Footer";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register"
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navigation />
            <Route exact path='/' component={Landing}/>
            <div className="container">
            <Route path='/register' render={()=><Register />}/>
            <Route path='/Login' render={()=><Login />}/>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
