import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IRoutes } from "../routes/routes";
import { chicken } from "./productArrays/chicken";
import { chpk } from "./productArrays/chpk";
import { pork } from "./productArrays/pork";
import { rawSmoked } from "./productArrays/rawSmoked";
import { semiFinished } from "./productArrays/semiFinished";
import { sosyska } from "./productArrays/sosyska";
import { varena } from "./productArrays/varena";
import { vuribKovbas } from "./productArrays/vuribKovbas";

export interface ICard {
  id: string;
  name: string;
  description: JSX.Element;
  price: number;
  purchaseType: string;
  category: string;
  hot: boolean;
  imgUrl: string[];
  shortDesc: string;
  weight: number;
}

export interface IOptionsList {
  name: string;
  key: string;
}

export interface IContextOrder {
  count: "string";
  goods: IContextOrderGoods;
}

export interface IContextOrderGoods {}

export const getPrice = (purchaseType: string) => {
  // if (purchaseType === "1kg") {
  //   return "1кг";
  // }
  if (purchaseType === "piece") {
    return "1кг";
  }
  if (purchaseType === "1count") {
    return "1шт";
  }
};

export const getArrayForSelect = (purchaseType: string) => {
  // if (purchaseType === "1kg") {
  //   return arraySelectGram;
  // }
  if (purchaseType === "piece" || "1count") {
    return arraySelectPiece;
  }
  return [];
};

export const currentYear = new Date().getFullYear();

export const phoneNumber = "+380 63 623 55 35";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const globalColors = {
  red: "#ab3838",
  white: "#ffffff",
  darkBlack: "#1f1f1f",
  black: "#000",
  lightGrey: "#5a6771",
  darkGrey: "#31353a",
  lightRed: "#b85d5a",
};

export interface IPayArray {
  name: string;
  check: string;
}

export const payArray: IPayArray[] = [
  { name: "boxPage.payRadioBut.cash", check: "cash" },
  { name: "boxPage.payRadioBut.cashless", check: "cashLess" },
];

export interface IDeliveryArray {
  name: string;
  check: string;
  img: string;
  style: string;
}

export const deliveryArray: IDeliveryArray[] = [
  {
    name: "boxPage.deliveryTo.cherkassy",
    check: "Cherkasy",
    img: "../assets/imgCherkassy.png",
    style: "imgCherkasy",
  },
  {
    name: "boxPage.deliveryTo.np",
    check: "NovaPochta",
    img: "../assets/novaPochta.png",
    style: "imgNova",
  },
  {
    name: "boxPage.deliveryTo.js",
    check: "Justin",
    img: "../assets/justin.png",
    style: "imgUkr",
  },
  {
    name: "boxPage.deliveryTo.ukr",
    check: "UkrPochta",
    img: "../assets/ukrPochta.png",
    style: "imgUkr",
  },
];

export const arraySelectPiece: IOptionsList[] = [
  { name: "1 шт", key: "1" },
  { name: "2 шт", key: "2" },
  { name: "3 шт ", key: "3" },
  { name: "4 шт ", key: "4" },
  { name: "5 шт ", key: "5" },
  { name: "6 шт ", key: "6" },
  { name: "7 шт ", key: "7" },
  { name: "8 шт ", key: "8" },
  { name: "9 шт ", key: "9" },
  { name: "10 шт ", key: "10" },
];

export const arraySelectGram: IOptionsList[] = [
  { name: `100 гр`, key: "1" },
  { name: `200 гр`, key: "2" },
  { name: `300 гр`, key: "3" },
  { name: `500 гр`, key: "5" },
  { name: `1 кг`, key: "10" },
  { name: `3 кг`, key: "30" },
  { name: `5 кг`, key: "50" },
];

export const arrayCategory: IOptionsList[] = [
  { name: "Категорія", key: "category" },
  { name: "Сосиски,сардельки", key: "sosyska" },
  { name: "Ковбаси варені", key: "varena" },
  { name: "Ковбасні вироби", key: "vuribKovbas" },
  { name: "Напівфабрикати", key: "semiFinished" },
  { name: "Продукція чпк", key: "chpk" },
  { name: "Вироби з курятини", key: "chicken" },
  { name: "Вироби зі свинини", key: "pork" },
  { name: "Сирокопчені ковбаси", key: "rawSmoked" },
];

export const navigationMiddleBottom: IRoutes[] = [
  { name: "home", path: "/" },
  { name: "product", path: "/cataloge" },
  { name: "production", path: "/production" },
  { name: "basket", path: "/box" },
];

export const basicWords = [
  { title: "home", key: "/" },
  { title: "product", key: "/cataloge" },
  { title: "productionFooter", key: "/production" },
];

export const button = { key: "cataloge" };

export const arrayCard = [
  ...chpk,
  ...vuribKovbas,
  ...varena,
  ...sosyska,
  ...rawSmoked,
  ...pork,
  ...chicken,
  ...semiFinished,
];
