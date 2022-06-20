import { createUseStyles } from "react-jss";

import { globalColors } from "../../utils";

const useStyles = createUseStyles({
  fixed: {
    position: "fixed",
    width: "100%",
    background: globalColors.darkBlack,
    borderBottom: `2px solid ${globalColors.darkGrey}`,
    padding: "0 20px 0 20px",
    zIndex: "2",
  },
  above: {
    display: "flex",
    height: "97px",
    width: "100%",
    maxWidth: "980px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10px",
    margin: " 0 auto",
  },

  colorWords: {
    color: "white",
    fontSize: "18px",
    "&:hover": {
      color: globalColors.red,
      transition: "all 0.3s",
    },
  },
  middleBottom: {
    borderTop: `2px solid ${globalColors.darkGrey}`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5px 0px 0px 20px",
    "& .show": {
      color: globalColors.red,
      fontSize: "18px",
    },
  },
  cover: {
    display: "flex",
    width: "100%",
  },
  colorWordsAbove: {
    color: "white",
    fontSize: "18px",
    "&:hover": {
      color: globalColors.red,
      transition: "all 0.3s",
    },
    marginBottom: "0px",
    cursor: "pointer",
  },
  middleTop: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 0px 5px 20px",
    "& .show": {
      color: globalColors.red,
      fontSize: "18px",
    },
  },
  img: {
    width: "90px",
    height: "75px",
    display: "block",
    cursor: "pointer",
  },
  nav: {
    width: "100%",
  },
  antIcon: {
    display: "inline",
    color: globalColors.red,
    marginLeft: "7px",
    fontSize: "20px",
  },
});

export default useStyles;
