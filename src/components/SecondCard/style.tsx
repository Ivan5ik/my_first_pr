import { createUseStyles } from "react-jss";

import { globalColors } from "../../utils/const";

const useStyles = createUseStyles({
  goods: {
    fontSize: "19px",
    color: globalColors.lightGrey,
    fontFamily: "Roboto Condensed sans-serif",
    marginBottom: "2px",
  },
  top: {
    borderBottom: `2px solid ${globalColors.lightGrey}`,
    display: "flex",
    justifyContent: "center",
  },
  blockGoods: {
    borderBottom: `2px solid ${globalColors.lightGrey}`,
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
    borderBottom: `2px solid ${globalColors.lightGrey}`,
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
    borderBottom: `2px solid ${globalColors.lightGrey}`,
  },
  yourOrder: {
    fontSize: "27px",
    color: globalColors.white,
    marginBottom: "10px",
  },
  total: {
    fontSize: "20px",
    color: globalColors.lightGrey,
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
