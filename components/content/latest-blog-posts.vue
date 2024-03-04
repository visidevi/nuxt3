<template>
   <BlogPosts v-slot="{ posts }" :limit="limit">
      <div v-for="post in posts" :key="post.title">
        <NuxtLink class="" :to="post._path">
          {{ post.title }}
        </NuxtLink>
      </div>
    </BlogPosts>
</template>

<script setup>
defineProps({
  limit: {
    type: Number,
    default: 1
  }
})
</script>