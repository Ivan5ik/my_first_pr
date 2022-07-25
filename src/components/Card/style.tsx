import { createUseStyles } from "react-jss";

import { globalColors } from "../../utils";

const useStyles = createUseStyles({
  card: {
    width: "30%",
    minWidth: "250px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  butPlusP: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "14px",
  },

  whiteColor: {
    color: globalColors.white,
    minHeight: "10px",
  },
  pricePlusSelect: {
    display: "flex",
    justifyContent: "space-between",
  },
  price: {
    color: globalColors.white,
    fontSize: "16px",
  },
  inMoreDetail: {
    marginBottom: "0px",
    alignSelf: "center",
    fontSize: "16px",
    "&:hover": {
      cursor: "pointer",
      color: globalColors.red,
      transition: "all 0.3s",
    },
    color: globalColors.white,
  },

  top: { display: "flex", flexDirection: "column" },
  bottom: { display: "flex", flexDirection: "column" },
  imgOfCard: {
    "&:hover": { border: `1px solid ${globalColors.red}`, cursor: "pointer" },
  },
  coverPrice: {
    display: "flex",
    paddingTop: "3px",
  },
});
export default useStyles;
