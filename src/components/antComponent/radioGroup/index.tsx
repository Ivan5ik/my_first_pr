import React, { FC } from "react";
import { Form, Radio } from "antd";
import { useTranslation } from "react-i18next";

import { useStyles } from "./style";

interface IInputRadioGroup {
  name: string;
  array: any;
}

const RadioGroup: FC<IInputRadioGroup> = ({ name, array }) => {
  const classes = useStyles();

  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Form.Item name={name}>
        <Radio.Group name={name}>
          {array.map((item: any) => (
            <Radio key={item.name} value={item.check}>
              {t(item.name)}
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>
    </div>
  );
};
export { RadioGroup };
