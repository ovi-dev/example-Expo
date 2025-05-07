import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import { translations } from '../translations';

const i18n = new I18n(translations);

i18n.locale = Localization.locale;
i18n.enableFallback = true;
i18n.defaultLocale = 'es';

export default i18n;
