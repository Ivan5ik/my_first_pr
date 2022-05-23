import { createUseStyles } from "react-jss";
import { globalColors } from "../../utils";

const useStyles = createUseStyles({
  container: {
    background: globalColors.darkBlack,
    width: "100%",
    maxWidth: "980px",
    margin: "0px auto",
  },
  deleteMargin: {
    marginBottom: "0px",
    paddingBottom: "10px",
    color: globalColors.white,
  },
  product: {
    color: globalColors.white,
    marginBottom: "60px",
    paddingTop: "25px",
    textAlign: "center",
  },
  toCataloge: {
    color: globalColors.white,
    fontSize: "18px",
    marginLeft: "22px",
    "&:hover": {
      color: globalColors.red,
    },
  },
  underName: {
    display: "flex",
    position: "relative",
    marginBottom: "12px",
  },
  symbol: {
    display: "block",
    color: globalColors.white,
    fontSize: "18px",
    position: "absolute",
    marginLeft: "1px",
  },

  orderLeft: {
    width: "50%",
    minHeight: "300px",
    padding: "0px 15px 0px 15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  orderRight: {
    width: "50%",
    minHeight: "300px",
    padding: "0px 15px 0px 15px",
  },
  coverOrder: {
    display: "flex",
    paddingBottom: "40px",
  },
  orderData: {},
  yourContactData: {
    color: globalColors.white,
    fontSize: "18px",
    marginBottom: "22px",
  },
  yourData: {
    marginBottom: "22px",
    color: globalColors.white,
    fontSize: "16px",
    display: "flex",
  },
  inputNameSur: {
    background: globalColors.darkBlack,
    border: "none",
    borderBottom: "1px solid white",
    "&:focus": {
      outline: "none",
      borderBottom: "1px solid #383f45",
      transition: "all 0.2s",
    },
    display: "block",
    padding: "0px 10px 0px 10px",
    width: "74%",
    height: "38px",
    paddingTop: "7px",
  },
  paragraphName: {
    width: "26%",
    padding: "0px 10px 0px 10px",
    marginBottom: "0px",
  },
  delivery: {},
  deliveryTo: {
    marginBottom: "22px",
    color: globalColors.white,
    fontSize: "16px",
    display: "flex",
  },
  dataDelivery: {},
  paragraphDelivery: {
    width: "26%",
    padding: "0px 10px 0px 10px",
    marginBottom: "0px",
  },
  radioButton: {
    color: globalColors.white,
    marginBottom: "5px",
    display: "block",
  },
  coverForAntRadio: {
    width: "75%",
  },
  novaPoshta: {},
  city: { width: "26%", padding: "0px 10px 0px 10px" },
  adress: { width: "26%", padding: "0px 10px 0px 10px" },
  coverCity: {
    marginBottom: "0px",

    color: globalColors.white,
    fontSize: "16px",
    display: "flex",
  },
  coverAdress: {
    marginBottom: "22px",
    color: globalColors.white,
    fontSize: "16px",
    display: "flex",
  },
  tarifNova: {
    color: globalColors.white,
    fontSize: "14px",
  },
  underCity: {
    paddingTop: "2px",
    display: "flex",
    paddingLeft: "120px",
    justifyContent: "space-between",
  },
  imgNova: {
    width: "160px",
    height: "30px",
  },
  imgUkr: {
    width: "160px",
    height: "45px",
  },
  imgJustin: {
    width: "143px",
    height: "45px",
  },
  note: { color: globalColors.white, fontSize: "16px", marginTop: "40px" },
  noteP: {
    width: "26%",
    padding: "0px 10px 0px 10px",
  },
  coverNote: {
    marginBottom: "22px",
    color: globalColors.white,
    fontSize: "16px",
    display: "flex",
  },

  coverPay: {
    marginBottom: "30px",
    color: globalColors.white,
    fontSize: "16px",
    display: "flex",
  },
  payP: { width: "26%", padding: "0px 10px 0px 10px" },
  button: {
    background: globalColors.darkBlack,
    "&:hover": {
      cursor: "pointer",
      background: globalColors.red,
      transition: "all 0.3s",
    },
    color: "white",
    padding: "5px 10px 5px 10px",
    border: "1px solid white",
    borderRadius: "3px",
    minWidth: "140px",
    width: "65%",
    fontSize: "16px",
    display: "block",
    marginLeft: "120px",
  },
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
});
export default useStyles;
