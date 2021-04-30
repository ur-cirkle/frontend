import React, { useState } from "react";
import CardDir from "./Pages/CardDir.pages";
import { Route, Switch } from "react-router-dom";

import "./TempStyles.css";
import { UserContext } from "./Contexts/UserContext";
import Signup from "./Pages/Signup.pages";

import PageNotFound from "./Pages/404.page";
import ForgotPassword from "./Pages/ForgotPassword.pages";
import Feed from "./Pages/Feed.pages";
import Map from "./Pages/Map.pages";
import Login from "./Pages/Login.pages";

function App() {
  const [user, setUser] = useState({
    userid: "",
    username: "",
  });
  // const UserContext = UserContextFunc({ user, setUser });
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route component={CardDir} path="/explore" />
          <Route component={Login} path="/signin" />
          <Route component={Signup} path="/signup" />
          <Route component={ForgotPassword} path="/forgot" />
          <Route component={Feed} path="/feed" />
          <Route component={Map} path="/map" />
          <Route component={PageNotFound} path="*" />
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
