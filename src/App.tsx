import React from "react";
import CardDir from "./Pages/CardDir.pages";
import { Route, Switch } from "react-router-dom";
import FormLogin from "./Components/FormLogin.component";
import "./TempStyles.css";
import FormSignUp from "./Components/FormSignup.component";
import PageNotFound from "./Pages/404.page";
import ForgotPassword from "./Pages/ForgotPassword.pages";
import Feed from "./Pages/Feed.pages";
import Map from "./Pages/Map.pages";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={CardDir} path="/explore" />
        <Route component={FormLogin} path="/signin" />
        <Route component={FormSignUp} path="/signup" />
        <Route component={ForgotPassword} path="/forgot" />
        <Route component={Feed} path="/feed" />
        <Route component={Map} path="/map" />
        <Route component={PageNotFound} path="*" />
      </Switch>
    </div>
  );
}

export default App;
