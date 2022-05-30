import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import { useTranslation, Trans } from "react-i18next";

import {
  navigationMiddleTop,
  navigationMiddleBottom,
} from "../../routes/routes";

import useStyles from "./style";

export default function Header() {
  const classes = useStyles();

  const history = useNavigate();
  const location = useLocation();
  console.log(location);

  const { t, i18n } = useTranslation();

  console.log(i18n);

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
                  className={
                    classNames({ show: item.path === location.pathname }) ||
                    classes.colorWordsAbove
                  }
                  to={String(item.path)}
                >
                  {item.name}
                </Link>
              ))}
              {/* {Object.keys(lngs).map((item: any) => ( */}
              <p
                className={classes.colorWordsAbove}
                onClick={() =>
                  i18n.changeLanguage(i18n.language === "ua" ? "en" : "ua")
                }
              >
                {i18n.language === "ua" ? "УКРЇНСЬКА" : "ENGLISH"}
              </p>
              {/* ))} */}
            </div>
            <div className={classes.middleBottom}>
              {navigationMiddleBottom.map((item: any) => (
                <Link
                  className={
                    classNames({ show: item.path === location.pathname }) ||
                    classes.colorWordsAbove
                  }
                  to={String(item.path)}
                >
                  {t(item.name)}
                  <p className={classes.antIcon}>{item.component}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
