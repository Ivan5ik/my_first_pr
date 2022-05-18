import React from "react";

import useStyles from "./style";

const Main = () => {
  const classes = useStyles();

  return (
    <div>
      <h1>Main Page</h1>
      <p className={classes.deleteMargin}>This is Main Page</p>
    </div>
  );
};
export { Main };
