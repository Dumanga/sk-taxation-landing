import type { NextConfig } from "next";

/*
 * GitHub Pages serves project sites from /<repo>/, so the build needs a
 * basePath. It's applied only when GITHUB_PAGES=true (set by the deploy
 * workflow) so `npm run dev` still runs at http://localhost:3000/.
 *
 * The repo name comes from GITHUB_REPOSITORY ("owner/name", provided by
 * GitHub Actions), so the same code deploys correctly from any fork:
 * the client's sk-taxation/official-website and the original
 * Dumanga/sk-taxation-landing both get the right paths.
 */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "official-website";

const basePath = isGithubPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages has no Next.js image optimizer — serve the files as-is.
  images: { unoptimized: true },
  // Emit /index.html per route so Pages resolves URLs without a server.
  trailingSlash: true,
  ...(isGithubPages ? { basePath, assetPrefix: `${basePath}/` } : {}),
  // `unoptimized` images bypass the loader, so next/image does NOT prefix
  // basePath onto src. Components must prefix it themselves via this value.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
