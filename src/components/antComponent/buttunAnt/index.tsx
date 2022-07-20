import { Button, Form } from "antd";
import React from "react";

import { useStyles } from "./style";

const ButAnt = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Оформити замовлення
        </Button>
      </Form.Item>
    </div>
  );
};
export { ButAnt };