import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/devlink/global.css";
import { DevLinkProvider } from "@/devlink";
import { Header } from "@/components/Header";

// i18n stuff
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { locales } from "@/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // check locale in url prefix is supported
  if (!locales.includes(lang)) {
    notFound(); // throw not fount if not
  }

  // load translation strings from i18nexus via next-intl
  const messages = useMessages();

  return (
    <html lang={lang}>
      <NextIntlClientProvider locale={lang} messages={messages}>
        <body className={inter.className}>
          <DevLinkProvider>{children}</DevLinkProvider>
          <PrismicPreview repositoryName={repositoryName} />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}

export function generateStaticParams() {
  return [{ locale: "en-us" }, { locale: "es" }];
}