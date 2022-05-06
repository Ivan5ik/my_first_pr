import React from "react";
import { Link } from "react-router-dom";
import { IRoutes, routesAbove, routesMiddleAbove } from "../../routes/routes";
import useStyles from "./style";

export default function Header(props: {
  routes: IRoutes[];
  routesAbove: IRoutes[];
}) {
  const classes = useStyles();

  const { routes, routesAbove } = props;
  return (
    <div className={classes.main}>
      <div className={classes.above}>
        <img src="./assets/photo.png" className={classes.img} />
        <div className={classes.cover}>
          <div className={classes.MiddleTop}>
            {routesMiddleAbove.map((item) => (
              <Link className={classes.colorWordsAbove} to={String(item.path)}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className={classes.MiddleBottom}>
            {routesAbove.map((item) => (
              <Link className={classes.colorWordsAbove} to={String(item.path)}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={classes.bottom}>
        {routes.map((item) => (
          <Link className={classes.colorWords} to={String(item.path)}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
