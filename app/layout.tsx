import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/devlink/global.css";
import { DevLinkProvider } from "@/devlink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DevLinkProvider>{children}</DevLinkProvider>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
