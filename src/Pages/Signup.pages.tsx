import axios from "axios";
import React, {
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
  useContext,
} from "react";
import FormSignUp from "../Components/FormSignup.component";
import { UserContext } from "../Contexts/UserContext";
import { useHistory } from "react-router-dom";
import { isCredentialsValid } from "../Utils/Verification.utils";
import { credentials } from "../Interfaces/Verification.interfaces";
import { CurrentJwtContext } from "../Contexts/CurrentJwtContext";
import { JwtTokens } from "../Contexts/JwtTokensContext";
import InterestSelection from "../Components/InterestSelection.component";

const Signup: React.FC = () => {
  const { user, setUser } = useContext(UserContext);
  const { setCurrentJwt } = useContext(CurrentJwtContext);
  const { setJwtTokens, jwtTokens } = useContext(JwtTokens);
  const [interests, setInterests] = useState<
    Array<{ interest: string; id: string }>
  >([]);
  const [isCredentialsFilled, setIsCredentialsFilled] = useState(false);
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
  const onCredentialsFilled = (credentials: credentials) => {
    if (!isCredentialsValid(credentials)) return;
    axios({
      url: "http://localhost:5000/interests",
      method: "GET",
    }).then(({ data: interests }) => {
      setInterests(interests);
      setUser(credentials);
      setIsCredentialsFilled(true);
    });
  };
  //* On SignUp
  const onSignup = (selectedInterests: Array<Array<string>>) => {
    //* Checks if all credentials are satisfied

    axios({
      url: "http://localhost:5000/signup",
      method: "POST",
      data: JSON.stringify({
        ...user,
        ...userLocation,
        interests: selectedInterests,
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
  if (!isCredentialsFilled) {
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
