import React from "react";
import { Link } from "react-router-dom";

import {
  navigationMiddleTop,
  navigationMiddleBottom,
} from "../../routes/routes";

import useStyles from "./style";

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.fixed}>
      <div className={classes.above}>
        <div className={classes.cover}>
          <img src="../assets/photo.png" className={classes.img} alt="logo" />
          <div className={classes.nav}>
            <div className={classes.middleTop}>
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
      </div>
    </div>
  );
}
