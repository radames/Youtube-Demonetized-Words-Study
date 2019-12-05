# Youtube-Demonetized-Words-Study

This is an example of embeding an Observable notebook into a static vuejs/nuxtjs page.

The main trick here is to transpile the notebook ES module during build time. You have to edit you  `nuxt.config.js` and add the following

```js
  build: {
    transpile: ['@radames/youtube-demonetized-words-similarity-study'],
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.js$/,
        loader: require.resolve('@open-wc/webpack-import-meta-loader')
      })
    }
  }
```

Don't forget you have to install your notebook and a custom webpack meta loader
```
npm install @open-wc/webpack-import-meta-loader
npm install "https://api.observablehq.com/@radames/youtube-demonetized-words-similarity-study.tgz?v=3"
```
## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Initial setup up for gh-pages worktree branch

```

Checkout

$ git checkout --orphan gh-pages
$ git reset --hard
$ git commit --allow-empty -m "Init"
$ git checkout master

Make your worktree to your deploy folder

$ rm -rf _site
$ git worktree add _site gh-pages

```

## Deploy

``` 
$ npm run gh-pages
```
