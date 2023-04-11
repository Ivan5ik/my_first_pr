import { createUseStyles } from "react-jss";

import { globalColors } from "../../utils/const";

const useStyles = createUseStyles({
  root: {
    backgroundImage: "url(../assets/headerBack.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    color: globalColors.white,
    height: "100%",
    width: "100%",
    // "& .ant-carousel .slick-dots": {
    //   zIndex: "1",
    // },
    padding: "100px 0px 100px 0px",
  },

  wrapperVideo: {
    display: "flex",
    justifyContent: "center",
    backgroundImage: "url(../assets/headerBack.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "900px",
    alignItems: "center",
  },

  containerVideo: {
    width: "980px",
  },
  contentStyle: {
    width: "490px",
  },
  photo: {
    maxWidth: "490px",
    display: "block",
    borderRadius: "10px",
    height: "500px",
  },

  description: {
    color: globalColors.white,
    fontSize: "16px",
    fontWeight: "400",
    marginBottom: "5px",
    lineHeight: "1.3",
  },
  title: {
    color: globalColors.white,
    lineHeight: "1.1",
    fontSize: "52px",
  },
  coverCarousel: {
    width: "980px",
    margin: "0px auto",
  },
  coverComponent: {
    display: "flex !important",
    minHeight: "10px",
    alignItems: "center",
    padding: "100px 0px 100px 0px",
  },
  styleImg: { width: "490px", display: "flex", justifyContent: "center" },
  sectionCard: {
    background: "#242424",
  },
  catalog: {
    background: "#242424",
    width: "100%",
    maxWidth: "980px",
    margin: "0px auto",
  },
  product: {
    color: globalColors.white,
    marginBottom: "60px",
    paddingTop: "25px",
    textAlign: "center",
  },
  productsList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    color: globalColors.white,
    background: globalColors.darkBlack,
    width: "294px",
    "&:hover": {
      cursor: "pointer",
      background: globalColors.red,
      transition: "all 0.3s",
    },
    border: "1px solid white",
    height: "38px",
    fontSize: "17px",
    display: "block",
    margin: "20px auto 0 auto",
  },

  coverButton: {
    paddingBottom: "30px",
  },
  video: {
    // width: "100px",
    width: "100%",
    height: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    width: "980px",
    margin: "0px auto",
    background: globalColors.darkBlack,
  },
  mainDiv: {
    background: "#242424",
  },

  // buttons: {
  // "& button": {
  //   background: "none",
  //   border: "0",
  //   outline: "0",
  //   cursor: "pointer",
  // },
  // "& button::before": {
  //   content: '"\f144"',
  //   fontFamily: "Font Awesome 5 Free",
  //   width: "30px",
  //   height: "30px",
  //   display: "inline-block",
  //   fontSize: "28px",
  //   color: "white",
  // },
  // },
  play: {
    color: "white",
    margin: "3px 0px 3px 3px",
    width: "27px",
    height: "20px",
    "& svg": {
      width: "27px",
      height: "20px",
    },
  },
  mapPlusForm: {
    display: "flex",
    width: "980px",
    margin: "0px auto",
    padding: "40px 0 40px 0",
  },
  cVideo: {
    display: "block",
    position: "relative",
    width: "100%",
    overflow: "hidden",
    cursor: "pointer",

    "&:hover .controls": {
      transform: "translateY(0%)",
      transition: "0.5s",
    },
    "& .controls": {
      display: "flex",
      position: "absolute",
      top: "524px",
      height: "34px",
      width: "100%",
      flexWrap: "wrap",
      background: "rgba(0,0,0,0.7)",
      transform: "translateY(98%)",
    },
    //   // transform: "translateY(0%)",
    //   // transition: "all 0.3s",
    // },
    // background: globalColors.darkBlack,
  },
  form: {
    width: "380px",
    height: "450px",
    position: "absolute",
    background: "#000000d9",
    padding: "20px",
  },
  link: {
    display: "block",
    color: globalColors.white,
    fontSize: "16px",
    "&:hover": {
      cursor: "pointer",
      color: globalColors.red,
      transition: "all 0.3s",
    },
  },
  location: {
    color: globalColors.white,
    fontSize: "16px",
    marginBottom: "0px",
  },
  coverFrom: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  iconAntd: {
    fontSize: "20px",
    marginRight: "15px",
    color: globalColors.lightGrey,
  },
  question: {
    color: globalColors.lightGrey,
    fontSize: "20px",
    margin: "20px 0px 10px 0px",
  },

  size: {
    width: "180px",
    marginRight: "10px",
    marginBottom: "20px",
  },
  coverSize: {
    display: "flex",
    height: "74px",
  },
  sizeQuestion: {
    width: "330px",
  },
  ruleDescription: {
    color: globalColors.lightGrey,
    fontSize: "10px",
    margin: "2px 0 15px 0",
  },
  orangeBar: {
    height: "2px",
    // top: "0px",
    // left: "0px",
    width: "100%",
    background: "black",
  },
  orangeJuice: {
    height: "2px",
    backgroundColor: globalColors.red,
  },
});
export default useStyles;
