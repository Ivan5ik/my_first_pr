import React from "react";
import { Button, Form } from "antd";
import { useTranslation } from "react-i18next";

import { useStyles } from "./style";

const ButAnt = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.root}>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {t("toOrder")}
        </Button>
      </Form.Item>
    </div>
  );
};
export { ButAnt };
