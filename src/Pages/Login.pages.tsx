import axios from "axios";
import React, { useContext, Dispatch, SetStateAction, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FormLogin from "../Components/FormLogin.component";
import { UserContext } from "../Contexts/UserContext";
import { CurrentJwtContext } from "../Contexts/CurrentJwtContext";
import { JwtTokens } from "../Contexts/JwtTokensContext";
import * as bowser from "bowser";
import moment from "moment-timezone";
export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const browser = bowser.parse(window.navigator.userAgent);
  const { user, setUser } = useContext(UserContext);
  const { setCurrentJwt } = useContext(CurrentJwtContext);
  const { jwtTokens, setJwtTokens } = useContext(JwtTokens);
  const history = useHistory();
  const onLogin = (
    password: string,
    context: { value: string; type: string; error: boolean },
    setValidCredentials: Dispatch<SetStateAction<boolean>>
  ) => {
    if (context.error || password.length === 0) return;
    axios({
      method: "POST",
      url: "http://localhost:5000/login",
      data: JSON.stringify({
        contextType: context.type,
        contextValue: context.value,
        password,
        timezone: moment.tz.guess(),
        device: `${browser.browser.name},${browser.os.name},${browser.platform.type}`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(({ data }) => {
      const { user, err, token } = data;
      if (err) return setValidCredentials(false);
      setUser(user);
      setCurrentJwt(token);
      setJwtTokens({
        ...jwtTokens,
        [user.username]: token,
      });
      history.push("/");
      return;
    });
  };
  useEffect(() => {
    if (user && user.userid) return history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return <FormLogin onLogin={onLogin} />;
};

export default Login;
