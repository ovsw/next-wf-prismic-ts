import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en-us", "es"];

// opt out of adding the /en/ default locale prefix (which is the default)
// by using localePrefix: "as-needed" ( see https://next-intl-docs.vercel.app/docs/routing/middleware#locale-prefix)
// because we need the default english language urls to stay the same
export const localePrefix = "as-needed";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
