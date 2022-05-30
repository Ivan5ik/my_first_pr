import React, { useState } from "react";

import { arrayCard, arrayCategory, ICard } from "../../utils";
import { Card } from "../../components/Card";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import { useTranslation } from "react-i18next";
import Zoom from "react-reveal/Zoom";

import useStyles from "./style";
import { StoreContext } from "../../store";

const Cataloge = () => {
  const classes = useStyles();

  const [input, setInput] = useState("");
  const [selectValue, setSelectValue] = useState("category");

  const context = React.useContext(StoreContext);

  const setReset = () => {
    setInput("");
    setSelectValue("category");
  };

  const handleAdd = (item: any) => {
    context.setOrder([...context.order, item]);
  };

  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <Zoom cascade>
        <h1 className={classes.product}>{t("catalogePage.product")}</h1>
      </Zoom>
      <div className={classes.underProduct}>
        <div className={classes.coverUnderProduct}>
          <Input value={input} setValue={setInput} />
          <div>
            <Select
              selectValue={selectValue}
              setValue={setSelectValue}
              optionArray={arrayCategory}
            />
          </div>
        </div>
        <p onClick={setReset} className={classes.reset}>
          {t("catalogePage.reset")}
        </p>
      </div>
      <div className={classes.productsList}>
        {arrayCard
          .filter((item) =>
            item.name.toLowerCase().includes(input.toLowerCase())
          )
          .filter((item) => {
            if ("category" === selectValue) {
              return true;
            } else {
              return item.category
                .toLowerCase()
                .includes(selectValue.toLowerCase());
            }
          })
          .map((item: ICard, index) => (
            <Card item={item} onBuy={handleAdd} valueNumber={index} />
          ))}
      </div>
    </div>
  );
};
export { Cataloge };
