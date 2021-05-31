import axios from "axios";
import removeUser from "./removeUser.utils";
export const getCurrentUser = (
  currentJwt: string | null,
  jwtTokens: any,
  history: any,
  setCurrentJwt: Function,
  setUser: Function,
  setJwtTokens?: Function
) => {
  console.log(currentJwt);
  if (Object.keys(jwtTokens).length === 0) {
    if (currentJwt === null) {
      console.log("heh");
      localStorage.setItem(
        "the-cirkle-current-jwt-token",
        JSON.stringify(null)
      );
      setUser({});
    }
    return history.push("/signup");
  }

  let token = currentJwt;
  if (!currentJwt) {
    token = jwtTokens[Object.keys(jwtTokens)[0]];
    setCurrentJwt(token);
  }
  axios({
    method: "get",
    url: "http://localhost:5000/me",
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then((res) => {
      console.log(res.status);
      const { user } = res.data;
      setUser(user);
    })
    .catch((err) => {
      const { data, status } = err.response;
      console.log(data, status);
      if (status === 403) {
        if (!setJwtTokens) return;
        removeUser(
          data.username,
          jwtTokens,
          history,
          setCurrentJwt,
          setUser,
          setJwtTokens
        );
      }
    });
};
