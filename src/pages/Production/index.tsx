import React from "react";
import { DownCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import { Carousel } from "antd";

import { phoneNumber } from "../../utils";

import useStyles from "./style";

const Production = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  const carouselBottom = [
    {
      h: "- Консалтинг з копчення -",
      p1: 'Провівши більше 6 000 годин за процесом копчення на дубових дровах і працюючи на всіх типах коптильних камер які були в Україні, навчаючись в кращих пітмастеров США і Скандинавії ми часто отримуємо запити на постановку процесу копчення в ресторанах і на виробництвах.Ми готові допомогти вам підібрати коптильню, налаштувати процеси, навчити ваш персонал, відпрацювати до 10 страв, прописати покроковий Cookbook цих страв і проконсультувати по "ходових" позицій і шляхах продажу на ринку.На сьогодні ми працювали з такими ресторанами, як "Мафія", "This is Pivbar", "Свиня на сіні" (Одеса), "Sho". Запускали повноцінні виробництва в Україні, Молдові, Грузії, Казахстані.',
    },
    {
      h: "- Консалтинг для ресторанів -",
      p1: 'Якщо ти ресторатор і бажаєш коптити м\'ясо у себе, ми допоможемо обрати оптимальне обладнання відповідно до бюджету та площі, зробити так, щоб ваша кухня не "задихалася" у диму, навчити персонал та швидко запустити нові страви у меню.Усі наші 6 000 годин копчення надаються вам у вигляді конкретних відповідей на поставлені задачі.',
    },
  ];

  const leftCarousel = [
    "../assets/carosuel_left_1.png",
    "../assets/carosuel_left_2.png",
    "../assets/carosuel_left_3.png",
    "../assets/carosuel_left_4.png",
  ];
  const rightCarousel = [
    "../assets/carousel_right_1.png",
    "../assets/carousel_right_2.png",
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
                <img src={item} key={item} alt={item} />
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
                <img src={item} key={item} alt={item} />
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
                  <p className={classes.p2}>{t("moreDetailForPhone")}</p>
                  <a href="callto:+380673055924" className={classes.tel}>
                    {phoneNumber}
                  </a>
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
