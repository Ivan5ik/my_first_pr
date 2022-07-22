import React, { useState } from "react";
import { ICard } from "../utils";

export const StoreContext = React.createContext<any>(null);
// export interface IOrder {
//   goods: ICard;
//   count: string;
// }

const HandleStore = ({ children }: any) => {
  const [order, setOrder] = useState<any>(
    JSON.parse(localStorage.getItem("array") || "[]")
  );

  return (
    <StoreContext.Provider value={{ order, setOrder }}>
      {children}
    </StoreContext.Provider>
  );
};
export default HandleStore;
