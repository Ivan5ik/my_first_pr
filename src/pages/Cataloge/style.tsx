import { createUseStyles } from "react-jss";
import { globalColors } from "../../utils";

const useStyles = createUseStyles({
  container: {
    background: globalColors.darkBlack,
    width: "100%",
    maxWidth: "980px",
    margin: "0px auto",
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
    "& .inputAnt-0-2-18": {
      margin: "0px 15px 0px 0px",
      height: "32px",
    },
  },
  reset: {
    color: globalColors.white,
    fontSize: "16px",
    cursor: "pointer",
  },
  productsList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
export default useStyles;
