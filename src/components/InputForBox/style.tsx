import { createUseStyles } from "react-jss";
import { globalColors } from "../../utils";

const useStyles = createUseStyles({
  inputNameSur: {
    background: globalColors.darkBlack,
    border: "none",
    borderBottom: "1px solid white",
    "&:focus": {
      outline: "none",
      borderBottom: "1px solid #383f45",
      transition: "all 0.2s",
    },
    display: "block",
    padding: "0px 10px 0px 10px",
    width: "100%",
    height: "38px",
    paddingTop: "7px",
  },
});

export { useStyles };
