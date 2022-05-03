import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import moment from "moment";

export default function First_Project() {
  console.log(moment().format("dddd"));

  return (
    <div>
      hello
      <Button type="primary">Primary Button</Button>
      <p>hello</p>
    </div>
  );
}
