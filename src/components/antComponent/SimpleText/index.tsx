import { Form } from "antd";
import React, { FC } from "react";

import { useStyles } from "./style";

interface ISimpleText {
  name: string;
  value: string;
}

const SimpleText: FC<ISimpleText> = ({ name, value }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Form.Item name={name} initialValue={value}>
        <p style={{ color: "white", fontSize: "17px" }}> {value}</p>
        <input type="hidden" value={value} />
      </Form.Item>
    </div>
  );
};
export { SimpleText };
