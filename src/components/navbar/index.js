import React from "react";
import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ReactComponent as Logo } from "../../assets/drone2.svg";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const history = useHistory();
  console.log(history);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Logo height={60} width={60} />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Airprobe
          </Typography>
          {props.isLoggedIn ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                props.setIsLoggedIn(false);
                history.push("/");
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={() => {
                history.push("/signup");
              }}
              variant="contained"
              color="secondary"
            >
              SignUp
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
