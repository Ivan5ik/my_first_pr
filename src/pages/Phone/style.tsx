import { createUseStyles } from "react-jss";
import { globalColors } from "../../utils";

const useStyles = createUseStyles({
  deleteMargin: {
    marginBottom: "0px",
    paddingBottom: "10px",
    color: globalColors.white,
  },
  root: {
    color: "white",
  },
});
export default useStyles;
