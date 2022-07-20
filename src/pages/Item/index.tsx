import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Carousel } from "antd";

import { Select } from "../../components/Select";
import { arrayCard, arraySelectGram, arraySelectPiece } from "../../utils";
import { Button } from "../../components/Button";
import { StoreContext } from "../../store";

import useStyles from "./style";

const Item = () => {
  const classes = useStyles();

  const history = useLocation();
  const historyRoute = useNavigate();

  const [selectValue, setSelectValue] = useState("1");

  const [, , itemId] = history.pathname.split("/");
  console.log(history.pathname.split("/"));

  const item = arrayCard.find((item) => item.id === itemId)!;
  const { description, name, price, purchaseType, imgUrl } = item;
  const context = React.useContext(StoreContext);

  const setValue = () => {
    if (purchaseType === "1kg") {
      return "100гр";
    }
    if (purchaseType === "piece") {
      return "шт";
    }
  };

  const getArray = () => {
    if (purchaseType === "1kg") {
      return arraySelectGram;
    }
    if (purchaseType === "piece") {
      return arraySelectPiece;
    }
  };

  const handleBuy = () => {
    context.setOrder([
      ...context.order,
      {
        goods: item,
        count: Number(selectValue),
      },
    ]);
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
            До каталогу{" "}
          </div>
        </div>
        <div className={classes.mainContainer}>
          <div className={classes.img}>
            <Carousel>
              {imgUrl.map((item, index) => (
                <div className={classes.contentStyle}>
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
                  <span className={classes.price}>грн/</span>
                  <p className={classes.purchaseType}>{setValue()}</p>
                </div>

                <p className={classes.selectGram}>
                  <Select
                    selectValue={selectValue}
                    setValue={setSelectValue}
                    optionArray={getArray()}
                  />
                </p>
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
