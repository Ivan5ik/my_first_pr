import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .ant-select:not(.ant-select-customize-input) .ant-select-selector": {
      backgroundColor: "#1f1f1f !important",
    },
    "& .ant-select-arrow": {
      color: "#ffffff",
    },
    "& .ant-select": {
      color: "#ffffff",
    },
    "& .ant-select:not(.ant-select-disabled):hover .ant-select-selector": {
      borderColor: "#ab3838",
    },
  },
});
export default useStyles;
