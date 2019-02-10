// @see https://nuxtjs.org/guide/configuration/
export default {
  css: [
    '@/style/scss/style.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  script: [],
  serverMiddleware: [
    '~/api/contact'
  ],
  plugins: [
    '~/plugins/fontawesome.js',
    {
      src: '~/plugins/vue-apexcharts.js',
      ssr: false
    },
    {
      src: '~plugins/vue-github',
      ssr: false
    },
    {
      src: '~plugins/vue-carousel',
      ssr: false
    },
  ],
  transition: {
    name: 'fade',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('Before enter...');
    }
  }
}