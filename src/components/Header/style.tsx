import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "column",
  },
  divFixed: {
    position: "fixed",
    width: "100%",
  },
  above: {
    display: "flex",
    height: "75px",
    width: "100%",
    background: "#1f1f1f",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10px",
  },

  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "70px",
    width: "100%",
    background: "#1f1f1f",
    paddingRight: "70px",
    paddingLeft: "70px",
    borderBottom: "2px solid #31353a",
    paddingTop: "22px",
  },
  colorWords: {
    color: "white",
    fontSize: "18px",
  },
  middleBottom: {
    borderTop: "2px solid #31353a",
    width: "854px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5px 0px 0px 20px",
  },
  cover: {},
  colorWordsAbove: {
    color: "white",
    fontSize: "18px",
  },
  MiddleTop: {
    width: "854px",
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 0px 5px 20px",
  },
  img: {
    width: "90px",
    height: "75px",
    display: "block",
  },
});

export default useStyles;
