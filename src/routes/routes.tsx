import { ReactNode } from "react";

import { Box } from "../pages/Box";
import { Cataloge } from "../pages/Cataloge";
import { Item } from "../pages/Item";
import { Main } from "../pages/Main";
import { Phone } from "../pages/Phone";
import { Production } from "../pages/Production";
import { FireOutlined } from "@ant-design/icons";

export interface IRoutes {
  name?: string;
  path?: string;
  component?: ReactNode;
}

export const navigationMiddleBottom: any = [
  { name: "home", path: "/" },
  { name: "product", path: "/cataloge" },
  { name: "production", path: "/production" },
  { name: "basket", path: "/box", component: <FireOutlined /> },
];

export const navigationMiddleTop: IRoutes[] = [
  { name: "+38(063) 623 55 35", path: "/phone" },
  // { name: "УКРАЇНСЬКА" },
];

export const routes: IRoutes[] = [
  { path: "/cataloge", component: <Cataloge /> },
  { path: "/production", component: <Production /> },
  { path: "/box", component: <Box /> },
  { path: "/phone", component: <Phone /> },
  { path: "/catalog/:id", component: <Item /> },
  { path: "/", component: <Main /> },
];
