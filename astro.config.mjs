import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://aw.codes",
  integrations: [
    preact(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx(),
    image(),
  ],
});
