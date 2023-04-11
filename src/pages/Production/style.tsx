import { createUseStyles } from "react-jss";

import { globalColors } from "../../utils/const";

const useStyles = createUseStyles({
  root: {
    backgroundImage: "url(../assets/avatarmanuFacture.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    height: "90vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  coverHeader: {
    paddingTop: "20vh",
    color: globalColors.white,
    width: "980px",
    margin: "0px auto",
    padding: "0 53px 0 53px",
  },
  p: {
    fontSize: "18px",
    lineHeight: "1.44",
    textAlign: "center",
    width: "67%",
    margin: "0px auto",
  },
  h1: {
    fontSize: "52px",
    color: globalColors.white,
    lineHeight: "1",
    marginBottom: "45px",
    textAlign: "center",
  },
  downCirc: {
    color: globalColors.white,
    display: "block",
    margin: "0px auto",
    fontSize: "32px",
    paddingBottom: "50px",
    " &:hover": {
      color: globalColors.red,
      cursor: "pointer",
      transition: "all 0.3s",
    },
  },
  middle: {
    width: "980px",
    margin: "0px auto",
    paddingBottom: "50px",
  },
  product: {
    color: globalColors.white,
    marginBottom: "60px",
    paddingTop: "25px",
    textAlign: "center",
  },
  carouselTop: {
    display: "flex",
    paddingBottom: "30px",
  },
  carouselBottom: {
    display: "flex",
    paddingTop: "30px",
  },
  leftCarousel: {
    width: "480px",
  },

  rightText: {
    display: "flex",
    alignItems: "center",
  },
  rightTextP: {
    fontSize: "15px",
    lineHeight: "1.7",
    color: globalColors.white,
    textIndent: "20px",
    marginLeft: "80px",
  },
  leftText: {
    display: "flex",
    alignItems: "center",
  },
  leftTextP: {
    fontSize: "15px",
    lineHeight: "1.7",
    color: globalColors.white,
    textIndent: "20px",
    marginRight: "80px",
  },
  rightCarousel: {
    width: "480px",
  },
  bottom: {
    width: "100%",
    background: "#242424",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  bottomContent: {
    width: "980px",
    margin: "0px auto",
  },
  bottomImg: {
    padding: "37px 125px",
    height: "430px",
    backgroundImage: "url(../assets/konsaltyng.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  },
  blockComponent: {
    maxWidth: "731px !important",
    minHeight: "340px",
    background: globalColors.black,
    opacity: "0.7",
  },
  h2: {
    fontSize: "24px",
    fontWeight: "normal",
    color: globalColors.white,
    textTransform: "uppercase",
    marginBottom: "25px",
    textAlign: "center",
  },
  p1: {
    marginBottom: "25px",
    fontSize: "14px",
    lineHeight: "1.57",
    color: globalColors.white,
    textAlign: "center",
  },
  p2: {
    fontSize: "14px",
    lineHeight: "1.57",
    color: globalColors.white,
    textAlign: "center",
    marginBottom: "0px",
  },
  tel: {
    fontSize: "20px",
    display: "block",
    color: globalColors.white,
    " &:hover": {
      color: "#cc0412",
      cursor: "pointer",
      transition: "all 0.3s",
    },
    textAlign: "center",
  },
  img: {
    height: "280px",
  },
});
export default useStyles;
