<template>
  <div class="no-prose">
    <section class="" v-if="pending">{{ pending }}</section>
    <section class="" v-else-if="error">{{ error }}</section>
    <section class="" v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li v-for="repository in repos" :key="repository.id"
         class="border border-grey-200 dark:border-gray-800 rounded-sm p-4 hover:bg-gray-100 dark:hover:bg-gray-800 font-mono">
          <a :href="repository.html_url" target="_blank">
            <div class="flex items-center justify-between text-sm">
              <div class="font-semibold">{{ repository.name }}</div>
              <div class="">{{ repository.stargazers_count }} *</div>
            </div>
            <p class="text-sm">{{ repository.description }}</p>
          </a>
        </li>
      </ul>
    </section>

  </div>
</template>
<script setup>
const { data, pending, error } = await useFetch('https://api.github.com/users/piotr-jura-udemy/repos')
const repos = computed(() => data.value.filter(repo => repo.description).sort((a, b) => b.stargazers_count - a.stargazers_count))

</script>