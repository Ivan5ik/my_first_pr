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
import { Pro_Tarasa } from "../pages/Pro_Tarasa";
import { Sausage } from "../pages/Sausage";
import { Smoked } from "../pages/Smoked";
import { Sweet } from "../pages/Sweet";
import { Сontacts } from "../pages/Сontacts";

export interface IRoutes {
  name: string;
  path?: string;
  component?: ReactNode;
}

export const routesBottom: IRoutes[] = [
  { name: "Копчене м'яско", path: "smoked", component: <Smoked /> },
  { name: "Новинки", path: "new", component: <New /> },
  { name: "Делікатеси", path: "deli", component: <Deli /> },
  { name: "Ковбаси та сосиски", path: "sausage", component: <Sausage /> },
  { name: "Сало", path: "lardo", component: <Lardo /> },
  { name: "В'ялене м'ясо", path: "cured", component: <Cured /> },
  { name: "Заморожені продукти", path: "frozen", component: <Frozen /> },
  { name: "Солодке", path: "sweet", component: <Sweet /> },
  { name: "Кава/Чай", path: "coffee", component: <Coffee /> },
];

export const routesAbove: IRoutes[] = [
  { name: "Про Тараса", path: "pro-tarasa", component: <Pro_Tarasa /> },
  { name: "Продукція", path: "cataloge", component: <Cataloge /> },
  { name: "Виробництво", path: "production", component: <Production /> },
  { name: "Умови доставки", path: "delivery", component: <Delivery /> },
  { name: "Контакти", path: "contacts", component: <Сontacts /> },
  { name: "Кошик", path: "box", component: <Box /> },
];
export const routesMiddleAbove: IRoutes[] = [
  { name: "+38(063) 623 55 35", path: "phone", component: <Phone /> },
  { name: "УКРАЇНСЬКА" },
];
