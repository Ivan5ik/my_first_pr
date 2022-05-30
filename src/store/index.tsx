import React from "react";

export const StoreContext = React.createContext<any>(null);

export default ({ children }: any) => {
  const [order, setOrder] = React.useState([]);

  return (
    <StoreContext.Provider value={{ order, setOrder }}>
      {children}
    </StoreContext.Provider>
  );
};
