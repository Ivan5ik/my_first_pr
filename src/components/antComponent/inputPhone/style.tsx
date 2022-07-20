import { createUseStyles } from "react-jss";

import { globalColors } from "../../../utils";

const useStyles = createUseStyles({
  root: {
    "& .ant-col.ant-col-16.ant-form-item-control": {
      maxWidth: "none",
    },
  },
  inputPhone: {
    background: globalColors.darkBlack,
    width: "100%",
    border: "none",
    borderBottom: `1px solid ${globalColors.white}`,
    borderRadius: "2px",
    color: globalColors.white,
    padding: "4px 11px",
    "&:hover": {
      borderColor: globalColors.lightRed,
      borderRightWidth: "1px",
      transition: "all 0.2s",
    },
    "&:focus": {
      borderColor: globalColors.red,
      boxShadow: "0 0 0 2px rgb(171 56 56 / 20%)",
      borderRightWidth: "1px",
      outline: "0",
    },
  },
});
export { useStyles };
