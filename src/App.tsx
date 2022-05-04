import React from "react";
import "./App.css";
import moment from "moment";
import HeaderPage from "./components/Header";

function App() {
  console.log(moment().format("dddd"));

  return (
    <div className="App">
      <HeaderPage />
    </div>
  );
}

export default App;
