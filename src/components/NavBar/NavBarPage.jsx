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
      <Toolbar className={style.navBarBackground}>
        <ul className={style.ulContainer}>
          <li className={style.liContainer}>
            <Link to="/home" className={style.liNavbarLink}>
              Home
            </Link>
          </li>
          {props.user ? (
            <div>
              <li className={style.liContainer}>
                <Link to="/profile" className={style.liNavbarLink}>
                  Profile
                </Link>
              </li>
              <li className={style.liContainer}>
                <Link to="/friends" className={style.liNavbarLink}>
                  Friends
                </Link>
              </li>
              <li className={style.liContainer}>
                <Link to="/events" className={style.liNavbarLink}>
                  Events
                </Link>
              </li>
              <li className={style.liContainerRight}>
                <Link to="/">
                  {/* <li className="nav-item"> */}
                  <div
                    className={style.liNavbarLink}
                    onClick={props.handleLogout}
                  >
                    Logout
                  </div>
                  {/* </li> */}
                </Link>
              </li>
            </div>
          ) : (
            <div>
              <li className={style.liContainerRight}>
                <Link to="/login" className={style.liNavbarLink}>
                  LOG IN
                </Link>
              </li>
              <li className={style.liContainerRight}>
                <Link to="/signup" className={style.liNavbarLink}>
                  SIGN UP
                </Link>
              </li>
            </div>
          )}
        </ul>
      </Toolbar>
    </AppBar>
  );
  return <div>{nav}</div>;
  // );
};

export default NavBarPage;
