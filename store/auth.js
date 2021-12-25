export const actions = {
	login: async (context, credentials) => {
		const { commit } = context
		try {
			await $nuxt.$fire.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
			const token = await $nuxt.$fire.auth.currentUser.getIdToken(/* forceRefresh */ true)
			const accessToken = await $nuxt.$axios.$post('/api/v1/token', { token })
			const user = accessToken.response.message
			commit('SET_USER', { uid: user.user_id, email: user.email, name: user.name, avatar: user.picture })
		} catch (error) {
			throw error
		}
	},
	signUp: async (context, credentials) => {
		const { dispatch } = context
		try {
			const blobImage = await fetch('https://firebasestorage.googleapis.com/v0/b/instagram-clone-tailwindcss.appspot.com/o/users%2Favatar.jpg?alt=media')
			const result = await $nuxt.$fire.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
			await $nuxt.$fire.firestore.collection('users').doc(result.user.uid).set({
				id: result.user.uid,
				username: credentials.username,
				email: credentials.email,
				fullName: credentials.fullName,
				avatar: null,
				createdAt: Date.now(),
			})
			const url = await $nuxt.$fire.storage
				.ref()
				.child(`users/${result.user.uid}.jpg`)
				.put(await blobImage.blob())
			await result.user.updateProfile({ displayName: credentials.fullName, photoURL: await url.ref.getDownloadURL() })
			await $nuxt.$fire.firestore
				.collection('users')
				.doc(result.user.uid)
				.update({
					avatar: await url.ref.getDownloadURL(),
				})
			await dispatch('login', credentials)
			$nuxt.$router.push('/')
		} catch (error) {
			throw error
		}
	},
}

export const mutations = {
	SET_USER: (state, user) => {
		state.user = user
	},
}

export const state = () => ({
	user: null,
})
