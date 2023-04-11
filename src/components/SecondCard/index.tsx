import React, { FC, useEffect, useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import { getArrayForSelect, getPrice } from "../../utils";
import { Select } from "../Select";
import { IOrder } from "../../store";
import { useTranslation } from "react-i18next";
import { order, setOrder } from "../../store/boxSlice";

import { useStyles } from "./style";

interface ISecondCard {
  item: IOrder;
  onClick: () => void;
}
interface RootState {
  orderBox: order;
}
const SecondCard: FC<ISecondCard> = ({ item, onClick }) => {
  const classes = useStyles();
  const storeOrder = useSelector((state: RootState) => state.orderBox.order);

  const { t } = useTranslation();
  const [selectValue, setSelectValue] = useState(String(item.count));

  const total =
    item.goods.purchaseType === "1count"
      ? (Number(selectValue) * item.goods.price).toFixed(2)
      : (Number(selectValue) * item.goods.weight * item.goods.price).toFixed(2);

  const dispatch = useDispatch();

  useEffect(() => {
    const copyArray = JSON.parse(JSON.stringify(storeOrder));
    copyArray.forEach((card: IOrder) => {
      if (card.goods.id === item.goods.id) {
        card.count = selectValue;
      }
    });

    dispatch(setOrder(copyArray));
    localStorage.setItem("array", JSON.stringify(copyArray));
  }, [selectValue]); // eslint-disable-line

  return (
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
          <CloseOutlined className={classes.del} onClick={onClick} />
        </div>
        <div className={classes.rightBottom}>
          <div className={classes.coverSelectPlusPrice}>
            <div className={classes.cover}>
              <p className={classes.price}>{item.goods.price}</p>
              <span className={classes.price}>{t("uan")} /</span>
              <p className={classes.purchaseType}>
                {getPrice(item.goods.purchaseType)}
              </p>
            </div>
            <Select
              selectValue={selectValue}
              setValue={setSelectValue}
              optionArray={getArrayForSelect(item.goods.purchaseType)}
            />
          </div>
          <div>
            <span className={classes.price}>
              {total} {t("uan")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export { SecondCard };
