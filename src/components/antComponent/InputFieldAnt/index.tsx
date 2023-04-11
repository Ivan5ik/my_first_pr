import { Form, Input } from "antd";
import React, { FC } from "react";

import { useStyles } from "./style";

interface IInputFieldAnt {
  name: string;
  booleanValue: boolean;
  value?: string;
  disabled?: boolean;
}

const InputFieldAnt: FC<IInputFieldAnt> = ({
  name,
  booleanValue,
  value = "",
  disabled = false,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Form.Item
        name={name}
        rules={[
          { required: booleanValue, message: `Please input your ${name}!` },
        ]}
      >
        <Input
          className={classes.inputField}
          value={value}
          disabled={disabled}
          // name={name}
        />
      </Form.Item>
    </div>
  );
};
export { InputFieldAnt };
