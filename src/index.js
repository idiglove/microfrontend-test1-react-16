import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

window.renderReact16 = (containerId, history) => {
  ReactDOM.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>,
    document.getElementById(containerId)
  );
};
