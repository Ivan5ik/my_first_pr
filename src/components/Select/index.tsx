import React, { FC } from "react";
import { Select as SelectAnt } from "antd";

import useStyles from "./style";

const { Option } = SelectAnt;

interface ISelect {
  optionArray: any;
  selectValue: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Select: FC<ISelect> = ({ selectValue, setValue, optionArray }) => {
  const classes = useStyles();

  const getSelect = (v: string) => {
    setValue(v);
  };

  return (
    <div className={classes.root}>
      <SelectAnt
        className={classes.selectAnt}
        value={selectValue}
        onChange={getSelect}
      >
        {optionArray.map((item: any) => (
          <Option value={item.key} key={item.key}>
            {item.name}
          </Option>
        ))}
      </SelectAnt>
    </div>
  );
};
export { Select };
