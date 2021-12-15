import createApp from './app.js'

import authService from './service.auth.js'
import firestoreService from './service.firestore.js'
import storageService from './service.storage.js'

const appConfig = {"apiKey":"AIzaSyB8qJGTOTVbWhNQEF5zWocpbALNwoht5dQ","authDomain":"instagram-clone-tailwindcss.firebaseapp.com","projectId":"instagram-clone-tailwindcss","storageBucket":"instagram-clone-tailwindcss.appspot.com","messagingSenderId":"1050694802461","appId":"1:1050694802461:web:d96eab54257be9a2fdfaf4","measurementId":"G-N4QP5TLCCB"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
    firestoreService(session, firebase, ctx, inject),
    storageService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
      firestoreService(session, firebase, ctx, inject),
      storageService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth,
    firestore,
    storage
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth,
    firestore: firestore,
    storage: storage
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}