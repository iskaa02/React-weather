import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import App from "./App";
import "./fonts/OpenSans-Bold.ttf";
import "./fonts/OpenSans-ExtraBold.ttf";
import "./fonts/OpenSans-Regular.ttf";
import "./fonts/OpenSans-Light.ttf";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
