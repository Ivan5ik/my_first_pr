import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import { useTranslation } from "react-i18next";

import { arrayCard, arrayCategory, ICard } from "../../utils";
import { Card } from "../../components/Card";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";

import useStyles from "./style";

const Catalog = () => {
  const classes = useStyles();

  const [input, setInput] = useState("");
  const [selectValue, setSelectValue] = useState("category");

  const setReset = () => {
    setInput("");
    setSelectValue("category");
  };

  const { t } = useTranslation();

  console.log(selectValue, "selectValue");

  return (
    <div className={classes.root}>
      <Zoom cascade>
        <h1 className={classes.product}>{t("catalogPage.product")}</h1>
      </Zoom>
      <div className={classes.underProduct}>
        <div className={classes.coverUnderProduct}>
          <Input value={input} setValue={setInput} />
          <Select
            selectValue={selectValue}
            setValue={setSelectValue}
            optionArray={arrayCategory}
          />
        </div>
        <p onClick={setReset} className={classes.reset}>
          {t("catalogPage.reset")}
        </p>
      </div>

      <div className={classes.productsList}>
        {arrayCard
          .filter((item) => {
            if ("category" === selectValue) {
              return true;
            } else {
              return item.category
                .toLowerCase()
                .includes(selectValue.toLowerCase());
            }
          })
          .filter((item) =>
            item.name.toLowerCase().includes(input.toLowerCase())
          )

          .map((item: ICard) => (
            <Card item={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};
export { Catalog };
