import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { isDarkTheme, applyDarkTheme } from "./utils/context";

document.body.style.opacity = 0;
document.body.onload = () => {
  if (isDarkTheme()) {
    applyDarkTheme(true);
  } else {
    applyDarkTheme(false);
  }
  document.body.style.opacity = 1;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
