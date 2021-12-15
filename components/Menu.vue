<template>
	<div class="sticky flex bottom-0 items-center justify-around bg-white h-12 w-full">
		<button v-for="(navIcon, i) in navIcons" :key="i">
			<i :class="`${navIcon.icon} text-2xl`"></i>
		</button>
		<img class="w-8 h-8 border rounded-full object-cover" :src="avatar" />
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
					icon: 'fas fa-search',
					text: 'search',
				},
				{
					icon: 'far fa-plus-square',
					text: 'upload',
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

<style></style>
