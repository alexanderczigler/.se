---
title: SvelteKit + Surge
published: 2022-01-05
description: Creating a static web based on SvelteKit and deploying it in a matter of minutes
tags: svelte, javascript, surge, github actions
slug: sveltekit-plus-surge
---

So I have used Svelte and Sapper in a few projects already and I fell in love with it very quickly while trying it for the first time. I think Svelte has this perfect level of simplicity that speaks right to my heart. Sapper and now SvelteKit made things even nicer with built-in routing and such, for whenever you want to make more than a single-page application.

In this log entry I will cover the basics of setting up a SvelteKit project and deploying it as a static website using [surge](https://surge.sh).

## Creating a blank project

You cam use the `npm init` command to setup a new project. The command will ask you whether you want a SvelteKit demo app or a Skeleton project (an empty site). The Skeleton project has everything you need to built a site on top of it but if you like seeing examples you can pick the demo app.

```shell
# NOTE: I am using node stable (17) for this.
# Create a new SvelteKit site inside the folder "my-website".
npm init svelte@next my-website
```

Once you have done this, go into the directory and run it to see what the site looks like.

```shell
cd my-website
npm install

npm run dev -- --host --open
# The --host flag is optional but convenient if you want to view your site from your phone for example.
```

Since there is excellent documentation at [https://kit.svelte.dev/docs](https://kit.svelte.dev/docs) I won't go into detail on the fundamentals of Svelte here.

## Building and deploying the static site

When you run the `npm run dev` command locally, your site is hosted as a node process with live reaload for your convenience. When you want to deploy it however, all you need is a static webhost like [GitHub Pages](https://pages.github.com) or [surge](https://surge.sh).

SvelteKit comes with a build command that will compile a static site for you. It will output everything to the `build` folder inside your project.

```shell
npm run build
```

### Deploying

In this log I will be using surge. I like surge because you can do everything via the command-line and it is super easy to deploy a feature branch for example to its own unique url. First, install surge globally using npm and then simply run the command-line app. When you run surge for the first time it will ask you to create an account.

```shell
# Make surge available globally.
npm install -g surge

# Deploy a first version.
# NOTE: When asked about project simply add "build" to the suggested path.
#       When asked about domain, accept the suggested domain for now.
surge
```

And voilà! Your brand new SvelteKit website is live.

#### Custom domain

It is easy to use your own domain when deploying with surge. Simply run surge and instead of picking their suggestion, enter your desired domain instead. Surge will then instruct you how to configure the DNS.

### GitHub Action

Now, assuming you are using GitHub, you may want your website to auto-deploy whenever you push/merge something to your main branch. This can be achieved easily with [Damian Świstowski's GitHub Action](https://github.com/dswistowski/surge-sh-action).

First of all you need to create a couple of secrets in your GitHub repository. This is done via the Settings -> Secrets page. Add a secret called `surge_login` that contains the email address you used to register on surge. Then add another secret called `surge_token` that you get by running `surge token` from the command-line. (Treat this token as you would treat a password!)

Once those two secrets are in place, you can add the following workflow to your repository. If you are unfamiliar with GitHub Actions; create a folder called `.github/workflows` inside your repo. Then create a file called `deploy.yaml` where you paste the following code.

```yaml
name: Publish

on:
  push:
    branches:
      - main # Limit deploys to the "main" branch

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - name: Clone repo
        uses: actions/checkout@v2

      - name: Build
        uses: actions/setup-node@v2
        with:
          node-version: 17.x
      - run: npm ci
      - run: npm run build

      - name: Publish to surge.sh
        uses: dswistowski/surge-sh-action@v1.0.1
        with:
          domain: 'www.my-domain.dev' # Your custom domain (change this!)
          project: 'build' # Deploy the contents of the build dir
          login: ${{ secrets.surge_login }}
          token: ${{ secrets.surge_token }}
```

Note that you need to change the domain on line 25!

Now that your website will be updated every time you push code to your `main` branch.
