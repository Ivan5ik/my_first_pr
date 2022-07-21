import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .ant-row.ant-form-item": {
      margin: "0px",
    },
    "& .ant-col-offset-8": {
      marginLeft: "17.333333%",
      paddingBottom: "30px",
    },
  },
});
export { useStyles };
