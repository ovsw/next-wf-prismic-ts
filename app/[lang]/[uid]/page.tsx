import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

// import type {Client } from "@prismicio/client"

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export const dynamicParams = false;

type Params = { uid: string; lang: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid, { lang: params.lang })
    .catch(() => notFound());

  return (
    <>
      <p>&apos;lang&apos; param: {params.lang}</p>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  /**
   * Query all Documents from the API, except the homepage.
   */
  const client = createClient();
  const pages = await client.getAllByType("page", {
    lang: "*",
    // filters: [prismic.filter.not("my.page.uid", "home")],
  });

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { uid: page.uid, lang: page.lang };
  });
}
