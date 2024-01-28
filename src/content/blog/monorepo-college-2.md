---
title: '🎓 Monorepo College Lecture 2: Build Me Up Buttercup'
description: 'In this part, we will be initializing the project, getting all of the initial files out of the way and then configure Prettier as well as create the first package of our monorepo.'
pubDate: 'Apr 12 2023'
heroImage: '/blog/monorepo-college-2.avif'
---

Photo by <a href="https://unsplash.com/ja/@floraf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Floraf</a> on <a href="https://unsplash.com/photos/7e9-RYS8Y6Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Hello everyone and welcome to the second part of Monorepo College, if you haven't already done so, [make sure to read the first part of the series firstly](https://dev.to/ixahmedxi/monorepo-college-lecture-1-a-beautiful-morning-1jgl) and come back for this one after.

In this part, we will be initializing the project, getting all of the initial files out of the way and then configure [Prettier](https://prettier.io) as well as create the first package of our monorepo which will be a `tsconfig` package responsible for sharing [TypeScript](https://typescriptlang.org) configuration files to the other packages we will create in the future.

## Getting things off the ground

First things first, I always make sure to get the [git](https://git-scm.com) side of things all setup and ready as the first step into setting up any project, and Acme is no different.

Let's create a new directory for our project, obviously we will call it `Acme`.

```bash
# Create an "Acme" directory
mkdir Acme

# Change terminal directory to it
cd Acme
```

Now that we have created the directory for the project and changed directories into it inside our terminal, let's initialise git and create a `.gitignore` file.

```bash
# Initialize git
git init

# If your starting branch is not main, you can change it like so:
git branch -m main
```

For the `.gitignore` file, I usually pick a template from [github/gitignore](https://github.com/github/gitignore) which is a collection of great `.gitignore` file templates. For this project I will be using the [Node](https://github.com/github/gitignore/blob/main/Node.gitignore) template.

## Next steps

### Documentation & community files

In any open source project, you should have a minimum of a `README.md`, `LICENSE`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md` and `SECURITY.md`, these are highly dependent on your project so I won't be providing a template for them however here are some resources that might help you out.

- `README.md` - [https://www.makeareadme.com/](https://www.makeareadme.com/)
- `LICENSE` - [https://opensource.org/licenses/](https://opensource.org/licenses/)
- `CODE_OF_CONDUCT.md` - [https://www.contributor-covenant.org/version/2/1/code_of_conduct/](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)
- `CONTRIBUTING.md` - [https://contributing.md/how-to-build-contributing-md/](https://contributing.md/how-to-build-contributing-md/)
- `SECURITY.md` - Just explain how to report security vulnerabilities in your project.

### Initialising pnpm

For this project, we will be using [pnpm](https://pnpm.io) as our package manager of choice, but obviously you can use any one you prefer.

#### `package.json`

Let's firstly create our root level `package.json` file for the workspace:

```bash
pnpm init
```

This will create a default `package.json` file at the root of our project, the default `package.json` is fine but we will change some stuff in ours, here's mine after some changes:

```json
{
  "name": "acme",
  "version": "0.1.0",
  "private": true,
  "description": "The next billion dollar startup",
  "license": "MIT",
  "author": "Acme",
  "packageManager": "pnpm@8.1.1",
  "engines": {
    "node": ">=18.0.0",
    "pnpm": ">=8.1.1"
  }
}
```

I will go briefly over some of the stuff I have in the `package.json` file but you can always read the documentation on all of them [here](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)

- `packageManager` - This field is read by corepack to automatically pull the package manager with the exact version ensuring that your entire team uses the same package manager and the same version.
- `engines` - This is used to specify ranges of Node and package manager versions that our project is compatible with, by default this option will only warn you if you use an incompatible version but we will modify that behaviour to error out. This is again one measure to ensure your whole team are using the same tools.

#### `pnpm-workspace.yaml`

The `pnpm-workspace.yaml` file is used to tell `pnpm` three things:

- This project is a monorepo.
- This is the root of the monorepo.
- Here are the directories that you should expect packages to be located at.

So let's create our file, we will have it so that `pnpm` knows our packages will be located in `apps/`, `packages/` or `packages/config/`:

```yaml
packages:
  - 'packages/*'
  - 'packages/config/*'
  - 'apps/*'
```

With this in place, we have officially entered monorepo land 🎉

#### `.npmrc`

The `.npmrc` file is a special file that modifies the default behaviour of your package manager, in our case `pnpm`, I'm going to show you the `.npmrc` file that we will have and then explain what's going on in there, as always I recommend reading the docs for this as that there are a lot of options that you can specify.

[Read the docs](https://pnpm.io/npmrc)

```json
engine-strict=true
prefer-workspace-packages=true
public-hoist-patterns[]=*prisma*
public-hoist-patterns[]=*eslint*
public-hoist-patterns[]=*prettier*
```

- `engine-strict=true` will make it so that it will error out if you use an incompatible node version with the project.

- `prefer-workspace-packages` - this setting tells pnpm to prioritize the installation of packages locally from our monorepo **EVEN** if that package has a newer version on the npm registry. This setting is useful for the following case scenarios:

  1. someone merges a new PR with changes to a package, this bumps the version up and publishes it to npm automatically.
  2. someone else is still working on another change in this package, but now when they commit again the CI operation will pull the npm registry version because that version is newer than the one locally. Suddenly checks in CI are messed up.
  3. This can obviously be mitigated by pulling from main immediately after the other PR is merged but we will 100% forget to do that sometimes.

- `public-hoist-patterns` - By default, pnpm won't hoist any packages other than `ESLint` and `Prettier` packages to the root `node_modules` folder, This is mostly great but because we will be using [Prisma](https://prisma.io) as our database ORM, it does not play nicely in monorepo settings and hence why we need to add it to our `public-hoist-patterns` to make it work. This overrides the default value of `Prettier` and `ESLint` packages though hence why we need to add them again.

### Misc files

Now that we have `pnpm` all setup in our workspace, we just need to add a couple more files before we get to the fun stuff.

#### `.editorconfig`

[EditorConfig](https://editorconfig.org) is a tool that defines coding styles for multiple editors and IDEs, this will be somewhat of a fallback for users who don't have prettier formatting in their editor and prettier does support `.editorconfig` by default so there is no reason to not have it.

```bash
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = false
insert_final_newline = false
```

#### `.nvmrc`

[NVM](https://github.com/nvm-sh/nvm) is a Node version manager commonly used to install multiple versions of Nodejs on one system, by having a `.nvmrc` file we tell nvm which nodejs version to use with this project.

```bash
18.15
```

### Setting up TypeScript

In our workspace, we will be using one TypeScript version for the entire monorepo, this means that we will need to install it in our root `package.json` file.

```bash
pnpm add -D typescript @types/node -w
```

The `-w` flag is needed to install dependencies to the root `package.json` file.

We will be setting up the `@acme/tsconfig` package later on after prettier to share `tsconfig` presets to our future packages.

If you are using VSCode, your editor is probably using TypeScript v4.9 or something along those lines which doesn't align with our version and will cause errors in particularly using multiple extends. To fix this we need to create a new file at `.vscode/settings.json` and include this code which will tell VSCode to use our workspace version of TypeScript:

```json
{
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

### Setting up Prettier

[Prettier](https://prettier.io) is a code formatter, it supports many languages and editors so we will be using it to ensure a consistent coding style throughout our project and provide format on save capabilities. We will also be using some prettier plugins to give us more functionality.

#### Install prettier and plugins

```bash
pnpm add -D prettier @types/prettier @ianvs/prettier-plugin-sort-imports prettier-plugin-packagejson prettier-plugin-jsdoc prettier-plugin-tailwindcss -w
```

#### Configuring prettier

To configure prettier, let's create a `prettier.config.cjs` file that will host our configuration options.

```javascript
/** @typedef {import('@ianvs/prettier-plugin-sort-imports').PluginConfig} SortImportsConfig */
/** @typedef {import('prettier').Config} PrettierConfig */

/** @type {PrettierConfig | SortImportsConfig} */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('prettier-plugin-jsdoc'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  pluginSearchDirs: false,
  importOrder: [
    '^react',
    '<TYPES>',
    '<TYPES>^[./]',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@acme/(.*)$',
    '',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderMergeDuplicateImports: true,
};

module.exports = config;
```

The first 3 options are self explanatory, then we list the plugins and the important bit here after is the `pluginSearchDirs: false` which without it, `prettier-plugin-tailwindcss` acts weirdly and won't work as expected.

Next up we configure the import statements order that we want to use, whenever we use `""` it's to add separations between our import statements and we set the default separation behaviour to false instead.

The `importOrderSortSpecifiers` option will format different specifiers in an import statement such as `type` imports and normal imports.

Lastly, the `importOrderMergeDuplicateImports` will merge import statements from the same source into one import statement.

#### `.prettierignore`

The `.prettierignore` file is used to exclude prettier from formatting certain files, we will use this to tell prettier to not format any `dist` and `.next` folders as well as the `pnpm-lock.yaml` file.

```yaml
.next
pnpm-lock.yaml
dist
```

#### Adding format scripts to our package.json

In our root `package.json` file, let's add some scripts that we can run to format the entire workspace with prettier. Add this to our already existing `package.json` file:

```json
"scripts": {
  "format:check": "prettier --check .",
  "format:write": "prettier --write ."
}
```

We can now run `pnpm format:write` to format all of the files in our project!

## Creating our first package

Now that we have pnpm and prettier all setup, we are ready to introduce the first package to our monorepo, exciting times!

Since we have already installed `typescript` in our monorepo, the next step is to setup TypeScript in our workspace in a way that will make it easy to use it in our future packages.

We will be creating a `tsconfig` package that shares TS configuration presets to our packages.

### Initializing the package

Let's create the directory that will host our package at `packages/config`:

```bash
mkdir packages
mkdir packages/config
mkdir packages/config/tsconfig
```

First things first, let's create a `package.json` file for our package:

```json
{
  "name": "@acme/tsconfig",
  "version": "0.1.0",
  "private": true,
  "description": "Presets for common tsconfig.json configurations",
  "license": "MIT",
  "author": "Acme"
}
```

Don't forget to include `"private": true,` since we won't be publishing it to NPM.

#### Creating our tsconfigs

Now that we have the `package.json` for our `@acme/tsconfig` package setup, we then need to install some dependencies for it.

I personally am a big advocate for writing the least amount of `tsconfig` possible, and the [tsconfig/bases](https://github.com/tsconfig/bases) package serves as a great source for getting `tsconfig` templates.

Let's install some of them:

```bash
pnpm --filter tsconfig add -D @tsconfig/node18 @tsconfig/strictest @tsconfig/next @tsconfig/vite-react
```

Using the `--filter` option, these dependencies will be installed in `packages/config/tsconfig/package.json` file and **NOT** the root `package.json` file.

##### Base tsconfig

Now that we have our dependencies installed, let's create our first preset which will be named `base.json` in `packages/config/tsconfig`, this file will be a base configuration that all the other ones will extend from:

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Base",
  "extends": ["@tsconfig/strictest/tsconfig", "@tsconfig/node18/tsconfig"],
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "moduleResolution": "bundler",
    "module": "esnext",
    "resolvePackageJsonExports": true,
    "verbatimModuleSyntax": false
  }
}
```

Since we are using TypeScript version 5, we can extend multiple tsconfigs rather than only one. In our base configuration we extend the `strictest` and the `node18` presets and then we modify them slightly to better fit our needs.

Some of the worthy modifications include:

- `moduleResolution` we set the base module resolution to TypeScript 5's new `bundler`, since we will be using tsup throughout this monorepo for bundling, this serves as a great resolution and allows us to enable `resolvePackageJsonExports` which will enable easy multi exports support for out packages.

- `resolvePackageJsonExports` is a field that forces TypeScript to read and resolve files from a package's `exports` field in it's `package.json` file, this allows us to easily create multiple exports for our packages and avoids us using hacks such as `typesVersions`.

##### React tsconfig

The next tsconfig file on our list is a react specific one, this will serve as a tsconfig file for all of our react packages such as the UI components library package coming in the future, create a `react.json` file in our package with the following content:

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Base",
  "extends": ["./base.json", "@tsconfig/vite-react/tsconfig"],
  "compilerOptions": {
    "moduleResolution": "bundler",
    "allowJs": true
  }
}
```

Here we simply extend the base configuration and `@tsconfig/vite-react/tsconfig`, enable the `bundler` moduleResolution since the `vite-react` preset overrides the one in our `base.json` and lastly allow javascript files so that we can also type check them.

##### Next.js tsconfig

The last file that we will create for our package will be a Next.js specific `tsconfig` preset called `nextjs.json`:

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Nextjs",
  "extends": ["./base.json", "@tsconfig/next/tsconfig"],
  "compilerOptions": {
    "moduleResolution": "nodenext"
  }
}
```

We extend the `base.json` preset again and also this time `@tsconfig/next/tsconfig`. We also modify the `moduleResolution` to `nodenext` because Next.js does not work with the `bundler` moduleResolution and will replace it with `node` upon running the `dev` command which we do not want.

#### Plugging everything up

Now that we have `base.json`, `react.json` and `nextjs.json` in our package, we are almost there to have a fully functional package that we can use throughout our monorepo. The last part is to specify in our `package.json` file that we expect these files to be accessible. This is done through the `files` property. And so after all of this work our final `package.json` of `@acme/tsconfig` should look like this:

```json
{
  "name": "@acme/tsconfig",
  "version": "0.1.0",
  "private": true,
  "description": "Presets for common tsconfig.json configurations",
  "license": "MIT",
  "author": "Acme",
  "files": ["./base.json", "./nextjs.json", "./react.json"],
  "devDependencies": {
    "@tsconfig/next": "^1.0.5",
    "@tsconfig/node18": "^1.0.1",
    "@tsconfig/strictest": "^2.0.0",
    "@tsconfig/vite-react": "^1.0.1"
  }
}
```

We now have a fully functional monorepo package and to start using it, let's create a `tsconfig.json` file at the root of our monorepo that will handle providing a TypeScript configuration for the entire monorepo (unless another `tsconfig.json` file is in a package, that will be used instead for the package). We do this to mainly provide ESLint with a `tsconfig.json` file for our root files such as the `prettier.config.cjs` file.

We firstly need to install `@acme/tsconfig` in our monorepo's root package.json, to do this we simply:

```bash
pnpm add -D @acme/tsconfig -w
```

We can now create a `tsconfig.json` file at the root of our repository with the following content:

```json
{
  "extends": "@acme/tsconfig/base",
  "compilerOptions": {
    "noEmit": true
  },
  "include": [
    ".eslintrc.cjs",
    "**/*.ts",
    "**/*.tsx",
    "**/*.js",
    "**/*.jsx",
    "**/*.cjs",
    "**/*.mjs",
    "**/*.cts",
    "**/*.mts"
  ]
}
```

You can see how we are now extending from `@acme/tsconfig/base` this points to `packages/config/tsconfig/base.json`.

To test that this is working, we can define a new property in our `prettier.config.cjs` file that does not exist on the prettier options type and we can expect typescript to display an error. This happens as that we allow JavaScript files in our `base` tsconfig and we also set the `checkJs` property to true, so we don't need to explicitly define `// @ts-check` for every JS file.

## Conclusion

And with all of that, we now have a fully setup `prettier` configuration as well as we created our first package, `@acme/tsconfig`. We also setup TypeScript configuration presets that we will be able to use once we start adding a Next.js application, a React UI components library...etc

We will use the latest and greatest features of TypeScript v5 in this monorepo to give us the best DX possible and let us move quicker creating and developing apps and packages.

I know this might have been a very dense post, this is why I don't expect everyone to completely understand everything that we have gone through here. For that, feel free to [DM me on Twitter](https://twitter.com/ixahmedxii) with all of your questions and I will help you out.

## One last thing

As the previous part, this post title is completely unrelated to the topic. This part's title is inspired by The Foundations' record, "Build Me Up Buttercup" release in 1968. [Give it a listen!](https://www.youtube.com/watch?v=hSofzQURQDk)
