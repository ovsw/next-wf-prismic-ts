import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

// import { getLocales } from "@/lib/getLocales";

export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const client = createClient();
  const page = await client.getSingle("home", { lang });
  // const prismicLocales = await getLocales(page, client);
  // console.log(prismicLocales);

  return (
    <>
      {/* <Header locales={prismicLocales} /> */}
      {/* {JSON.stringify(prismicLocales, null, 2)} */}
      <p>&apos;lang&apos; param: {lang}</p>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
