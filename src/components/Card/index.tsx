import React, { FC, useState } from "react";
import Zoom from "react-reveal/Zoom";
import { useNavigate } from "react-router-dom";

import { Select } from "../Select";
import { arraySelectGram, arraySelectPiece, ICard } from "../../utils";
import { Button } from "../Button";

import useStyles from "./style";

interface ICardProps {
  item: ICard;
  valueNumber: number;
  onBuy?: any;
}

const Card: FC<ICardProps> = ({ item, valueNumber, onBuy }) => {
  const classes = useStyles();

  const [selectValue, setSelectValue] = useState("1");
  const { name, description, price, purchaseType, imgUrl, id } = item;

  const history = useNavigate();

  const handleBuy = () => {
    onBuy({ goods: item, count: Number(selectValue) });
  };

  const getBool = (valueNumber: number) => {};

  const setValue = () => {
    if (purchaseType === "100gram") {
      return "100гр";
    }
    if (purchaseType === "piece") {
      return "шт";
    }
  };

  const getArray = () => {
    if (purchaseType === "100gram") {
      return arraySelectGram;
    }
    if (purchaseType === "piece") {
      return arraySelectPiece;
    }
  };

  return (
    <Zoom>
      <div onClick={() => getBool(valueNumber)} className={classes.card}>
        <div onClick={() => history(`/catalog/${id}`)} className={classes.top}>
          <img className={classes.imgOfCard} alt="imgOfCard" src={imgUrl[0]} />
          <h1 className={classes.whiteColor}>{name}</h1>
          <p className={classes.whiteColor}>{description}</p>
        </div>

        <div className={classes.bottom}>
          <div className={classes.pricePlusSelect}>
            <div className={classes.coverPrice}>
              <p className={classes.price}>{price}грн /</p>
              <p className={classes.price}> {setValue()}</p>
            </div>

            <p>
              <Select
                selectValue={selectValue}
                setValue={setSelectValue}
                optionArray={getArray()}
              />
            </p>
          </div>
          <div className={classes.butPlusP}>
            <Button onClick={handleBuy} />
            <p
              className={classes.inMoreDetail}
              onClick={() => history(`/catalog/${id}`)}
            >
              Детальніше
            </p>
          </div>
        </div>
      </div>
    </Zoom>
  );
};
export { Card };
