import React from "react";
import "./App.css";
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
// import { createBrowserHistory } from "history";
import "mapbox-gl/dist/mapbox-gl.css";

import Login from "./views/Login";
import Signup from "./views/Signup";
import Home from "./views/Home";

import Navbar from "./components/navbar";

function App() {
  // const history = createBrowserHistory();
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="App">
      <div></div>
      <Router>
        <Navbar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          // history={history}
        />
        {/* <ModuleLoader /> */}
        <Switch>
          <Route
            render={(matchProps) => <Home {...matchProps} />}
            path="/home"
          />
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
            render={(matchProps) => (
              <Signup
                setPassword={setPassword}
                setUserName={setUserName}
                setConfirmPassword={setConfirmPassword}
                {...matchProps}
              />
            )}
            path="/signup"
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
