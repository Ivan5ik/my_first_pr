import React, { useState } from "react";

export const StoreContext = React.createContext<any>(null);

const HandleStore = ({ children }: any) => {
  //TODO ADD TYPE for state
  const [order, setOrder] = useState([]);

  return (
    <StoreContext.Provider value={{ order, setOrder }}>
      {children}
    </StoreContext.Provider>
  );
};
export default HandleStore;
