import React from "react";
import ChangePassword from "./Storage/ChangePassword";
import Explore from "./Storage/Explore";
import Login from "./Storage/Login";
import Posts from "./Storage/Posts";
import Signup from "./Storage/Signup";

const Storage: React.FC = ({ children }) => {
  return (
    <ChangePassword>
      <Explore>
        <Login>
          <Posts>
            <Signup>{children}</Signup>
          </Posts>
        </Login>
      </Explore>
    </ChangePassword>
  );
};

export default Storage;
