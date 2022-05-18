import React from "react";
import { useNavigate } from "react-router-dom";

import { basicWords } from "../../utils";

import useStyles from "./style";

export default function Footer() {
  const classes = useStyles();

  const history = useNavigate();

  return (
    <div className={classes.root}>
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
                  {item.title}
                </div>
              ))}
            </div>
            <div>
              <p className={classes.topAside}>НА ГОРУ 🠕</p>
            </div>
          </div>

          <div className={classes.contacts}>
            <div className={classes.contactsRight}>
              <a className={classes.link} href="mailto:tparandii@gmail.com">
                TPARANDII@GMAIL.COM
              </a>
            </div>
            <div className={classes.contactsMain}>
              <div className={classes.contactsMainTop}>
                <p className={classes.pForContacts}>
                  Адреса:
                  <br /> вул. Чигоріна 12, офіс 213, м. Київ, Україна
                </p>
              </div>
              <div className={classes.contactsMainBottom}>
                <p className={classes.pForContacts}>
                  Адреса виробництва:
                  <br /> м. Київ, вул. Зрошувальна 5В
                </p>
              </div>
            </div>
            <div className={classes.contactsLeft}>
              <a className={classes.link} href="tel:+380636235535">
                +38 (063) 623 55 35
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
                  src="./assets/fb.png"
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
                  src="./assets/inst.png"
                  alt="inst"
                />
              </a>
            </div>
            <div className={classes.copyRight}>
              <p className={classes.pForCopyRight}>
                © ДИМНЕ М'ЯСО ВІД ТАРАСА. 2022 . ВСІ ПРАВА ЗАХИЩЕНІ. ЗРОБЛЕНО BY
                UniCode
              </p>
              <img
                className={classes.logo}
                src="./assets/logo.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
