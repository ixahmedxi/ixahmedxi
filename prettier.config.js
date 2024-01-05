/** @type {import('@ianvs/prettier-plugin-sort-imports').PrettierConfig} */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-astro',
    'prettier-plugin-packagejson',
    'prettier-plugin-curly',
    'prettier-plugin-jsdoc',
  ],
  importOrder: [
    '^react$',
    '',
    '<BUILTIN_MODULES>',
    '',
    '<TYPES>',
    '<TYPES>^[.]',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@/)(/.*)$',
    '',
    '^[.]',
    '',
    '^(?!.*[.]css$)[./].*$',
    '.css$',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  importOrderTypeScriptVersion: '5.3.3',
};

export default config;
