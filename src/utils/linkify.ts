import { resolveCheckoutHref } from '../config/checkout';
import type { SiteLocale } from '../i18n/locales';
import { localizePath } from '../i18n/paths';

/** Markdown `[label](path)` → internal anchor. Partner URLs stay on `/go/…`. */
export function linkifyMarkdown(text: string, locale: SiteLocale): string {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label: string, href: string) => {
    const normalized = localizePath(resolveCheckoutHref(href), locale);
    return `<a href="${normalized}">${label}</a>`;
  });
}
