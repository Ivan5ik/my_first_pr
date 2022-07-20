import { Button, Form, Input } from "antd";
import React, { FC } from "react";
import { useStyles } from "./style";

const ButAnt = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button className={classes.buttonAnt} type="primary" htmlType="submit">
          Оформити замовлення
        </Button>
      </Form.Item>
    </div>
  );
};
export { ButAnt };
