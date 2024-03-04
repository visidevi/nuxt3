<template>
  <NuxtLayout>
    <section class="">
      <h1 class="text-4xl mb-4">
        Oooops! An error occurred: {{ error.message }}
      </h1>
      <h2 class="text-xl text-gray-400 dark:text-gray-100"></h2>
    </section>
  </NuxtLayout>

</template>

<script setup>
defineProps({
  error: {
    type: Object,
    required: true
  }
})
</script>