import React, { createContext, FC, useState } from "react";

import { CloseOutlined } from "@ant-design/icons";
import { arraySelectGram, arraySelectPiece } from "../../utils";
import { Select } from "../Select";

import { useStyles } from "./style";

interface ISecondCard {
  item: any;
}

const SecondCard: FC<ISecondCard> = (props) => {
  const classes = useStyles();

  const { item } = props;

  const [selectValue, setSelectValue] = useState("1");

  const total = Number(selectValue) * item.goods.price;

  const myContext = createContext(total);

  const setValue = () => {
    if (item.goods.purchaseType === "100gram") {
      return "100гр";
    }
    if (item.goods.purchaseType === "piece") {
      return "шт";
    }
  };

  const getArray = () => {
    if (item.goods.purchaseType === "100gram") {
      return arraySelectGram;
    }
    if (item.goods.purchaseType === "piece") {
      return arraySelectPiece;
    }
  };

  return (
    <myContext.Provider value={total}>
      <div className={classes.blockGoods}>
        <div>
          <img
            className={classes.imgGoods}
            src={item.goods.imgUrl[0]}
            alt="secondCard"
          />
        </div>
        <div className={classes.cardBlock}>
          <div className={classes.rightTop}>
            <p>{item.goods.name}</p>
            <CloseOutlined className={classes.del} />
          </div>
          <div className={classes.rightBottom}>
            <div className={classes.coverSelectPlusPrice}>
              <div className={classes.cover}>
                <p className={classes.price}>{item.goods.price}</p>
                <span className={classes.price}>грн /</span>
                <p className={classes.purchaseType}>{setValue()}</p>
              </div>
              <Select
                selectValue={selectValue}
                setValue={setSelectValue}
                optionArray={getArray()}
              />
            </div>
            <div>
              <span className={classes.price}>{total} грн</span>
            </div>
          </div>
        </div>
      </div>
    </myContext.Provider>
  );
};
export { SecondCard };
