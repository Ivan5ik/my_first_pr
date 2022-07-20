import { createUseStyles } from "react-jss";

import { globalColors } from "../../../utils";

const useStyles = createUseStyles({
  root: {
    "& .ant-col.ant-col-16.ant-form-item-control": {
      maxWidth: "73.666667%",
    },
    "& .ant-radio-wrapper.ant-radio-wrapper-in-form-item": {
      color: globalColors.white,
      marginBottom: "7px",
    },
  },
});
export { useStyles };
