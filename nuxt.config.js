const pkg = require('./package')


module.exports = {
  mode: 'spa',
  // buildDir:'public',
  generate:{
    dir:'public'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Paolo Luis G. Lansigan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css',integrity:"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",crossorigin:"anonymous" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/main.scss',
    '@/assets/icofont.min.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/vue-chartjs.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources'
  ],

  styleResources:{
    scss:[
      'assets/scss/abstracts/_variables.scss',
      'assets/scss/abstracts/_mixins.scss',
      'assets/scss/components/_button.scss',
      'assets/scss/components/_bg-video.scss',
      'assets/scss/base/_typography.scss',
      'assets/scss/base/_base.scss',
      'assets/scss/base/_utilities.scss',
      'assets/scss/base/_animations.scss',
      'assets/scss/layout/_header.scss',
      'assets/scss/layout/_about.scss',
      'assets/scss/layout/_story.scss',
      'assets/scss/layout/_footer.scss',
      'assets/scss/layout/_navigation.scss',
      'assets/scss/layout/_grid.scss',
      'assets/scss/pages/_home.scss'
      
    ]
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },

  env:{
    baseURL:'http://localhost:3000'//dev
    // baseURL:'herokuapp.com'//prod
  }
}
