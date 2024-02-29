<template>
  <section class="not-prose font-mono">
    <div class="column text-gray-400 text-sm">
      <div>date</div>
      <div>title</div>
      <!-- <h1 class="text-2xl font-semibold">Blog</h1>
      <p>Take a look at my blog posts!</p> -->
    </div>
    <ul>
      <li v-for="post in posts" :key="post._post">
        <NuxtLink :to="post._path" class="column hover:bg-gray-100 dark:hover:bg-gray-800">
        <div class="text-gray-500">2023</div>
        <div>{{ post.title }}</div>
        <div>{{ post.date }}</div>

        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>

const { data: posts } = await useAsyncData(
  'blog_list',
  () => queryContent('/')
  .where({ _path: { $ne: '/blog' } })
  .find())
</script>

<style  scoped>

.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>
```