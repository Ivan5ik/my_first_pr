import React, { useState } from "react";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { PhoneOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import useStyles from "./style";
import { arrayCard, button, globalColors, ICard } from "../../utils";
import { Card } from "../../components/Card";
import { StoreContext } from "../../store";
import { InputForBox } from "../../components/InputForBox";

const Main = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  const history = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    question: "",
  });

  const listCarousel = [
    {
      h: '"Вибір аудиторії" за версією Forbes Україна.',
      p1: 'В червні 2020 року українське видання Forbes, головного журналу для підприємців, присвоїло нашій компанії звання "Вибір аудиторії" серед малих виробників України.',
      p2: "Вдячні кожному з вас, хто всі ці роки підтримував нас та купував копчене м'яско.",
      p3: "Ця нагорода більшою мірою присв'ячується вам, а ми тільки коптимо та радуємо вас смаколиками.",
      img: "../assets/carousel_1.png",
    },
    {
      h: "М'ясо, копчене на дубових дровах",
      p1: "Вже майже 4 роки ми коптимо м'ясо виключно на дубових дровах використовуючи тільки натуральні спеції.",
      p2: "Саме тому нам довіряють кращі магазини країни, десятки ресторанів та сотні постійних клієнтів, адже ми коптимо для вас, як для власної сім'ї.",
      p3: "",
      img: "../assets/carousel_2.png",
    },
    {
      h: "Ніяких компромісів з якістю",
      p1: "Ми глибоко переконані, що хороше не може коштувати дешево. ",
      p2: "Кілька років ми шукали постачальників кращої сировини. Підбирали спеції одна до одної так, щоб попри усе ви відчували передусім смак м'яса. Знаходили компроміс між втратами під час приготування та собівартістю.",
      p3: "",
      img: "../assets/carousel_3.png",
    },
  ];

  const context = React.useContext(StoreContext);

  const handleAdd = (item: any) => {
    context.setOrder([...context.order, item]);
  };

  const handleAllInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    flag: any
  ) => {
    const result: any = { ...form };
    result[flag] = e.target.value;
    setForm(result);
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.coverCarousel}>
          <Fade bottom>
            <Carousel autoplay={true}>
              {listCarousel.map((item) => (
                <div className={classes.coverComponent}>
                  <div className={classes.contentStyle}>
                    <h2 className={classes.title}>{item.h}</h2>
                    <p className={classes.description}>{item.p1}</p>
                    <p className={classes.description}>{item.p2}</p>
                    <p className={classes.description}>{item.p3}</p>
                  </div>
                  <div className={classes.styleImg}>
                    <img
                      src={item.img}
                      alt="carousel"
                      className={classes.photo}
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          </Fade>
        </div>
      </div>
      <div style={{ background: "#242424" }}>
        <div className={classes.cataloge}>
          <Zoom cascade>
            <h1 className={classes.product}>{t("homePage.product")}</h1>
          </Zoom>

          <div className={classes.productsList}>
            {arrayCard.slice(0, 3).map((item: ICard, index) => (
              <Card item={item} valueNumber={index} onBuy={handleAdd} />
            ))}
          </div>

          <div className={classes.coverButton}>
            <Fade bottom>
              <button
                className={classes.button}
                onClick={() => history(button.key)}
              >
                {t("homePage.button")}
              </button>
            </Fade>
          </div>
        </div>
      </div>
      <div style={{ background: globalColors.darkBlack }}>
        <div className={classes.mapPlusForm}>
          <div className={classes.form}>
            <div className={classes.coverFrom}>
              <SearchOutlined className={classes.iconAntd} />
              <p className={classes.location}>
                {t("homePage.form.location")} <br />
                {t("homePage.form.wordDays")}
              </p>
            </div>
            <div className={classes.coverFrom}>
              <PhoneOutlined className={classes.iconAntd} />
              <a className={classes.link} href="tel:+380636235535">
                +38 (063) 623 55 35
              </a>
            </div>
            <div className={classes.coverFrom}>
              <MailOutlined className={classes.iconAntd} />
              <a className={classes.link} href="mailto:order@dymne.com.ua">
                order@dymne.com.ua
              </a>
            </div>

            <h1 className={classes.question}>{t("homePage.form.question")}</h1>
            <div className={classes.coverSize}>
              <div className={classes.size}>
                <InputForBox
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleAllInput(e, "name")
                  }
                  value={form.name}
                  placeholder={t("homePage.form.yourName")}
                />
              </div>
              <div className={classes.size}>
                <InputForBox
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleAllInput(e, "phoneNumber")
                  }
                  value={form.name}
                  placeholder={t("homePage.form.yourPhone")}
                />
              </div>
            </div>
            <p className={classes.location}>
              {t("homePage.form.yourQuestion")}
            </p>
            <div className={classes.sizeQuestion}>
              <InputForBox
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleAllInput(e, "question")
                }
                value={form.name}
              />
              <p className={classes.ruleDescription}>
                {t("homePage.form.decriptionTop")} <br />
                {t("homePage.form.decriptionBottom")}
              </p>
            </div>
            <Bounce left>
              <button className={classes.button} onClick={() => {}}>
                {t("homePage.form.submit")}
              </button>
            </Bounce>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5188.327345712222!2d32.058819958907904!3d49.44362346841462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b866064977f%3A0xf8dce723a9cbb5d8!2sCherkasy%2C%20Cherkasy%20Oblast%2C%2018000!5e0!3m2!1sen!2sua!4v1653551302400!5m2!1sen!2sua"
            width="100%"
            height="450px"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};
export { Main };