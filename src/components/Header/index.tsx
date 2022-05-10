import React from "react";
import { Link } from "react-router-dom";

import {
  navigationBottom,
  navigationMiddleTop,
  navigationMiddleBottom,
} from "../../routes/routes";

import useStyles from "./style";

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.divFixed}>
        <div className={classes.above}>
          <img src="./assets/photo.png" className={classes.img} alt="logo" />
          <div className={classes.cover}>
            <div className={classes.MiddleTop}>
              {navigationMiddleTop.map((item) => (
                <Link
                  className={classes.colorWordsAbove}
                  to={String(item.path)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className={classes.middleBottom}>
              {navigationMiddleBottom.map((item) => (
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
          {navigationBottom.map((item) => (
            <Link className={classes.colorWords} to={String(item.path)}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
