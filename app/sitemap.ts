import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { UPDATES } from "@/lib/updates";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...UPDATES.map((u) => ({
      url: `${SITE_URL}/updates/${u.slug}/`,
      lastModified: new Date(u.dateISO),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
