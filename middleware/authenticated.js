export default ({ store, route, redirect }) => {
	const user = store.state.auth.user
	if (route.path === '/signup' && user) {
		return redirect('/')
	}
}
