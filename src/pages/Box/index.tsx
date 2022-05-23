import React, { useState } from "react";
import { Radio } from "antd";

import { InputForBox } from "../../components/InputForBox";
import { deliveryArray, payArray } from "../../utils";
import { SecondCard } from "../../components/SecondCard";

import useStyles from "./style";

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
  const testArray = [
    {
      id: "9ca8bad4-e31a-4ac9-b28e-97d92893f7d3",
      name: "Велентін/new🦃/",
      description:
        "Велетень у діаметрі. Зроблений з огрядних кусків бедра індика. Став улюбленцем для тих, хто робить своїм діткам бутерброди, хто дбає про калорійність м'яса, але не готовий поступатись у смакових якостях.",
      price: 53.4,
      purchaseType: "100gram",
      category: "meat",
      hot: false,
      imgUrl: [
        "../assets/velentin-1.png",
        "../assets/velentin-2.png",
        "../assets/velentin-3.png",
        "../assets/velentin-4.png",
        "../assets/velentin-5.png",
        "../assets/velentin-6.png",
        "../assets/velentin-7.png",
      ],
    },
    {
      id: "e7628092-3f93-4718-94ec-79f71a2a49f9",
      name: "BBQ PULLED свинина",
      description:
        'Тушонка зі свинини без отого всього "холодцю", тільки м\'яско, тільки хардкор',
      price: 100.0,
      purchaseType: "piece",
      category: "meat",
      hot: false,
      imgUrl: [
        "../assets/pulled-svinina-1.png",
        "../assets/pulled-svinina-2.png",
        "../assets/pulled-svinina-3.png",
        "../assets/pulled-svinina-4.png",
      ],
    },
  ];

  const a = [
    { item: testArray[0], count: 1 },
    { item: testArray[0], count: 1 },
  ];

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
    console.log(picture);
    return picture;
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.product}>- Оформлення замовлення -</h1>
      <div className={classes.underName}>
        <span className={classes.symbol}> {"<"}</span>
        <a href="mailto:tparandii@gmail.com" className={classes.toCataloge}>
          До каталогу{" "}
        </a>
      </div>

      <div className={classes.coverOrder}>
        <div className={classes.orderLeft}>
          <div className={classes.orderData}>
            <p className={classes.yourContactData}>Ваші контактні дані</p>
            <div className={classes.yourData}>
              <p className={classes.paragraphName}>
                Прізвище, ім'я та по батькові
              </p>
              <InputForBox
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleAllInput(e, "name")
                }
                value={form.name}
              />
            </div>
            <div className={classes.yourData}>
              <p className={classes.paragraphName}>Ваш телефон</p>
              <InputForBox
                placeholder={"+38 (___) ___-__-__"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleAllInput(e, "phoneNumber")
                }
                value={form.phoneNumber}
              />
            </div>
            <div className={classes.yourData}>
              <p className={classes.paragraphName}>Ваш Email</p>
              <InputForBox
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleAllInput(e, "mail")
                }
                value={form.mail}
              />
            </div>
          </div>

          <div className={classes.delivery}>
            <div className={classes.deliveryTo}>
              <p className={classes.paragraphDelivery}>Доставка</p>
              <div className={classes.coverForAntRadio}>
                <Radio.Group
                  onChange={(e) => setDelivery(e.target.value)}
                  value={delivery}
                >
                  {deliveryArray.map((item) => (
                    <Radio className={classes.radioButton} value={item.check}>
                      {item.name}
                    </Radio>
                  ))}
                </Radio.Group>
              </div>
            </div>
            <div className={classes.dataDelivery}>
              <div className={classes.novaPoshta}>
                <div className={classes.coverCity}>
                  <p className={classes.city}>Місто</p>
                  <InputForBox
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleAllInput(e, "inputCity")
                    }
                    value={form.inputCity}
                  />
                </div>
                <div className={classes.underCity}>
                  <p className={classes.tarifNova}>Відповідно до тарифів</p>

                  <img
                    alt="photoGoods"
                    className={classes[getImg(delivery)?.style!]}
                    src={getImg(delivery)?.img!}
                  />
                </div>
                <div className={classes.coverAdress}>
                  <p className={classes.adress}>Адреса</p>
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
          <div className={classes.note}>
            <div className={classes.coverNote}>
              <p className={classes.noteP}>Примітка</p>
              <InputForBox
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleAllInput(e, "note")
                }
                value={form.note}
              />
            </div>

            <div className={classes.coverPay}>
              <p className={classes.payP}>Оплата</p>
              <div className={classes.coverForAntRadio}>
                <Radio.Group
                  onChange={(e) => setPay(e.target.value)}
                  value={pay}
                >
                  {payArray.map((item) => (
                    <Radio className={classes.radioButton} value={item.check}>
                      {item.name}
                    </Radio>
                  ))}
                </Radio.Group>
              </div>
            </div>
          </div>
          <button className={classes.button}>Оформити замовлення</button>
        </div>

        <div className={classes.orderRight}>
          <div className={classes.top}>
            <p className={classes.goods}>Товар</p>
          </div>
          <div className={classes.middle}>
            {testArray.map((item: any) => (
              <SecondCard item={item} />
            ))}
          </div>
          <div className={classes.bottom}>
            <p className={classes.yourOrder}>Ваше замовлення</p>
            <p className={classes.total}>
              Разом <span className={classes.uan}>120грн</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Box };
