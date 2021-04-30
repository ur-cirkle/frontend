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
import { credentialsObj } from "../Interfaces/Signup.interfaces";
import { useHistory } from "react-router-dom";
import { isCredentialsValid } from "../Utils/Verification.utils";
import { credentials } from "../Interfaces/Verification.interfaces";

const Signup: React.FC = () => {
  const { setUser } = useContext(UserContext);
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
  //* On SignUp
  const onSignup = (credentials: credentials) => {
    //* Checks if all credentials are satisfied
    if (isCredentialsValid(credentials))
      axios({
        url: "http://localhost:5000/signup",
        method: "POST",
        data: JSON.stringify({
          ...credentials,
          ...userLocation,
        }),
        headers: { "Content-Type": "application/json" },
      }).then(({ data }) => {
        console.log(data);
        setUser(data);
        history.push("/");
      });
  };
  useEffect(() => {
    //-  Native JS function to get user location
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      //- Getting Coords and Storing it in User Location Object
      setUserLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    });
    //- Setting Dependencies to empty so that this useEffect only once
  }, []);
  return (
    <FormSignUp onSignup={onSignup} isUsernameAvailable={isUsernameAvailable} />
  );
};

export default Signup;
