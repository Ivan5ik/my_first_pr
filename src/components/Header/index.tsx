import React from "react";
import { Link } from "react-router-dom";

import {
  navigationMiddleTop,
  navigationMiddleBottom,
} from "../../routes/routes";

import useStyles from "./style";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const classes = useStyles();

  const history = useNavigate();

  return (
    <div className={classes.fixed}>
      <div className={classes.above}>
        <div className={classes.cover}>
          <img
            src="../assets/photo.png"
            onClick={() => history("/")}
            className={classes.img}
            alt="logo"
          />
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
