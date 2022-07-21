import React, { FC, useEffect, useState } from "react";
import { CloseOutlined } from "@ant-design/icons";

import { getArrayForSelect, getPrice } from "../../utils";
import { Select } from "../Select";
import { StoreContext } from "../../store";
import { useTranslation } from "react-i18next";

import { useStyles } from "./style";

interface ISecondCard {
  item: any;
  onClick: any;
}

const SecondCard: FC<ISecondCard> = ({ item, onClick }) => {
  const classes = useStyles();

  const { t } = useTranslation();
  const [selectValue, setSelectValue] = useState(String(item.count));

  const total = ((Number(selectValue) * item.goods.price) / 10).toFixed(2);

  const context = React.useContext(StoreContext);

  useEffect(() => {
    const copyArray = [...context.order];
    copyArray.forEach((card) => {
      if (card.goods.id === item.goods.id) {
        card.count = selectValue;
      }
    });

    context.setOrder(copyArray);
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
