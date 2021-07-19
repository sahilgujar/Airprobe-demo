import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ReactComponent as Logo } from "../../assets/drone4.svg";
import { useHistory } from "react-router-dom";

export default function Navbar(props) {
  const history = useHistory();
  console.log(history);
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={24}>
          <Logo height={60} width={60} />
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
                    console.log(history);
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
                  color="primary"
                >
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
