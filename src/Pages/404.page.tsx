import * as React from "react";
import { Link } from "react-router-dom";
const PageNotFound: React.FC = () => {
  return (
    <div className="">
      <h1>404 Page</h1>
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
      </ul>
    </div>
  );
};

export default PageNotFound;
