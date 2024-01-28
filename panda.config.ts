import { defineConfig } from '@pandacss/dev';
import radixColorsPreset from 'pandacss-preset-radix-colors';
import typographyPreset from 'pandacss-preset-typography';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx,astro}'],
  presets: [
    typographyPreset(),
    radixColorsPreset({
      autoP3: true,
      darkMode: true,
    }),
    '@pandacss/preset-panda',
  ],
  conditions: {
    dark: ' &.dark, .dark &',
    light: ' &.light, .light &',
    osDark: '@media (prefers-color-scheme: dark)',
    osLight: '@media (prefers-color-scheme: light)',
  },
  exclude: [],
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          // Or whatever name you've set as the semantic tokens
          // prefix or recipe name
          prose: {
            body: {
              value: '{colors.gray.11}',
            },
            heading: {
              value: '{colors.gray.12}',
            },
            lead: {
              value: '{colors.gray.12}',
            },
            link: {
              value: '{colors.gray.12}',
            },
            bold: {
              value: '{colors.gray.12}',
            },
            counter: {
              value: '{colors.gray.10}',
            },
            bullet: {
              value: '{colors.gray.10}',
            },
            hrBorder: {
              value: '{colors.gray.4}',
            },
            quote: {
              value: '{colors.gray.10}',
            },
            quoteBorder: {
              value: '{colors.gray.4}',
            },
            caption: {
              value: '{colors.gray.10}',
            },
            kbd: {
              value: '{colors.gray.10}',
            },
            kbdShadow: {
              // Expects an RGB value
              value: '0 0 0',
            },
            code: {
              value: '{colors.gray.12}',
            },
            preCode: {
              value: '{colors.gray.12}',
            },
            preBg: {
              value: '{colors.gray.1}',
            },
            thBorder: {
              value: '{colors.gray.4}',
            },
            tdBorder: {
              value: '{colors.gray.4}',
            },
          },
        },
      },
    },
  },
  outdir: 'styled-system',
  globalCss: {
    extend: {
      body: {
        backgroundColor: 'gray.1',
        color: 'gray.11',
        px: 6,
      },
    },
  },
});
