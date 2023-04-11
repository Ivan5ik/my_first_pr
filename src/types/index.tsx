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

export interface IPayArray {
  name: string;
  check: string;
}

export interface IDeliveryArray {
  name: string;
  check: string;
  img: string;
  style: string;
}
