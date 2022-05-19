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
