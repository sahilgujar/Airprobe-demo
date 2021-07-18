import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import { Switch, Redirect, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "mapbox-gl/dist/mapbox-gl.css";

import Login from "./views/Login";
import Signup from "./views/Signup";
import Home from "./views/Home";

function App() {
  const history = createBrowserHistory();
  const [userName, setUserName] = React.useState("vi@gmail.com");
  const [password, setPassword] = React.useState("Vijay@123");
  const [confirmPassword, setConfirmPassword] = React.useState("vi");
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = React.useState(-70.9);
  const [lat, setLat] = React.useState(42.35);
  const [zoom, setZoom] = React.useState(9);

  return (
    <div className="App">
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
          <Redirect
            mapContainer={mapContainer}
            map={map}
            lat={lat}
            lng={lng}
            zoom={zoom}
            exact
            from="/"
            to={isLoggedIn ? "/home" : "/"}
          />
          <Route
            exact
            path="/home"
            render={(matchProps) => (
              <Home userName={userName} {...matchProps} />
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
