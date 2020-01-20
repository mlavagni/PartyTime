import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import style from "./NavBarPage.module.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

// export default function NavBarPage(props) {
const NavBarPage = props => {
  let nav = (
    // const classes = useStyles();

    // return (

    // <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Link to="/home" className="NavBar-link">
          Home
        </Link>

        {props.user ? (
          <div>
            <Link to="/profile" className="NavBar-link">
              Profile
            </Link>

            <Link to="/friends" className="NavBar-link">
              Friends
            </Link>

            <Link to="/events" className="NavBar-link">
              Events
            </Link>
            <Link to="/">
              {/* <li className="nav-item"> */}
              <div
                className={`nav-link ${style.li}`}
                onClick={props.handleLogout}
              >
                Logout
              </div>
              {/* </li> */}
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/login" className="NavBar-link">
              LOG IN
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/signup" className="NavBar-link">
              SIGN UP
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
  return <div>{nav}</div>;
  // );
};

export default NavBarPage;
