<template>
	<div class="sticky top-0 flex xss:px-6 xss:justify-between xl:justify-around items-center h-12 w-full bg-white xl:shadow">
		<img src="~/assets/images/jeustagram.png" class="w-28" />
		<div class="flex space-x-7 xss:hidden xl:block">
			<button v-for="(navIcon, i) in navIcons" :key="i">
				<i :class="`${navIcon.icon} text-2xl`"></i>
			</button>
			<img class="w-10 h-10 border rounded-full object-cover" :src="avatar" />
		</div>
		<div>
			<i class="fab fa-facebook-messenger text-2xl"></i>
		</div>
	</div>
</template>

<script>
export default {
	props: ['avatar'],
	data() {
		return {
			navIcons: [
				{
					icon: 'fas fa-home',
					text: 'home',
				},
				{
					icon: 'fab fa-facebook-messenger',
					text: 'dm',
				},
				{
					icon: 'far fa-plus-square',
					text: 'upload',
				},
				{
					icon: 'far fa-compass',
					text: 'discover',
				},
				{
					icon: 'far fa-heart',
					text: 'notification',
				},
			],
		}
	},
}
</script>
