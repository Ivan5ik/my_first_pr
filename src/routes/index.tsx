import React from "react";
import { Routes, Route as RouteDOM } from "react-router-dom";

import { routes } from "./routes";

import useStyles from "./style";

const Route = () => {
  const classes = useStyles();

  return (
    <div className={classes.color}>
      <Routes>
        {routes.map((item) => (
          <RouteDOM path={item.path} element={item.component} key={item.path} />
        ))}
      </Routes>
    </div>
  );
};
export { Route };
