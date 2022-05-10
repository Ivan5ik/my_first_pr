import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {},
  footer: {
    width: "100%",
    height: "538px",
    background: "black",
    padding: "50px 0px 35px 0px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "980px",
    height: "453px",
    margin: "0px 105px 0px 105px",
    padding: "0px 10px 0px 10px",
    boxSizing: "border-box",
  },
  footerTop: {
    borderTop: "2px solid #31353a ",
    width: "960px",
    boxSizing: "border-box",
    height: "56px",
    padding: "12px 0px 12px 0px",
    display: "flex",
    justifyContent: "space-between",
  },
  footerContacts: {
    width: "960px",
    boxSizing: "border-box",
    height: "183px",
    borderTop: "2px solid #31353a ",
    padding: "20px 0px 20px 0px",
    display: "flex",
  },
  footerBottom: {
    width: "960px",
    boxSizing: "border-box",
    height: "217px",
    borderTop: "2px solid #31353a ",
    paddingTop: "55px",
  },
  footerMenu: {
    display: "flex",
    justifyContent: "space-between",
    width: "768px",
  },
  link: {
    display: "block",
    color: "white",
    fontSize: "18px",
  },

  topAside: {
    color: "white",
    fontSize: "18px",
  },
  contactsRight: {
    width: "210px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: "7px",
  },
  contactsMain: {
    width: "558px",
    borderLeft: "2px solid #31353a",
    borderRight: "2px solid #31353a",
    padding: "0px 30px 0px 30px",
  },
  contactsLeft: {
    width: "205px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  contactsMainTop: {
    height: "70.5px",
  },
  contactsMainBottom: {
    height: "70.5px",
  },
  pForContacts: {
    color: "#5a6771",
    fontSize: "17px",
    textAlign: "center",
  },
  social: {
    width: "960px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  },
  copyRight: {
    width: "960px",
    boxSizing: "border-box",
    marginTop: "60px",
    display: "flex",
    justifyContent: "center",
  },
  fb: {
    width: "60px",
    height: "60px",
    borderRadius: "10px",
    display: "block",
    margin: "0px 50px 0px 50px",
  },
  pForCopyRight: {
    color: "#5a6771",
    fontSize: "14px",
    display: "block",
  },
  logo: {
    width: "23px",
    height: "23px",
    borderRadius: "10px",
    display: "block",
    marginLeft: "7px",
  },
});
export default useStyles;
