import { defineConfig } from "@pandacss/dev";
import radixColorsPreset from "pandacss-preset-radix-colors";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],
  presets: [
    radixColorsPreset({
      autoP3: true,
      darkMode: true,
    }),
    "@pandacss/preset-panda",
  ],
  conditions: {
    dark: " &.dark, .dark &",
    light: " &.light, .light &",
    osDark: "@media (prefers-color-scheme: dark)",
    osLight: "@media (prefers-color-scheme: light)",
  },
  exclude: [],
  theme: {
    extend: {},
  },
  outdir: "styled-system",
  globalCss: {
    extend: {
      body: {
        backgroundColor: "gray.1",
        color: "gray.11",
      },
    },
  },
});
