import React, { useState } from "react";

export const StoreContext = React.createContext<any>(null);
interface IOrder {
  goods: object;
  count: number;
}

const HandleStore = ({ children }: any) => {
  const [order, setOrder] = useState<IOrder[]>([]);

  return (
    <StoreContext.Provider value={{ order, setOrder }}>
      {children}
    </StoreContext.Provider>
  );
};
export default HandleStore;
