<template>
	<div class="flex flex-col min-h-screen">
		<Header :avatar="getAuthUser.avatar" />

		<div class="flex-1 bg-gray-100 flex justify-center p-2">
			<div v-if="getPosts.length !== 0">
				<!-- <Posts :getPosts="getPosts" /> -->
				<Posts
					v-for="(posts, i) in getPosts"
					:avatar="posts.avatar"
					:caption="posts.caption"
					:dateCreated="posts.createdAt"
					:location="posts.location"
					:photo="posts.photo"
					:username="posts.username"
					:key="i"
				/>
			</div>
			<div v-else class="self-center text-xs font-semibold">No posts found, follow more people to discover their post!</div>
		</div>

		<Menu :avatar="getAuthUser.avatar" @toggleAddPost="() => (addPost = true)" />
		<NewPost v-if="addPost" @toggleAddPost="() => (addPost = false)" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'timeline',
	middleware: 'check-auth',
	data() {
		return {
			sortedData: [],
			addPost: false,
		}
	},
	async created() {
		await this.$store.dispatch('post/initPosts')
	},
	computed: {
		...mapGetters('post', ['getPosts']),
		getAuthUser: function () {
			return this.$store.state.auth.user
		},
	},
}
</script>
