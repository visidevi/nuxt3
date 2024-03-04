<template>
    <article class="prose dark:prose-invert prose-pre:bg-white dark:prose-gray-800 prose-preL text-gray-700 dark:prose-pre:text-gray-300">
        <ContentDoc>
            <template #not-found>
            </template>
            <template  v-slot="{ doc }">
                <div class="grid grid-cols-6 gap-16">
                    <div :class="{ 'col-span-4 border': doc.toc, 'col-span-6': !doc.toc }">
                        <ContentRenderer :value="doc" />
                    </div>
                    <div class="col-span-2 not-prose " v-if="doc.toc">
                        <aside class="sticky top-8">
                            <div class="font-semibold mb-2">
                                Table of Contents
                            </div>
                            <nav>
                                <TocLinks :links="doc.body.toc.links" :active-id="activeId" />
                            </nav>
                        </aside>
                    </div>
                </div>
            </template>
        </ContentDoc>
    </article>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route);
const activeId = ref(null);
onMounted(() => {
    const callback = entries => {
        for (const entry of entries) {
            const id = entry.target.id
            const link = document.querySelector(`a[href="#${id}"]`)
            if (entry.isIntersecting) {
                activeId.value = id
                link.classList.add('text-blue-500')
            } else {
                link.classList.remove('text-blue-500')
            }
        }
    }
    const observer = new IntersectionObserver(callback, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });
    const elements = document.querySelectorAll('h2, h3')
    for (const element of elements) {
        observer.observe(element)
    }
    onBeforeUnmount(() => {
        for (const element of elements) {
            observer.unobserve(element)
        }
    })
})



</script>

<style lang="scss" scoped></style>