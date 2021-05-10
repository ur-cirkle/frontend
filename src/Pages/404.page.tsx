import React, { useState } from "react";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { CurrentJwtContext } from "../Contexts/CurrentJwtContext";
import { JwtTokens } from "../Contexts/JwtTokensContext";
import { UserContext } from "../Contexts/UserContext";
import { getCurrentUser } from "../Utils/getCurrentUser.utils";
import { uid } from "uid";
const PageNotFound: React.FC = () => {
  const { user, setUser } = useContext(UserContext);
  const { jwtTokens, setJwtTokens } = useContext(JwtTokens);
  const { setCurrentJwt } = useContext(CurrentJwtContext);
  const [switchAccount, setSwitchAccount] = useState(false);
  const history = useHistory();
  return (
    <div className="">
      <h1>404 Page:{user.username}</h1>
      <ul>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
        <li>
          <Link to="/explore">CardDir</Link>
        </li>
        <li>
          <Link to="/forgot">Forgot</Link>
        </li>
        <li>
          <Link to="/feed">Feed</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
        <li>
          <Link to="/new/blog">Add Blog</Link>
        </li>
        <li>
          <Link to="/img">img</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          const temptoken = jwtTokens;
          delete temptoken[user.username];
          setJwtTokens(temptoken);

          localStorage.setItem(
            "the-cirkle-jwt-tokens",
            JSON.stringify(temptoken)
          );

          getCurrentUser(null, temptoken, history, setCurrentJwt, setUser);
        }}
      >
        Log Out
      </button>
      <button
        onClick={() => {
          setUser({});
          history.push("/signup");
        }}
      >
        Add Account
      </button>
      <button onClick={() => setSwitchAccount(!switchAccount)}>
        Switch Account
      </button>
      {switchAccount &&
        Object.keys(jwtTokens).map((username) => {
          if (username === user.username) {
            return (
              <p
                style={{ fontWeight: "bold" }}
                onClick={() => setSwitchAccount(false)}
                key={uid()}
              >
                {username}
              </p>
            );
          } else {
            return (
              <p
                onClick={() => {
                  setCurrentJwt(jwtTokens[username]);
                  getCurrentUser(
                    jwtTokens[username],
                    jwtTokens,
                    history,
                    setSwitchAccount,
                    setUser
                  );
                  setSwitchAccount(false);
                }}
                key={uid()}
              >
                {username}
              </p>
            );
          }
        })}
    </div>
  );
};

export default PageNotFound;
