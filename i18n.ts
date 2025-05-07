import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
import en from './locales/en';
import es from './locales/es';

const i18n = new I18n({
  en,
  es
});

i18n.defaultLocale = 'en';
i18n.enableFallback = true;

// Obtener el idioma del dispositivo
const locale = getLocales()[0].languageCode;
i18n.locale = locale || 'en';

export default i18n;
