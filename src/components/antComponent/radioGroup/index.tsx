import React, { FC } from "react";
import { Form, Radio } from "antd";
import { useTranslation } from "react-i18next";

import { useStyles } from "./style";
import { IDeliveryArray, IPayArray } from "../../../types";

interface IInputRadioGroup {
  name: string;
  array: IDeliveryArray[] | IPayArray[];
}

const RadioGroup: FC<IInputRadioGroup> = ({ name, array }) => {
  const classes = useStyles();

  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Form.Item name={name}>
        <Radio.Group name={name}>
          {array.map((item: IDeliveryArray | IPayArray) => (
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
