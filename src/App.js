import React, { Component } from "react";
//  import { Route, Switch, Redirect } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import userService from "./utils/userService";
import tokenService from "./utils/tokenService";
import NavBarPage from "./components/NavBar/NavBarPage";
// import NavBarPage from "./components/NavBar/NavBar";
// import pages
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Friends from "./pages/Friends/Friends";
import Events from "./pages/Events/Events";
// import Events from "./components/Events/Events";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // ...this.getInitialState(),
      //   difficulty: 'Easy',
      //   scores: [],
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }

  // getInitialState() {
  //   return {
  //     selColorIdx: 0,
  //     guesses: [this.getNewGuess()],
  //     code: this.genCode(),
  //     elapsedTime: 0,
  //     isTiming: true
  //   };
  // }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header">
            <Header />
          </header>
          <NavBarPage user={this.state.user} handleLogout={this.handleLogout} />
          {/* <Friends /> */}
          {/* <Events /> */}
        </div>
        <Switch>
          {/* <Route exact path='/' render={() => */}
          {/* // handleLogout={this.handleLogout}
          // user={this.state.user}
          // } */}
          <Route path="/home" exact render={props => <Home />} />
          <Route path="/profile" exact render={props => <Profile />} />
          <Route
            path="/friends"
            exact
            render={props => <Friends user={this.state.user} />}
          />
          <Route
            path="/events"
            exact
            render={props => <Events user={this.state.user} />}
          />
          <Route
            path="/signup"
            exact
            render={props => (
              <SignupPage
                handleSignupOrLogin={this.handleSignupOrLogin}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          {/* <Route
            path="/login"
            exact
            render={props => (
              <LoginPage
                handleSignupOrLogin={this.handleSignupOrLogin}
                {...props}
              />
            )}
          /> */}
          {/* <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          /> */}
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
