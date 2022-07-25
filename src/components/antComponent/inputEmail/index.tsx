import React, { FC } from "react";
import { Form, Input } from "antd";

import { useStyles } from "./style";

interface IInputEmail {
  name: string;
}

const InputEmail: FC<IInputEmail> = ({ name }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Form.Item
        name={name}
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input className={classes.inputField} name={name} />
      </Form.Item>
    </div>
  );
};
export { InputEmail };
