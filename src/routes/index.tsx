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
          // TODO ADD KEY
          <RouteDOM path={item.path} element={item.component} />
        ))}
      </Routes>
    </div>
  );
};
export { Route };
