import { Form, Input } from "antd";
import React, { FC } from "react";
import { useStyles } from "./style";

interface IInputName {
  name: string;
}

const InputEmail: FC<IInputName> = ({ name }) => {
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
