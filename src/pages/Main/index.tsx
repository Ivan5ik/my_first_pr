import React, { useRef } from "react";
import { Carousel, Form, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { PhoneOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import emailjs from "@emailjs/browser";

import { arrayCard, button, ICard, phoneNumber } from "../../utils";
import { Card } from "../../components/Card";
import { InputFieldAnt } from "../../components/antComponent/InputFieldAnt";
import { InputPhone } from "../../components/antComponent/inputPhone";
import { ButAnt } from "../../components/antComponent/buttonAnt";

import useStyles from "./style";

const Main = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  const history = useNavigate();

  type NotificationType = "success" | "info" | "warning" | "error";

  const forma = useRef<any>(null);

  const openNotificationWithIcon = (
    type: NotificationType,
    message: string
  ) => {
    notification[type]({
      message,
    });
  };

  const handleResult = () => {
    emailjs
      .sendForm(
        process.env.REACT_APP_TEMPLATEMAIN1_KEY!,
        process.env.REACT_APP_TEMPLATEMAIN2_KEY!,
        forma.current.children[0],
        process.env.REACT_APP_TEMPLATEMAIN3_KEY!
      )
      .then(() => openNotificationWithIcon("success", "email was sent"))
      .catch(() => openNotificationWithIcon("error", "email wasn't sent"));
  };

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

  const handleAllInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fields = getFieldsValue();
    setFieldsValue({ ...fields, phoneMain: e.target.value });
  };
  const [mainFormANT] = Form.useForm();

  const { getFieldsValue, setFieldsValue } = mainFormANT;

  const onFinishFailed = () => {
    openNotificationWithIcon("error", "email wasn't sent");
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.coverCarousel}>
          <Fade bottom>
            <Carousel autoplay={true}>
              {listCarousel.map((item, index) => (
                <div className={classes.coverComponent} key={index}>
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
      <div className={classes.sectionCard}>
        <div className={classes.catalog}>
          <Zoom cascade>
            <h1 className={classes.product}>{t("homePage.product")}</h1>
          </Zoom>

          <div className={classes.productsList}>
            {arrayCard.slice(0, 3).map((item: ICard) => (
              <Card item={item} key={item.id} />
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
      <div className={classes.mainDiv}>
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
                {phoneNumber}
              </a>
            </div>
            <div className={classes.coverFrom}>
              <MailOutlined className={classes.iconAntd} />
              <a className={classes.link} href="mailto:smak39617824@gmail.com">
                SMAK39617824@GMAIL.COM
              </a>
            </div>
            <div ref={forma}>
              <Form
                name="basic"
                onFinish={handleResult}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={mainFormANT}
              >
                <h1 className={classes.question}>
                  {t("homePage.form.question")}
                </h1>
                <div className={classes.coverSize}>
                  <div className={classes.size}>
                    <InputFieldAnt name="nameMain" booleanValue={true} />
                  </div>
                  <div className={classes.size}>
                    <InputPhone name="phoneMain" onChange={handleAllInput} />
                  </div>
                </div>
                <p className={classes.location}>
                  {t("homePage.form.yourQuestion")}
                </p>
                <div className={classes.sizeQuestion}>
                  <InputFieldAnt name="questionMain" booleanValue={true} />
                </div>

                <Bounce left>
                  <ButAnt />
                </Bounce>
              </Form>
            </div>
          </div>
          <iframe
            title="mapsForPage"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.2258877867034!2d31.94775921557758!3d49.45484517935038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14d967aeeebab%3A0xd2d419e06860c48c!2z0JPQtdGA0L7QvdC40LzQvtCy0LrQsCwg0KfQtdGA0LrQsNGB0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0LjQvdCwLCAxOTYwMQ!5e1!3m2!1sru!2suk!4v1658134401592!5m2!1sru!2suk"
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
