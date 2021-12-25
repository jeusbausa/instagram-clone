<template>
	<div class="flex flex-col min-h-screen w-full fixed bg-white">
		<form @submit.prevent="submitPost">
			<div class="h-12 flex justify-between px-3 items-center border-b">
				<button @click="$emit('toggleAddPost')">
					<i class="fas fa-times text-2xl"></i>
				</button>
				<div class="font-semibold">New Post</div>
				<button type="submit" class="text-blue-400 font-semibold">Share</button>
			</div>

			<div class="h-96 flex items-center justify-center mb-3">
				<div v-if="!previewPhoto">
					<input @change="addPhoto" id="add-photo" type="file" class="hidden" />
					<label for="add-photo" class="font-xs py-1 px-2 border rounded-lg"><i class="far fa-image mr-2"></i>Add Photo</label>
				</div>
				<img v-else class="relative w-full h-full object-cover" :src="previewPhoto" alt="" srcset="" />
			</div>
			<!-- <div>
            Future update when user want to add more photos
        </div> -->
			<div class="flex-1 flex flex-col space-y-3">
				<div class="p-2 h-20 border-b border-t">
					<div class="flex space-x-3">
						<img class="w-8 h-8" :src="getAuthUser.avatar" alt="" />
						<textarea v-model="post.caption" rows="2" class="w-full outline-none resize-none" placeholder="Write a caption..." />
					</div>
				</div>
				<div class="p-2 h-12 border-b border-t">
					<div class="flex items-center space-x-3">
						<i class="far fa-compass text-gray-800 text-2xl"></i>
						<input v-model="post.location" type="text" class="w-full outline-none" placeholder="Add Location" />
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			post: {
				caption: '',
				photo: '',
				location: '',
			},
			previewPhoto: '',
		}
	},
	methods: {
		addPhoto: function (e) {
			const blobPhoto = e.target.files[0]
			this.post.photo = blobPhoto
			this.previewPhoto = URL.createObjectURL(blobPhoto)
		},
		submitPost: async function () {
			try {
				await this.$store.dispatch('post/addPost', this.post)
				this.$emit('toggleAddPost')
			} catch (error) {
				console.log(error)
			}
		},
	},
	computed: {
		getAuthUser: function () {
			return this.$store.state.auth.user
		},
	},
}
</script>

<style></style>
