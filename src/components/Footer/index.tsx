import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { basicWords, phoneNumber } from "../../utils";

import useStyles from "./style";

export default function Footer() {
  const classes = useStyles();

  const history = useNavigate();

  const { t } = useTranslation();

  return (
    <div>
      <div className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.top}>
            <div className={classes.menu}>
              {basicWords.map((item) => (
                <div
                  key={item.title}
                  className={classes.link}
                  onClick={() => history(item.key)}
                >
                  {t(item.title)}
                </div>
              ))}
            </div>
            <div>
              <div
                className={classes.topAside}
                onClick={() => window.scrollTo(0, 0)}
              >
                <p>{t("up")}</p>
              </div>
            </div>
          </div>

          <div className={classes.contacts}>
            <div className={classes.contactsRight}>
              <a className={classes.link} href="mailto:smak39617824@gmail.com">
                SMAK39617824@GMAIL.COM
              </a>
            </div>
            <div className={classes.contactsMain}>
              <div className={classes.contactsMainTop}>
                <p className={classes.pForContacts}>
                  {t("address.beforeBr")}
                  <br /> {t("address.afterBr")}
                </p>
              </div>
              <div className={classes.contactsMainBottom}>
                <p className={classes.pForContacts}>
                  {t("addressProduction.beforeBr")}
                  <br />
                  {t("addressProduction.afterBr")}
                </p>
              </div>
            </div>
            <div className={classes.contactsLeft}>
              <a href="callto:+380636235535" className={classes.link}>
                {phoneNumber}
              </a>
            </div>
          </div>

          <div className={classes.bottom}>
            <div className={classes.social}>
              <a
                href="https://www.facebook.com/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className={classes.pictureFacebook}
                  src="../assets/fb.png"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className={classes.pictureFacebook}
                  src="../assets/inst.png"
                  alt="inst"
                />
              </a>
            </div>
            <div className={classes.copyRight}>
              <p className={classes.pForCopyRight}>{t("license")}</p>
              <img
                className={classes.logo}
                src="../assets/logo.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
