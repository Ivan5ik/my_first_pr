import React from "react";
import { Link } from "react-router-dom";

import {
  routesBottom,
  routesMiddleAbove,
  routesMiddleBottom,
} from "../../routes/routes";

import useStyles from "./style";

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.divFixed}>
        <div className={classes.above}>
          <img src="./assets/photo.png" className={classes.img} alt="photoo" />
          <div className={classes.cover}>
            <div className={classes.MiddleTop}>
              {routesMiddleAbove.map((item) => (
                <Link
                  className={classes.colorWordsAbove}
                  to={String(item.path)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className={classes.middleBottom}>
              {routesMiddleBottom.map((item) => (
                <Link
                  className={classes.colorWordsAbove}
                  to={String(item.path)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={classes.bottom}>
          {routesBottom.map((item) => (
            <Link className={classes.colorWords} to={String(item.path)}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
