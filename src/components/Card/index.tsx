import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Select } from "../Select";
import { arraySelect, ICard } from "../../utils";

import useStyles from "./style";

interface ICardProps {
  item: ICard;
}

const Card: FC<ICardProps> = ({ item }) => {
  const classes = useStyles();

  const [selectValue, setSelectValue] = useState("1");
  const { name, description, price, purchaseType, imgUrl, id } = item;

  const history = useNavigate();

  return (
    <div className={classes.card}>
      <div onClick={() => history(`/catalog/${id}`)} className={classes.top}>
        <img className={classes.imgOfCard} alt="imgOfCard" src={imgUrl[0]} />
        <h1 className={classes.cardTittle}>{name}</h1>
        <p style={{ color: "white" }}>{description}</p>
      </div>

      <div className={classes.bottom}>
        <div className={classes.pricePlusSelect}>
          <p style={{ color: "white" }}>{price}</p>
          <p style={{ color: "white" }}>{purchaseType}</p>
          <p>
            <Select
              selectValue={selectValue}
              setValue={setSelectValue}
              optionArray={arraySelect}
            />
          </p>
        </div>
        <div className={classes.butPlusP}>
          <button className={classes.button}>В кошик</button>
          <p className={classes.inMoreDetail}>Детальніше</p>
        </div>
      </div>
    </div>
  );
};
export { Card };
