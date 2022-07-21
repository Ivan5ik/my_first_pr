import { createUseStyles } from "react-jss";

import { globalColors } from "../../utils";

const useStyles = createUseStyles({
  root: {
    backgroundImage: "url(../assets/headerBack.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    color: globalColors.white,
    height: "90vh",
    width: "100%",
    "& .ant-carousel .slick-dots": {
      zIndex: "1",
    },
  },
  contentStyle: {
    width: "490px",
  },
  photo: { maxWidth: "490px", display: "block" },

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
    height: "80vh",
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
  mainDiv: {
    background: globalColors.darkBlack,
  },
  mapPlusForm: {
    display: "flex",
    width: "980px",
    margin: "0px auto",
    padding: "40px 0 40px 0",
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
  },
  sizeQuestion: {
    width: "330px",
  },
  ruleDescription: {
    color: globalColors.lightGrey,
    fontSize: "10px",
    margin: "2px 0 15px 0",
  },
});
export default useStyles;
