import { Form, Input, Radio } from "antd";
import React, { FC } from "react";
import { deliveryArray, payArray } from "../../../utils";
import { useTranslation } from "react-i18next";
import { useStyles } from "./style";

interface IInputName {
  name: string;
  array: any;
  def: any;
}

const RadioGroup: FC<IInputName> = ({ name, array, def }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Form.Item name={name}>
        <Radio.Group
          // defaultValue={def}
          className={classes.radioGroup}
          name={name}
        >
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
