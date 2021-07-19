import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ReactComponent as Logo } from "../../assets/drone.svg";

export default function Navbar(props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={24}>
          <Logo height={50} width={50} />
          <Grid item xs={11}>
            <h1>Airprobe</h1>
          </Grid>

          <Grid item xs={24}>
            <div>
              {props.isLoggedIn ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    props.setIsLoggedIn(false);
                    console.log(props.history);
                    // props.history.push("/");
                  }}
                >
                  Logout
                </Button>
              ) : (
                <Button variant="contained" color="primary">
                  SignUp
                </Button>
              )}
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
