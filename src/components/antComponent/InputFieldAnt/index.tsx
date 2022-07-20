import { Form, Input } from "antd";
import React, { FC } from "react";
import { useStyles } from "./style";

interface IInputName {
  name: string;
  booleanValue: boolean;
}

const InputFieldAnt: FC<IInputName> = ({ name, booleanValue }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Form.Item
        name={name}
        rules={[
          { required: booleanValue, message: `Please input your ${name}!` },
        ]}
      >
        <Input className={classes.inputField} name={name} />
      </Form.Item>
    </div>
  );
};
export { InputFieldAnt };
