import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "English": "English",
      "Russian": "Russian",
      "Select": "Select language",
      "settings": "settings",
      "Vehicles": "Vehicles",
      "Map": "Map",
      "filter": "apply filter",
      "lang": "en",
      "TRACK": "TRACK",
      "BUS": "BUS",
      "SPECIAL": "SPECIAL",
      "message": "Good afternoon, please tell me what order number you currently have in work",
      "name": "name",
      "vehicle": "vehicle type",
      "phone": "phone number",
      "Call": "Call the driver",
      "Write": "Write to driver",
      "driver": "driver card"
    }
  },
  ru: {
    translation: {
      "English": "Английский",
      "Russian": "Русский",
      "Select": "Выберете язык",
      "settings": "настройки",
      "Vehicles": "Автомобили",
      "Map": "Карта",
      "filter": "применить фильтр",
      "lang": "ru",
      "TRACK": "ГРУЗОВИК",
      "BUS": "АВТОБУС",
      "SPECIAL": "СКОРАЯ",
      "message": "Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе",
      "name": "имя",
      "vehicle": "тип ТС",
      "phone": "телефон",
      "Call": "Позвонить",
      "Write": "Написать",
      "driver": "карточка водителя"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: "v3",
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you"re using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;