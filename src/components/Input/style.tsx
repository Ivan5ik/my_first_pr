import { createUseStyles } from "react-jss";
import { globalColors } from "../../utils";

const useStyles = createUseStyles({
  inputAnt: {
    width: "200px",
    margin: "0px 15px 0px 10px ",
    display: "block",
    height: "30px",
  },
  root: {
    "& .ant-input": {
      backgroundColor: globalColors.darkBlack,
      border: "1px solid white",
      color: "white",
      boxShadow: "none",
    },
    "& .ant-input:hover": {
      border: "1px solid #ab3838 !important",
    },
  },
});

export { useStyles };
