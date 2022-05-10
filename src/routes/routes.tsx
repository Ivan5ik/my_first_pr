import { ReactNode } from "react";

import { Box } from "../pages/Box";
import { Cataloge } from "../pages/Cataloge";
import { Coffee } from "../pages/Coffe";
import { Cured } from "../pages/Cured";
import { Deli } from "../pages/Deli";
import { Delivery } from "../pages/Delivery";
import { Frozen } from "../pages/Frozen";
import { Lardo } from "../pages/Lardo";
import { New } from "../pages/New";
import { Phone } from "../pages/Phone";
import { Production } from "../pages/Production";
import { ProTarasa } from "../pages/ProTarasa";
import { Sausage } from "../pages/Sausage";
import { Smoked } from "../pages/Smoked";
import { Sweet } from "../pages/Sweet";
import { Сontacts } from "../pages/Сontacts";

export interface IRoutes {
  name?: string;
  path?: string;
  component?: ReactNode;
}

export const navigationBottom: IRoutes[] = [
  { name: "Копчене м'яско", path: "smoked" },
  { name: "Новинки", path: "new" },
  { name: "Делікатеси", path: "deli" },
  { name: "Ковбаси та сосиски", path: "sausage" },
  { name: "Сало", path: "lardo" },
  { name: "В'ялене м'ясо", path: "cured" },
  { name: "Заморожені продукти", path: "frozen" },
  { name: "Солодке", path: "sweet" },
  { name: "Кава/Чай", path: "coffee" },
];

export const navigationMiddleBottom: IRoutes[] = [
  { name: "Про Тараса", path: "pro-tarasa" },
  { name: "Продукція", path: "cataloge" },
  { name: "Виробництво", path: "production" },
  { name: "Умови доставки", path: "delivery" },
  { name: "Контакти", path: "contacts" },
  { name: "Кошик", path: "box" },
];

export const navigationMiddleTop: IRoutes[] = [
  { name: "+38(063) 623 55 35", path: "phone" },
  { name: "УКРАЇНСЬКА" },
];

export const routes: IRoutes[] = [
  { path: "smoked", component: <Smoked /> },
  { path: "new", component: <New /> },
  { path: "deli", component: <Deli /> },
  { path: "sausage", component: <Sausage /> },
  { path: "lardo", component: <Lardo /> },
  { path: "cured", component: <Cured /> },
  { path: "frozen", component: <Frozen /> },
  { path: "sweet", component: <Sweet /> },
  { path: "coffee", component: <Coffee /> },
  { path: "pro-tarasa", component: <ProTarasa /> },
  { path: "cataloge", component: <Cataloge /> },
  { path: "production", component: <Production /> },
  { path: "delivery", component: <Delivery /> },
  { path: "contacts", component: <Сontacts /> },
  { path: "box", component: <Box /> },
  { path: "phone", component: <Phone /> },
];
