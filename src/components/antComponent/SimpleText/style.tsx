import { createUseStyles } from "react-jss";

import { globalColors } from "../../../utils";

const useStyles = createUseStyles({
  root: {
    "& .ant-col.ant-col-16.ant-form-item-control": {
      maxWidth: "none",
    },
    "& .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input, .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover":
      {
        background: globalColors.darkBlack,
      },
    "& .ant-form-item-explain-error": {
      paddingBottom: "15px",
    },
  },
  inputField: {
    background: globalColors.darkBlack,
    color: "white",
    border: "none",
    borderBottom: `1px solid ${globalColors.white}`,
  },
});

export { useStyles };
