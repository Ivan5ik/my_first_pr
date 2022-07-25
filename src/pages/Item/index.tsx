import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Carousel } from "antd";

import { Select } from "../../components/Select";
import { arrayCard, getArrayForSelect, getPrice } from "../../utils";
import { Button } from "../../components/Button";
import { StoreContext } from "../../store";
import { useTranslation } from "react-i18next";

import useStyles from "./style";

const Item = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useLocation();
  const historyRoute = useNavigate();
  const [selectValue, setSelectValue] = useState("1");
  const [, , itemId] = history.pathname.split("/");

  const item = arrayCard.find((item) => item.id === itemId)!;
  const { description, name, price, purchaseType, imgUrl } = item;
  const context = React.useContext(StoreContext);

  const handleBuy = () => {
    context.setOrder([
      ...context.order,
      {
        goods: item,
        count: String(selectValue),
      },
    ]);
    localStorage.setItem("arrayOrder", JSON.stringify(context.order));
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
