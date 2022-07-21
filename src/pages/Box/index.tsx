import React, { useRef } from "react";
import { Form, notification } from "antd";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

import { deliveryArray, payArray } from "../../utils";
import { SecondCard } from "../../components/SecondCard";
import { StoreContext } from "../../store";

import { InputFieldAnt } from "../../components/antComponent/InputFieldAnt";
import { RadioGroup } from "../../components/antComponent/radioGroup";
import { InputPhone } from "../../components/antComponent/inputPhone";
import { InputEmail } from "../../components/antComponent/inputEmail";
import { ButAnt } from "../../components/antComponent/buttonAnt";

import useStyles from "./style";

type NotificationType = "success" | "info" | "warning" | "error";

const Box = () => {
  let total = 0;

  const classes: any = useStyles();

  const [formANT] = Form.useForm();

  const { t } = useTranslation();

  const { getFieldsValue, setFieldsValue } = formANT;

  const historyRoute = useNavigate();

  const forma: any = useRef();

  const context = React.useContext(StoreContext);

  Form.useWatch("radioDelivery", formANT);

  const handleAllInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fields = getFieldsValue();
    setFieldsValue({ ...fields, phone: e.target.value });
  };

  const getImg = (index: string) =>
    deliveryArray.find((item) => index === item.check);

  context.order.forEach((item: any) => {
    total += Number((item.count * item.goods.price) / 10);
  });

  const handleDelGoods = (index: number) => {
    const res = [...context.order];
    res.splice(index, 1);
    context.setOrder(res);
  };

  const resultForInputEmail = context.order
    .map(
      (item: { goods: { name: any; price: any }; count: any }) =>
        `<li>Назва товару: ${item.goods.name}, Грам: ${item.count}00, Ціна:${item.goods.price}</li>`
    )
    .join();

  const openNotificationWithIcon = (
    type: NotificationType,
    message: string
  ) => {
    notification[type]({
      message,
    });
  };

  const handleResult = () => {
    if (context.order.length === 0) {
      return openNotificationWithIcon("error", "order isn't add");
    }

    //TODO move all set params to the .env
    emailjs
      .sendForm(
        process.env.REACT_APP_TEMPLATE1_KEY!, //move
        process.env.REACT_APP_TEMPLATE2_KEY!, //move
        forma.current.children[0],
        process.env.REACT_APP_TEMPLATE3_KEY! //move
      )
      .then(() => openNotificationWithIcon("success", "email was sent"))
      .catch(() => openNotificationWithIcon("error", "email wasn't sent"));
  };

  const onFinishFailed = () => {
    openNotificationWithIcon("error", "email wasn't sent");
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.product}>- {t("boxPage.order")} -</h1>
      <div className={classes.underName}>
        <span className={classes.symbol}> {"<"}</span>
        <div
          onClick={() => historyRoute("/cataloge")}
          className={classes.toCataloge}
        >
          {t("boxPage.toCataloge")}
        </div>
      </div>
      <div ref={forma}>
        <Form
          name="basic"
          initialValues={{ radioDelivery: "NovaPochta", pay: "cash" }}
          onFinish={handleResult}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={formANT}
        >
          <div ref={forma} className={classes.coverOrder}>
            <div className={classes.orderLeft}>
              <div>
                <p className={classes.yourContactData}>
                  {t("boxPage.contactData")}
                </p>
                <div className={classes.yourData}>
                  <p className={classes.paragraphName}>{t("boxPage.name")}</p>
                  <div className={classes.root}>
                    <InputFieldAnt name="name" booleanValue={true} />
                  </div>
                </div>
                <div className={classes.yourData}>
                  <p className={classes.paragraphName}>{t("boxPage.phone")}</p>
                  <div className={classes.root}>
                    <InputPhone name="phone" onChange={handleAllInput} />
                  </div>
                </div>
                <div className={classes.yourData}>
                  <p className={classes.paragraphName}>{t("boxPage.email")}</p>
                  <div className={classes.root}>
                    <InputEmail name="email" />
                  </div>
                </div>
              </div>
              <div className={classes.delivery}>
                <div className={classes.deliveryTo}>
                  <p className={classes.paragraphDelivery}>
                    {t("boxPage.delivery")}
                  </p>
                  <div className={classes.coverForAntRadio}>
                    <RadioGroup name="radioDelivery" array={deliveryArray} />
                  </div>
                </div>
                <div className={classes.dataDelivery}>
                  <div>
                    <div className={classes.coverCity}>
                      <p className={classes.city}>{t("boxPage.city")}</p>
                      <div className={classes.root}>
                        <InputFieldAnt name="city" booleanValue={true} />
                      </div>
                    </div>
                    <div className={classes.underCity}>
                      <p className={classes.tarifNova}>{t("boxPage.tarif")}</p>

                      <img
                        alt="photoDelivery"
                        className={
                          classes[
                            getImg(getFieldsValue().radioDelivery)?.style!
                          ]
                        }
                        src={getImg(getFieldsValue().radioDelivery)?.img!}
                      />
                    </div>
                    <div className={classes.coverAdress}>
                      <p className={classes.address}>{t("boxPage.address")}</p>
                      <div className={classes.root}>
                        <InputFieldAnt name="address" booleanValue={true} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.note}>
                <div className={classes.coverNote}>
                  <p className={classes.noteP}>{t("boxPage.note")}</p>
                  <div className={classes.root}>
                    <InputFieldAnt name="note" booleanValue={false} />
                  </div>
                </div>

                <div className={classes.coverPay}>
                  <p className={classes.payP}>{t("boxPage.pay")}</p>
                  <div className={classes.coverForAntRadio}>
                    <RadioGroup name="pay" array={payArray} />
                  </div>
                </div>
              </div>
              <input
                type="hidden"
                name="template"
                value={resultForInputEmail}
              />
              <input
                type="hidden"
                name="date"
                value={new Date().toLocaleString()}
              />
              <input
                type="hidden"
                name="id"
                value={Math.round(Math.random() * 1000000)}
              />
            </div>

            <div className={classes.orderRight}>
              <div className={classes.top}>
                <p className={classes.goods}>{t("boxPage.goods")}</p>
              </div>
              <div>
                {context.order.map((item: any, index: number) => (
                  <SecondCard
                    key={item.goods.id}
                    item={item}
                    onClick={() => handleDelGoods(index)}
                  />
                ))}
              </div>
              <div className={classes.bottom}>
                <p className={classes.yourOrder}>{t("boxPage.yourOrder")}</p>
                <p className={classes.total}>
                  {t("boxPage.total")}
                  <span className={classes.uan}>
                    {total.toFixed(2)}
                    {t("uan")}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <Fade bottom>
            <ButAnt />
          </Fade>
        </Form>
      </div>
    </div>
  );
};
export { Box };
