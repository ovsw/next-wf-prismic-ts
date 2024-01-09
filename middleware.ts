import createMiddleware from "next-intl/middleware";
import { localePrefix, locales } from "./navigation";

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "en-us",

  // opt out of adding the /en/ default locale prefix (which is the default)
  // by using localePrefix: "as-needed" ( see https://next-intl-docs.vercel.app/docs/routing/middleware#locale-prefix)
  // because we need the default english language urls to stay the same
  localePrefix: "as-needed",
});

export const config = {
  // Match only internationalized pathnames
  // matcher: ["/", "/(es)/:path*"], // from next-intl guide

  matcher: ["/((?!api|_next|slice-simulator|.*\\..*).*)"], // from https://i18nexus.com/tutorials/nextjs/next-intl guide
};
