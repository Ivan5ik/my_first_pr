import React from "react";

import useStyles from "./style";

const Box = () => {
  const classes = useStyles();

  return (
    <div>
      <h1>Box</h1>
      <p className={classes.deleteMargin}>This is Box</p>
    </div>
  );
};
export { Box };
