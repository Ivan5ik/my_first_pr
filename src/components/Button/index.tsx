import React from "react";
import useStyles from "./style";

const Button = () => {
  const classes = useStyles();

  return (
    <div>
      <button className={classes.button}>В кошик</button>
    </div>
  );
};
export { Button };
