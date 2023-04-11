import { createUseStyles } from "react-jss";

import { globalColors } from "../../utils/const";

const useStyles = createUseStyles({
  root: {
    "& .ant-input": {
      backgroundColor: globalColors.darkBlack,
      border: `1px solid ${globalColors.white}`,
      color: "white",
      boxShadow: "none",
    },
    "& .ant-input:hover": {
      border: `1px solid ${globalColors.red} !important`,
    },
  },
  inputAnt: {
    width: "200px",
    margin: "0px 15px 0px 10px ",
    display: "block",
    height: "30px",
  },
});

export { useStyles };
