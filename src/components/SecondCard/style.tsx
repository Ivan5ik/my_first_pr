import { createUseStyles } from "react-jss";
import { globalColors } from "../../utils";

const useStyles = createUseStyles({
  goods: {
    fontSize: "19px",
    color: "#576167",
    fontFamily: "Roboto Condensed sans-serif",
    marginBottom: "2px",
  },
  top: {
    borderBottom: "2px solid #5a6771",
    display: "flex",
    justifyContent: "center",
  },
  middle: {},
  blockGoods: {
    borderBottom: "2px solid #5a6771",
    padding: "20px 0px 20px 0px",
    display: "flex",
  },
  imgGoods: {
    height: "110px",
    width: "160px",
    marginRight: "25px",
  },
  rightTop: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    color: globalColors.white,
    fontSize: "17px",
    height: "50%",
    borderBottom: "2px solid #5a6771",
    paddingTop: "5px",
    marginBottom: "5px",
  },
  rightBottom: {
    width: "100%",
    paddingTop: "5px",
  },
  del: {
    fontSize: "16px",
    color: globalColors.red,
    paddingTop: "5px",
  },
  cover: {
    display: "flex",
  },
  price: { color: globalColors.white, marginRight: "5px" },
  purchaseType: { color: globalColors.white },
  coverSelectPlusPrice: {
    display: "flex",
    justifyContent: "space-between",
  },
  bottom: {
    padding: "20px 0 0 20px",
    borderBottom: "2px solid #5a6771",
  },
  yourOrder: {
    fontSize: "27px",
    color: globalColors.white,
    marginBottom: "10px",
  },
  total: {
    fontSize: "20px",
    color: "#5a6771",
  },
  uan: {
    fontSize: "27px",
    color: globalColors.white,
    marginLeft: "15px",
  },
  cardBlock: {
    width: "100%",
  },
});

export { useStyles };
