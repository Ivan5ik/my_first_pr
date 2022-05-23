import React, { FC, useState } from "react";

import { CloseOutlined } from "@ant-design/icons";
import { arraySelect } from "../../utils";
import { Select } from "../Select";

import { useStyles } from "./style";

interface ISecondCard {
  item: any;
}

const SecondCard: FC<ISecondCard> = (props) => {
  const classes = useStyles();

  const { item } = props;

  const [selectValue, setSelectValue] = useState("1");

  const total = Number(selectValue) * item.price;

  return (
    <div className={classes.blockGoods}>
      <div>
        <img
          className={classes.imgGoods}
          src={item.imgUrl[0]}
          alt="secondCard"
        />
      </div>
      <div className={classes.cardBlock}>
        <div className={classes.rightTop}>
          <p>{item.name}</p>
          <CloseOutlined className={classes.del} />
        </div>
        <div className={classes.rightBottom}>
          <div className={classes.coverSelectPlusPrice}>
            <div className={classes.cover}>
              <p className={classes.price}>{item.price}</p>
              <span className={classes.price}>грн /</span>
              <p className={classes.purchaseType}>{item.purchaseType}</p>
            </div>
            <Select
              selectValue={selectValue}
              setValue={setSelectValue}
              optionArray={arraySelect}
            />
          </div>
          <div>
            <span className={classes.price}>{total} грн</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export { SecondCard };
