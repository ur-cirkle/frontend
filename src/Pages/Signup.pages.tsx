import axios from "axios";
import React, {
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
  useContext,
} from "react";

import * as bowser from "bowser";
import { isUsername, isPassword, isEmail } from "verifierjs";
import FormSignUp from "../Components/SignUp/FormSignup/FormSignup.component";
import { UserContext } from "../Contexts/UserContext";
import { useHistory } from "react-router-dom";
import { isCredentialsValid } from "../Utils/Verification.utils";
import { credentials } from "../Interfaces/Verification.interfaces";
import { CurrentJwtContext } from "../Contexts/CurrentJwtContext";
import { JwtTokens } from "../Contexts/JwtTokensContext";
import InterestSelection from "../Components/SignUp/InterestSelection.component";
import EmailForm from "../Components/SignUp/EmailForm/EmailForm.component";

const Signup: React.FC = () => {
  const browser = bowser.parse(window.navigator.userAgent);
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const { setCurrentJwt } = useContext(CurrentJwtContext);
  const { setJwtTokens, jwtTokens } = useContext(JwtTokens);
  const [interests, setInterests] = useState<Array<string>>([]);
  const [credentials, setCredentials] =
    useState<{
      username: string;
      password: string;
      type: string;
      timezone: string;
    }>();
  const [isCredentialsFilled, setIsCredentialsFilled] = useState(false);
  const [currentMode, setCurrentMode] = useState("InterestSelection");
  const history = useHistory();
  const [userLocation, setUserLocation]: [
    { latitude: null | number; longitude: null | number },
    Dispatch<
      SetStateAction<{ latitude: null | number; longitude: null | number }>
    >
  ] = useState<{ latitude: null | number; longitude: null | number }>({
    latitude: null,
    longitude: null,
  });
  //* When User Submits Email Form
  const onEmail = (email: string) => {
    //- If Email is Not Valid then return;
    if (!isEmail(email)) return;
    //- Else set email to email(given in param);
    setEmail(email);
    setCurrentMode("USERNAME")
  };
  //* Checks if
  const isUsernameAvailable = async (username: string, setFunc: Function) => {
    try {
      const resp = await axios({
        method: "get",
        url: "http://localhost:5000/check/username",
        params: {
          username,
        },
      });
      const { data } = resp;
      setFunc(data.available);
      return data.available;
    } catch (error) {}
  };
  //* When User has filled all credentials and click sign btn
  const onCredentialsFilled = (
    credentials: credentials,
    setErrors: Dispatch<SetStateAction<{ username: string; password: string }>>
  ) => {
    if (!isCredentialsValid(credentials)) {
      //- Creating password error string
      const passwordErrors = isPassword(credentials.password);
      const passwordErrStr = Object.values(passwordErrors).some((v) => v)
        ? "Invalid Password"
        : "";
      //- Creating username error string
      const usernameErrors = isUsername(credentials.username);
      const usernameErrStr = Object.keys(usernameErrors).some((v) => v)
        ? "Invalid Username"
        : "";
      //- Seting Err
      return setErrors({ username: usernameErrStr, password: passwordErrStr });
    }
    //- Fetchin All Interests
    axios({
      url: "http://localhost:5000/interests",
      method: "GET",
    }).then(({ data: interests }) => {
      setInterests(interests);
      setCredentials(credentials);
      setIsCredentialsFilled(true);
    });
    setCurrentMode("INTEREST_SELECTION")
  };
  //* On SignUp
  const onSignup = (selectedInterests: Array<string>) => {
    //* Checks if all credentials are satisfied
    axios({
      url: "http://localhost:5000/signup",
      method: "POST",
      data: JSON.stringify({
        ...user,
        ...userLocation,
        email,
        interests: selectedInterests,
        device: `${browser.browser.name},${browser.os.name},${browser.platform.type}`,
      }),
      headers: { "Content-Type": "application/json" },
    }).then(({ data }) => {
      const { user, token } = data;
      setUser(user);
      setCurrentJwt(token);
      setJwtTokens({
        ...jwtTokens,
        [user.username]: token,
      });
      history.push("/");
    });
  };

  useEffect(() => {
    if (user && user.userid) {
      history.push("/");
    }
    //-  Native JS function to get user location
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      //- Getting Coords and Storing it in User Location Object
      setUserLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    });

    //- Setting Dependencies to empty so that this useEffect only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (currentMode === "EMAIL") {
    return <EmailForm checkEmail={(email) => true} onEmailSignup={onEmail} />;
  } else if (currentMode === "USERNAME") {
    return (
      <FormSignUp
        onCredentialsFilled={onCredentialsFilled}
        isUsernameAvailable={isUsernameAvailable}
      />
    );
  }
  return <InterestSelection interests={interests} onSignup={onSignup} />;
};

export default Signup;
