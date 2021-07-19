import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import { Switch, Redirect, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "mapbox-gl/dist/mapbox-gl.css";

import Login from "./views/Login";
import Signup from "./views/Signup";
import Home from "./views/Home";

import Navbar from "./components/navbar";

function App() {
  const history = createBrowserHistory();
  const [userName, setUserName] = React.useState("vi@gmail.com");
  const [password, setPassword] = React.useState("Vijay@123");
  const [confirmPassword, setConfirmPassword] = React.useState("Vijay@123");
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <div className="App">
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
      <Router history={history}>
        {/* <ModuleLoader /> */}
        <Switch>
          <Route
            render={(matchProps) => (
              <Login
                userName={userName}
                password={password}
                confirmPassword={confirmPassword}
                setUserName={setUserName}
                setPassword={setPassword}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                {...matchProps}
              />
            )}
            exact
            path="/"
          />
          <Redirect exact from="/" to={isLoggedIn ? "/home" : "/"} />

          <Route
            exact
            path="/home"
            render={(matchProps) => (
              <Home isLoggedIn={isLoggedIn} history={history} {...matchProps} />
            )}
          />
          <Route
            render={(matchProps) => (
              <Signup
                setPassword={setPassword}
                setUserName={setUserName}
                setConfirmPassword={setConfirmPassword}
                {...matchProps}
              />
            )}
            exac
            path="/signup"
          />
          <Route exact path="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
