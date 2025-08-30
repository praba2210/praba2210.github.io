import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = new URL("https://prabakaran.pro");
  const lastModified = new Date();
  const urls: MetadataRoute.Sitemap = [
    { url: new URL("/", base).toString(), lastModified },
  ];
  return urls;
}
