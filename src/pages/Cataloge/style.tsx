import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    background: "#1f1f1f",
    width: "100%",
    maxWidth: "980px",
    margin: "0px auto",
    padding: "0px 20px 0px 20px",
  },
  product: {
    color: "white",
    marginBottom: "60px",
    paddingTop: "25px",
    textAlign: "center",
  },
  underProduct: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  reset: {
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
  productsList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
export default useStyles;
