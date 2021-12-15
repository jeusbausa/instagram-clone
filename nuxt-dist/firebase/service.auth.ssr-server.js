import admin from 'firebase-admin'

const config = {"apiKey":"AIzaSyB8qJGTOTVbWhNQEF5zWocpbALNwoht5dQ","authDomain":"instagram-clone-tailwindcss.firebaseapp.com","projectId":"instagram-clone-tailwindcss","storageBucket":"instagram-clone-tailwindcss.appspot.com","messagingSenderId":"1050694802461","appId":"1:1050694802461:web:d96eab54257be9a2fdfaf4","measurementId":"G-N4QP5TLCCB"}

const simulateUserRecord = ({
  uid,
  email,
  email_verified: emailVerified,
  name: displayName
}) => ({
  uid,
  email,
  emailVerified,
  displayName
})

if (!admin.apps.length) {
  admin.initializeApp(config)
}

export default async ({ req, res }) => {
  if (!req || !req.headers.authorization) {
    return
  }

  // Parse the injected ID token from the request header.
  const authorizationHeader = req.headers.authorization || ''
  const components = authorizationHeader.split(' ')
  const idToken = components.length > 1 ? components[1] : ''

  try {
    // Try to verify the id token, additionally checking if the token was revoked
    const decodedToken = await admin.auth().verifyIdToken(idToken)

    if (decodedToken.uid) {
      const authUser = simulateUserRecord(decodedToken)

      res.locals = {
        ...res.locals,
        user: {
          ...authUser,
					allClaims: decodedToken,
					idToken,
        }
      }
    }
  } catch (e) {
    console.error(e)
  }
}
