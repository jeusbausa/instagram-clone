export const actions = {
	initPosts: async (context, payload) => {
		const { rootState, commit } = context
		try {
			const result = await $nuxt.$fire.firestore.collection('users').where('id', '==', rootState.auth.user.uid).get()
			const [userFollowed] = result.docs.map((item) => ({ ...item.data(), docId: item.id }))
			const posts = await $nuxt.$fire.firestore.collection('posts').where('userId', 'in', userFollowed.following).get()

			commit(
				'SET_POSTS',
				posts.docs.map((item) => ({ ...item.data(), itemId: item.id, username: userFollowed.username, avatar: userFollowed.avatar })).sort((a, b) => b.createdAt - a.createdAt)
			)
		} catch (error) {
			throw error
		}
	},

	addPost: async (context, payload) => {
		const { rootState } = context
		const { photo, caption, location } = payload
		try {
			const time = Date.now()
			const url = await $nuxt.$fire.storage.ref().child(`posts/${time}.jpg`).put(photo)
			await $nuxt.$fire.firestore.collection('posts').add({ userId: rootState.auth.user.uid, photo: await url.ref.getDownloadURL(), caption, location, createdAt: Date.now() })
			// $nuxt.$router.push('/')
		} catch (error) {
			throw error
		}
	},
}

export const mutations = {
	SET_POSTS: (state, posts) => {
		state.posts = posts
	},
}

export const getters = {
	getPosts: (state) => {
		const data = state.posts
		return data
	},
}

export const state = () => ({
	posts: [],
})
