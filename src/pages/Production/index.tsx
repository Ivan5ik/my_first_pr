import React from "react";
import { DownCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import { Carousel } from "antd";

import { phoneNumber } from "../../utils/const";

import useStyles from "./style";

const Production = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  const carouselBottom = [
    {
      h: "- Консалтинг з копчення -",
      p1: (
        <>
          ВІДДІЛ ПРОДАЖІВ: (Комерційний директор) <br />
          Телефон: <br />
          Телефон:
          <br /> Телефон:
          <br /> Телефон:
        </>
      ),
    },
    {
      h: "- Адреси наших магазинів -",
      p1: (
        <p style={{ textAlign: "left" }}>
          Вулиця Припортова, за зупинкою «Черемушки».
          <br /> Вулиця Вячеслава Чорновола, 156.
          <br /> Ринок на Шкільній,вулиця Онопрієнка, 2.
          <br /> На розі вулиць Юрія Іллєнко (колишня вулиця Горького) та
          Толстого.
          <br /> На розі вулиць Тараскова та Героїв Майдану (колишня вулиця
          Гайдара).
          <br /> На розі вулиць Пастерівська та Капітана Пилипенка.
          <br /> Вулиця Грушевського (колишня вулиця Котовського), поблизу
          будинку №95.
          <br /> Вулиця Симиренківській (колишня вулиця Рябоконя), 29.
          <br /> Вулиця Добровольського, біля будинку №15. Площа 700-річчя.
          Вулиці Перемоги,6.
          <br /> Черкаський район, село Свидівок, вулиця Шевченка (центр села,
          біля сільської ради).
          <br />
          Черкаський район, село Геронимівка, вулиця Благовісна (центр села).
          <br /> На розі вулиць проспект Хімвків, (колишня вулиця Рози
          Люксембург).
        </p>
      ),
    },
  ];

  const leftCarousel = [
    "../assets/new_carosuel_left_1.jpg",
    "../assets/new_carosuel_left_2.jpg",
    "../assets/new_carosuel_left_3.jpg",
  ];
  const rightCarousel = [
    "../assets/new_carousel_right_1.jpg",
    "../assets/new_carousel_right_2.jpg",
  ];

  return (
    <>
      <div className={classes.root}>
        <div className={classes.coverHeader}>
          <Fade top cascade>
            <div>
              <h1 className={classes.h1}>{t("productionPage.smoking")}</h1>
              <p className={classes.p}>{t("productionPage.descriptionTop")}</p>
            </div>
          </Fade>
        </div>
        <Fade bottom cascade>
          <DownCircleOutlined
            className={classes.downCirc}
            onClick={() => window.scrollTo(650, 650)}
          />
        </Fade>
      </div>
      <div className={classes.middle}>
        <Zoom cascade>
          <h1 className={classes.product}>{t("productionPage.production")}</h1>
        </Zoom>
        <div className={classes.carouselTop}>
          <div className={classes.leftCarousel}>
            <Carousel autoplay={true}>
              {leftCarousel.map((item) => (
                <img className={classes.img} src={item} key={item} alt={item} />
              ))}
            </Carousel>
          </div>
          <div className={classes.rightText}>
            <Slide right>
              <p className={classes.rightTextP}>
                {t("productionPage.rightTextP")}
              </p>
            </Slide>
          </div>
        </div>
        <div className={classes.carouselBottom}>
          <div className={classes.leftText}>
            <Slide left>
              <p className={classes.leftTextP}>
                {t("productionPage.leftTextP")}
              </p>
            </Slide>
          </div>
          <div className={classes.rightCarousel}>
            <Carousel autoplay={true}>
              {rightCarousel.map((item) => (
                <img className={classes.img} src={item} key={item} alt={item} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.bottomContent}>
          <div className={classes.bottomImg}>
            <Carousel autoplay={true}>
              {carouselBottom.map((item) => (
                <div className={classes.blockComponent} key={item.h}>
                  <h2 className={classes.h2}>{item.h}</h2>
                  <p className={classes.p1}>{item.p1}</p>
                  {/* <p className={classes.p2}>{t("moreDetailForPhone")}</p> */}
                  {/* <a href="callto:+380673055924" className={classes.tel}>
                    {phoneNumber}
                  </a> */}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};
export { Production };
