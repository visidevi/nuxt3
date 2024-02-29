<template>
    <article class="prose dark:prose-invert prose-pre:bg-white dark:prose-gray-800 prose-preL text-gray-700 dark:prose-pre:text-gray-300" >
        <ContentDoc />
    </article>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route);
</script>

<style lang="scss" scoped></style>