import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export const dynamicParams = false;

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

type Params = { pagePath: string[] };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  console.log("params", params);
  /*
   * `params.uid` contains an array of each part of the URL separated by a `/`.
   * In this example, the last part is the document's UID.
   */
  const uid = params.pagePath[params.pagePath.length - 1];

  const page = await client.getByUID("page", uid).catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const uid = params.pagePath[params.pagePath.length - 1];
  const page = await client.getByUID("page", uid).catch(() => notFound());

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
  const pages = await client.getAllByType("page");

  /**
   * Define a path for every Document.
   */
  return pages.map((page, i) => {
    //console.log(`page ${i}`, page);
    //console.log("pagePath:", page.url?.split("/").filter(Boolean));

    return { pagePath: page.url?.split("/").filter(Boolean) };
  });
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
