import React, { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import { useTranslation } from "react-i18next";

import { arrayCard, arrayCategory } from "../../utils/const";
import { Card } from "../../components/Card";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";

import useStyles from "./style";
import { useDebounce } from "../../utils/hooks";
import { ICard } from "../../types";

const Catalog = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [test, setTest] = useState<ICard[]>([]);
  const [selectValue, setSelectValue] = useState("category");

  const setReset = () => {
    setSearchTerm("");
    setInputValue("");
    setSelectValue("category");
  };

  const debouncedSearchTerm = useDebounce(inputValue, 1000);

  useEffect(() => {
    setSearchTerm(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const mytateArray = arrayCard
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
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

    setTest(mytateArray);
  }, [searchTerm, selectValue]);

  return (
    <div className={classes.root}>
      <Zoom cascade>
        <h1 className={classes.product}>{t("catalogPage.product")}</h1>
      </Zoom>
      <div className={classes.underProduct}>
        <div className={classes.coverUnderProduct}>
          <Input value={inputValue} setValue={setInputValue} />
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
        {test.map((item: ICard) => {
          return <Card item={item} key={item.id} />;
        })}

        {test.length === 0 && (
          <div className={classes.middleWare}>
            <p>За даним пошуком товар не знайдено...</p>
          </div>
        )}
      </div>
    </div>
  );
};
export { Catalog };
