import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route } from "./routes";

import "./App.less";

function App() {
  return (
    <div>
      <Header />
      <div className="styleApp">
        <Route />
      </div>
      <Footer />
    </div>
  );
}

export default App;
