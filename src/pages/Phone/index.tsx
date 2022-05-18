import React from "react";

import useStyles from "./style";

const Phone = () => {
  const classes = useStyles();

  return (
    <div>
      <h1> New</h1>
      <p className={classes.deleteMargin}>This is New</p>
    </div>
  );
};
export { Phone };
