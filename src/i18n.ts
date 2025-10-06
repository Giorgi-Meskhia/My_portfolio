import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, type Locale } from './i18n/routing';

export default getRequestConfig(async ({ locale }) => {
  const candidate = (locale ?? defaultLocale) as string;
  const resolvedLocale = (locales.includes(candidate as Locale)
    ? (candidate as Locale)
    : defaultLocale);

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default
  };
});

