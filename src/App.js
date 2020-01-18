import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import userService from "./utils/userService";
import tokenService from "./utils/tokenService";

import NavBarPage from "./components/NavBar/NavBarPage";
// import Friends from "./components/Friends/Friends";
// import Login from "./components/Login/Login";
// import SignUp from "./components/SignupForm/SignupForm";
// import Events from "./components/Events/Events";

// import "./App.css";

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
            <h1>Party Time</h1>
            <NavBarPage />
          </header>

          {/* <Friends /> */}
          {/* <Events /> */}
        </div>
        <Switch>
          {/* <Route exact path='/' render={() => */}
          {/* // handleLogout={this.handleLogout}
          // user={this.state.user}
          // } */}
          <Route
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
          />
        </Switch>
      </div>
    );
  }
}

export default App;
