<template>
	<div class="sticky top-0 flex xss:px-6 xss:justify-between xl:justify-around items-center h-12 w-full bg-white border-b">
		<img src="~/assets/images/jeustagram.png" class="w-28" />
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
