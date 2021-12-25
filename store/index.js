import jwt from 'jsonwebtoken'
import { parse } from 'cookieparser'
export const actions = {
	nuxtServerInit: async ({ commit }, { req, app }) => {
		if (!req.headers.cookie) return

		const token = parse(req.headers.cookie).fb_token

		if (typeof token === 'undefined') {
			commit('auth/SET_USER', null)
			await app.$fire.auth.signOut()
			return
		}

		const decoded = jwt.decode(token)

		if (decoded) {
			commit('auth/SET_USER', { uid: decoded.user_id, email: decoded.email, name: decoded.name, avatar: decoded.picture })
		}
	},
	// onAuthStateChangedAction: (ctx, { authUser, claims }) => {
	// 	console.log('authUser', authUser)
	// 	console.log('claims', claims)
	// 	// if (!authUser) {
	// 	// 	// claims = null
	// 	// 	// Perform logout operations
	// 	// } else {
	// 	// 	// Do something with the authUser and the claims object...
	// 	// }
	// },
}
