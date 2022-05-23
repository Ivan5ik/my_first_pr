import React, { useState } from "react";
import { arrayCard } from "../../utils";
import useStyles from "./style";

const Button = (props: { mainValue: number }) => {
  const classes = useStyles();
  const { mainValue } = props;

  const [res, setRes] = useState(arrayCard);

  const getTrue = (index: number) => {
    const prev = [...res];
    prev[index].hot = true;
    setRes(prev);
  };

  return (
    <div>
      <button className={classes.button} onClick={() => getTrue(mainValue)}>
        В кошик
      </button>
    </div>
  );
};
export { Button };
