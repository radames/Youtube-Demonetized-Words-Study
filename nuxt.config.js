export default {
  telemetry: false,
  target: 'static',

  /*
   ** Headers of the page
   */
  router: {
    base: `/${process.env.npm_package_name}` // has to match github project name to work with githubpages, in this example works with package name
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'favicon/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicon/favicon-16x16.png'
      },
      { rel: 'manifest', href: 'favicon/site.webmanifest' },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css',
      },
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    standalone: true,
    // transpile: ['@radames/youtube-demonetized-words-similarity-study'],
  }
}
