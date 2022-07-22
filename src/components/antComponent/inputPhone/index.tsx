import { Form } from "antd";
import React, { FC } from "react";
import InputMask from "react-input-mask";

import { useStyles } from "./style";

interface IInputPhone {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPhone: FC<IInputPhone> = ({ name, onChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Form.Item
        name={name}
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <InputMask
          className={classes.inputPhone}
          name={name}
          mask="+38(999)999-99-99"
          onChange={onChange}
        />
      </Form.Item>
    </div>
  );
};
export { InputPhone };
