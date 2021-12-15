

export default async function (session) {
  await import(/* webpackChunkName: 'firebase-storage' */'firebase/storage')

  const storageService = session.storage()
  return storageService
}
