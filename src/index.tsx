import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import ScrollToTop from "./utils/const";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    {/* <StoreProvider> */}
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
    {/* </StoreProvider> */}
  </Provider>
);

//бгортки над приложениям, не виводиться юзеру, твиводиться тіки
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
