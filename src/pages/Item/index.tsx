import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { Select } from "../../components/Select";
import { arrayCard, getArrayForSelect, getPrice } from "../../utils/const";
import { Button } from "../../components/Button";
import { useTranslation } from "react-i18next";
import { order, setOrder } from "../../store/boxSlice";

import useStyles from "./style";
interface RootState {
  orderBox: order;
}
const Item = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useLocation();
  const historyRoute = useNavigate();
  const [selectValue, setSelectValue] = useState("1");
  const [, , itemId] = history.pathname.split("/");

  const item = arrayCard.find((item) => item.id === itemId)!;
  const { description, name, price, purchaseType, imgUrl } = item;
  const dispatch = useDispatch();

  const storeOrder = useSelector((state: RootState) => state.orderBox.order);

  const handleBuy = () => {
    const arrayList = [...storeOrder];

    arrayList.push({ goods: item, count: String(selectValue) });
    dispatch(setOrder(arrayList));
    localStorage.setItem(
      "arrayOrder",
      JSON.stringify([
        ...storeOrder,
        { goods: item, count: String(selectValue) },
      ])
    );
  };

  return (
    <div>
      <div className={classes.root}>
        <h1 className={classes.name}>- {name} -</h1>
        <div className={classes.underName}>
          <span className={classes.symbol}> {"<"}</span>
          <div
            onClick={() => historyRoute("/cataloge")}
            className={classes.toCataloge}
          >
            {t("toCatalog")}
          </div>
        </div>
        <div className={classes.mainContainer}>
          <div className={classes.img}>
            <Carousel>
              {imgUrl.map((item, index) => (
                <div className={classes.contentStyle} key={item}>
                  <img src={item} alt="carousel" className={classes.photo} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className={classes.content}>
            <div>
              <div className={classes.pricePlusSelect}>
                <div className={classes.cover}>
                  <p className={classes.price}>{price}</p>
                  <span className={classes.price}>{t("uan")}/</span>
                  <p className={classes.purchaseType}>
                    {getPrice(purchaseType)}
                  </p>
                </div>
                <div className={classes.selectGram}>
                  <Select
                    selectValue={selectValue}
                    setValue={setSelectValue}
                    optionArray={getArrayForSelect(purchaseType)}
                  />
                </div>
                <div>
                  <Button onClick={handleBuy} />
                </div>
              </div>
            </div>
            <p className={classes.description}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Item };
