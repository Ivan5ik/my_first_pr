import { createUseStyles } from "react-jss";

import { globalColors } from "../../utils";

const useStyles = createUseStyles({
  root: {
    background: globalColors.darkBlack,
    width: "100%",
    maxWidth: "980px",
    margin: "0px auto",
    "& .ant-input .inputAnt": {
      height: "37px",
    },
  },
  product: {
    color: globalColors.white,
    marginBottom: "60px",
    paddingTop: "25px",
    textAlign: "center",
  },
  underProduct: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    "& .inputAnt-0-2-17": {
      margin: "0px",
    },
  },
  coverUnderProduct: {
    display: "flex",
    "& .inputAnt-0-2-19": {
      margin: "0px 15px 0px 0px",
      height: "37px",
    },
  },
  reset: {
    color: globalColors.white,
    fontSize: "16px",
    cursor: "pointer",
    "&:hover": {
      color: globalColors.red,
      transition: "all 0.3s",
    },
  },
  productsList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
export default useStyles;
