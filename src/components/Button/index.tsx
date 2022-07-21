import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import useStyles from "./style";

interface IButton {
  onClick: () => void;
}

const Button: FC<IButton> = ({ onClick }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <button className={classes.button} onClick={onClick}>
      {t("inBox")}
    </button>
  );
};
export { Button };
