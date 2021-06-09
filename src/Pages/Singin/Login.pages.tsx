import axios from "axios";
import React, { useContext, Dispatch, SetStateAction, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FormLogin from "../../Components/Login/FormLogin/FormLogin.component";
import { UserContext } from "../../Contexts/UserContext";
import { CurrentJwtContext } from "../../Contexts/CurrentJwtContext";
import { JwtTokens } from "../../Contexts/JwtTokensContext";
import * as bowser from "bowser";
import moment from "moment-timezone";
import { DivConnections } from "../../Components/ProfileHead/ProfileHead.styles";
import styled from 'styled-components';
import { Container,Svg } from "./Login.pages.styles";
export interface LoginProps { }


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
  return (
    <Container>

      <Svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 871.63 404.12"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:url(#linear-gradient);}.cls-2{fill:#fff;}" }} /><linearGradient id="linear-gradient" x1="56.68" y1="352.99" x2="374.07" y2="99.4" gradientTransform="matrix(1, 0, 0, -1, 0, 438)" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#4ebbcf" /><stop offset="0.13" stopColor="#4f92bc" /><stop offset="0.25" stopColor="#5070ad" /><stop offset="0.36" stopColor="#515ca3" /><stop offset="0.43" stopColor="#5154a0" /><stop offset="0.53" stopColor="#5555a0" /><stop offset="0.62" stopColor="#6059a0" /><stop offset="0.72" stopColor="#735fa1" /><stop offset="0.81" stopColor="#8e68a2" /><stop offset="0.91" stopColor="#b173a3" /><stop offset={1} stopColor="#db81a4" /><stop offset={1} stopColor="#dc81a4" /></linearGradient></defs><title>Ur-cikle Logo</title><path id="logo" className="cls-1" d="M330.26,252.1h0c41.59-4.08,68.23,43.11,43.32,76.67q-5.9,8-12.7,15.48C291,421.51,171.66,432.49,88.79,369.35-2.86,299.53-17.58,168.3,55,80.09c70.79-86.32,198.2-98.83,284.48-27.9a201.17,201.17,0,0,1,40.3,44.53c11.23,16.94,0,39.77-20.24,41.75h0a45.22,45.22,0,0,1-46.25-27.28,141.15,141.15,0,1,0-42.59,165.26A113.94,113.94,0,0,1,330.26,252.1Z" transform="translate(-8.96 -6.2)" /><g id="font"><path className="cls-2" d="M412.3,120.79c0-9.16,7.41-16.35,17.44-16.35s17.44,6.76,17.44,15.7c0,9.59-7.2,17-17.44,17C419.71,137.14,412.3,130,412.3,120.79Zm3.7,35.54h27.25V272.75H416Z" transform="translate(-8.96 -6.2)" /><path className="cls-2" d="M546.37,155V181a35.11,35.11,0,0,0-6.32-.65c-20.71,0-33.79,12.21-33.79,36v56.47H479V156.33H505v17C512.8,161.12,527,155,546.37,155Z" transform="translate(-8.96 -6.2)" /><path className="cls-2" d="M617,222.82,596.73,242v30.74H569.48V111h27.25v97.67l56.47-52.32h32.7l-48.61,48.83,53.19,67.59H657.34Z" transform="translate(-8.96 -6.2)" /><path className="cls-2" d="M708.13,111h27.26V272.75H708.13Z" transform="translate(-8.96 -6.2)" /><path className="cls-2" d="M880.15,223.26H788.8c3.27,17,17.44,27.91,37.71,27.91,13.09,0,23.33-4.15,31.62-12.65l14.6,16.79c-10.46,12.43-26.81,19-46.87,19-39,0-64.32-25.08-64.32-59.74S787.05,155,821.72,155c34,0,58.86,23.76,58.86,60.17C880.58,217.37,880.37,220.64,880.15,223.26Zm-91.57-18.1h66.06c-2.18-16.78-15-28.34-32.92-28.34C804.06,176.82,791.2,188.16,788.58,205.16Z" transform="translate(-8.96 -6.2)" /></g></Svg>

      <FormLogin onLogin={onLogin} ></FormLogin>
    
    </Container>
  );
};

export default Login;
