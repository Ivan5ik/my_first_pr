import React from "react";

import useStyles from "./style";

const Production = () => {
  const classes = useStyles();

  return (
    <div>
      <h1> Production </h1>
      <p className={classes.deleteMargin}>This is Production</p>
    </div>
  );
};
export { Production };
