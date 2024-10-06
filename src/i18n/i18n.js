// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import zh from './zh.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    zh: {
      translation: zh,
    },
  },
  lng: 'en', // 默认语言
  fallbackLng: 'en', // 如果当前语言的翻译缺失，回退到的语言
  interpolation: {
    escapeValue: false, // React 已经对 XSS 进行了防护，无需再次转义
  },
});

export default i18n;
