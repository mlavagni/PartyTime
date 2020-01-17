import React, { Component } from "react";
import NavBarPage from "./components/NavBar/NavBarPage";
import Friends from "./components/Friends/Friends";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Events from "./components/Events/Events";
import { Route, Switch } from "react-router-dom";

// import "./App.css";

class App extends Component {
  // handleSignupOrLogin = () => {
  //   this.setState({user: userService.getUser()});
  // }
  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header">
            <h1>Party Time</h1>
            <NavBarPage />
          </header>

          {/* <Friends /> */}
          {/* <Events /> */}
        </div>
        <Switch>
          <Route exact path="/api/users/login" render={() => <Login />} />
          <Route exact path="/api/users/signup" render={() => <SignUp />} />
        </Switch>
      </div>
    );
  }
}

export default App;
