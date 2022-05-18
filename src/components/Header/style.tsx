import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  fixed: {
    position: "fixed",
    width: "100%",
    background: "#1f1f1f",
    borderBottom: "2px solid #31353a",
    padding: "0 20px 0 20px",
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
      color: "#ab3838",
      transition: "all 0.3s",
    },
  },
  middleBottom: {
    borderTop: "2px solid #31353a",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5px 0px 0px 20px",
  },
  cover: {
    display: "flex",
    width: "100%",
  },
  colorWordsAbove: {
    color: "white",
    fontSize: "18px",
    "&:hover": {
      color: "#ab3838",
      transition: "all 0.3s",
    },
  },
  middleTop: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 0px 5px 20px",
  },
  img: {
    width: "90px",
    height: "75px",
    display: "block",
  },
  nav: {
    width: "100%",
  },
});

export default useStyles;
