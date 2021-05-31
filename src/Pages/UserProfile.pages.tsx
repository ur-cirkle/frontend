import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import { profileObj } from "../Interfaces/UserProfile.interfaces";
import io, { Socket } from "socket.io-client";
import axios from "axios";
import { CurrentJwtContext } from "../Contexts/CurrentJwtContext";
let socket: Socket;
export interface UserProfileProps {}

const UserProfile: React.SFC<UserProfileProps> = () => {
  const [isReqSent, setIsRegSent] = useState(false);
  const { id }: { id: string } = useParams();
  const { user } = useContext(UserContext);
  const [profile, setProfile] = useState<profileObj | {}>({});
  const { currentJwt } = useContext(CurrentJwtContext);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/profile",
      headers: {
        Authorization: `bearer ${currentJwt}`,
      },
      params: {
        receiverid: id,
      },
    }).then(({ data }) => {
      setProfile(data);
      setIsRegSent(data.connectionStatus);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    socket = io("127.0.0.1:3003", { transports: ["websocket"] });
  }, []);
  useEffect(() => {
    socket.emit("user_connection", {
      userid: user.userid,
      currentPosition: "Add Blog",
    });
  }, [user]);

  useEffect(() => {
    console.log(socket);
    if (!socket) return;

    socket.on("position", (data) => {
      if (data === 1) setIsRegSent(true);
    });
  }, []);
  if (!("username" in profile)) {
    return <div className="">Loading...</div>;
  }
  return (
    <div className="">
      <p>{profile.username}</p>
      <img src={profile.image} alt="DP" />
      <p>{profile.connections}</p>
      <p>{profile.subscriptions}</p>
      <p>{profile.bio}</p>
      {!isReqSent ? (
        <button
          onClick={() =>
            socket.emit("connectivity", {
              userid: user.userid,
              receiverid: id,
              type: "new",
              acc_type: profile.acc_type === "personal" ? 0 : 1,
            })
          }
        >
          Connect
        </button>
      ) : (
        <p>Sent</p>
      )}
      p
    </div>
  );
};

export default UserProfile;
