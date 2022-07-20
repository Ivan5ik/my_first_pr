import React, { FC } from "react";

import useStyles from "./style";

interface IButton {
  onClick: () => void;
}

const Button: FC<IButton> = ({ onClick }) => {
  const classes = useStyles();

  return (
    <button className={classes.button} onClick={onClick}>
      В кошик
    </button>
  );
};
export { Button };
