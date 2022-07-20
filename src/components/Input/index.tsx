import React, { FC } from "react";
import { Input as InputAnt } from "antd";
import { useStyles } from "./style";

interface IInput {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input: FC<IInput> = (props) => {
  const classes = useStyles();

  const { value, setValue } = props;

  const getInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e?.target?.value);

  return (
    <div className={classes.root}>
      <InputAnt
        className={classes.inputAnt}
        placeholder="Пошук"
        value={value}
        onChange={getInput}
      />
    </div>
  );
};
export { Input };
