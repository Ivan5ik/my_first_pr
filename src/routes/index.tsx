import React from "react";
import { Routes, Route as RouteDOM } from "react-router-dom";
import { IRoutes, routesAbove, routesMiddleAbove } from "./routes";

interface Props {
  routes: IRoutes[];
  routesAbove: IRoutes[];
  routesMiddleAbove: IRoutes[];
}

const Route: React.FC<Props> = ({ routes, routesAbove, routesMiddleAbove }) => {
  return (
    <Routes>
      {routesMiddleAbove.map((item) => (
        <RouteDOM path={item.path} element={item.component} />
      ))}
      {routes.map((item) => (
        <RouteDOM path={item.path} element={item.component} />
      ))}
      {routesAbove.map((item) => (
        <RouteDOM path={item.path} element={item.component} />
      ))}
    </Routes>
  );
};
export { Route };
