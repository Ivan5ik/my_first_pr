import i18n from "i18next";

import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { currentYear } from "../utils";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: "ua",
    debug: true,
    fallbackLng: "ua",
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
          license: `© ТМ «СМАКОВИНКА». ${currentYear} ВСІ ПРАВА ЗАХИЩЕНІ. ЗРОБЛЕНО BY UniCode`,
          address: {
            beforeBr: "Адреса:",
            afterBr: "Переулок крайній 1, с. Геронімовка, Україна ",
          },
          addressProduction: {
            beforeBr: "Адреса виробництва:",
            afterBr: "Переулок крайній 1, с. Геронімовка, Україна ",
          },
          productionFooter: "Виробництво",
          productionPage: {
            production: "- Виробництво -",
            smoking:
              "ТМ «Смаковинка» - виробництво, що спеціалізується на виготовлені високоякісної м’ясної продукції.",
            descriptionTop:
              "Також ТМ «Смаковинка»  випускає заморожені напівфабрикати, виготовлені  з якісної сировини та за класичними рецептами.  Асортимент цієї групи товарів нараховує майже 50 найменувань. Своїм споживачам ми пропонуємо пельмені, чебуреки, бендерики, млинці, котлети, голубці, фаршировані перці. Ми постійно намагаємося потішити наших покупців неперевершеним смаком  та відміною якістю.",
            rightTextP:
              "На сьогоднішній день в нашому асортименті сирокопчені, варено-копчені, напівкопчені та варені ковбаси, сосиски та сардельки, м’ясні делікатеси . Загалом більше 100 найменувань продукції. Завдяки нашим виробничим потужностям, попиту на виготовлену продукцію, іміджу надійного та відповідального партнера, виробництво та  поставки продукції дедалі зростають.",
            leftTextP:
              "Варто зауважити, що виробничі потужності м’ясопереробного підприємства знаходяться в екологічно чистій зоні, за 10 км від міста Черкаси, а м’ясна продукція виготовляється на сучасному обладнанні провідних європейських фірм. Уся сировина, з якої виготовляється наша продукція, попередньо проходить ветеринарний та санітарний контроль.",
          },
          homePage: {
            product: "- Продукція -",
            button: "Переглянути всю продукцію",
            form: {
              location: "Переулок крайній 1, с. Геронімовка, Україна ",
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
          license: `© ТМ «SMAKOVINKA». ${currentYear} ALL RIGHTS PROTECTED. MADE BY UniCode`,
          address: {
            beforeBr: "Address:",
            afterBr: "per. Extreme 1, Geronimovka, Ukraine",
          },
          addressProduction: {
            beforeBr: "Production address:",
            afterBr: "per. Extreme 1, Geronimovka, Ukraine",
          },
          productionFooter: "Production",
          productionPage: {
            production: "- Production -",
            smoking:
              'TM "Smakovinka" is a production specializing in the production of high-quality meat products.',
            descriptionTop:
              'TM "Smakovinka" also produces frozen semi-finished products made from high-quality raw materials and according to classic recipes. The assortment of this group of goods includes almost 50 items. We offer our customers dumplings, chebureks, benderiki, pancakes, cutlets, cabbage rolls, stuffed peppers. We constantly try to please our customers with unsurpassed taste and excellent quality.',
            rightTextP:
              "Today, our assortment includes raw-smoked, cooked-smoked, semi-smoked and cooked sausages, sausages and sausages, meat delicacies. In total, there are more than 100 product names. Thanks to our production capacity, the demand for manufactured products, the image of a reliable and responsible partner, the production and deliveries of products continue to grow.",
            leftTextP:
              "It is worth noting that the production facilities of the meat processing enterprise are located in an ecologically clean zone, 10 km from the city of Cherkasy, and meat products are manufactured on modern equipment of leading European companies. All the raw materials from which our products are made undergo preliminary veterinary and sanitary control.",
          },
          homePage: {
            product: "- Product -",
            button: "View all products",
            form: {
              location: "per. Extreme 1, Geronimovka, Ukraine",
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
