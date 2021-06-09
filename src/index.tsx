import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import App from "./App";
import "./fonts/Gilroy-Bold.woff";
import "./fonts/Gilroy-Heavy.woff";
import "./fonts/Gilroy-Regular.woff";
import "./fonts/Gilroy-Light.woff";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
