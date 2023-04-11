import { createUseStyles } from "react-jss";

import { globalColors } from "../../utils/const";

const useStyles = createUseStyles({
  button: {
    background: globalColors.darkBlack,
    "&:hover": {
      cursor: "pointer",
      background: globalColors.red,
      transition: "all 0.3s",
    },
    color: "white",
    padding: "5px 10px 5px 10px",
    border: `1px solid ${globalColors.white}`,
    borderRadius: "3px",
    maxWidth: "140px",
    width: "100%",
    fontSize: "16px",
  },
});
export default useStyles;
