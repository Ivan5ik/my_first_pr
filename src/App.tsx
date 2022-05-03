import React from "react";
import "./App.css";
import { Button } from "antd";
import moment from "moment";
import Input from "./components/Input";

function App() {
  console.log(moment().format("dddd"));

  return (
    <div className="App">
      hello
      <Button type="primary">Primary Button</Button>
      <p>hello</p>
      <Input />
    </div>
  );
}

export default App;
