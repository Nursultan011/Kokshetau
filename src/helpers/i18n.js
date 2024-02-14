import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';
import axiosInstance from './instance.js';

let i18n;

export const SUPPORT_LOCALES = ['en', 'ru', 'kz'];

export function setI18nLanguage(locale) {
  loadLocaleMessages(locale);

  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale;
  } else {
    i18n.global.locale.value = locale;
  }

  document.querySelector('html').setAttribute('lang', locale);
  localStorage.setItem('lang', locale);

}

export async function loadLocaleMessages(locale) {
  const messages = await import(
    `@/langs/${locale}.json`
  );

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default);

  return nextTick();
}

export default function setupI18n() {
  if (!i18n) {
    let locale = localStorage.getItem('lang') || 'ru';

    i18n = createI18n({
      globalInjection: true,
      legacy: false,
      locale: locale,
      fallbackLocale: 'ru'
    });

    setI18nLanguage(locale);
  }
  return i18n;
}