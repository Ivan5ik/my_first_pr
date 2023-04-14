import { createUseStyles } from "react-jss";

import { globalColors } from "../../utils/const";

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
  title: {
    color: globalColors.white,
    fontSize: "25px",
    cursor: "pointer",
  },
  pricePlusSelect: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "5px",
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
    height: "250px",
    objectFit: "cover",
    transition: "all 0.3s",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(0.97)",
    },
  },
  coverPrice: {
    display: "flex",
    paddingTop: "3px",
  },
});
export default useStyles;
