import React, { Component } from "react";
import NavBarPage from "./components/NavBar/NavBarPage";
import Friends from "./components/Friends/Friends";
import Events from "./components/Events/Events";
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
      </div>
    );
  }
}

export default App;
