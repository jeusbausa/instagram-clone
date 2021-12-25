<template>
	<Card class="mb-4">
		<div slot="card-body">
			<div>
				<div class="header flex items-center justify-between p-3">
					<div class="space-x-3 flex items-center">
						<img class="w-12 h-12 rounded-full object-cover" :src="avatar" />
						<div>
							<div class="text-sm font-bold">{{ username }}</div>
							<div class="text-xs">{{ location }}</div>
						</div>
					</div>
					<div><i class="fas fa-ellipsis-h text-sm"></i></div>
				</div>
				<div class="content-image">
					<img :src="photo" class="object-cover w-full h-full" alt="" srcset="" />
				</div>
				<div class="reaction flex flex-col space-y-2 p-4">
					<div class="flex justify-between">
						<div class="space-x-6">
							<button v-for="(reactIcon, i) in reactIcons" :key="i">
								<i :class="`${reactIcon.icon} text-2xl`"></i>
							</button>
						</div>
						<div>
							<button class="self-end">
								<i class="far fa-bookmark text-2xl"></i>
							</button>
						</div>
					</div>
					<div class="text-sm font-semibold">12,113 likes</div>
					<div>
						<div class="inline text-sm font-bold hover:underline cursor-pointer">
							{{ username }}
						</div>
						<p class="inline text-sm leading-none font-base">{{ caption }}</p>
					</div>
					<div class="text-gray-600 text-sm font-base">{{ dateCreated }}</div>
				</div>
				<div class="flex p-6 border-t border-gray-5 items-center space-x-3">
					<i class="fas fa-smile text-1xl"></i>
					<input class="w-full text-sm outline-none" type="text" placeholder="Add a comment..." v-model="comment" />
					<button
						class="text-blue-100 text-sm font-semibold outline-none"
						:class="{
							'text-blue-500': !!comment,
							'cursor-default': !comment,
						}"
						href="#"
					>
						Post
					</button>
				</div>
			</div>
		</div>
	</Card>
</template>

<script>
export default {
	props: ['location', 'photo', 'username', 'avatar', 'caption', 'dateCreated'],
	data() {
		return {
			comment: '',
			reactIcons: [
				{
					text: 'like',
					icon: 'far fa-heart',
				},
				{
					text: 'comment',
					icon: 'far fa-comment',
				},
				{
					text: 'share',
					icon: 'far fa-paper-plane',
				},
			],
		}
	},
	computed: {
		// postsLists: function () {
		// 	this.getPosts.forEach((info) => {
		// 		return (this.sortedData = { ...info, posts: info.posts.reverse() })
		// 	})
		// },
	},
}
</script>

<style></style>
