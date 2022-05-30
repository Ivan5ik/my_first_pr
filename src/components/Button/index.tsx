import React, { FC } from "react";
import useStyles from "./style";

interface IButton {
  onClick: any;
}

const Button: FC<IButton> = (props) => {
  const classes = useStyles();
  const { onClick } = props;

  return (
    <button className={classes.button} onClick={onClick}>
      В кошик
    </button>
  );
};
export { Button };
