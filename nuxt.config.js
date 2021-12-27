export default {
  // Target: https://go.nuxtjs.dev/config-target
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jeustagram',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://kit.fontawesome.com/ce89e23db9.js',
        crossorigin: 'anonymous',
      },
    ],
  },
  //loading: { color: '#fff' },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/firebase'],

  firebase: {
    config: {
      apiKey: 'AIzaSyB8qJGTOTVbWhNQEF5zWocpbALNwoht5dQ',
      authDomain: 'instagram-clone-tailwindcss.firebaseapp.com',
      projectId: 'instagram-clone-tailwindcss',
      storageBucket: 'instagram-clone-tailwindcss.appspot.com',
      messagingSenderId: '1050694802461',
      appId: '1:1050694802461:web:d96eab54257be9a2fdfaf4',
      measurementId: 'G-N4QP5TLCCB',
      databaseURL:
        'https://instagram-clone-tailwindcss-default-rtdb.asia-southeast1.firebasedatabase.app/',
    },
    services: {
      auth: {
        persistence: 'local', // default
        initialize: {
          // onAuthStateChangedAction: 'onAuthStateChangedAction',
          subscribeManually: false,
        },
        ssr: true,
      },
      firestore: true,
      storage: true,
    },
  },
  serverMiddleware: [{ path: '/api/v1', handler: '~/server' }],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  buildDir: 'nuxt-dist',
  build: {
    extractCSS: true,
  },
  server: {
    host: '0.0.0.0',
  },
}
