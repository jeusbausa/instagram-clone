<template>
	<div>
		<Header avatar="https://www.newsinside.kr/news/photo/202011/1095355_774365_162.png" />
		<div class="flex bg-gray-100 w-full min-h-full p-2">
			<!-- <div class="mr-12"> -->
			<!-- <Stories :stories="usersStories" /> -->
			<div>
				<Posts
					class="mb-4"
					v-for="(usersPost, i) in usersPost"
					:key="i"
					:likes="usersPost.likes"
					:description="usersPost.description"
					:photo="usersPost.photo"
					:username="usersPost.username"
					:avatar="usersPost.avatar"
					:location="usersPost.location"
					:datePosted="usersPost.datePosted"
				></Posts>
			</div>
			<!-- </div> -->
			<!-- <div class="min-h-screen sticky top-28">
					<div slot="card-body" class="space-y-3">
						<div class="flex justify-between items-center">
							<div class="flex items-center space-x-6">
								<img class="w-16 h-16 rounded-full object-cover" src="https://www.newsinside.kr/news/photo/202011/1095355_774365_162.png" />
								<div>
									<div class="font-bold">_jeusbausa</div>
									<div>Jeus Bausa</div>
								</div>
							</div>
							<a class="text-blue-500 font-semibold" href="#">Switch</a>
						</div>
						<div class="flex justify-between">
							<div class="font-bold text-gray-600 text-md">Suggestions For You</div>
							<div class="font-semibold">See All</div>
						</div>
						Suggestion
						<div class="hidden justify-between items-center text-sm" v-for="(userSuggestion, i) in userSuggestions" :key="i">
							<div class="flex items-center space-x-3">
								<img class="w-12 h-12 rounded-full object-cover" :src="userSuggestion.avatar" />
								<div>
									<div class="font-bold">{{ userSuggestion.username }}</div>
									<div class="text-gray-600">
										{{ userSuggestion.description }}
									</div>
								</div>
							</div>
							<a class="text-blue-500 font-semibold" href="#">Switch</a>
						</div>
					</div>
				</div> -->
		</div>

		<Menu :avatar="getAuthUser.avatar" />
	</div>
</template>

<script>
export default {
	name: 'timeline',
	middleware: 'check-auth',
	data() {
		return {
			userSuggestions: [
				// {
				//   avatar:
				//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy9SHKxfuK8UAvY3CPCSHK6mxhC-zRgRxiYhy0EuYokvtM9NTKTXAogHEALMCozf56UGM&usqp=CAU",
				//   username: "_baejohyun31",
				//   description: "Followed by _eunhashii012312",
				// },
				// {
				//   avatar:
				//     "https://i.scdn.co/image/ab6761610000e5eb006ff3c0136a71bfb9928d34",
				//   username: "iudlwrma",
				//   description: "New to Jeustagram",
				// },
				// {
				//   avatar:
				//     "https://data.tokyogirlsupdate.com/wp/wp-content/uploads/2015/12/img_ai_shinozaki_2015_90258.jpg",
				//   username: "aishinozaki",
				//   description: "Suggested for you",
				// },
				// {
				//   avatar: "https://i.mydramalist.com/ZrLd8c.jpg",
				//   username: "jennierubyjane",
				//   description: "Followed by realmizkif",
				// },
				// {
				//   avatar:
				//     "https://imgx.sonora.id/crop/0x44:1080x962/x/photo/2019/12/27/1856081647.jpg",
				//   username: "_wendysmentertainment",
				//   description: "Followed by twicetagram",
				// },
			],
			usersPost: [
				// {
				// 	username: '_jeusbausa',
				// 	description:
				// 		"Nezuko grew up on a mountain alongside her older brother, Tanjiro, and the rest of her siblings and mother. She is the eldest daughter of the Kamado family. She presumably took care of her younger siblings as an assistant to her mother, as is briefly witnessed prior to her family's death. Unlike Tanjiro, who was responsible for selling firewood in town, Nezuko would usually help out around the family home.",
				// 	photo: 'http://pm1.narvii.com/7282/c4b02611acb5dde99c3f0d55cd6436c32845f5f7r1-1920-1080v2_uhq.jpg',
				// 	likes: '312,512',
				// 	avatar: 'https://www.newsinside.kr/news/photo/202011/1095355_774365_162.png',
				// 	location: 'Osaka, Japan',
				// 	datePosted: '1 day ago',
				// },
				// {
				// 	username: 'baifernpimchanok',
				// 	description: 'Baifern Pimchanok Thailand Actress',
				// 	photo: 'https://wallpapercave.com/wp/wp7250850.jpg',
				// 	likes: '931,112',
				// 	avatar:
				// 		'https://img.wattpad.com/a7040c44646a3bc3d9f2df831fd766bc27e142f0/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4c6f5651674e6836785a657372773d3d2d3230392e3135363435316637633365623264366133333532333235373439352e6a7067?s=fit&w=720&h=720',
				// 	location: 'Bangkok, Thailand',
				// 	datePosted: 'a few seconds ago',
				// },
				// {
				// 	username: 'theemmawatson',
				// 	description:
				// 		'Emma knew she wanted to act from the age of six. Prior to being cast in the Harry Potter film series, Watson had only acted in school plays. At school, she took the lead role in several plays, including Arthur: The Young Years and The Happy Prince. Along with plays, Emma participated in many other school productions, including the Daisy Pratt Poetry Competition, in which she won first place for her year at age seven.',
				// 	photo: 'https://www.looper.com/img/gallery/the-worst-role-emma-watson-has-taken-since-harry-potter-ended/intro-1569527566.jpg',
				// 	likes: '1,131,913',
				// 	avatar: 'https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/686x514/msdnasmdnmasdmnamsdasd_202105.jpg',
				// 	location: 'California, USA',
				// 	datePosted: '4 hours ago',
				// },
			],
			usersStories: [
				// {
				//   avatar:
				//     "https://6.viki.io/image/bb6a4abac2cd4a9e93aabfd03d5e1492.jpeg?s=900x600&e=t",
				//   username: "_mignonben",
				// },
				// {
				//   avatar:
				//     "https://kbizoom.com/wp-content/uploads/2021/05/Joy-Red-Velvet-released-an-impressive-set-of-solo-concept-photos20.jpg",
				//   username: "joyredvelvet0911",
				// },
				// {
				//   avatar:
				//     "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Jisoo_for_Marie_Claire_Korea_210914%281%29.jpg/1200px-Jisoo_for_Marie_Claire_Korea_210914%281%29.jpg",
				//   username: "jisookim_bp",
				// },
				// {
				//   avatar:
				//     "https://kpopping.com/documents/22/4/social-widget/210720-aespa-Bubble-Update-Ningning-documents-1.webp",
				//   username: "ningningaespa",
				// },
				// {
				//   avatar:
				//     "https://celebsrevealed.com/wp-content/uploads/2021/08/Jennie-Kim-Photo.jpg",
				//   username: "jennierubyjane",
				// },
				// {
				//   avatar:
				//     "https://channel-korea.com/wp-content/uploads/2021/01/KRN-758x506-1.png",
				//   username: "aespa_karina",
				// },
			],
		}
	},
	computed: {
		getAuthUser: function () {
			return this.$store.state.auth.user
		},
	},
}
</script>
