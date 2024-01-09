import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

// TODO Update locale labels
const localeLabels = {
  "en-us": "EN",
  es: "ES",
};

export function Header({ locales = [] }) {
  return (
    <header>
      <nav>
        <span aria-hidden={true}>🌐</span>
        <ul className="flex flex-wrap gap-3">
          {locales.map((locale) => (
            <li key={locale.lang} className="first:font-semibold">
              <PrismicNextLink
                href={locale.url}
                locale={locale.lang}
                aria-label={`Change language to ${locale.lang_name}`}
              >
                {localeLabels[locale.lang] || locale.lang}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
