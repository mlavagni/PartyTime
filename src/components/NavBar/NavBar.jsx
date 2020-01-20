import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import { Link } from "react-router-dom";
// import style from "./NavBarPage.module.css";

// export default function NavBarPage(props) {
const NavBar = props => {
  let nav = (
    <Nav className="mr-auto">
      <Nav.Link to="/home">Home</Nav.Link>
      {props.user ? (
        <div>
          <Nav.Link to="/profile">Profile</Nav.Link>
          <Nav.Link to="/friends">Friends</Nav.Link>
          <Nav.Link to="/events">Events</Nav.Link>

          <Nav.Link to="/">
            <div onClick={props.handleLogout}>Logout</div>
          </Nav.Link>
        </div>
      ) : (
        <div>
          <Nav.Link to="/login">LOG IN</Nav.Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Nav.Link to="/signup">SIGN UP</Nav.Link>
        </div>
      )}
    </Nav>
  );
  return <div>{nav}</div>;
};

export default NavBar;
