import React, { ChangeEventHandler, FC } from "react";

import { useStyles } from "./style";

interface IBox {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  name?: string;
}

const InputForBox: FC<IBox> = ({
  value,
  onChange,
  placeholder = "",
  name = "",
}) => {
  const classes = useStyles();

  return (
    <input
      className={classes.inputNameSur}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export { InputForBox };
