import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

import { IRoutes, navigationMiddleBottom } from "../../routes/routes";

import useStyles from "./style";
import { phoneNumber } from "../../utils";

export default function Header() {
  const classes = useStyles();

  const history = useNavigate();

  const location = useLocation();

  const { t, i18n } = useTranslation();

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
              <a
                href="callto:+380636235535"
                className={classes.colorWordsAbove}
              >
                {phoneNumber}
              </a>
              {/* If we will have three or more languages */}
              {/* {Object.keys(lngs).map((item: any) => ( */}
              <p
                className={classes.colorWordsAbove}
                onClick={() =>
                  i18n.changeLanguage(i18n.language === "ua" ? "en" : "ua")
                }
              >
                {i18n.language === "ua" ? "УКРАЇНСЬКА" : "ENGLISH"}
              </p>
            </div>
            <div className={classes.middleBottom}>
              {navigationMiddleBottom.map((item: any) => (
                <Link
                  key={item.name}
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
