import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = new URL("https://prabakaran.pro");
  const lastModified = new Date();
  const urls: MetadataRoute.Sitemap = [
    { url: new URL("/", base).toString(), lastModified },
  ];
  return urls;
}
