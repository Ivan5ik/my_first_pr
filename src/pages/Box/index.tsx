import React, { useState } from "react";
import { Radio } from "antd";

import { InputForBox } from "../../components/InputForBox";
import { deliveryArray, payArray } from "../../utils";
import { SecondCard } from "../../components/SecondCard";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import useStyles from "./style";
import { StoreContext } from "../../store";

const Box = () => {
  const classes: any = useStyles();

  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    mail: "",
    inputCity: "",
    inputAdress: "",
    note: "",
  });

  const context = React.useContext(StoreContext);
  console.log(context.order);

  const [delivery, setDelivery] = useState("che");
  const [pay, setPay] = useState();

  const handleAllInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    flag: any
  ) => {
    const result: any = { ...form };
    result[flag] = e.target.value;
    setForm(result);
  };

  const getImg = (index: string) => {
    const picture = deliveryArray.find((item) => index === item.check);
    return picture;
  };

  let total = 0;

  context.order.forEach(
    (item: any) => (total += item.count * item.goods.price)
  );

  console.log(total);

  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <h1 className={classes.product}>- {t("boxPage.order")} -</h1>
      <div className={classes.underName}>
        <span className={classes.symbol}> {"<"}</span>
        <a href="mailto:tparandii@gmail.com" className={classes.toCataloge}>
          {t("boxPage.toCataloge")}
        </a>
      </div>

      <div className={classes.coverOrder}>
        <div className={classes.orderLeft}>
          <div>
            <p className={classes.yourContactData}>
              {t("boxPage.contactData")}
            </p>
            <div className={classes.yourData}>
              <p className={classes.paragraphName}>{t("boxPage.name")}</p>
              <div className={classes.root}>
                <InputForBox
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleAllInput(e, "name")
                  }
                  value={form.name}
                />
              </div>
            </div>
            <div className={classes.yourData}>
              <p className={classes.paragraphName}>{t("boxPage.phone")}</p>
              <div className={classes.root}>
                <InputForBox
                  placeholder={"+38 (___) ___-__-__"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleAllInput(e, "phoneNumber")
                  }
                  value={form.phoneNumber}
                />
              </div>
            </div>
            <div className={classes.yourData}>
              <p className={classes.paragraphName}>{t("boxPage.email")}</p>
              <div className={classes.root}>
                <InputForBox
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleAllInput(e, "mail")
                  }
                  value={form.mail}
                />
              </div>
            </div>
          </div>

          <div className={classes.delivery}>
            <div className={classes.deliveryTo}>
              <p className={classes.paragraphDelivery}>
                {t("boxPage.delivery")}
              </p>
              <div className={classes.coverForAntRadio}>
                <Radio.Group
                  onChange={(e) => setDelivery(e.target.value)}
                  value={delivery}
                >
                  {deliveryArray.map((item) => (
                    <Radio className={classes.radioButton} value={item.check}>
                      {t(item.name)}
                    </Radio>
                  ))}
                </Radio.Group>
              </div>
            </div>
            <div className={classes.dataDelivery}>
              <div>
                <div className={classes.coverCity}>
                  <p className={classes.city}>{t("boxPage.city")}</p>
                  <div className={classes.root}>
                    <InputForBox
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleAllInput(e, "inputCity")
                      }
                      value={form.inputCity}
                    />
                  </div>
                </div>
                <div className={classes.underCity}>
                  <p className={classes.tarifNova}>{t("boxPage.tarif")}</p>

                  <img
                    className={classes[getImg(delivery)?.style!]}
                    src={getImg(delivery)?.img!}
                  />
                </div>
                <div className={classes.coverAdress}>
                  <p className={classes.adress}>{t("boxPage.address")}</p>
                  <div className={classes.root}>
                    <InputForBox
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleAllInput(e, "inputAdress")
                      }
                      value={form.inputAdress}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.note}>
            <div className={classes.coverNote}>
              <p className={classes.noteP}>{t("boxPage.note")}</p>
              <div className={classes.root}>
                <InputForBox
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleAllInput(e, "note")
                  }
                  value={form.note}
                />
              </div>
            </div>

            <div className={classes.coverPay}>
              <p className={classes.payP}>{t("boxPage.pay")}</p>
              <div className={classes.coverForAntRadio}>
                <Radio.Group
                  onChange={(e) => setPay(e.target.value)}
                  value={pay}
                >
                  {payArray.map((item) => (
                    <Radio className={classes.radioButton} value={item.check}>
                      {t(item.name)}
                    </Radio>
                  ))}
                </Radio.Group>
              </div>
            </div>
          </div>
          <Fade bottom>
            <button className={classes.button}>{t("boxPage.toOrder")}</button>
          </Fade>
        </div>

        <div className={classes.orderRight}>
          <div className={classes.top}>
            <p className={classes.goods}>{t("boxPage.goods")}</p>
          </div>
          <div>
            {context.order.map((item: any) => (
              <SecondCard item={item} />
            ))}
          </div>
          <div className={classes.bottom}>
            <p className={classes.yourOrder}>{t("boxPage.yourOrder")}</p>
            <p className={classes.total}>
              {t("boxPage.total")}
              <span className={classes.uan}>
                {total}
                грн
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Box };
