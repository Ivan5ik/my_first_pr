import i18n from "i18next";

import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      ua: {
        translation: {
          up: "На Гору 🠕",
          delivery: "Оплата і доставка",
          home: "Головна",
          product: "Продукція",
          production: "Виробництво",
          basket: "Кошик",
          license:
            "© ДИМНЕ М'ЯСО ВІД ТАРАСА. 2022 ВСІ ПРАВА ЗАХИЩЕНІ. ЗРОБЛЕНО BY UniCode",
          address: {
            beforeBr: "Адреса:",
            afterBr: "вул. Чигоріна 12, офіс 213, м. Київ, Україна",
          },
          addressProduction: {
            beforeBr: "Адреса виробництва:",
            afterBr: "м. Київ, вул. Зрошувальна 5В",
          },
          productionFooter: "Виробництво",
          productionPage: {
            production: "- Виробництво -",
            smoking: 'Чим відрізняється правильне копчення від "промислового"?',
            descriptionTop:
              "Нам уже 5 років і ми побудували наше власне виробництво згідно вимог НАССР в кінці 2019 року. Весною ж 2020 року ми почали його реновацію та доукомплектували його технікою для виробництва ковбас та сосисок, про що так довго мріяли. На сьогодні, у нас присутні усі можливи дозвільні документи на здійснення роботи та проходили аудит українських і міжнародних компаній.",
            rightTextP:
              "На самому початку, ми прийняли рішення не йти на компроміси. Ми вибрали шлях виробництва дійсно якісної продукції, розуміючи, що наш клієнт особливий і заслуговує чесну продукцію за чесною ціною. Це означає, що якщо за своєю природою під час приготування м’ясо втрачає частину своєї ваги – то не намагаємося її затримати хімічними сполуками, щоб зменшити її собівартість.",
            leftTextP:
              "Якщо для дійсно гарного продукту необхідно закупити сировину від “правильних” постачальників, то ми готові платити за неї “більше”, адже на виході отримаємо зовсім інший за смаком продукт. У той час, коли вся м’ясна промисловість націлена на створення якомога дешевого продукту для широкої аудиторії, ми націлені на створення якісного для тих, хто не готовий йти на компроміси.",
          },
          homePage: {
            product: "- Продукція -",
            button: "Переглянути всю продукцію",
            form: {
              location: "вул. Зрошувальна 5В, м. Київ, Україна ",
              wordDays: "пн.-пт. 9.00 - 18.00 сб.-вс.вихідний",
              question: "ЗАДАЙТЕ ПИТАННЯ ОНЛАЙН",
              yourQuestion: "Ваше запитання",
              decriptionTop: "ВСІ ПОЛЯ ОБОВ'ЯЗКОВІ ДЛЯ ЗАПОВНЕННЯ, ТЕКСТ",
              decriptionBottom:
                "ДЛЯ ЗАПОВНЕННЯ НЕ ПОВИНЕН ПЕРЕВИЩУВАТИ 140 СИМВОЛІВ",
              submit: "Відправити",
              yourName: "Ваше ім'я",
              yourPhone: "Ваш номер телефону",
            },
          },
          boxPage: {
            order: "Оформлення замовлення",
            toCataloge: "До каталогу",
            contactData: "Ваші контактні дані",
            name: "Прізвище, ім'я та по батькові",
            phone: "Ваш телефон",
            email: "Ваш Email",
            delivery: "Доставка",
            deliveryTo: {
              cherkassy: "Доставка по Черкасам",
              np: "Доставка по Україні (Нова Пошта)",
              js: "Доставка по Україні (Justin)",
              ukr: "Доставка по Україні (УкрПошта)",
            },
            city: "Місто",
            tarif: "Відповідно до тарифів",
            address: "Адреса",
            note: "Примітка",
            pay: "Оплата",
            payRadioBut: {
              cash: "Готівкою",
              cashless: "Безготівковий рахунок",
            },
            toOrder: "Оформити замовлення",
            goods: "Товар",
            yourOrder: "Ваше замовлення",
            total: "Разом",
          },
          catalogePage: {
            product: "- Продукція -",
            reset: "Скинути все",
          },
        },
      },
      en: {
        translation: {
          up: "Up 🠕",
          delivery: "Payment and delivery",
          home: "Home",

          product: "Product",
          production: "Production",
          basket: "Basket",
          license:
            "© SMOKE MEAT FROM TARAS. 2022 ALL RIGHTS PROTECTED. MADE BY UniCode",
          address: {
            beforeBr: "Address:",
            afterBr: "St Chigorina 12, office 213, Kyiv, Ukraine",
          },
          addressProduction: {
            beforeBr: "Production address:",
            afterBr: "Kyiv, Zroshuvalna St, 5в",
          },
          productionFooter: "Production",
          productionPage: {
            production: "- Production -",
            smoking:
              'How is proper smoking different from "industrial" smoking?',
            descriptionTop:
              "We are 5 years old and we have built our own production according to the requirements HACCP at the end of 2019. In the spring of 2020, we began its renovation and completed it with equipment for the production of sausages and frankfurters, what they have been dreaming about for so long. Today, we have everything possible work permits and audited Ukrainian and international companies.",
            rightTextP:
              "At the very beginning, we decided not to compromise. We chose the path of production of really quality products, realizing that our client is special and deserves honest products at a fair price. This means that if by nature the meat is cooked loses some of your weight - so do not try to keep it chemical compounds to reduce its cost.",
            leftTextP:
              'If for a really good product you need to buy raw materials from "Right" suppliers, we are willing to pay for it "more", after all, at the end we get a completely different product to taste. In that a time when the whole meat industry aims to create as much as possible cheap product for a wide audience, we aim to create quality for those who are not willing to compromise.',
          },
          homePage: {
            product: "- Product -",
            button: "View all products",
            form: {
              location: "St Zroshuvalna 5B, Kyiv, Ukraine",
              wordDays: "Mon-Fri 9.00 - 18.00 Sat-Sun.weekend",
              question: "ASK QUESTIONS ONLINE",
              yourQuestion: "Your question",
              decriptionTop: "ALL FIELDS REQUIRED TO COMPLETE, TEXT",
              decriptionBottom: "SHOULD NOT EXCEED 140 CHARACTERS FOR FILLING",
              submit: "Submit",
              yourName: "Your name",
              yourPhone: "Your phone number",
            },
          },
          boxPage: {
            order: "Making an order",
            toCataloge: "To the catalog",
            contactData: "Your contact details",
            name: "Last name, first name and surname",
            phone: "Your phone number",
            email: "Your Email",
            delivery: "Delivery",
            deliveryTo: {
              cherkassy: "Delivery across Cherkasy",
              np: "Delivery across Ukraine (Nova Poshta)",
              js: "Delivery across Ukraine (Justin)",
              ukr: "Delivery across Ukraine (UkrPoshta)",
            },
            city: "City",
            tarif: "According to tariffs",
            address: "Address",
            note: "Note",
            pay: "Pay",
            payRadioBut: {
              cash: "Cash",
              cashless: "Cashless account",
            },
            toOrder: "To order",
            goods: "Goods",
            yourOrder: "Your order",
            total: "Total",
          },
          catalogePage: {
            product: "- Product -",
            reset: "Reset all",
          },
        },
      },
    },
  });

export default i18n;
