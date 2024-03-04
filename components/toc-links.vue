<template>
  <ul>
    <li v-for="link in links">
      <NuxtLink :to="{path: route.path, hash: `#${link.id}`}"
       class="column hover:bg-gray-100 dark:hover:bg-gray-800"
       :class="{'ml-4': level, 'text-green-600 dark:text-green-400': activeId === link.id  }">
      {{ link.text }}
      </NuxtLink>
      <TocLinks v-if="link.children" :links="link.children" :level="level+1" />
    </li>
  </ul>
</template>
<script setup>
const route = useRoute();
defineProps({
  path: {
    type: String,
    default: ''
  },
  links: {
    type: Array,
    required: true
  },
  level: {
    type: Number,
    default: 0
  },
  activeId: {
    type: String,
    default: null
  }
});
</script>