import axios from "axios";
import React, { useContext, Dispatch, SetStateAction } from "react";
import { useHistory } from "react-router-dom";
import FormLogin from "../Components/FormLogin.component";
import { UserContext } from "../Contexts/UserContext";
export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const { setUser } = useContext(UserContext);
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
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(({ data }) => {
      const { user, err } = data;
      if (err) return setValidCredentials(false);
      setUser(user);

      history.push("/");
      return;
    });
  };
  return <FormLogin onLogin={onLogin} />;
};

export default Login;
