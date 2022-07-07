import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route } from "./routes";

import "./App.css";

function App() {
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
