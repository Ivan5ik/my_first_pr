import { ReactNode } from "react";
import { FireOutlined } from "@ant-design/icons";

import { Box } from "../pages/Box";
import { Cataloge } from "../pages/Cataloge";
import { Item } from "../pages/Item";
import { Main } from "../pages/Main";
import { Production } from "../pages/Production";

export interface IRoutes {
  name?: string;
  path?: string;
  component?: ReactNode;
}

export const navigationMiddleBottom: IRoutes[] = [
  { name: "home", path: "/" },
  { name: "product", path: "/cataloge" },
  { name: "production", path: "/production" },
  { name: "basket", path: "/box", component: <FireOutlined /> },
];

export const routes: IRoutes[] = [
  { path: "/cataloge", component: <Cataloge /> },
  { path: "/production", component: <Production /> },
  { path: "/box", component: <Box /> },
  { path: "/catalog/:id", component: <Item /> },
  { path: "/", component: <Main /> },
];
