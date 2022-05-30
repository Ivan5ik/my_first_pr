import React, { FC } from "react";

import { useStyles } from "./style";

interface IBox {
  value: string;
  onChange: any;
  placeholder?: string;
}

const InputForBox: FC<IBox> = ({ value, onChange, placeholder = "" }) => {
  const classes = useStyles();

  return (
    <input
      className={classes.inputNameSur}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
export { InputForBox };
