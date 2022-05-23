import React from "react";

import Header from "./components/Header";
import { Route } from "./routes";
import Footer from "./components/Footer";

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
