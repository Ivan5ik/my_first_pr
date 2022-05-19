import { createUseStyles } from "react-jss";
import { globalColors } from "../../utils";

const useStyles = createUseStyles({
  root: {
    "& .ant-select:not(.ant-select-customize-input) .ant-select-selector": {
      backgroundColor: "#1f1f1f !important",
    },
    "& .ant-select-arrow": {
      color: globalColors.white,
    },
    "& .ant-select": {
      color: globalColors.white,
    },
    "& .ant-select:not(.ant-select-disabled):hover .ant-select-selector": {
      borderColor: globalColors.red,
    },
  },
});
export default useStyles;
