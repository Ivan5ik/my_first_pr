import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  name: {
    color: "white",
    fontSize: "24px",
    marginBottom: "25px",
    paddingTop: "30px",
    textAlign: "center",
  },
  toCataloge: {
    color: "white",
    fontSize: "18px",
    marginLeft: "35px",
  },
  underName: {
    display: "flex",
    position: "relative",
  },
  root: {
    background: "#1f1f1f",
    width: "100%",
    maxWidth: "980px",
    margin: "0px auto",
    padding: "0px 20px 0px 20px",
  },
  symbol: {
    display: "block",
    color: "white",
    fontSize: "18px",
    position: "absolute",
    marginLeft: "15px",
  },
  content: {
    height: "355px",
    width: "50%",
    paddingLeft: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  img: { width: "50%", height: "355px" },
  mainContainer: {
    display: "flex",
    paddingBottom: "20px",
  },
  description: {
    color: "white",
    fontSize: "18px",
  },
  pricePlusSelect: {
    display: "flex",
    justifyContent: "space-around",
  },
  button: {
    display: "block",
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
    width: "70%",
    fontSize: "16px",
    margin: "0px auto",
  },
  shareBox: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  fb: {
    width: "40px",
    height: "40px",
    borderRadius: "20px",
    display: "block",
    marginRight: "20px",
  },
  shareFriends: {
    color: "#46596d",
    fontSize: "16px",
  },
  underDescription: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  contentStyle: {
    height: "313px",
    width: "470px",
  },
  photo: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
  },
});
export default useStyles;
