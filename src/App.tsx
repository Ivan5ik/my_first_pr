import React from "react";
import moment from "moment";

import Header from "./components/Header";
import { Route } from "./routes";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  console.log(moment().format("dddd"));

  return (
    <div>
      <Header />
      <div style={{ paddingTop: "97px" }}>
        <Route />
      </div>
      <Footer />
    </div>
  );
}

export default App;
