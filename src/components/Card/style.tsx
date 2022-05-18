import { createUseStyles } from "react-jss";

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
    justifyContent: "space-around",
    marginBottom: "14px",
  },
  cardTittle: { color: "white" },
  pricePlusSelect: {
    display: "flex",
    justifyContent: "space-around",
  },
  inMoreDetail: {
    marginBottom: "0px",
    alignSelf: "center",
    fontSize: "16px",
    "&:hover": {
      cursor: "pointer",
      color: "#ab3838",
      transition: "all 0.3s",
    },
    color: "white",
  },
  button: {
    background: "#1f1f1f",
    "&:hover": {
      cursor: "pointer",
      background: "#ab3838",
      transition: "all 0.3s",
    },
    color: "white",
    padding: "5px 10px 5px 10px",
    border: "1px solid white",
    borderRadius: "3px",
    width: "140px",
    fontSize: "16px",
  },
  top: { display: "flex", flexDirection: "column" },
  bottom: { display: "flex", flexDirection: "column" },
  imgOfCard: {
    "&:hover": { border: "1px solid #ab3838" },
  },
});
export default useStyles;
