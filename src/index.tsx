import React from "react";
import ReactDOM from "react-dom";

import Store from "./Data/State";
import App from "./App";
import Methods from "./Data/Methods";
ReactDOM.render(
  <Store>
    <Methods>
      <App />
    </Methods>
  </Store>,
  document.getElementById("root")
);
