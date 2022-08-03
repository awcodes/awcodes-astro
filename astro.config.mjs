import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx(),
    astroImageTools,
  ],
});
