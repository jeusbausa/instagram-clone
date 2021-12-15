export default function ({ app, store, route, redirect }) {
	const user = store.state.auth.user
	if (route.path === '/login' && user) {
		return redirect('/')
	} else if (route.path === '/' && !user) {
		return redirect('/login')
	}
}
