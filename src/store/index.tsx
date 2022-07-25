import React, { Dispatch, SetStateAction, useState } from "react";
import { ICard } from "../utils";

type childrenType = {
  children: React.ReactNode;
};
export interface IOrder {
  goods: ICard;
  count: string;
}

export const StoreContext = React.createContext<{
  order: IOrder[];
  setOrder: Dispatch<SetStateAction<IOrder[]>>;
}>({
  order: [],
  setOrder: () => undefined,
});

const StoreProvider = ({ children }: childrenType) => {
  const [order, setOrder] = useState<IOrder[]>(
    JSON.parse(localStorage.getItem("array") || "[]")
  );

  return (
    <StoreContext.Provider value={{ order, setOrder }}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreProvider;
