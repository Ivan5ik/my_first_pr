export interface IOptionsList {
  name: string;
  key: string;
}

export const globalColors = {
  red: "#ab3838",
  white: "#ffffff",
  darkBlack: "#1f1f1f",
  black: "#000",
  lightGrey: "#5a6771",
  darkGrey: "#31353a",
};

export const payArray = [
  { name: "boxPage.payRadioBut.cash", check: 1 },
  { name: "boxPage.payRadioBut.cashless", check: 2 },
];

export const deliveryArray = [
  {
    name: "boxPage.deliveryTo.cherkassy",
    check: "che",
    img: "",
    style: "",
  },
  {
    name: "boxPage.deliveryTo.np",
    check: "np",
    img: "../assets/novaPochta.png",
    style: "imgNova",
  },
  {
    name: "boxPage.deliveryTo.js",
    check: "js",
    img: "../assets/justin.png",
    style: "imgUkr",
  },
  {
    name: "boxPage.deliveryTo.ukr",
    check: "ukr",
    img: "../assets/ukrPochta.png",
    style: "imgUkr",
  },
];

export const arraySelectPiece: IOptionsList[] = [
  { name: "1 шт", key: "1" },
  { name: "2 шт", key: "2" },
  { name: "3 шт ", key: "3" },
  { name: "4 шт ", key: "4" },
  { name: "5 шт ", key: "5" },
  { name: "6 шт ", key: "6" },
  { name: "7 шт ", key: "7" },
  { name: "8 шт ", key: "8" },
  { name: "9 шт ", key: "9" },
  { name: "10 шт ", key: "10" },
];

export const arraySelectGram: IOptionsList[] = [
  { name: "100 гр", key: "1" },
  { name: "200 гр", key: "2" },
  { name: "300 гр", key: "3" },
  { name: "500 гр", key: "8" },
  { name: "1 кг", key: "10" },
  { name: "3 кг", key: "40" },
  { name: "5 кг", key: "50" },
];

export const arrayCategory: IOptionsList[] = [
  { name: "Категорія", key: "category" },
  { name: "М'ясо", key: "meat" },
  { name: "Сало", key: "salo" },
  { name: "Копчене", key: "smoked" },
];

export interface ICard {
  id: string;
  name: string;
  description: string;
  price: number;
  purchaseType: string;
  category: string;
  hot: boolean;
  imgUrl: string[];
}
export const basicWords = [
  { title: "home", key: "/" },
  { title: "product", key: "/cataloge" },
  { title: "productionFooter", key: "/production" },
];

export const button = { key: "cataloge" };
// export const moreDetail = { key: "/catalog/:id" };

export const arrayCard: ICard[] = [
  {
    id: "9ca8bad4-e31a-4ac9-b28e-97d92893f7d3",
    name: "Вареники з капустою",
    description: "...",
    price: 42.4,
    purchaseType: "100gram",
    category: "meat",
    hot: false,
    imgUrl: [
      "../assets/Вареники з капустою.jpg",
      // "../assets/velentin-2.png",
      // "../assets/velentin-3.png",
      // "../assets/velentin-4.png",
      // "../assets/velentin-5.png",
      // "../assets/velentin-6.png",
      // "../assets/velentin-7.png",
    ],
  },
  {
    id: "e7628092-3f93-4718-94ec-79f71a2a49f9",
    name: "BBQ PULLED свинина",
    description:
      'Тушонка зі свинини без отого всього "холодцю", тільки м\'яско, тільки хардкор',
    price: 100.0,
    purchaseType: "piece",
    category: "meat",
    hot: false,
    imgUrl: [
      "../assets/pulled-svinina-1.png",
      "../assets/pulled-svinina-2.png",
      "../assets/pulled-svinina-3.png",
      "../assets/pulled-svinina-4.png",
    ],
  },
  {
    id: "cbb5bb50-daef-46c2-9b9c-affe153a02eb",
    name: "BBQ PULLED телятина",
    description:
      'Тушонка з телятини без отого всього "холодцю", тільки м\'яско, тільки хардкор',
    price: 117.0,
    purchaseType: "piece",
    category: "meat",
    hot: false,
    imgUrl: [
      "../assets/pulled-telyatina-1.png",
      "../assets/pulled-svinina-2.png",
      "../assets/pulled-svinina-3.png",
      "../assets/pulled-svinina-4.png",
    ],
  },
  {
    id: "36023d88-ea13-41e7-8826-027fef17b246",
    name: "BBQ PULLED індичка",
    description:
      'Тушонка з індика без отого всього "холодцю", тільки м\'яско, тільки хардкор',
    price: 110.0,
    purchaseType: "piece",
    category: "meat",
    hot: false,
    imgUrl: [
      "../assets/pulled-indichka-1.png",
      "../assets/pulled-svinina-2.png",
      "../assets/pulled-svinina-3.png",
      "../assets/pulled-svinina-4.png",
    ],
  },
  {
    id: "a08b03fe-1550-4066-a370-08f68a9cd475",
    name: "Філе куряче",
    description: "Такого курячого філе ти ще не їв у своєму житті, обіцяємо!",
    price: 36.6,
    purchaseType: "100gram",
    category: "meat",
    hot: false,
    imgUrl: [
      "../assets/file-kyryache-1.png",
      "../assets/file-kyryache-2.png",
      "../assets/file-kyryache-3.png",
    ],
  },
  {
    id: "b97df132-e830-4d1d-8d0e-59af694e8ce5",
    name: "Шинка печена",
    description:
      "Твій ідеальний бутербродний варіант. Ніжна, як перший поцілунок. Печена у печі!",
    price: 45.4,
    purchaseType: "100gram",
    category: "meat",
    hot: false,
    imgUrl: [
      "../assets/shinka-pechena-1.png",
      "../assets/shinka-pechena-2.png",
      "../assets/shinka-pechena-3.png",
      "../assets/shinka-pechena-4.png",
      "../assets/shinka-pechena-5.png",
      "../assets/shinka-pechena-6.png",
      "../assets/shinka-pechena-7.png",
    ],
  },
  {
    id: "5aff6438-f7b0-4f82-9d94-82fdd193b608",
    name: "Бекон американський",
    description:
      "Цілий тиждень ми маринуємо його виключно цукром та сіллю, так як цк роблять у Штатах, щоб ви отримали ідеальний бекон для ваших сніданків.",
    price: 44.4,
    purchaseType: "100gram",
    category: "meat",
    hot: false,
    imgUrl: [
      "../assets/bekon-america-1.png",
      "../assets/bekon-america-2.png",
      "../assets/bekon-america-3.png",
      "../assets/bekon-america-4.png",
    ],
  },
  {
    id: "9ca8bad4-e31a-4ac9-b28e-97d92893f7d3",
    name: "Велентін/new🦃/",
    description:
      "Велетень у діаметрі. Зроблений з огрядних кусків бедра індика. Став улюбленцем для тих, хто робить своїм діткам бутерброди, хто дбає про калорійність м'яса, але не готовий поступатись у смакових якостях.",
    price: 53.4,
    purchaseType: "100gram",
    category: "smoked",
    hot: false,
    imgUrl: [
      "../assets/velentin-1.png",
      "../assets/velentin-2.png",
      "../assets/velentin-3.png",
      "../assets/velentin-4.png",
      "../assets/velentin-5.png",
      "../assets/velentin-6.png",
      "../assets/velentin-7.png",
    ],
  },
  {
    id: "e7628092-3f93-4718-94ec-79f71a2a49f9",
    name: "BBQ PULLED свинина",
    description:
      'Тушонка зі свинини без отого всього "холодцю", тільки м\'яско, тільки хардкор',
    price: 100.0,
    purchaseType: "piece",
    category: "meat",
    hot: false,
    imgUrl: [
      "../assets/pulled-svinina-1.png",
      "../assets/pulled-svinina-2.png",
      "../assets/pulled-svinina-3.png",
      "../assets/pulled-svinina-4.png",
    ],
  },
  {
    id: "cbb5bb50-daef-46c2-9b9c-affe153a02eb",
    name: "BBQ PULLED телятина",
    description:
      'Тушонка з телятини без отого всього "холодцю", тільки м\'яско, тільки хардкор',
    price: 117.0,
    purchaseType: "piece",
    category: "smoked",
    hot: false,
    imgUrl: [
      "../assets/pulled-telyatina-1.png",
      "../assets/pulled-svinina-2.png",
      "../assets/pulled-svinina-3.png",
      "../assets/pulled-svinina-4.png",
    ],
  },
  {
    id: "9ca8bad4-e31a-4ac9-b28e-97d92893f7d3",
    name: "Велентін/new🦃/",
    description:
      "Велетень у діаметрі. Зроблений з огрядних кусків бедра індика. Став улюбленцем для тих, хто робить своїм діткам бутерброди, хто дбає про калорійність м'яса, але не готовий поступатись у смакових якостях.",
    price: 53.4,
    purchaseType: "100gram",
    category: "meat",
    hot: false,
    imgUrl: [
      "../assets/velentin-1.png",
      "../assets/velentin-2.png",
      "../assets/velentin-3.png",
      "../assets/velentin-4.png",
      "../assets/velentin-5.png",
      "../assets/velentin-6.png",
      "../assets/velentin-7.png",
    ],
  },
  {
    id: "e7628092-3f93-4718-94ec-79f71a2a49f9",
    name: "BBQ PULLED свинина",
    description:
      'Тушонка зі свинини без отого всього "холодцю", тільки м\'яско, тільки хардкор',
    price: 100.0,
    purchaseType: "piece",
    category: "smoked",
    hot: false,
    imgUrl: [
      "../assets/pulled-svinina-1.png",
      "../assets/pulled-svinina-2.png",
      "../assets/pulled-svinina-3.png",
      "../assets/pulled-svinina-4.png",
    ],
  },
  {
    id: "cbb5bb50-daef-46c2-9b9c-affe153a02eb",
    name: "BBQ PULLED телятина",
    description:
      'Тушонка з телятини без отого всього "холодцю", тільки м\'яско, тільки хардкор',
    price: 117.0,
    purchaseType: "piece",
    category: "meat",
    hot: false,
    imgUrl: [
      "../assets/pulled-telyatina-1.png",
      "../assets/pulled-svinina-2.png",
      "../assets/pulled-svinina-3.png",
      "../assets/pulled-svinina-4.png",
    ],
  },
  {
    id: "9ca8bad4-e31a-4ac9-b28e-97d92893f7d3",
    name: "Велентін/new🦃/",
    description:
      "Велетень у діаметрі. Зроблений з огрядних кусків бедра індика. Став улюбленцем для тих, хто робить своїм діткам бутерброди, хто дбає про калорійність м'яса, але не готовий поступатись у смакових якостях.",
    price: 53.4,
    purchaseType: "100gram",
    category: "salo",
    hot: false,
    imgUrl: [
      "../assets/velentin-1.png",
      "../assets/velentin-2.png",
      "../assets/velentin-3.png",
      "../assets/velentin-4.png",
      "../assets/velentin-5.png",
      "../assets/velentin-6.png",
      "../assets/velentin-7.png",
    ],
  },
  {
    id: "e7628092-3f93-4718-94ec-79f71a2a49f9",
    name: "BBQ PULLED свинина",
    description:
      'Тушонка зі свинини без отого всього "холодцю", тільки м\'яско, тільки хардкор',
    price: 100.0,
    purchaseType: "piece",
    category: "meat",
    hot: false,
    imgUrl: [
      "../assets/pulled-svinina-1.png",
      "../assets/pulled-svinina-2.png",
      "../assets/pulled-svinina-3.png",
      "../assets/pulled-svinina-4.png",
    ],
  },
  {
    id: "cbb5bb50-daef-46c2-9b9c-affe153a02eb",
    name: "BBQ PULLED телятина",
    description:
      'Тушонка з телятини без отого всього "холодцю", тільки м\'яско, тільки хардкор',
    price: 117.0,
    purchaseType: "piece",
    category: "salo",
    hot: false,
    imgUrl: [
      "../assets/pulled-telyatina-1.png",
      "../assets/pulled-svinina-2.png",
      "../assets/pulled-svinina-3.png",
      "../assets/pulled-svinina-4.png",
    ],
  },
  {
    id: "9ca8bad4-e31a-4ac9-b28e-97d92893f7d3",
    name: "Велентін/new🦃/",
    description:
      "Велетень у діаметрі. Зроблений з огрядних кусків бедра індика. Став улюбленцем для тих, хто робить своїм діткам бутерброди, хто дбає про калорійність м'яса, але не готовий поступатись у смакових якостях.",
    price: 53.4,
    purchaseType: "100gram",
    category: "salo",
    hot: false,
    imgUrl: [
      "../assets/velentin-1.png",
      "../assets/velentin-2.png",
      "../assets/velentin-3.png",
      "../assets/velentin-4.png",
      "../assets/velentin-5.png",
      "../assets/velentin-6.png",
      "../assets/velentin-7.png",
    ],
  },
  {
    id: "e7628092-3f93-4718-94ec-79f71a2a49f9",
    name: "BBQ PULLED свинина",
    description:
      'Тушонка зі свинини без отого всього "холодцю", тільки м\'яско, тільки хардкор',
    price: 100.0,
    purchaseType: "piece",
    category: "salo",
    hot: false,
    imgUrl: [
      "../assets/pulled-svinina-1.png",
      "../assets/pulled-svinina-2.png",
      "../assets/pulled-svinina-3.png",
      "../assets/pulled-svinina-4.png",
    ],
  },
];
