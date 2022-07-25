import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Select } from "../Select";
import { getArrayForSelect, ICard, getPrice } from "../../utils";
import { Button } from "../Button";
import { StoreContext } from "../../store";
import { useTranslation } from "react-i18next";

import useStyles from "./style";

interface ICardProps {
  item: ICard;
}

const Card: FC<ICardProps> = ({ item }) => {
  const classes = useStyles();

  const [selectValue, setSelectValue] = useState("1");
  const { shortDesc, name, price, purchaseType, imgUrl, id } = item;
  const context = React.useContext(StoreContext);

  const { t } = useTranslation();

  const history = useNavigate();

  const handleBuy = () => {
    context.setOrder([
      ...context.order,
      { goods: item, count: String(selectValue) },
    ]);

    // resultLocalList.push({ goods: item, count: Number(selectValue) });s
    localStorage.setItem(
      "array",
      JSON.stringify([
        ...context.order,
        { goods: item, count: Number(selectValue) },
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
