<template>
  <Card>
    <div slot="card-body" class="mb-6">
      <div class="flex flex-row">
        <div
          class="flex flex-col max-w-min space-y-2 p-4"
          v-for="(story, i) in stories"
          :key="i"
        >
          <img
            :src="story.avatar"
            class="
              w-14
              h-14
              object-cover
              rounded-full
              mx-auto
              border-2 border-yellow-600
            "
          />
          <div class="text-xs">{{ story.username }}</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {
  props: ["stories"],
};
</script>

<style></style>
