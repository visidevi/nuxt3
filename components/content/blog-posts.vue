<template>
  <slot :posts="posts">
    <section class="not-prose font-mono">
      <div class="column text-gray-400 text-sm">
        <div>date</div>
        <div>title</div>
      </div>
      <ul>
        <li v-for="post in posts" :key="post._path">
          <NuxtLink :to="post._path" class="column hover:bg-gray-100 dark:hover:bg-gray-800">
            <div class="text-gray-500">
              <div :class="{ 'text-white dark:text-gray-900': post.displayDate, 'text-gray-400 dark:text-gray-500': post.displayDate }">{{ post.year }}</div>
            </div>
            <div>{{ post.title }}</div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </slot>
</template>

<script setup>

const props = defineProps({
  limit: {
    type: Number,
    default: null
  }
})

const { data } = await useAsyncData(
  'blog_list',
  () => {
    const query = queryContent('/')
      .where({ _path: { $ne: '/blog' } })
      .only(['title', 'publishedAt', '_path'])
      .sort('publishedAt', -1)

    if (props?.limit) {
      query.limit(props.limit)
    }
    return query.find()
  }
)



const posts = computed(() => {
  if (!data.value) {
    return []
  }
  const result = []
  let lastYear = null;
  for (const post of data.value) {
    const year = new Date(post.publishedAt).getFullYear()
    const displayYear = year !== lastYear
    post.year = year
    post.displayDate = displayYear
    console.log(post.publishedAt, post.year)
    result.push({
      ...post
    })
    lastYear = year
  }
  return result
})


</script>

<style  scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>
```