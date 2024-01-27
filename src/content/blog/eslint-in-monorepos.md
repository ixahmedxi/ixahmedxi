---
title: "ESLint in Monorepos is hard, let's fix it"
description: 'I often see many different ways people integrate ESLint into their monorepos, and often ending up with hard to maintain setups, but there is a way to overcome this pitfall.'
pubDate: 'Jan 15 2024'
updatedDate: 'Jan 17 2024'
heroImage: '/blog-placeholder-1.jpg'
---

Embark on a thrilling journey to Monorepo Land, where code sharing and team collaboration are the order of the day! 🚄🌅

Greetings, fellow monorepo enthusiasts! You might recall [that tweet](https://twitter.com/ixahmedxii/status/1640859386678591489?s=46&t=NbnVtEhh4GCsCcmQ2Y0HlA) from a while ago, but the wait is over. Monorepo College has arrived, and it's time to dive in!

## The Monorepo Mission

Monorepo configurations can be challenging to set up, but once you nail them down, they should fade into the background, allowing you to focus on what truly matters. We've all been there: a monorepo is running smoothly, only for a tiny change to wreak havoc and send us back to configuration purgatory.

In reality, monorepos should streamline your workflow through shared code, so you can concentrate on delivering quality products rather than wrestling with broken configs.

It's no secret that monorepo conventions are hard to find, and everyone seems to draw inspiration from different sources. So, how can we be confident that our current setup will scale effectively down the road?

Introducing Monorepo College, a series of blog posts and YouTube videos designed to guide you through building a monorepo starter kit from scratch. The primary goal is to teach you how to architect a monorepo setup, but if you prefer to skip the process, the starter kit will be available on GitHub after the series.

In this first installment, we'll introduce the world of monorepos, outline the series' scope, and discuss some conventions to consider during setup.

## Monorepos: The What and the Why

A monorepo, short for "monolithic repository," is a single repository housing multiple projects, packages, or codebases. This setup enables you to store all your projects in one location, facilitating code sharing between them.

To learn more about the concept of monorepos, check out [Monorepo tools](https://monorepo.tools/).

## The Monorepo Marvel: Advantages

Monorepos boast several benefits over traditional polyrepos (multiple repositories) setups, including:

1. **Effortless code sharing:** With a monorepo, you can easily share components, such as a UI component, across multiple applications.
2. **Consistent tooling:** Monorepos enable you to standardize tool configurations across packages, resulting in a unified toolset. For example, an ESLint config package can be used by all packages in the monorepo, ensuring consistent lint rules.
3. **Simplified dependency management:** Monorepos offer a clearer view of package dependencies, and with tools like pnpm, you can update dependencies across packages with a single command. This helps avoid different projects using different versions of the same dependency, such as React.

While this list is by no means exhaustive, it highlights how monorepos can enhance the development process for more complex codebases.

## The Monorepo Matrix: When It Works and When It Doesn't

Monorepos can be a perfect fit for some projects, but not for others. Generally:

- If your code is highly complex and needs to be broken down into smaller, independently managed components, a monorepo is the way to go. For a simple portfolio website, a monorepo is overkill.
- If your team works on distinct areas of the product, a monorepo is a must.
- (Possibly a hot take) If you're building a startup or a project with an existing or planned team, a monorepo is likely your best bet.
- If you're developing an open-source library with multiple parts, a monorepo is essential. For a simple utility library, there's no need for one.

As you can see, the more complex the codebase, the more a monorepo makes sense.

## Building Our Monorepo Masterpiece

Before diving into the objectives of this series, let's introduce Acme, our imaginary startup. Throughout this series, we'll create a monorepo for Acme, starting from scratch.

## Envisioning the Monorepo Structure

Here's a potential layout for our monorepo, which may change as we progress:

```json
.
├── apps
│   ├── docs
│   └── web
└── packages
    ├── api
    ├── config
    │   ├── eslint
    │   ├── playwright
    │   ├── storybook
    │   ├── tailwind
    │   ├── tsconfig
    │   ├── tsup
    │   └── vitest
    ├── database
    ├── features
    ├── storybook
    └── ui
```

```ts
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pandacss from '@pandacss/astro';
import { defineConfig } from 'astro/config';

import { siteConfig } from './src/siteConfig';

export default defineConfig({
  site: siteConfig.site,
  integrations: [mdx(), sitemap(), pandacss()],
  markdown: {
    shikiConfig: {
      experimentalThemes: {
        light: 'rose-pine-dawn',
        dark: 'rose-pine',
      },
    },
  },
});
```

### Apps

The `apps` folder will house all of Acme's applications, such as mobile and web apps, marketing sites, and product-specific applications.

### packages/config

Before discussing the `packages` folder, let's examine the `packages/config` directory. This folder will contain configurations for tools used by other packages in the monorepo, such as shared tsconfig presets, tailwind, tsup, vitest, and more.

Centralizing tool configurations helps streamline maintenance and troubleshooting.

### packages

The `packages` directory will host various packages used by the `apps`. For example, a `ui` package will contain shared UI components used by the applications.

We'll also create a `packages/api` for our tRPC API, which will communicate with and fetch data from our database stored in `packages/database`.

### Rationale Behind the Decisions

Our layout prioritizes flexibility and modularity. Everything is separated in little packages throughout the monorepo and they all come together to form a fully functional application.

If we wanted to replace tsup, for example, we'd only need to modify `packages/config/tsup`. You could opt for a more modular name like `packages/config/bundler`, but we're confident tsup will serve us well for now.

Most packages (excluding config) won't be used by many apps, and usage should not determine whether code is split into a package. In essence, if a product area can be isolated in its own package, it probably should. Isolating UI components and the API allows us to replace applications while retaining easy access to these components. This approach is also ideal for teamwork, as individuals can focus solely on their assigned packages, improving their development experience.

## Tools and Technologies to Tackle

Throughout this series, we'll explore various technologies and learn how to configure them in a monorepo context, including:

- pnpm
- TypeScript
- Storybook
- Next.js
- Clerk
- Prisma
- Tsup
- ESLint
- Prettier
- Changesets
- Tailwindcss
- Vitest
- Playwright
- NX
- Turborepo
- Github actions

The primary focus will be on general configuration principles to help you better understand and apply these techniques to any technology in your monorepo.

## Homework

Each installment will include optional homework or challenges to deepen your understanding of monorepos.

For this part, try this simple task:

- Create a monorepo with `packages/is-odd` and `packages/is-even`. The `packages/is-even` **should return the inverse of** `packages/is-odd`. This exercise will familiarize you with sharing code between packages.

Feel free to send me your creation via [Twitter DM](https://twitter.com/ixahmedxii), and I'll provide feedback!

## Wrapping Up

Getting monorepos right can be challenging, but when set up correctly, they should streamline your development process. Monorepo College aims to provide insights into monorepo structures and configurations, helping you create efficient and effective monorepos that boost, rather than hinder, your development.

Join me in the next installment, where we'll begin building Acme. Long live Acme!

## One last thing

Each post will feature an unrelated title inspired by a song. This episode's title comes from The Rascals' "A Beautiful Morning," released in 1968. Give it a listen!
