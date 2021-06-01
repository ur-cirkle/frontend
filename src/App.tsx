import { useState, useEffect } from "react";
import CardDir from "./Pages/CardDir.pages";
import { Route, Switch, useHistory } from "react-router-dom";
import "./TempStyles.css";
import { UserContext  } from "./Contexts/UserContext";
import { CurrentJwtContext } from "./Contexts/CurrentJwtContext";
import { JwtTokens } from "./Contexts/JwtTokensContext";
import Signup from "./Pages/Signup.pages";

import PageNotFound from "./Pages/404.page";
import ForgotPassword from "./Pages/ForgotPassword.pages";
import Feed from "./Pages/Feed.pages";
import Map from "./Pages/Map.pages";
import Login from "./Pages/Login.pages";
import useLocalStorage from "./Hooks/useLocalStorage.hooks";
import { getCurrentUser } from "./Utils/getCurrentUser.utils";
import AddBlog from "./Pages/AddBlog.pages";
import Blog from "./Pages/Blog.pages";
import ImageEditor from "./Pages/ImageEditor.pages";
import SearchBar from "./Components/Feed/SeachBar/SearchBar.component";
import UserProfile from "./Pages/UserProfile.pages";
import FormLogin, { Signupbox } from "./Components/Login/FormLogin/Signupbox"
function App() {
  const [user, setUser] = useState({
    userid: "",
    username: "",
    email: "",
  });
  const history = useHistory();
  const [currentJwt, setCurrentJwt] = useLocalStorage(
    "current-jwt-token",
    "hello"
  );
  const [jwtTokens, setJwtTokens] = useLocalStorage("jwt-tokens", {});
  useEffect(() => {
    getCurrentUser(
      currentJwt,
      jwtTokens,
      history,
      setCurrentJwt,
      setUser,
      setJwtTokens
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <JwtTokens.Provider value={{ jwtTokens, setJwtTokens }}>
        <CurrentJwtContext.Provider value={{ currentJwt, setCurrentJwt }}>
          <UserContext.Provider value={{ user, setUser }}>
            <Switch>
              <Route component={CardDir} path="/explore" />
              <Route component={Login} path="/signin" />
              <Route component={Signupbox} path="/signup" />
              <Route component={ForgotPassword} path="/forgot" />
              <Route component={Feed} path="/feed" />
              <Route component={AddBlog} path="/new/blog" />
              <Route component={Blog} path="/:user/blogs/:blogid" />
              <Route component={ImageEditor} path="/img" />
              <Route component={Map} path="/map" />
              <Route component={SearchBar} path="/search" />
              <Route component={UserProfile} path="/p/:id" />
              <Route component={PageNotFound} path="*" />
            </Switch>
          </UserContext.Provider>
        </CurrentJwtContext.Provider>
      </JwtTokens.Provider>
    </div>
  );
}

export default App;
