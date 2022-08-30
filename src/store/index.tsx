import { ICard } from "../utils";
import { configureStore } from "@reduxjs/toolkit";
import boxSlice from "./boxSlice";

export interface IOrder {
  goods: ICard;
  count: string;
}

const configStore = configureStore({
  reducer: {
    orderBox: boxSlice,
  },
});

export default configStore;
export type RootState = ReturnType<typeof configStore.getState>;
export type AppDispatch = typeof configStore.dispatch;
