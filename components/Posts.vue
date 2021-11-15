<template>
  <Card>
    <div slot="card-body">
      <div class="header flex items-center justify-between p-6">
        <div class="space-x-6 flex items-center">
          <img class="w-12 h-12 rounded-full object-cover" :src="avatar" />
          <div>
            <div class="font-bold">{{ username }}</div>
            <div>{{ location }}</div>
          </div>
        </div>
        <div><i class="fas fa-ellipsis-h text-2xl"></i></div>
      </div>
      <div class="content-image">
        <img :src="photo" class="object-cover w-full h-full" alt="" srcset="" />
      </div>
      <div class="reaction flex flex-col space-y-4 p-6">
        <div class="flex justify-between">
          <div class="space-x-6">
            <button v-for="(reactIcon, i) in reactIcons" :key="i">
              <i :class="`${reactIcon.icon} text-4xl`"></i>
            </button>
          </div>
          <div>
            <button class="self-end">
              <i class="far fa-bookmark text-4xl"></i>
            </button>
          </div>
        </div>
        <div class="font-semibold">{{ likes }} likes</div>
        <div>
          <div class="inline font-bold hover:underline cursor-pointer">
            {{ username }}
          </div>
          <p class="inline font-base">{{ description }}</p>
        </div>
        <div class="text-gray-600 font-base">{{ datePosted }}</div>
      </div>
      <div class="flex p-6 border-t-2 border-gray-5 items-center space-x-3">
        <i class="fas fa-smile text-2xl"></i>
        <input
          class="w-full outline-none"
          type="text"
          placeholder="Add a comment..."
          v-model="comment"
        />
        <button
          class="text-blue-100 font-semibold outline-none"
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
  </Card>
</template>

<script>
export default {
  props: [
    "location",
    "photo",
    "username",
    "avatar",
    "description",
    "likes",
    "datePosted",
  ],
  data() {
    return {
      comment: "",
      reactIcons: [
        {
          text: "like",
          icon: "far fa-heart",
        },
        {
          text: "comment",
          icon: "far fa-comment",
        },
        {
          text: "share",
          icon: "far fa-paper-plane",
        },
      ],
    };
  },
};
</script>

<style></style>
