import React, { useState } from "react";

import { arrayCard, arrayCategory, ICard } from "../../utils";
import { Card } from "../../components/Card";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";

import useStyles from "./style";

const Cataloge = () => {
  const classes = useStyles();

  const [input, setInput] = useState("");
  const [selectValue, setSelectValue] = useState("category");

  const setReset = () => {
    setInput("");
    setSelectValue("category");
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.product}>- ПРОДУКЦІЯ -</h1>
      <div className={classes.underProduct}>
        <Input value={input} setValue={setInput} />
        <div>
          <Select
            selectValue={selectValue}
            setValue={setSelectValue}
            optionArray={arrayCategory}
          />
        </div>
        <p onClick={setReset} className={classes.reset}>
          Скинути все
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
          .map((item: ICard) => (
            <Card item={item} />
          ))}
      </div>
    </div>
  );
};
export { Cataloge };
