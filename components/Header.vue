<template>
  <div
    class="
      fixed
      top-0
      flex
      justify-around
      items-center
      h-16
      w-full
      bg-white
      shadow
    "
  >
    <img src="../static/assets/images/jeustagram.png" class="w-32" />
    <div class="flex space-x-7">
      <button v-for="(navIcon, i) in navIcons" :key="i">
        <i :class="`${navIcon.icon} text-3xl`"></i>
      </button>
      <img class="w-10 h-10 border rounded-full object-cover" :src="avatar" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["avatar"],
  data() {
    return {
      navIcons: [
        {
          icon: "fas fa-home",
          text: "home",
        },
        {
          icon: "fab fa-facebook-messenger",
          text: "dm",
        },
        {
          icon: "far fa-plus-square",
          text: "upload",
        },
        {
          icon: "far fa-compass",
          text: "discover",
        },
        {
          icon: "far fa-heart",
          text: "notification",
        },
      ],
    };
  },
};
</script>
