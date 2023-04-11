import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Select } from "../Select";
import { getArrayForSelect, getPrice } from "../../utils/const";
import { Button } from "../Button";
import { order, setOrder } from "../../store/boxSlice";

import useStyles from "./style";
import { ICard } from "../../types";

interface ICardProps {
  item: ICard;
}
interface RootState {
  orderBox: order;
}
const Card: FC<ICardProps> = ({ item }) => {
  const classes = useStyles();
  const [selectValue, setSelectValue] = useState("1");
  const { shortDesc, name, price, purchaseType, imgUrl, id } = item;

  const dispatch = useDispatch();

  const { t } = useTranslation();
  const history = useNavigate();

  const storeOrder = useSelector((state: RootState) => state.orderBox.order);

  const handleBuy = () => {
    const arrayList = [...storeOrder];

    arrayList.push({ goods: item, count: String(selectValue) });
    dispatch(setOrder(arrayList));

    localStorage.setItem(
      "array",
      JSON.stringify([
        ...storeOrder,
        { goods: item, count: String(selectValue) },
      ])
    );
  };

  return (
    <div className={classes.card}>
      <div onClick={() => history(`/catalog/${id}`)} className={classes.top}>
        <img className={classes.imgOfCard} alt="imgOfCard" src={imgUrl[0]} />
        <h1 className={classes.whiteColor}>{name}</h1>
        <p className={classes.whiteColor}>{shortDesc}</p>
      </div>

      <div className={classes.bottom}>
        <div className={classes.pricePlusSelect}>
          <div className={classes.coverPrice}>
            <p className={classes.price}>
              {price}
              {t("uan")} /
            </p>
            <p className={classes.price}> {getPrice(purchaseType)}</p>
          </div>

          <div>
            <Select
              selectValue={selectValue}
              setValue={setSelectValue}
              optionArray={getArrayForSelect(purchaseType)}
            />
          </div>
        </div>
        <div className={classes.butPlusP}>
          <Button onClick={handleBuy} />
          <p
            className={classes.inMoreDetail}
            onClick={() => history(`/catalog/${id}`)}
          >
            {t("moreDetail")}
          </p>
        </div>
      </div>
    </div>
  );
};
export { Card };
