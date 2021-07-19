import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ReactComponent as Logo } from "../../assets/drone4.svg";
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
          <Typography variant="h3" className={classes.title}>
            Airprobe
          </Typography>
          {props.isLoggedIn ? (
            <Button
              // style={{ marginTop: "0.5rem" }}
              variant="contained"
              color="primary"
              onClick={() => {
                props.setIsLoggedIn(false);
                history.push("/");
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              // style={{ marginTop: "0.5rem" }}
              onClick={() => {
                history.push("/signup");
              }}
              variant="contained"
              color="primary"
            >
              SignUp
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
