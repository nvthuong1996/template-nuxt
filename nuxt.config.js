require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css', 'normalize.css/normalize.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  /*
   ** add variables and mixin scss to global
   */
  styleResources: {
    scss: [
      '~/shared/assets/scss/variables.scss',
      '~/shared/assets/scss/mixin.scss'
    ]
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://auth.nuxtjs.org/guide/middleware.html
    '@nuxtjs/auth',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // inject env into nuxt-app
    // https://github.com/samtgarson/nuxt-env#readme
    [
      'nuxt-env',
      {
        keys: Object.keys(process.env)
      }
    ],
    'nuxt-i18n'
  ],

  i18n: {
    locales: [
      {
        code: 'vi-VN',
        name: 'Tiếng Việt',
        file: 'vi-VN.js'
      },
      {
        code: 'en-US',
        name: 'English',
        file: 'en-US.js'
      }
    ],
    lazy: true,
    defaultLocale: 'en-US',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
    langDir: 'lang/'
  },

  /*
   ** Router configuration
   ** See https://axios.nuxtjs.org/options
   */
  router: {
    // middleware: ['auth']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
