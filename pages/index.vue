<template>
    <div>
        Say Hello from index.vue
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Devi',
    description: 'This is the Description',
    ogTitle: '[og:title]',
    ogDescription: '[og:description]',
    ogImage: '[og:image]',
    ogUrl: '[og:url]',
    twitterTitle: '[twitter:title]',
    twitterDescription: '[twitter:description]',
    twitterImage: '[twitter:image]',
    twitterCard: 'summary'
})

useHead({
    titleTemplate: '%s - Common title',
    htmlAttrs: {
        lang: 'en'
    },
})
</script>

