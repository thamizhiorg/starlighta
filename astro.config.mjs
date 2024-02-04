import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Structural Tamil Genocide",
      social: {
        twitter: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "CLASSIFICATION",
          autogenerate: {
            directory: "classification",
          },
        },
        {
          label: "SYMBOLIZATION",
          autogenerate: {
            directory: "SYMBOLIZATION",
          },
        },
        {
          label: "DISCRIMINATION",
          autogenerate: {
            directory: "SYMBOLIZATION",
          },
        },
        {
          label: "DEHUMANIZATION",
          autogenerate: {
            directory: "SYMBOLIZATION",
          },
        },
        {
          label: "ORGANIZATION",
          autogenerate: {
            directory: "DISCRIMINATION",
          },
        },
        {
          label: "POLARIZATION",
          autogenerate: {
            directory: "DISCRIMINATION",
          },
        },
        {
          label: "PREPARATION",
          autogenerate: {
            directory: "DISCRIMINATION",
          },
        },
        {
          label: "PERSECUTION",
          autogenerate: {
            directory: "DISCRIMINATION",
          },
        },
        {
          label: "EXTERMINATION",
          autogenerate: {
            directory: "DISCRIMINATION",
          },
        },
        {
          label: "DENIAL",
          autogenerate: {
            directory: "DISCRIMINATION",
          },
        },
      ],
    }),
    tailwind(),
  ],
  output: "hybrid",
  adapter: cloudflare(),
});
