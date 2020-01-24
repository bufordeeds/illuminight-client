import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./styles.css";

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

export const Nav = ({ user, setUser }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/" className={"nav__link"}>
            <Typography id={"nav__logo"} variant="h5" className={classes.title}>
              Illuminight
            </Typography>
          </Link>
          <div className={"nav__links"}>
            <Link id={"nav__home-link"} className={"nav__link"} to="/">
              <span color="inherit">Home</span>
            </Link>
            <Link
              id={"nav__leaderboard-link"}
              className={"nav__link"}
              to="/leaderboard"
            >
              <span color="inherit">Leaderboard</span>
            </Link>
            {user.id ? (
              <span id={"nav__signin-link"} className={"nav__link"} onClick={() => setUser({})}>
                <span color="inherit" style={{cursor: 'pointer'}}>Logout</span>
              </span>
            ) : (
              <Link
                id={"nav__signin-link"}
                className={"nav__link"}
                to="/signup"
              >
                <span color="inherit">Sign In / Sign Up</span>
              </Link>
            )}
            <Link id={"nav__game-link"} className={"nav__link"} to="/game">
              <span color="inherit">Start Game</span>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
