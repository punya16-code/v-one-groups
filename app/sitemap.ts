
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vonegroups.com",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://vonegroups.com/creations",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://vonegroups.com/bytes",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
