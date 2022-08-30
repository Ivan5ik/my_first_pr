import { ReactNode } from "react";
import { FireOutlined } from "@ant-design/icons";

import { Box } from "../pages/Box";
import { Catalog } from "../pages/Catalog";
import { Item } from "../pages/Item";
import { Main } from "../pages/Main";
import { Production } from "../pages/Production";

export interface IRoutes {
  name?: string;
  path?: string;
  component?: ReactNode;
}

export const routes: IRoutes[] = [
  { path: "/cataloge", component: <Catalog /> },
  { path: "/production", component: <Production /> },
  { path: "/box", component: <Box /> },
  { path: "/catalog/:id", component: <Item /> },
  { path: "/", component: <Main /> },
];
