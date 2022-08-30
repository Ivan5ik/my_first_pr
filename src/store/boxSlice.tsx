import { createSlice } from "@reduxjs/toolkit";
import { IOrder } from ".";

export interface order {
  order: IOrder[];
}

const initialState: order = {
  order: JSON.parse(localStorage.getItem("array") || "[]"),
};

const boxSlice = createSlice({
  name: "box",
  initialState,
  reducers: {
    setOrder(state, { payload }) {
      state.order = payload;
    },
  },
});

export const { setOrder } = boxSlice.actions;
export default boxSlice.reducer;
